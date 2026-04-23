# ESLint & Plugin Upgrade + Test System Design

**Date:** 2026-04-23
**Status:** Draft

## Overview

Upgrade ESLint and all plugin dependencies to their latest versions, adapt the shared config (`@aiou/eslint-config`) to breaking API changes, remove deprecated plugins, and build a Vitest-based test system to verify the config works correctly.

## Approach

Full upgrade in one pass (Approach A): ESLint v10 + all plugins to latest specific versions, adapting config APIs as needed. This avoids maintaining partially-upgraded states and consolidates breaking change work.

## Unmaintained / Deprecated Plugin Alerts

| Plugin | Status | Last Update | Action |
|--------|--------|-------------|--------|
| `eslint-plugin-node` | **DEPRECATED** — replaced by `eslint-plugin-n` | 2019-08-29 | **REMOVE** — zero rules used, fully superseded by `eslint-plugin-n` |
| `eslint-plugin-etc` | **STALE** — not actively maintained | 2023-05-10 | **KEEP at v2.0.3, FLAG** — only used for `etc/no-t` rule. No newer version exists. Consider inlining or removing in a future iteration if typescript-eslint adds equivalent functionality |

## Plugin Upgrade Matrix

### BREAKING changes (require config adaptation)

| Package | Current | Target | Key Breaking Changes |
|---------|---------|--------|---------------------|
| `eslint` | ^9.34.0 | ^10.2.1 | Node `>=20.19`, removed eslintrc, removed deprecated SourceCode methods, `no-shadow-restricted-names` reports `globalThis`, stricter RuleTester, `color` in ResultsMeta |
| `@eslint-react/eslint-plugin` | ^1.53.0 | ^4.2.3 | Plugin names changed: `@eslint-react` → `react-x`, `@eslint-react/dom` → `react-dom`, `@eslint-react/hooks-extra` → `react-hooks-extra`, `@eslint-react/naming-convention` → `react-naming-convention`, `@eslint-react/web-api` → `react-web-api`. Config preset structure changed. |
| `@stylistic/eslint-plugin` | ^1.4.1 | ^5.10.0 | `customize()` API changed, rule names/prefixes may have changed |
| `@eslint/markdown` | ^7.2.0 | ^8.0.1 | Flat config API changes, processor config structure changed |
| `@next/eslint-plugin-next` | ^15.5.2 | ^16.2.4 | Possible config structure changes |
| `eslint-plugin-react-hooks` | ^5.2.0 | ^7.1.1 | Major API changes in v6+ |
| `eslint-plugin-regexp` | ^2.10.0 | ^3.1.0 | `configs['flat/recommended']` API may have changed |
| `eslint-plugin-simple-import-sort` | ^12.0.0 | ^13.0.0 | Possible rule option changes |
| `eslint-plugin-toml` | ^0.12.0 | ^1.3.1 | Flat config API changes |
| `eslint-plugin-unicorn` | ^60.0.0 | ^64.0.0 | New/removed rules, rule option changes |
| `eslint-plugin-yml` | ^1.18.0 | ^3.3.1 | Flat config API changes, parser changes |
| `eslint-plugin-import-newlines` | ^1.4.0 | ^2.0.0 | Rule option changes |
| `eslint-plugin-jsonc` | ^2.20.0 | ^3.1.2 | Config preset names changed, rule changes |
| `globals` | ^16.3.0 | ^17.5.0 | Possible browser/node globals restructuring |
| `jsonc-eslint-parser` | ^2.4.0 | ^3.1.0 | Parser API changes |
| `yaml-eslint-parser` | ^1.3.0 | ^2.0.0 | Parser API changes |
| `eslint-flat-config-utils` | ^2.0.0 | ^3.1.0 | Composer API changes |
| `local-pkg` | ^0.4.3 | ^1.1.2 | API changes (used for `isPackageExists`) |

### Minor / Patch upgrades (safe, no config changes expected)

| Package | Current | Target |
|---------|---------|--------|
| `@typescript-eslint/eslint-plugin` | ^8.42.0 | ^8.59.0 |
| `@typescript-eslint/parser` | ^8.42.0 | ^8.59.0 |
| `@eslint-community/eslint-plugin-eslint-comments` | ^4.5.0 | ^4.7.1 |
| `eslint-plugin-n` | ^17.21.0 | ^17.24.0 |
| `eslint-plugin-promise` | ^7.2.1 | ^7.2.1 |
| `eslint-plugin-react-refresh` | ^0.4.20 | ^0.5.2 |
| `eslint-plugin-tailwindcss` | ^3.18.0 | ^3.18.3 |
| `eslint-plugin-unused-imports` | ^4.2.0 | ^4.4.1 |
| `eslint-plugin-import-x` | ^4.16.0 | ^4.16.2 |
| `eslint-plugin-etc` | ^2.0.3 | ^2.0.3 (no change) |

## Config Adaptation Plan

### `packages/default/src/configs/react.ts`
- Rewrite for `@eslint-react/eslint-plugin` v4 API
- Map new plugin names: `react-x`, `react-dom`, `react-hooks-extra`, `react-naming-convention`, `react-web-api`
- Update config preset references (`recommended-typescript` → verify new name)
- Update `renameRules` calls to use new prefixes
- `eslint-plugin-react-hooks` v7: verify import and config structure

### `packages/default/src/configs/stylistic.ts`
- Update `@stylistic/eslint-plugin` v5 `customize()` API
- Verify all `@stylistic/` rule names still valid
- Check if `indent` rule options changed

### `packages/default/src/configs/markdown.ts`
- Update for `@eslint/markdown` v8 config structure
- Check processor config array structure

