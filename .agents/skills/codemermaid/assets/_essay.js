/* _essay.js — essay page runtime.
   renderUnit dispatcher, bootEssay, anchor-diagram scroll-link, stepped-walk highlight migration,
   zoomable diagram overlay. Depends on helpers from _runtime.js. */

function renderUnit(unit) {
  switch (unit.kind) {
    case 'concept':     return renderConcept(unit);
    case 'code-walk':   return renderCodeWalk(unit);
    case 'guess-first': return renderGuessFirst(unit);
    case 'compare':     return renderCompare(unit);
    case 'surprise':    return renderSurprise(unit);
    case 'takeaway':    return renderTakeaway(unit);
    case 'diagram':     return renderDiagram(unit);
    case 'storyboard':  return renderStoryboard(unit);
    default:
      return `<p style="color:#ff8a8a">Unknown unit kind: ${escapeHtml(unit.kind)}</p>`;
  }
}

function renderConcept(u) {
  const title = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  const body = renderMarkdownLinks(escapeBodyParagraphs(u.body || ''));
  return `<span class="unit-kind">concept</span>${title}${body}`;
}

function renderSurprise(u) {
  const title = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  const body = renderMarkdownLinks(escapeBodyParagraphs(u.body || ''));
  return `<span class="unit-kind">surprise</span>${title}${body}`;
}

function renderTakeaway(u) {
  const title = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  const body = renderMarkdownLinks(escapeBodyParagraphs(u.body || ''));
  return `<span class="unit-kind">takeaway</span>${title}${body}`;
}

