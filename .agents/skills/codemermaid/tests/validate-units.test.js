// skills/codemermaid/tests/validate-units.test.js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateModule, validatePerspective } from '../scripts/validate-units.js';

function validStoryboardUnit(overrides = {}) {
  return {
    kind: 'storyboard',
    title: 'Phase 6 pipeline',
    caption: 'The page appears after template slots, partials, and validation line up.',
    scenes: [
      {
        name: 'Read shell',
        mermaid: 'flowchart LR\n  A["template-essay.html"] --> B["slot markers"]',
        explanation: 'The shell owns the page structure before content exists.',
      },
      {
        name: 'Inline partials',
        mermaid: 'flowchart LR\n  A["_base.css"] --> C["HTML"]\n  B["_essay.js"] --> C',
        code: {
          file: 'skills/codemermaid/SKILL.md',
          lang: 'markdown',
          source: '1. Read shell template\n2. Read partials\n3. Inline partials',
          highlights: [
            { line: 2, note: 'Reusable CSS and JS become page-local assets.' },
            { line: 3, note: 'The output stays self-contained after replacement.' },
          ],
        },
        explanation: 'This is where reusable pieces become one file.',
      },
    ],
    ...overrides,
  };
}

test('module: missing learningPromise fails', () => {
  const result = validateModule({ module: 'a', units: [{ kind: 'concept', body: 'x' }, { kind: 'takeaway', body: 'y' }] });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /learningPromise/);
});

test('module: missing guess-first AND surprise fails', () => {
  const result = validateModule({
    module: 'a',
    learningPromise: 'p',
    units: [{ kind: 'concept', body: 'x' }, { kind: 'takeaway', body: 'y' }],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /guess-first.*surprise|surprise.*guess-first/);
});

test('module: missing trailing takeaway fails', () => {
  const result = validateModule({
    module: 'a',
    learningPromise: 'p',
    units: [{ kind: 'concept', body: 'x' }, { kind: 'surprise', body: 's' }],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /takeaway/);
});

test('module: more than one stepped code-walk fails', () => {
  const result = validateModule({
    module: 'a',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      { kind: 'code-walk', layout: 'stepped', steps: [] },
      { kind: 'code-walk', layout: 'stepped', steps: [] },
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /stepped/);
});

test('module: more than 10 units fails', () => {
  const units = Array.from({ length: 11 }, (_, i) => ({ kind: 'concept', body: 'x' + i }));
  units[units.length - 1] = { kind: 'takeaway', body: 't' };
  units[5] = { kind: 'surprise', body: 's' };
  const result = validateModule({ module: 'a', learningPromise: 'p', units });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /unit budget|10/);
});

test('module: valid passes', () => {
  const result = validateModule({
    module: 'a',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      { kind: 'guess-first', question: 'q', reveal: { explanation: 'e' } },
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, true, result.errors?.join('\n'));
});

test('perspective: must start with concept', () => {
  const result = validatePerspective({
    perspective: 'arch',
    learningPromise: 'p',
    units: [{ kind: 'surprise', body: 's' }, { kind: 'takeaway', body: 't' }],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /start.*concept/);
});

test('perspective: valid passes', () => {
  const result = validatePerspective({
    perspective: 'arch',
    learningPromise: 'p',
    units: [{ kind: 'concept', body: 'x' }, { kind: 'takeaway', body: 't' }],
  });
  assert.equal(result.ok, true, result.errors?.join('\n'));
});

test('module: valid storyboard unit passes', () => {
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit(),
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, true, result.errors?.join('\n'));
});

test('perspective: valid storyboard unit passes', () => {
  const result = validatePerspective({
    perspective: 'architecture',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit(),
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, true, result.errors?.join('\n'));
});

test('storyboard: requires at least two scenes', () => {
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit({ scenes: [{ name: 'Only', mermaid: 'flowchart LR\nA-->B' }] }),
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /storyboard.*at least 2 scenes/i);
});

test('storyboard: scene requires name and mermaid', () => {
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit({
        scenes: [
          { name: '', mermaid: 'flowchart LR\nA-->B' },
          { name: 'Missing mermaid', mermaid: '' },
        ],
      }),
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /scene 1.*name/i);
  assert.match(result.errors.join('\n'), /scene 2.*mermaid/i);
});

test('storyboard: code source and highlight notes are validated', () => {
  const unit = validStoryboardUnit();
  unit.scenes[1].code = {
    file: 'x.js',
    lang: 'js',
    source: '',
    highlights: [
      { line: 0, note: 'bad line' },
      { lines: [2, 0], note: '' },
    ],
  };
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      unit,
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /code.source/i);
  assert.match(result.errors.join('\n'), /highlight.*positive integers/i);
  assert.match(result.errors.join('\n'), /highlight.*note/i);
});

test('storyboard: remote image URLs are rejected', () => {
  const unit = validStoryboardUnit();
  unit.scenes[0].mermaid = 'flowchart LR\n  A@{ img: "https://example.com/a.png", label: "Remote", pos: "t", w: 220, h: 140 }';
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      unit,
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /remote image URL/i);
});

test('storyboard: page allows at most three storyboard units', () => {
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit({ title: 'one' }),
      { kind: 'surprise', body: 's' },
      validStoryboardUnit({ title: 'two' }),
      { kind: 'concept', body: 'between' },
      validStoryboardUnit({ title: 'three' }),
      { kind: 'concept', body: 'between again' },
      validStoryboardUnit({ title: 'four' }),
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /too many storyboard units/i);
});

test('storyboard: adjacent storyboard units require a text unit between them', () => {
  const result = validateModule({
    module: 'renderer',
    learningPromise: 'p',
    units: [
      { kind: 'concept', body: 'x' },
      validStoryboardUnit({ title: 'one' }),
      validStoryboardUnit({ title: 'two' }),
      { kind: 'surprise', body: 's' },
      { kind: 'takeaway', body: 't' },
    ],
  });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /text unit between storyboard units/i);
});
