// skills/codemermaid/scripts/validate-units.js
// Pedagogy enforcement for codemermaid pages.
// Module pages (per-module deep dives) and Perspective pages (cross-module essays).

const VALID_KINDS = new Set([
  'concept',
  'code-walk',
  'guess-first',
  'compare',
  'surprise',
  'takeaway',
  'diagram',
  'storyboard',
]);
const MAX_UNITS = 10;
const MAX_STEPPED_PER_MODULE = 1;
const MAX_STORYBOARDS_PER_PAGE = 3;
const TEXT_UNIT_KINDS = new Set(['concept', 'code-walk', 'guess-first', 'compare', 'surprise', 'takeaway', 'diagram']);

function isPositiveIntegerArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every((n) => Number.isInteger(n) && n > 0);
}

function hasRemoteMermaidImage(mermaid) {
  return /@\{\s*img:\s*["']https?:\/\//i.test(String(mermaid || ''));
}

function validateStoryboard(unit, unitIndex) {
  const errors = [];
  const label = `storyboard unit ${unitIndex + 1}`;
  const scenes = unit.scenes || [];

  if (!unit.title || !String(unit.title).trim()) {
    errors.push(`${label} missing title`);
  }
  if (!Array.isArray(unit.scenes)) {
    errors.push(`${label} scenes must be an array`);
    return errors;
  }
  if (scenes.length < 2) {
    errors.push(`${label} must have at least 2 scenes`);
  }

  scenes.forEach((scene, sceneIndex) => {
    const sceneLabel = `${label} scene ${sceneIndex + 1}`;
    if (!scene.name || !String(scene.name).trim()) {
      errors.push(`${sceneLabel} missing name`);
    }
    if (!scene.mermaid || !String(scene.mermaid).trim()) {
      errors.push(`${sceneLabel} missing mermaid`);
    }
    if (hasRemoteMermaidImage(scene.mermaid)) {
      errors.push(`${sceneLabel} uses a remote image URL; use a local path or data URL`);
    }
    if (scene.code) {
      if (!scene.code.source || !String(scene.code.source).trim()) {
        errors.push(`${sceneLabel} code.source must be non-empty`);
      }
      if (scene.code.highlights !== undefined) {
        if (!Array.isArray(scene.code.highlights)) {
          errors.push(`${sceneLabel} code.highlights must be an array`);
        } else {
          scene.code.highlights.forEach((highlight, highlightIndex) => {
            const highlightLabel = `${sceneLabel} highlight ${highlightIndex + 1}`;
            const hasLine = Number.isInteger(highlight.line) && highlight.line > 0;
            const hasLines = isPositiveIntegerArray(highlight.lines);
            if (!hasLine && !hasLines) {
              errors.push(`${highlightLabel} must define line or lines as positive integers`);
            }
            if (!highlight.note || !String(highlight.note).trim()) {
              errors.push(`${highlightLabel} missing note`);
            }
          });
        }
      }
    }
  });

  return errors;
}

function validateStoryboardPlacement(units, kindLabel, name) {
  const errors = [];
  const storyboardIndexes = units
    .map((unit, index) => unit.kind === 'storyboard' ? index : -1)
    .filter((index) => index !== -1);

  if (storyboardIndexes.length > MAX_STORYBOARDS_PER_PAGE) {
    errors.push(`${kindLabel} '${name}' has too many storyboard units (${storyboardIndexes.length} > ${MAX_STORYBOARDS_PER_PAGE})`);
  }

  for (let i = 1; i < storyboardIndexes.length; i++) {
    const previous = storyboardIndexes[i - 1];
    const current = storyboardIndexes[i];
    const between = units.slice(previous + 1, current);
    if (!between.some((unit) => TEXT_UNIT_KINDS.has(unit.kind))) {
      errors.push(`${kindLabel} '${name}' must include a text unit between storyboard units`);
    }
  }

  return errors;
}

function commonChecks(page, kindLabel) {
  const errors = [];
  const name = page.module || page.perspective || '<unnamed>';
  if (!page.learningPromise || !String(page.learningPromise).trim()) {
    errors.push(`${kindLabel} '${name}' missing learningPromise`);
  }
  const units = page.units || [];
  if (units.length === 0) {
    errors.push(`${kindLabel} '${name}' has no units`);
  }
  if (units.length > MAX_UNITS) {
    errors.push(`${kindLabel} '${name}' exceeds unit budget (${units.length} > ${MAX_UNITS})`);
  }
  for (const u of units) {
    if (!VALID_KINDS.has(u.kind)) {
      errors.push(`unknown unit kind '${u.kind}'`);
    }
  }
  units.forEach((u, i) => {
    if (u.kind === 'storyboard') {
      errors.push(...validateStoryboard(u, i));
    }
  });
  errors.push(...validateStoryboardPlacement(units, kindLabel, name));
  const stepped = units.filter((u) => u.kind === 'code-walk' && u.layout === 'stepped').length;
  if (stepped > MAX_STEPPED_PER_MODULE) {
    errors.push(`too many stepped code-walks (${stepped}); max is ${MAX_STEPPED_PER_MODULE} per page`);
  }
  return errors;
}

export function validateModule(page) {
  const errors = commonChecks(page, 'module');
  const units = page.units || [];
  const hasEngagement = units.some((u) => u.kind === 'guess-first' || u.kind === 'surprise');
  if (!hasEngagement) {
    errors.push(`module '${page.module}' missing required guess-first OR surprise unit`);
  }
  if (units.length > 0 && units[units.length - 1].kind !== 'takeaway') {
    errors.push(`module '${page.module}' must end with a takeaway unit`);
  }
  return { ok: errors.length === 0, errors };
}

export function validatePerspective(page) {
  const errors = commonChecks(page, 'perspective');
  const units = page.units || [];
  if (units.length > 0 && units[0].kind !== 'concept') {
    errors.push(`perspective '${page.perspective}' must start with a concept unit`);
  }
  if (units.length > 0 && units[units.length - 1].kind !== 'takeaway') {
    errors.push(`perspective '${page.perspective}' must end with a takeaway unit`);
  }
  return { ok: errors.length === 0, errors };
}

// CLI: node validate-units.js path/to/page.json    (or "-" for stdin)
if (import.meta.url === `file://${process.argv[1]}`) {
  const fs = await import('node:fs');
  const arg = process.argv[2];
  if (!arg) {
    console.error('usage: node validate-units.js <path-to-page.json | ->');
    process.exit(2);
  }
  const raw = arg === '-'
    ? fs.readFileSync(0, 'utf8')
    : fs.readFileSync(arg, 'utf8');
  const page = JSON.parse(raw);
  const result = page.module ? validateModule(page) : validatePerspective(page);
  if (!result.ok) {
    console.error('Validation failed:');
    for (const e of result.errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('OK');
}
