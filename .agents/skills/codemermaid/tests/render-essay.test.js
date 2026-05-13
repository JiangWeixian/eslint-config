const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');

test('skill metadata follows Agent Skills spec constraints', () => {
  const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
  const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
  const name = frontmatter.match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1].trim();
  const compatibility = frontmatter.match(/^compatibility:\s*(.+)$/m)?.[1].trim();

  assert.equal(name, path.basename(root));
  assert.match(name, /^[a-z0-9](?:[a-z0-9-]{0,62}[a-z0-9])?$/);
  assert.doesNotMatch(name, /--/);
  assert.ok(description && description.length <= 1024);
  assert.match(description, /Mermaid|architecture|module dependency|repository/);
  assert.match(description, /Use when/);
  assert.ok(!compatibility || compatibility.length <= 500);
});

test('static templates live in spec-recommended assets directory', () => {
  const assetFiles = [
    'template-essay.html',
    'template-index.html',
    '_base.css',
    '_essay.css',
    '_index.css',
    '_runtime.js',
    '_essay.js',
    '_index.js',
  ];

  for (const file of assetFiles) {
    assert.ok(fs.existsSync(path.join(root, 'assets', file)), file);
  }
  assert.equal(fs.existsSync(path.join(root, 'templates')), false);
});

function loadRuntime() {
  const context = {
    mermaid: {
      initialize() {},
      async render() {
        return { svg: '<svg></svg>' };
      },
    },
  };
  const runtime = fs.readFileSync(path.join(root, 'assets/_runtime.js'), 'utf8');
  const essay = fs.readFileSync(path.join(root, 'assets/_essay.js'), 'utf8');
  vm.runInNewContext(`${runtime}\n${essay}`, context);
  return context;
}

