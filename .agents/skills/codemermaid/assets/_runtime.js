/* _runtime.js — shared runtime helpers for essay AND index pages.
   Mermaid init, render helper, markdown link parser, escape, line-highlighted code renderer. */

if (typeof mermaid !== 'undefined') {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      background: '#101111',
      primaryColor: '#161718',
      primaryTextColor: '#f9f9f9',
      primaryBorderColor: '#252829',
      lineColor: '#9c9c9d',
      secondaryColor: '#FF6363',
      tertiaryColor: '#0c0d0f',
      fontFamily: 'Inter, sans-serif',
    },
    flowchart: { curve: 'basis', padding: 20 },
  });
}

async function renderMermaid(selector) {
  if (typeof mermaid === 'undefined') return;
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    const src = node.textContent.trim();
    if (!src) continue;
    const id = 'm' + Math.random().toString(36).slice(2);
    const { svg } = await mermaid.render(id, src);
    node.innerHTML = svg;
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderMarkdownLinks(text) {
  // Minimal markdown: [label](href) -> <a href="href">label</a>.
  // Caller is responsible for escaping non-link content if needed.
  return String(text).replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) =>
    `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`);
}

function normalizeCodeSnippet(code) {
  return String(code)
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .reduce((acc, line) => {
      const blank = line.trim() === '';
      if (blank && (acc.length === 0 || acc[acc.length - 1].trim() === '')) return acc;
      acc.push(line);
      return acc;
    }, [])
    .filter((line, index, lines) => {
      const blank = line.trim() === '';
      return !blank || (index > 0 && index < lines.length - 1);
    })
    .join('\n');
}

function renderCodeLine(line, number, className) {
  const safe = escapeHtml(line);
  return `<span class="${className}" data-line="${number}"><span class="ln">${number}</span><span class="code-text">${safe || ' '}</span></span>`;
}

function renderCode(code, highlightLines = []) {
  const lines = normalizeCodeSnippet(code).split('\n');
  const set = new Set(highlightLines);
  const body = lines.map((line, i) => {
    const n = i + 1;
    const cls = set.has(n) && line.trim() !== '' ? 'line line-hl' : 'line';
    return renderCodeLine(line, n, cls);
  }).join('');
  return `<pre class="code-block">${body}</pre>`;
}