function escapeBodyParagraphs(text) {
  // Split body on blank lines into <p>; preserve markdown link tokens for renderMarkdownLinks.
  return String(text)
    .split(/\n{2,}/)
    .map((p) => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`)
    .join('')
    // Restore [label](href) tokens that escapeHtml has not damaged (brackets/parens are not escaped).
    ;
}

function renderSplitExplanationCards(text) {
  const blocks = String(text || '')
    .trim()
    .split(/\n{2,}/)
    .flatMap((block) => {
      const trimmed = block.trim();
      if (!trimmed) return [];
      const lineParts = trimmed
        .split(/(?=\bLines? \d+(?:[-–]\d+)?(?:, \d+(?:[-–]\d+)?)*:)/g)
        .map((part) => part.trim())
        .filter(Boolean);
      return lineParts.length > 1 ? lineParts : [trimmed];
    });

  if (blocks.length === 0) return '';
  return blocks.map((block, index) => `
    <article class="split-note-card${index === 0 ? ' active' : ''}" data-note-index="${index + 1}" data-lines="${escapeHtml(extractLineRefs(block).join(','))}">
      <span class="step-num">${String(index + 1).padStart(2, '0')}</span>
      ${renderMarkdownLinks(`<p>${escapeHtml(block)}</p>`)}
      ${extractLineRefs(block).length ? `<span class="lines">L${escapeHtml(formatLineRefs(block))}</span>` : ''}
    </article>
  `).join('');
}

function extractLineRefs(text) {
  const refs = [];
  const match = String(text || '').match(/\bLines? ([0-9,\s\-–]+)/);
  if (!match) return refs;
  match[1].split(',').forEach((part) => {
    const range = part.trim().match(/^(\d+)(?:[-–](\d+))?$/);
    if (!range) return;
    const start = Number(range[1]);
    const end = Number(range[2] || range[1]);
    for (let n = start; n <= end; n += 1) refs.push(n);
  });
  return refs;
}

function formatLineRefs(text) {
  const match = String(text || '').match(/\bLines? ([0-9,\s\-–]+)/);
  return match ? match[1].trim() : '';
}

function renderCodeWalk(u) {
  const layout = u.layout || 'stacked';
  const headLabel = u.file ? escapeHtml(u.file) : '';
  const titleHtml = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';

  if (layout === 'stepped') {
    const steps = (u.steps || []);
    const allLines = steps[0] ? steps[0].highlightLines : [];
    return `
      <span class="unit-kind">code-walk · stepped</span>${titleHtml}
      <div class="layout-stepped wide" data-stepped>
        <div class="codewalk">
          <div class="codewalk-head"><span>${headLabel}</span><span>stepped</span></div>
          ${renderCode(u.code || '', allLines)}
        </div>
        <div class="steps">
          ${steps.map((s, i) => `
            <div class="step${i === 0 ? ' active' : ''}" data-lines="${(s.highlightLines || []).join(',')}">
              <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
              ${renderMarkdownLinks(escapeHtml(s.beat || ''))}
              <span class="lines">L${(s.highlightLines || []).join(', ')}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  if (layout === 'split') {
    return `
      <span class="unit-kind">code-walk · split</span>${titleHtml}
      <div class="layout-split wide" data-split-walk data-default-lines="${escapeHtml((u.highlightLines || []).join(','))}">
        <div class="codewalk">
          <div class="codewalk-head"><span>${headLabel}</span><span>split</span></div>
          ${renderCode(u.code || '', u.highlightLines || [])}
        </div>
        <div class="side split-notes">${renderSplitExplanationCards(u.explanation || '')}</div>
      </div>`;
  }

  // stacked
  return `
    <span class="unit-kind">code-walk</span>${titleHtml}
    <div class="codewalk">
      <div class="codewalk-head"><span>${headLabel}</span><span>stacked</span></div>
      ${renderCode(u.code || '', u.highlightLines || [])}
    </div>
    <div class="explain">${renderMarkdownLinks(escapeBodyParagraphs(u.explanation || ''))}</div>`;
}

function renderGuessFirst(u) {
  const reveal = u.reveal || {};
  const code = reveal.code
    ? `<div class="codewalk">${renderCode(reveal.code, reveal.highlightLines || [])}</div>`
    : '';
  const expl = reveal.explanation
    ? `<div class="explain">${renderMarkdownLinks(escapeBodyParagraphs(reveal.explanation))}</div>`
    : '';
  return `
    <details class="guess">
      <summary><span class="guess-icon" aria-hidden="true">?</span><span>${escapeHtml(u.question || '')}</span></summary>
      <div class="guess-reveal">${code}${expl}</div>
    </details>`;
}

function renderCompare(u) {
  const left = u.left || {};
  const right = u.right || {};
  const titleHtml = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  return `
    <span class="unit-kind">compare</span>${titleHtml}
    <div class="compare">
      <div class="col bad">
        <div class="col-label">${escapeHtml(left.label || 'before')}</div>
        ${renderCode(left.code || '')}
      </div>
      <div class="col good">
        <div class="col-label">${escapeHtml(right.label || 'after')}</div>
        ${renderCode(right.code || '')}
      </div>
    </div>
    ${u.lesson ? `<div class="lesson">${renderMarkdownLinks(escapeHtml(u.lesson))}</div>` : ''}`;
}

function renderDiagram(u) {
  const zoomable = u.zoomable !== false;
  const titleHtml = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  return `
    <span class="unit-kind">diagram</span>${titleHtml}
    <figure class="figure" ${zoomable ? 'data-zoomable="true"' : ''}>
      ${zoomable ? '<button class="zoom-btn" data-zoom-trigger>Zoom</button>' : ''}
      <div class="figure-mermaid"><div class="mermaid">${escapeHtml(u.mermaid || '')}</div></div>
      ${u.caption ? `<figcaption>${renderMarkdownLinks(escapeHtml(u.caption))}</figcaption>` : ''}
    </figure>`;
}

function renderStoryboard(u) {
  const scenes = u.scenes || [];
  const titleHtml = u.title ? `<h2>${escapeHtml(u.title)}</h2>` : '';
  const captionHtml = u.caption ? `<p class="storyboard-caption">${renderMarkdownLinks(escapeHtml(u.caption))}</p>` : '';
  return `
    <span class="unit-kind">storyboard</span>${titleHtml}${captionHtml}
    <div class="storyboard wide" data-storyboard>
      <div class="storyboard-mobile-guard">
        Storyboard units are designed for desktop-width reading. Open this page on a wider screen to step through the diagrams and code.
      </div>
      <div class="storyboard-shell">
        <div class="storyboard-stage">
          <div class="storyboard-scene-label">
            <span data-storyboard-scene-count>Scene 1 of ${scenes.length}</span>
            <button class="zoom-btn storyboard-zoom" data-zoom-trigger>Zoom</button>
          </div>
          <div class="storyboard-mermaid"><div class="mermaid"></div></div>
          <div class="storyboard-explanation" data-storyboard-explanation></div>
        </div>
        <div class="storyboard-strip" role="tablist" aria-label="${escapeHtml(u.title || 'Storyboard scenes')}">
          ${scenes.map((scene, i) => `
            <button
              class="storyboard-tab${i === 0 ? ' active' : ''}"
              type="button"
              role="tab"
              aria-selected="${i === 0 ? 'true' : 'false'}"
              data-storyboard-tab="${i}">
              <span class="storyboard-tab-num">${String(i + 1).padStart(2, '0')}</span>
              <span>${escapeHtml(scene.name || `Scene ${i + 1}`)}</span>
            </button>
          `).join('')}
        </div>
        <div class="storyboard-code-slot" data-storyboard-code-slot></div>
      </div>
      <template data-storyboard-scenes>${escapeHtml(JSON.stringify(scenes))}</template>
    </div>`;
}

function renderStoryboardCode(scene) {
  if (!scene.code) return '';
  const code = scene.code;
  const highlights = code.highlights || [];
  const lineNumbers = new Set();
  highlights.forEach((h) => {
    if (Number.isInteger(h.line)) lineNumbers.add(h.line);
    if (Array.isArray(h.lines)) h.lines.forEach((n) => lineNumbers.add(n));
  });
  const sortedLines = Array.from(lineNumbers).sort((a, b) => a - b);
  const noteCount = highlights.length;
  const lineCount = normalizeCodeSnippet(code.source || '').split('\n').length;
  const defaultOpen = noteCount > 0 ? ' open' : '';
  return `
    <details class="storyboard-code-drawer"${defaultOpen}>
      <summary>
        <span>${escapeHtml(code.file || 'source')}</span>
        <span>${lineCount} lines · ${noteCount} notes</span>
      </summary>
      <div class="storyboard-code-grid">
        <div class="codewalk">
          <div class="codewalk-head">
            <span>${escapeHtml(code.file || '')}</span>
            <span>${escapeHtml(code.lang || 'text')}</span>
          </div>
          ${renderStoryboardCodeBlock(code.source || '', sortedLines, highlights)}
        </div>
        ${renderStoryboardAnnotationList(highlights)}
      </div>
    </details>`;
}

function renderStoryboardCodeBlock(source, highlightedLines, highlights) {
  const rangeLines = new Set();
  highlights.forEach((h) => {
    if (Array.isArray(h.lines)) h.lines.forEach((n) => rangeLines.add(n));
  });
  const highlighted = new Set(highlightedLines);
  const lines = normalizeCodeSnippet(source).split('\n');
  const body = lines.map((line, i) => {
    const n = i + 1;
    const classes = ['line'];
    if (highlighted.has(n) && line.trim() !== '') classes.push(rangeLines.has(n) ? 'storyboard-range-hl' : 'line-hl');
    return renderCodeLine(line, n, classes.join(' '));
  }).join('');
  return `<pre class="code-block">${body}</pre>`;
}

function renderStoryboardAnnotationList(highlights) {
  if (!highlights || highlights.length === 0) return '<aside class="storyboard-notes empty">No annotations for this scene.</aside>';
  return `
    <aside class="storyboard-notes">
      ${highlights.map((h) => {
        const lines = Array.isArray(h.lines) ? h.lines : [h.line];
        const rangeClass = lines.length > 1 ? ' range' : '';
        const label = lines.length > 1 ? `L${lines[0]}-${lines[lines.length - 1]}` : `L${lines[0]}`;
        return `
          <div class="storyboard-note${rangeClass}" data-note-lines="${lines.join(',')}">
            <span class="storyboard-note-line">${escapeHtml(label)}</span>
            <p>${renderMarkdownLinks(escapeHtml(h.note || ''))}</p>
          </div>`;
      }).join('')}
    </aside>`;
}

async function renderMermaidElement(node) {
  const src = node.textContent.trim();
  if (!src) return;
  const id = 'm' + Math.random().toString(36).slice(2);
  const { svg } = await mermaid.render(id, src);
  node.innerHTML = svg;
}

async function bootEssay(page) {
  const unitsRoot = document.querySelector('.units');
  if (unitsRoot) {
    unitsRoot.innerHTML = (page.units || []).map((u, i) => {
      const anchorAttr = u.anchorNode ? ` data-anchor="${escapeHtml(u.anchorNode)}"` : '';
      const storyAttr = u.storyId ? ` data-story-id="${escapeHtml(u.storyId)}"` : '';
      return `<section class="unit unit-${u.kind}" data-unit-index="${i}"${anchorAttr}${storyAttr}>${renderUnit(u)}</section>`;
    }).join('');
  }

  if (page.diagram) {
    const anchorMermaid = document.querySelector('.anchor .mermaid');
    if (anchorMermaid) {
      anchorMermaid.textContent = page.diagram;
      await renderMermaid('.anchor .mermaid');
      initAnchorScrollLink();
    }
  }

  await renderMermaid('.unit-diagram .mermaid, .figure .mermaid');
  initSteppedWalks();
  initSplitWalks();
  await initStoryboards();
  initZoomOverlay();
  startScrollLoop();
}

/* ------- Anchor diagram scroll-link ------- */
const _anchorState = {
  nodeIndex: new Map(), // anchor key -> mermaid <g.node>
  units: [],
  active: null,
};

function initAnchorScrollLink() {
  const anchorEl = document.querySelector('.anchor .mermaid');
  if (!anchorEl) return;
  _anchorState.units = Array.from(document.querySelectorAll('.unit[data-anchor]'));
  _anchorState.nodeIndex.clear();
  anchorEl.querySelectorAll('g.node').forEach((g) => {
    const m = g.id.match(/-([A-Za-z0-9_]+)-\d+$/);
    if (m) _anchorState.nodeIndex.set(m[1], g);
  });
  _anchorState.nodeIndex.forEach((g, key) => {
    g.addEventListener('click', () => {
      const u = _anchorState.units.find((x) => x.dataset.anchor === key);
      if (u) u.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function pickActiveUnit() {
  if (_anchorState.units.length === 0) return;
  const center = window.innerHeight / 2;
  let best = null, bestDist = Infinity;
  for (const u of _anchorState.units) {
    const r = u.getBoundingClientRect();
    const mid = (r.top + r.bottom) / 2;
    const d = Math.abs(mid - center);
    if (d < bestDist) { bestDist = d; best = u; }
  }
  if (best && best !== _anchorState.active) {
    _anchorState.active = best;
    const key = best.dataset.anchor;
    _anchorState.nodeIndex.forEach((g, k) => g.classList.toggle('active', k === key));
  }
}

/* ------- Split code-walk note sync ------- */
function initSplitWalks() {
  document.querySelectorAll('[data-split-walk]').forEach((root) => {
    const codeEl = root.querySelector('.code-block');
    const notes = Array.from(root.querySelectorAll('.split-note-card'));
    if (!codeEl || notes.length === 0) return;

    const lineEls = new Map();
    codeEl.querySelectorAll('.line').forEach((el) => {
      lineEls.set(el.dataset.line, el);
    });

    function highlight(linesAttr) {
      const raw = String(linesAttr || '').trim() || root.dataset.defaultLines || '';
      const wanted = new Set(raw.split(',').map((s) => s.trim()).filter(Boolean));
      lineEls.forEach((el, k) => {
        const hasCode = (el.querySelector('.code-text')?.textContent || '').trim() !== '';
        el.classList.toggle('line-hl', wanted.has(k) && hasCode);
      });
    }

    function activate(note) {
      if (!note) return;
      notes.forEach((entry) => entry.classList.toggle('active', entry === note));
      highlight(note.dataset.lines);
    }

    notes.forEach((note) => {
      note.addEventListener('click', () => {
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
        activate(note);
      });
    });

    activate(notes[0]);

    let activeNote = null;
    root._pickActiveSplitNote = function pickActiveSplitNote() {
      const viewport = root.querySelector('.split-notes') || root;
      const vr = viewport.getBoundingClientRect();
      const center = (Math.max(vr.top, 0) + Math.min(vr.bottom, window.innerHeight)) / 2;
      let best = null, bestDist = Infinity;
      for (const note of notes) {
        const r = note.getBoundingClientRect();
        if (r.bottom < vr.top || r.top > vr.bottom) continue;
        const mid = (r.top + r.bottom) / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) { bestDist = d; best = note; }
      }
      if (best && best !== activeNote) {
        activeNote = best;
        activate(best);
      }
    };

    const scroller = root.querySelector('.split-notes');
    if (scroller) scroller.addEventListener('scroll', () => root._pickActiveSplitNote(), { passive: true });
  });
}

/* ------- Stepped code-walk highlight migration ------- */
function initSteppedWalks() {
  document.querySelectorAll('[data-stepped]').forEach((root) => {
    const codeEl = root.querySelector('.code-block');
    if (!codeEl) return;
    const lineEls = new Map();
    codeEl.querySelectorAll('.line').forEach((el) => {
      lineEls.set(el.dataset.line, el);
    });
    const steps = Array.from(root.querySelectorAll('.step'));

    function highlight(linesAttr) {
      const wanted = new Set(String(linesAttr || '').split(',').map((s) => s.trim()).filter(Boolean));
      lineEls.forEach((el, k) => el.classList.toggle('line-hl', wanted.has(k)));
    }

    function activateStep(s) {
      if (!s) return;
      steps.forEach((x) => x.classList.toggle('active', x === s));
      highlight(s.dataset.lines);
    }

    steps.forEach((s) => {
      s.addEventListener('click', () => {
        s.scrollIntoView({ behavior: 'smooth', block: 'center' });
        activateStep(s);
      });
    });

    activateStep(steps[0]);

    let activeStep = null;
    root._pickActiveStep = function pickActiveStep() {
      const center = window.innerHeight / 2;
      let best = null, bestDist = Infinity;
      for (const s of steps) {
        const r = s.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const mid = (r.top + r.bottom) / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) { bestDist = d; best = s; }
      }
      if (best && best !== activeStep) {
        activeStep = best;
        activateStep(best);
      }
    };
  });
}

/* ------- Storyboard scene player ------- */
async function setStoryboardScene(root, index) {
  const scenesEl = root.querySelector('[data-storyboard-scenes]');
  if (!scenesEl) return;
  const scenesText = scenesEl.content ? scenesEl.content.textContent : scenesEl.textContent;
  const scenes = JSON.parse(scenesText || '[]');
  const scene = scenes[index];
  if (!scene) return;

  root.querySelectorAll('[data-storyboard-tab]').forEach((tab) => {
    const active = Number(tab.dataset.storyboardTab) === index;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', active ? 'true' : 'false');
  });

  const countEl = root.querySelector('[data-storyboard-scene-count]');
  if (countEl) countEl.textContent = `Scene ${index + 1} of ${scenes.length}`;

  const mermaidEl = root.querySelector('.storyboard-mermaid .mermaid');
  if (mermaidEl) {
    mermaidEl.textContent = scene.mermaid || '';
    await renderMermaidElement(mermaidEl);
    applyStoryboardFocus(mermaidEl, scene.focus);
  }

  const explanationEl = root.querySelector('[data-storyboard-explanation]');
  if (explanationEl) {
    explanationEl.innerHTML = scene.explanation
      ? renderMarkdownLinks(escapeBodyParagraphs(scene.explanation))
      : '';
  }

  const codeSlot = root.querySelector('[data-storyboard-code-slot]');
  if (codeSlot) {
    codeSlot.innerHTML = renderStoryboardCode(scene);
    bindStoryboardCodeNotes(codeSlot);
  }
}

function bindStoryboardCodeNotes(scope) {
  const notes = Array.from(scope.querySelectorAll('[data-note-lines]')).map((note) => ({
    note,
    lines: new Set(String(note.dataset.noteLines || '').split(',').filter(Boolean)),
  }));
  const codeLines = Array.from(scope.querySelectorAll('.code-block .line'));
  if (notes.length === 0 || codeLines.length === 0) return;

  function activate(note, lineNumber) {
    notes.forEach((entry) => entry.note.classList.toggle('active', entry.note === note));
    codeLines.forEach((line) => line.classList.toggle('active-note-line', line.dataset.line === lineNumber));
  }

  codeLines.forEach((line) => {
    line.addEventListener('click', () => {
      const target = notes.find((entry) => entry.lines.has(line.dataset.line));
      if (!target) return;
      activate(target.note, line.dataset.line);
      target.note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  notes.forEach(({ note, lines }) => {
    note.addEventListener('click', () => {
      const firstLine = Array.from(lines)[0];
      const target = codeLines.find((line) => line.dataset.line === firstLine);
      if (!target) return;
      activate(note, firstLine);
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    });
  });
}

function applyStoryboardFocus(root, focus) {
  if (!focus) return;
  root.querySelectorAll('g.node').forEach((g) => {
    const matched = g.id.includes(`-${focus}-`) || g.id.endsWith(`-${focus}`);
    g.classList.toggle('active', matched);
  });
}

async function initStoryboards() {
  const roots = Array.from(document.querySelectorAll('[data-storyboard]'));
  await Promise.all(roots.map(async (root) => {
    root.querySelectorAll('[data-storyboard-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        setStoryboardScene(root, Number(tab.dataset.storyboardTab));
      });
    });
    await setStoryboardScene(root, 0);
  }));
}

/* ------- Zoomable diagram overlay ------- */
function initZoomOverlay() {
  const overlay = document.querySelector('.zoom-overlay');
  if (!overlay) return;
  const stage = overlay.querySelector('.zoom-stage');
  const levelEl = overlay.querySelector('[data-zoom-level]');
  let scale = 1, tx = 0, ty = 0;
  const MIN = 0.3, MAX = 6;

  function applyTransform() {
    stage.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
    if (levelEl) levelEl.textContent = Math.round(scale * 100) + '%';
  }

  function openZoom(svg) {
    const clone = svg.cloneNode(true);
    const r = svg.getBoundingClientRect();
    clone.removeAttribute('style');
    clone.setAttribute('width', r.width);
    clone.setAttribute('height', r.height);
    clone.classList.add('zoom-svg-fix');
    stage.innerHTML = '';
    stage.appendChild(clone);
    scale = 1; tx = 0; ty = 0;
    applyTransform();
    overlay.classList.add('open');
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeZoom() {
    overlay.classList.remove('open');
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-zoom-trigger]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const fig = btn.closest('.figure, .unit-diagram, .storyboard-stage');
      const svg = fig && fig.querySelector('svg');
      if (svg) openZoom(svg);
    });
  });

  overlay.querySelector('[data-zoom-close]')?.addEventListener('click', closeZoom);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeZoom(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeZoom();
  });

  overlay.querySelector('[data-zoom-in]')?.addEventListener('click', () => {
    scale = Math.min(MAX, scale * 1.25); applyTransform();
  });
  overlay.querySelector('[data-zoom-out]')?.addEventListener('click', () => {
    scale = Math.max(MIN, scale / 1.25); applyTransform();
  });
  overlay.querySelector('[data-zoom-reset]')?.addEventListener('click', () => {
    scale = 1; tx = 0; ty = 0; applyTransform();
  });

  overlay.addEventListener('wheel', (e) => {
    if (!overlay.classList.contains('open')) return;
    e.preventDefault();
    const rect = stage.getBoundingClientRect();
    const cxFromCenter = e.clientX - (rect.left + rect.width / 2);
    const cyFromCenter = e.clientY - (rect.top + rect.height / 2);
    const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
    const newScale = Math.min(MAX, Math.max(MIN, scale * factor));
    const ratio = newScale / scale;
    tx -= cxFromCenter * (ratio - 1);
    ty -= cyFromCenter * (ratio - 1);
    scale = newScale;
    applyTransform();
  }, { passive: false });

  let dragging = false, lastX = 0, lastY = 0;
  overlay.addEventListener('mousedown', (e) => {
    if (e.target.closest('.zoom-controls')) return;
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    overlay.classList.add('dragging');
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    tx += e.clientX - lastX; ty += e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    applyTransform();
  });
  window.addEventListener('mouseup', () => {
    dragging = false; overlay.classList.remove('dragging');
  });
}

/* ------- Single rAF scroll loop ------- */
function startScrollLoop() {
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      pickActiveUnit();
      document.querySelectorAll('[data-stepped]').forEach((r) => r._pickActiveStep && r._pickActiveStep());
      document.querySelectorAll('[data-split-walk]').forEach((r) => r._pickActiveSplitNote && r._pickActiveSplitNote());
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
}