test('renderCode emits visible line numbers and normalizes blank rows', () => {
  const { renderCode } = loadRuntime();
  const html = renderCode('\n\nconst a = 1;\n\n\nconst b = 2;\n\n', [2]);

  assert.match(html, /<span class="ln">1<\/span><span class="code-text">const a = 1;<\/span>/);
  assert.match(html, /<span class="ln">2<\/span><span class="code-text"> <\/span>/);
  assert.match(html, /<span class="ln">3<\/span><span class="code-text">const b = 2;<\/span>/);
  assert.doesNotMatch(html, /data-line="4"/);
  assert.doesNotMatch(html, /<\/span>\n<span class="line/);
  assert.match(html, /class="line" data-line="2"/);
  assert.doesNotMatch(html, /class="line line-hl" data-line="2"/);
  assert.doesNotMatch(html, /line-hl[^>]+><span class="ln">2<\/span><span class="code-text"> <\/span>/);
});

test('compare and storyboard code use the shared numbered renderer', () => {
  const { renderCompare, renderStoryboardCodeBlock } = loadRuntime();
  const compareHtml = renderCompare({
    left: { label: 'before', code: '\nold()\n\n' },
    right: { label: 'after', code: '\nnew()\n\n' },
  });
  const storyboardHtml = renderStoryboardCodeBlock('\nfirst()\n\n\nsecond()\n', [2, 3], [{ line: 2, note: 'proof' }, { line: 3, note: 'proof' }]);

  assert.match(compareHtml, /<pre class="code-block">/);
  assert.match(compareHtml, /<span class="ln">1<\/span><span class="code-text">old\(\)<\/span>/);
  assert.match(storyboardHtml, /<span class="ln">2<\/span><span class="code-text"> <\/span>/);
  assert.match(storyboardHtml, /<span class="ln">3<\/span><span class="code-text">second\(\)<\/span>/);
  assert.doesNotMatch(storyboardHtml, /data-line="4"/);
  assert.doesNotMatch(storyboardHtml, /<\/span>\n<span class="line/);
  assert.doesNotMatch(storyboardHtml, /class="line line-hl" data-line="2"/);
  assert.match(storyboardHtml, /class="line line-hl" data-line="3"/);
});

test('zoom controls and storyboard scene transport match follow-up spec', () => {
  const template = fs.readFileSync(path.join(root, 'assets/template-essay.html'), 'utf8');
  const essay = fs.readFileSync(path.join(root, 'assets/_essay.js'), 'utf8');
  const controls = template.match(/<div class="zoom-controls">[\s\S]*?<\/div>/)?.[0] || '';
  const buttons = [...controls.matchAll(/<button\b[\s\S]*?<\/button>/g)].map((match) => match[0]);

  assert.equal(buttons.length, 4);
  assert.equal(buttons.filter((button) => button.includes('<svg')).length, 4);
  assert.doesNotMatch(controls, />(\+|−|Reset|Close)<\/button>/);
  assert.match(essay, /scenesEl\.content \? scenesEl\.content\.textContent : scenesEl\.textContent/);
});

test('storyboard notes expose line mapping for code-to-note navigation', () => {
  const { renderStoryboardAnnotationList } = loadRuntime();
  const essay = fs.readFileSync(path.join(root, 'assets/_essay.js'), 'utf8');
  const html = renderStoryboardAnnotationList([
    { lines: [1, 2], note: 'range note' },
    { line: 6, note: 'single note' },
  ]);

  assert.match(html, /data-note-lines="1,2"/);
  assert.match(html, /data-note-lines="6"/);
  assert.match(essay, /function bindStoryboardCodeNotes/);
  assert.match(essay, /target\.note\.scrollIntoView/);
});

test('active Mermaid nodes force readable label contrast', () => {
  const css = fs.readFileSync(path.join(root, 'assets/_essay.css'), 'utf8');

  assert.match(css, /\.mermaid g\.node\.active text,/);
  assert.match(css, /\.mermaid g\.node\.active \.nodeLabel/);
  assert.match(css, /\.mermaid g\.node\.active foreignObject/);
  assert.match(css, /color: #ffffff !important;/);
});

test('global course chrome uses themed scrollbars', () => {
  const baseCss = fs.readFileSync(path.join(root, 'assets/_base.css'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'assets/_essay.css'), 'utf8');

  assert.match(baseCss, /\*::-webkit-scrollbar/);
  assert.match(baseCss, /scrollbar-color: var\(--scrollbar-thumb\) var\(--scrollbar-track\)/);
  assert.match(baseCss, /--scrollbar-thumb: rgba\(156, 156, 157, 0\.42\)/);
  assert.doesNotMatch(css, /::-webkit-scrollbar/);
  assert.doesNotMatch(css, /scrollbar-color:/);
  assert.match(css, /scrollbar-gutter: stable/);
});

test('split code-walk explanations render as scrollable cards', () => {
  const { renderCodeWalk } = loadRuntime();
  const html = renderCodeWalk({
    kind: 'code-walk',
    layout: 'split',
    title: 'Upgrade',
    file: 'db.ts',
    code: 'const a = 1\nconst b = 2',
    highlightLines: [1],
    explanation: 'The transaction wraps the loop. Line 1: first detail. Lines 2-3: second detail.',
  });
  const css = fs.readFileSync(path.join(root, 'assets/_essay.css'), 'utf8');

  assert.match(html, /class="side split-notes"/);
  assert.equal((html.match(/class="split-note-card/g) || []).length, 3);
  assert.match(html, /data-note-index="1"/);
  assert.match(html, /data-split-walk/);
  assert.match(html, /data-lines="1"/);
  assert.match(html, /data-lines="2,3"/);
  assert.match(css, /max-height: clamp\(280px, 48vh, 520px\)/);
  assert.match(css, /overflow-y: auto/);
  assert.match(css, /\.split-note-card\.active/);
  assert.match(fs.readFileSync(path.join(root, 'assets/_essay.js'), 'utf8'), /function initSplitWalks/);
});

test('guess-first renders as a single disclosure surface', () => {
  const { renderGuessFirst } = loadRuntime();
  const html = renderGuessFirst({
    kind: 'guess-first',
    question: 'Which lines stay highlighted?',
    reveal: {
      code: 'const active = nearestCard(notes)\nhighlight(active.dataset.lines)',
      highlightLines: [1, 2],
      explanation: 'The active card is the source of truth.',
    },
  });
  const css = fs.readFileSync(path.join(root, 'assets/_essay.css'), 'utf8');

  assert.match(html, /class="guess"/);
  assert.doesNotMatch(html, /unit-guess-first/);
  assert.match(html, /class="guess-icon"/);
  assert.match(html, /class="guess-reveal"/);
  assert.doesNotMatch(html, /style="margin-top/);
  assert.match(css, /\.guess-reveal/);
  assert.match(css, /border-bottom-color: var\(--border\)/);
});

test('shared runtime does not require Mermaid on index pages', async () => {
  const context = {
    document: { querySelectorAll: () => [] },
    Math,
  };
  const runtime = fs.readFileSync(path.join(root, 'assets/_runtime.js'), 'utf8');

  vm.runInNewContext(runtime, context);
  assert.equal(typeof context.renderIndex, 'undefined');
  await context.renderMermaid('.mermaid');
});

test('index template loads Mermaid for shared runtime compatibility', () => {
  const template = fs.readFileSync(path.join(root, 'assets/template-index.html'), 'utf8');

  assert.match(template, /mermaid@11\.4\.1/);
});

test('story template and fixture provide stable component stories', () => {
  const template = fs.readFileSync(path.join(root, 'tests/fixtures/template-story.html'), 'utf8');
  const essay = fs.readFileSync(path.join(root, 'assets/_essay.js'), 'utf8');
  const storyData = JSON.parse(fs.readFileSync(path.join(root, 'tests/fixtures/story-page-data.json'), 'utf8'));
  const storyHtml = fs.readFileSync(path.join(root, 'tests/story.html'), 'utf8');
  const validator = path.join(root, 'scripts/validate-units.js');
  const validation = spawnSync('node', [validator, '-'], {
    input: JSON.stringify(storyData),
    encoding: 'utf8',
  });

  assert.equal(validation.status, 0, validation.stderr || validation.stdout);
  assert.match(template, /Component Stories/);
  assert.match(template, /const PAGE = \{\{PAGE_DATA\}\};/);
  assert.match(template, /bootEssay\(PAGE\)/);
  assert.match(storyHtml, /data-story-id="story-hero"/);
  assert.match(storyHtml, /Component Stories/);
  assert.match(essay, /data-story-id/);
  assert.ok(storyData.units.length >= 9);
  assert.ok(storyData.units.every((unit) => unit.storyId));
  assert.ok(storyData.units.some((unit) => unit.storyId === 'codewalk-split-active'));
  assert.ok(storyData.units.some((unit) => unit.kind === 'storyboard'));
});