### `packages/default/src/configs/jsonc.ts`
- Update for `eslint-plugin-jsonc` v3 + `jsonc-eslint-parser` v3
- Verify `recommended-with-jsonc` preset name

### `packages/default/src/configs/yml.ts`
- Update for `eslint-plugin-yml` v3 + `yaml-eslint-parser` v2
- Verify `standard` preset name

### `packages/default/src/configs/toml.ts`
- Update for `eslint-plugin-toml` v1 flat config structure
- Verify `flat/recommended` preset name

### `packages/default/src/configs/regexp.ts`
- Update for `eslint-plugin-regexp` v3 `flat/recommended` config

### `packages/default/src/configs/unicorn.ts`
- Update for v64 (check for new/removed rules)

### `packages/default/src/configs/imports.ts`
- Update `eslint-plugin-import-newlines` v2 options
- Update `eslint-plugin-simple-import-sort` v13 options

### `packages/default/src/configs/javascript.ts`
- Update `globals` v17 global names if changed
- Update `eslint-plugin-n` v17 options if changed
- Update `eslint-plugin-promise` if any rule changes

### `packages/default/src/configs/next.ts`
- Update for `@next/eslint-plugin-next` v16 config structure

### `packages/default/src/configs/tailwindcss.ts`
- Minor patch update, verify config structure

### `packages/default/src/index.ts`
- Update `eslint-flat-config-utils` v3 `FlatConfigComposer` API
- Update `local-pkg` v1 `isPackageExists` import

### `packages/default/src/type.ts`
- Verify Linter.Config type compatibility with ESLint v10

### `packages/default/package.json`
- Remove `eslint-plugin-node` dependency
- Update all version ranges
- Update `eslint` in both dependencies and devDependencies
- Remove `eslint-config-standard` from devDependencies — not imported anywhere, appears to be a leftover reference. Keep in README as historical note or remove mention

### Root `package.json`
- Update `eslint` version and pnpm override
- Update `.nvmrc` for Node.js >=20.19 requirement

## Test System Design

### Framework: Vitest

### Location: `tests/` (project root, alongside existing `test/` sample files)

### Structure

```
tests/
  helpers.ts                  — shared lint helpers
  configs/
    javascript.test.ts        — test javascript config rules
    typescript.test.ts        — test typescript config rules
    react.test.ts             — test react config rules
    imports.test.ts           — test imports config rules
    stylistic.test.ts         — test stylistic config rules
    jsonc.test.ts             — test jsonc config rules
    yml.test.ts               — test yaml config rules
    markdown.test.ts          — test markdown config rules
    unicorn.test.ts           — test unicorn config rules
    comments.test.ts          — test comments config rules
    regexp.test.ts            — test regexp config rules
    toml.test.ts              — test toml config rules
  integration.test.ts          — full aiou() composer end-to-end
  fixtures/
    valid/
      sample.ts               — code that should pass all rules
      sample.tsx              — react component that should pass
      sample.json             — valid JSON
      sample.yaml             — valid YAML
    invalid/
      unused-vars.ts          — triggers no-unused-vars
      missing-return-type.ts  — triggers @typescript-eslint rules
      bad-import.ts            — triggers import rules
      bad-react.tsx            — triggers react rules
```

### Test Helpers (`helpers.ts`)

```ts
import { Linter } from 'eslint'
import type { Config } from '../packages/default/src/type'

export function lintCode(
  configs: Config[],
  code: string,
  filename?: string
): Linter.LintMessage[] {
  const linter = new Linter({ configType: 'flat' })
  return linter.verify(code, configs as any, filename)
}

export function expectRuleError(
  configs: Config[],
  code: string,
  ruleId: string,
  filename?: string
): void {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter(m => m.ruleId === ruleId)
  assert(matches.length > 0, `Expected rule "${ruleId}" to report but it did not`)
}

export function expectRulePass(
  configs: Config[],
  code: string,
  ruleId: string,
  filename?: string
): void {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter(m => m.ruleId === ruleId)
  assert(matches.length === 0, `Expected rule "${ruleId}" to not report but got ${matches.length} errors`)
}
```

### Test Cases Per Config

Each config test file:
1. **Loads and validates** the config array is well-formed (no thrown errors)
2. **Lists expected rules** — verifies key rules are present in the config
3. **Lints fixture code** — asserts expected violations are caught
4. **Lints clean code** — asserts no false positives

### Integration Test

The integration test constructs the full `aiou()` config and:
1. Verifies it returns a `FlatConfigComposer` without errors
2. Lints the `test/` sample files in the project root
3. Verifies no crashes or unexpected config errors

## Implementation Order

1. Update `packages/default/package.json` — all version bumps, remove `eslint-plugin-node`
2. Update root `package.json` — eslint version, pnpm override, `.nvmrc`
3. Run `pnpm install` to resolve new versions
4. Adapt `packages/default/src/configs/*.ts` — one config at a time, starting with core (javascript, typescript) then plugins (react, stylistic, imports, etc.)
5. Adapt `packages/default/src/index.ts` — `FlatConfigComposer` v3, `local-pkg` v1
6. Adapt `packages/default/src/type.ts` if needed
7. Fix `packages/default/src/typegen.ts` if type generation breaks
8. Build: `pnpm run build` and fix any build errors
9. Add Vitest + test infrastructure
10. Write test files for each config
11. Run full test suite and fix remaining issues
12. Update `packages/default/rollup.config.mjs` if bundling changes needed

## Out of Scope

- Changes to `packages/plugin-progress` or `packages/plugin-modular` (separate packages, not part of the main config)
- Changes to `packages/analyze` (uses old ESLint v8 APIs, separate concern)
- Changes to `packages/ignore` (simple glob utility, no ESLint dependency)
- Refactoring config structure beyond what breaking changes require
- Adding new rules not currently in the config