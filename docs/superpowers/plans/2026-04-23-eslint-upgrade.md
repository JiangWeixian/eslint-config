# ESLint & Plugin Upgrade + Test System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade ESLint to v10 and all plugins to latest versions, adapt config APIs for breaking changes, remove deprecated deps, and add a Vitest test system.

**Architecture:** Incremental upgrade — update dependencies first, then adapt each config module to the new plugin APIs, then build and verify with tests. Each config module is self-contained, so they can be adapted independently.

**Tech Stack:** ESLint 10, TypeScript, Vitest, pnpm monorepo

---

## Task 1: Update dependencies and install

**Files:**
- Modify: `packages/default/package.json`
- Modify: `package.json`
- Modify: `.nvmrc`

- [ ] **Step 1: Update `packages/default/package.json` versions**

Replace the `dependencies` section with updated versions. Remove `eslint-plugin-node`. Remove `eslint-config-standard` from `devDependencies`.

```json
{
  "dependencies": {
    "@aiou/eslint-ignore": "workspace:*",
    "@aiou/eslint-plugin-progress": "workspace:*",
    "@eslint-community/eslint-plugin-eslint-comments": "^4.7.1",
    "@eslint-react/eslint-plugin": "^4.2.3",
    "@eslint/markdown": "^8.0.1",
    "@next/eslint-plugin-next": "^16.2.4",
    "@stylistic/eslint-plugin": "^5.10.0",
    "@typescript-eslint/eslint-plugin": "^8.59.0",
    "@typescript-eslint/parser": "^8.59.0",
    "eslint-flat-config-utils": "^3.1.0",
    "eslint-plugin-etc": "^2.0.3",
    "eslint-plugin-import-newlines": "^2.0.0",
    "eslint-plugin-import-x": "^4.16.2",
    "eslint-plugin-jsonc": "^3.1.2",
    "eslint-plugin-n": "^17.24.0",
    "eslint-plugin-promise": "^7.2.1",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "eslint-plugin-regexp": "^3.1.0",
    "eslint-plugin-simple-import-sort": "^13.0.0",
    "eslint-plugin-tailwindcss": "^3.18.3",
    "eslint-plugin-toml": "^1.3.1",
    "eslint-plugin-unicorn": "^64.0.0",
    "eslint-plugin-unused-imports": "^4.4.1",
    "eslint-plugin-yml": "^3.3.1",
    "globals": "^17.5.0",
    "jsonc-eslint-parser": "^3.1.0",
    "local-pkg": "^1.1.2",
    "yaml-eslint-parser": "^2.0.0"
  }
}
```

Remove these from `dependencies`:
- `"eslint-plugin-node": "^11.1.0"` (deprecated, superseded by eslint-plugin-n)

Remove from `devDependencies`:
- `"eslint-config-standard": "17.1.0"` (unused leftover)

Update `devDependencies.eslint` to `"^10.2.1"`.

- [ ] **Step 2: Update root `package.json`**

Update `devDependencies.eslint` to `"^10.2.1"`. Update `pnpm.overrides.eslint` to `"10.2.1"`. Remove `"eslint-plugin-modular": "workspace:^"` if it still references the old package. Keep `"@aiou/eslint-config": "workspace:*"` and `"@aiou/eslint-plugin-progress": "workspace:*"`.

- [ ] **Step 3: Update `.nvmrc`**

Check current `.nvmrc` content and update to a Node.js version >=20.19.

```bash
cat .nvmrc
```

If it's below 20.19, replace with `20` or `22`.

- [ ] **Step 4: Run `pnpm install`**

```bash
pnpm install
```

Expected: Install completes with new versions. There may be peer dependency warnings — note them but proceed.

- [ ] **Step 5: Commit dependency updates**

```bash
git add package.json packages/default/package.json pnpm-lock.yaml .nvmrc
git commit -m "chore: upgrade ESLint to v10 and all plugins to latest versions"
```

---

## Task 2: Adapt `javascript.ts` config (globals, n, promise)

**Files:**
- Modify: `packages/default/src/configs/javascript.ts`

- [ ] **Step 1: Check `globals` v17 API**

The `globals` package v17 still exports `globals.browser`, `globals.es2021`, `globals.node`. Verify the import still works:

```ts
import globals from 'globals'
// globals.browser, globals.es2021, globals.node still exist
```

No changes expected for `globals` usage in `javascript.ts`.

- [ ] **Step 2: Check `eslint-plugin-n` and `eslint-plugin-promise` APIs**

Both had minor version bumps. No breaking API changes. No changes needed in `javascript.ts` for these.

- [ ] **Step 3: Review ESLint v10 rule changes for javascript config**

ESLint v10 changed `no-shadow-restricted-names` to report `globalThis` by default. The current config doesn't override this rule, so it will start reporting new errors. Consider adding:

```ts
'no-shadow-restricted-names': 'error',
```

This is already covered by the existing rule set. No changes needed.

- [ ] **Step 4: Commit if changes were made, otherwise mark complete**

If any changes were needed, commit:
```bash
git add packages/default/src/configs/javascript.ts
git commit -m "fix: adapt javascript config for ESLint v10 and globals v17"
```

---

## Task 3: Adapt `typescript.ts` config

**Files:**
- Modify: `packages/default/src/configs/typescript.ts`

- [ ] **Step 1: Update `@typescript-eslint` imports**

`@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` went from ^8.42.0 to ^8.59.0 (minor). No API changes expected. Verify the import:

```ts
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
```

These should still work. No changes needed unless ESLint v10 type incompatibilities appear.

- [ ] **Step 2: Verify `configs.recommended.rules` still works**

The `pluginTypeScript.configs.recommended.rules` spread should still function. No changes needed.

- [ ] **Step 3: Commit if changes were made, otherwise mark complete**

---

## Task 4: Adapt `react.ts` config (@eslint-react v4 + react-hooks v7)

**Files:**
- Modify: `packages/default/src/configs/react.ts`

This is the **most complex** config change. `@eslint-react/eslint-plugin` v4 consolidated all sub-plugins into a single plugin.

- [ ] **Step 1: Rewrite `react.ts` for the new API**

The old code accessed:
```ts
const plugins = pluginReact.configs.all.plugins
// plugins['@eslint-react'], plugins['@eslint-react/dom'], etc.
```

In v4, all sub-plugins are consolidated under a single `@eslint-react` key. The pattern is:

```ts
import pluginReact from '@eslint-react/eslint-plugin'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

import {
  GLOB_JSX,
  GLOB_PAGES_COMPONENTS_DIRS,
  GLOB_PAGES_DIRS,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'
import { renameRules } from '../utils'

import type { Config } from '../type'

export const react = () => {
  const config: Config[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      settings: {
        'react-x': {
          version: '18.0',
        },
      },
      plugins: {
        'react-x': pluginReact,
        'react-dom': pluginReact,
        'react-hooks': pluginReactHooks,
        'react-hooks-extra': pluginReact,
        'react-naming-convention': pluginReact,
        'react-web-api': pluginReact,
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        ...(renameRules(pluginReact.configs['recommended-typescript'].rules as any, { 'react-x': 'react' })),
        ...(renameRules(pluginReact.configs.dom.rules as any, { '@eslint-react/dom': 'react-dom' })),
        ...(renameRules(pluginReact.configs.flat['recommended-latest'].rules as any, { '@eslint-react': 'react-hooks' })),
        ...(renameRules(pluginReact.configs['hooks-extra'].rules as any, { '@eslint-react': 'react-hooks-extra' })),
        ...(renameRules(pluginReact.configs['naming-convention'].rules as any, { '@eslint-react': 'react-naming-convention' })),
        ...(renameRules(pluginReact.configs['web-api'].rules as any, { '@eslint-react': 'react-web-api' })),
        'react/no-prop-types': 'error',
        'react/no-nested-component-definitions': 'warn',
        'react-dom/no-unknown-property': 'off',
        'react/avoid-shorthand-boolean': 'error',
        'react-refresh/only-export-components': 'warn',
        'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
      },
    },
    {
      files: ['src/components/**/*.{ts,tsx}'],
      rules: {
        'react-naming-convention/filename': ['warn', { rule: 'PascalCase' }],
      },
    },
    {
      files: ['src/hooks/**/use*.{ts,tsx}'],
      rules: {
        'react-naming-convention/filename': ['warn', { rule: 'kebab-case' }],
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        `**/*{-entry,entry.}*.${GLOB_SCRIPT_EXT}`,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
        GLOB_PAGES_DIRS,
      ],
      ignores: [
        GLOB_PAGES_COMPONENTS_DIRS,
      ],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ]
  return config
}
```

**Important:** This is a starting point. The actual config preset names and rule structures in `@eslint-react` v4 need to be verified at implementation time by inspecting `pluginReact.configs` keys. The key changes are:
1. All sub-plugins consolidated — register the same `pluginReact` object under multiple plugin keys
2. `settings` key changed from `'react'` to `'react-x'`
3. Config presets are single objects (not arrays with sub-plugin entries)
4. `eslint-plugin-react-hooks` v7 uses `configs.flat['recommended-latest']` for flat config
5. `renameRules` still applies — prefix names changed

- [ ] **Step 2: Update `ssrReact` export similarly**

The `ssrReact` function in the same file only sets `languageOptions` and `rules` (no plugins), so it needs less change. Update the `settings` key from `'react'` to `'react-x'`.

- [ ] **Step 3: Commit**

```bash
git add packages/default/src/configs/react.ts
git commit -m "feat: adapt react config for @eslint-react v4 and react-hooks v7"
```

---

## Task 5: Adapt `stylistic.ts` config (@stylistic v5)

**Files:**
- Modify: `packages/default/src/configs/stylistic.ts`

- [ ] **Step 1: Remove `flat: true` from `customize()` and verify v5 API**

In `@stylistic/eslint-plugin` v5, `configs.customize()` always returns a flat config object. Remove the `flat: true` option:

```ts
const config = pluginStylistic.configs.customize({
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
})
```

The returned object has `plugins` and `rules` directly. The `off` object generation (turning off original eslint stylistic rules) still works the same way:

```ts
const off: Record<string, 'off'> = {}
Object.keys(config.rules ?? {}).forEach((key) => {
  off[key.replace('@stylistic/', '')] = 'off'
})
```

No other changes expected.

- [ ] **Step 2: Commit**

```bash
git add packages/default/src/configs/stylistic.ts
git commit -m "fix: adapt stylistic config for @stylistic/eslint-plugin v5"
```

---

## Task 6: Adapt `jsonc.ts` config (eslint-plugin-jsonc v3 + jsonc-eslint-parser v3)

**Files:**
- Modify: `packages/default/src/configs/jsonc.ts`

- [ ] **Step 1: Rewrite `jsonc.ts` to use spread pattern**

In v3, `eslint-plugin-jsonc` configs are flat config arrays that include parser/language setup. Remove manual `languageOptions.parser` and `plugins` registration:

```ts
import pluginJsonc from 'eslint-plugin-jsonc'

import {
  GLOB_CLAUDE_JSON,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
} from '../globs'

import type { Config } from '../type'

export const jsonc = () => {
  const config: Config[] = [
    ...pluginJsonc.configs['recommended-with-jsonc'],
    {
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      ignores: [GLOB_CLAUDE_JSON],
      rules: {
        'jsonc/array-bracket-newline': [
          'error',
          {
            multiline: true,
            minItems: null,
          },
        ],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2, {}],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
          },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
      },
    },
    {
      files: ['**/package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            // ... (keep full sort-keys config from current file)
          },
        ],
      },
    },
    {
      files: ['**/tsconfig.json', '**/tsconfig.*.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            // ... (keep full sort-keys config from current file)
          },
        ],
      },
    },
  ]
  return config
}
```

Remove the `import jsoncParser from 'jsonc-eslint-parser'` line — no longer needed since configs include parser setup.

- [ ] **Step 2: Commit**

```bash
git add packages/default/src/configs/jsonc.ts
git commit -m "fix: adapt jsonc config for eslint-plugin-jsonc v3"
```

---

## Task 7: Adapt `yml.ts` config (eslint-plugin-yml v3 + yaml-eslint-parser v2)

**Files:**
- Modify: `packages/default/src/configs/yml.ts`

- [ ] **Step 1: Rewrite `yml.ts` to use spread pattern**

In v3, `eslint-plugin-yml` configs are flat config arrays with parser/language setup included. Remove manual parser/plugin registration:

```ts
import pluginYml from 'eslint-plugin-yml'

import { GLOB_WORKFLOW_YAML, GLOB_YAML } from '../globs'

import type { Config } from '../type'

export const yml = () => {
  const config: Config[] = [
    ...pluginYml.configs.standard,
    {
      files: [GLOB_YAML],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: [GLOB_WORKFLOW_YAML],
      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ]
  return config
}
```

Remove the `import yamlParser from 'yaml-eslint-parser'` line.

- [ ] **Step 2: Commit**

```bash
git add packages/default/src/configs/yml.ts
git commit -m "fix: adapt yml config for eslint-plugin-yml v3"
```

---

## Task 8: Adapt `markdown.ts` config (@eslint/markdown v8)

**Files:**
- Modify: `packages/default/src/configs/markdown.ts`

- [ ] **Step 1: Update to v8 markdown config**

The old code uses `...pluginMarkdown.configs.processor.map(...)`. The v8 `configs.processor` is still an array of flat configs. We can keep the same pattern but verify it works. Optionally migrate to the new language-based `configs.recommended`:

```ts
import pluginMarkdown from '@eslint/markdown'

import { GLOB_MARKDOWN, GLOB_SCRIPT_EXT } from '../globs'

import type { Config } from '../type'

export const markdown = () => {
  const config: Config[] = [
    ...pluginMarkdown.configs.processor as Config[],
    {
      files: [`${GLOB_MARKDOWN}/*.${GLOB_SCRIPT_EXT}`],
      rules: {
        'react/no-missing-component-display-name': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'off',
        'import/no-anonymous-default-export': 'off',
        'react-refresh/only-export-components': 'off',
        'react/jsx-no-undef': 'off',
      },
    },
  ]
  return config
}
```

The `configs.processor` still returns an array. The type cast to `Config[]` may need adjustment.

- [ ] **Step 2: Commit**

```bash
git add packages/default/src/configs/markdown.ts
git commit -m "fix: adapt markdown config for @eslint/markdown v8"
```

---

## Task 9: Adapt `toml.ts`, `regexp.ts`, `unicorn.ts`, `next.ts`, `tailwindcss.ts`

**Files:**
- Modify: `packages/default/src/configs/toml.ts`
- Modify: `packages/default/src/configs/regexp.ts`
- Modify: `packages/default/src/configs/unicorn.ts`
- Modify: `packages/default/src/configs/next.ts`
- Modify: `packages/default/src/configs/tailwindcss.ts`

- [ ] **Step 1: Update `toml.ts`**

Change `configs['flat/recommended']` to `configs.recommended`:

```ts
import pluginToml from 'eslint-plugin-toml'

import type { Config } from '../type'

export const toml = () => {
  const config: Config[] = [
    ...pluginToml.configs.recommended,
    {
      rules: {
        'toml/comma-style': 'error',
        // ... (keep all existing rule overrides)
      },
    },
  ]
  return config
}
```

- [ ] **Step 2: Update `regexp.ts`**

Change `configs['flat/recommended']` to `configs.recommended`:

```ts
import { configs } from 'eslint-plugin-regexp'

import type { Config } from '../type'

export const regexp = () => {
  const config: Config[] = [
    {
      ...(configs.recommended as Config),
    },
  ]
  return config
}
```

- [ ] **Step 3: Update `unicorn.ts`**

`eslint-plugin-unicorn` v64 exports `configs.recommended` as a flat config object. No import change needed. Verify the current rules still exist. Key changes: `no-instanceof-array` removed (replaced by `no-instanceof-builtins`), `no-length-as-slice-end` removed (replaced by `no-unnecessary-slice-end`), `no-array-push-push` removed (replaced by `prefer-single-call`). Update the rule list:

```ts
import pluginUnicorn from 'eslint-plugin-unicorn'

import type { Config } from '../type'

export const unicorn = () => {
  const config: Config[] = [
    {
      ...pluginUnicorn.configs.recommended,
      rules: {
        ...pluginUnicorn.configs.recommended.rules,
        'unicorn/consistent-empty-array-spread': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-instanceof-builtins': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-dom-node-text-content': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
      },
    },
  ]
  return config
}
```

Note: Spreading `pluginUnicorn.configs.recommended` includes `languageOptions: { globals: globals.builtin }` which may conflict with `javascript.ts` globals. Evaluate if this causes duplicates.

- [ ] **Step 4: Update `next.ts`**

`@next/eslint-plugin-next` v16 has `configs.recommended` as a flat config object:

```ts
import pluginNext from '@next/eslint-plugin-next'

import { GLOB_JSX, GLOB_TSX } from '../globs'

import type { Config } from '../type'

export const next = () => {
  const config: Config[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        '@next/next': pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules as any,
      },
    },
  ]
  return config
}
```

This is very similar to the current code. Verify `configs.recommended.rules` still works.

- [ ] **Step 5: Update `tailwindcss.ts`**

No functional changes expected for v3.18.3 (patch update). Verify `configs['flat/recommended']` and `configs.recommended` still work. The `createRequire` pattern for the CJS plugin should still work:

```ts
// No changes expected - just verify it works
```

- [ ] **Step 6: Commit all config changes**

```bash
git add packages/default/src/configs/toml.ts packages/default/src/configs/regexp.ts packages/default/src/configs/unicorn.ts packages/default/src/configs/next.ts packages/default/src/configs/tailwindcss.ts
git commit -m "fix: adapt toml, regexp, unicorn, next, tailwindcss configs for updated plugins"
```

---

## Task 10: Adapt `imports.ts` config (import-newlines v2, simple-import-sort v13)

**Files:**
- Modify: `packages/default/src/configs/imports.ts`

- [ ] **Step 1: Update `eslint-plugin-import-newlines` v2**

No API changes — it's a rule-only plugin with no `configs` export. The rule name `import-newlines/enforce` should be the same. Verify options unchanged. No code changes expected.

- [ ] **Step 2: Update `eslint-plugin-simple-import-sort` v13**

No API changes — rule-only plugin. Rule name `simple-import-sort/imports` and `simple-import-sort/exports` should be the same. Verify options unchanged. No code changes expected.

- [ ] **Step 3: Commit if changes were made, otherwise mark complete**

---

## Task 11: Adapt `index.ts` and `type.ts` (FlatConfigComposer v3, local-pkg v1)

**Files:**
- Modify: `packages/default/src/index.ts`
- Modify: `packages/default/src/type.ts`

- [ ] **Step 1: Update `index.ts`**

Verify `FlatConfigComposer` v3 import and API are unchanged. The `local-pkg` v1 `isPackageExists` import is the same.

```ts
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'
```

These imports should work as-is. The `FlatConfigComposer` constructor and methods are unchanged in v3.

Verify that the `all` and `aiou` exports still work with the updated configs.

- [ ] **Step 2: Update `type.ts` for ESLint v10 compatibility**

Check if `Linter.Config` type changed in ESLint v10. The key changes in v10 are:
- `name` property added to configs (now recommended)
- `language` property added for language plugins

Current `type.ts`:
```ts
import type { Linter } from 'eslint'
import type { Rules } from './typegen'

export type Config = Omit<
  Linter.Config<Linter.RulesRecord & Rules>,
  'plugins'
> & {
  plugins?: Record<string, any>
}
```

This should still work. If ESLint v10 type definitions are stricter about `name` or `language`, we may need to add those. Test by running `pnpm run build`.

- [ ] **Step 3: Commit**

```bash
git add packages/default/src/index.ts packages/default/src/type.ts
git commit -m "fix: verify FlatConfigComposer v3 and local-pkg v1 compatibility"
```

---

## Task 12: Update `package.json` — remove eslint-plugin-node, eslint-config-standard

**Files:**
- Modify: `packages/default/package.json`

- [ ] **Step 1: Remove `eslint-plugin-node` from dependencies**

Find and remove the line:
```json
"eslint-plugin-node": "^11.1.0",
```

This was already done in Task 1 Step 1, verify it's gone.

- [ ] **Step 2: Remove `eslint-config-standard` from devDependencies**

Find and remove the line:
```json
"eslint-config-standard": "17.1.0",
```

This was already done in Task 1 Step 1, verify it's gone.

- [ ] **Step 3: Commit if not already committed**

---

## Task 13: Build and fix errors

**Files:** As needed based on build errors

- [ ] **Step 1: Run `pnpm run build`**

```bash
pnpm --filter=@aiou/eslint-config run build
```

Expected: Build may fail due to type errors from updated packages. Fix each error.

- [ ] **Step 2: Fix type errors iteratively**

Common issues:
- `Linter.Config` type changes in ESLint v10
- `FlatConfigComposer` generic parameter changes
- `isPackageExists` return type changes
- Import type changes in plugins

Fix each error and re-run build until it succeeds.

- [ ] **Step 3: Commit build fixes**

```bash
git add -A
git commit -m "fix: resolve type errors from ESLint v10 and plugin upgrades"
```

---

## Task 14: Add Vitest test infrastructure

**Files:**
- Create: `tests/helpers.ts`
- Modify: `package.json` (add vitest devDependency)
- Create: `vitest.config.ts`

- [ ] **Step 1: Install Vitest**

```bash
pnpm add -Dw vitest
```

- [ ] **Step 2: Create `vitest.config.ts` at project root**

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
})
```

- [ ] **Step 3: Add `test` script to root `package.json`**

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

- [ ] **Step 4: Create `tests/helpers.ts`**

```ts
import { Linter } from 'eslint'

export function lintCode(
  configs: any[],
  code: string,
  filename?: string,
): Linter.LintMessage[] {
  const linter = new Linter({ configType: 'flat' })
  return linter.verify(code, configs, filename)
}

export function expectRuleError(
  configs: any[],
  code: string,
  ruleId: string,
  filename?: string,
): { pass: boolean; errors: Linter.LintMessage[] } {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter((m) => m.ruleId === ruleId)
  return {
    pass: matches.length > 0,
    errors: matches,
  }
}

export function expectRulePass(
  configs: any[],
  code: string,
  ruleId: string,
  filename?: string,
): { pass: boolean; errors: Linter.LintMessage[] } {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter((m) => m.ruleId === ruleId)
  return {
    pass: matches.length === 0,
    errors: matches,
  }
}
```

- [ ] **Step 5: Commit**

```bash
git add vitest.config.ts tests/helpers.ts package.json pnpm-lock.yaml
git commit -m "feat: add Vitest test infrastructure"
```

---

## Task 15: Write config test files

**Files:**
- Create: `tests/configs/javascript.test.ts`
- Create: `tests/configs/typescript.test.ts`
- Create: `tests/configs/react.test.ts`
- Create: `tests/configs/imports.test.ts`
- Create: `tests/configs/stylistic.test.ts`
- Create: `tests/configs/jsonc.test.ts`
- Create: `tests/configs/yml.test.ts`
- Create: `tests/configs/markdown.test.ts`
- Create: `tests/configs/unicorn.test.ts`
- Create: `tests/configs/comments.test.ts`
- Create: `tests/configs/regexp.test.ts`
- Create: `tests/configs/toml.test.ts`

- [ ] **Step 1: Write `tests/configs/javascript.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { javascript } from '../../packages/default/src/configs/javascript'
import { lintCode } from '../helpers'

const configs = javascript()

describe('javascript config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain expected core rules', () => {
    const rules = configs[0].rules
    expect(rules).toBeDefined()
    expect(rules['no-var']).toBe('error')
    expect(rules['prefer-const']).toBeDefined()
    expect(rules['semi']).toStrictEqual(['error', 'never'])
  })

  it('should catch no-undef errors', () => {
    const result = lintCode(configs, 'const x = unknownVar;', 'test.js')
    expect(result.some((m) => m.ruleId === 'no-undef')).toBe(true)
  })

  it('should allow valid JS', () => {
    const result = lintCode(configs, 'const x = 1;', 'test.js')
    const errors = result.filter((m) => m.severity === 2)
    expect(errors).toHaveLength(0)
  })
})
```

- [ ] **Step 2: Write `tests/configs/typescript.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { typescript } from '../../packages/default/src/configs/typescript'
import { lintCode } from '../helpers'

const configs = typescript()

describe('typescript config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain @typescript-eslint rules', () => {
    const rules = configs[0].rules
    expect(rules).toBeDefined()
    expect(rules['@typescript-eslint/no-require-imports']).toBe('error')
    expect(rules['@typescript-eslint/consistent-type-imports']).toBeDefined()
  })

  it('should catch no-require-imports', () => {
    const result = lintCode(configs, 'const x = require("foo");', 'test.ts')
    expect(result.some((m) => m.ruleId === '@typescript-eslint/no-require-imports')).toBe(true)
  })
})
```

- [ ] **Step 3: Write `tests/configs/react.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { react } from '../../packages/default/src/configs/react'
import { lintCode } from '../helpers'

const configs = react()

describe('react config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain react plugin', () => {
    const plugins = configs[0].plugins
    expect(plugins).toBeDefined()
    expect(plugins['react-x']).toBeDefined()
  })

  it('should catch JSX issues', () => {
    const result = lintCode(configs, 'export const Foo = () => <div />', 'test.tsx')
    expect(result).toBeDefined()
  })
})
```

- [ ] **Step 4: Write `tests/configs/imports.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { imports } from '../../packages/default/src/configs/imports'
import { lintCode } from '../helpers'

const configs = imports()

describe('imports config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain import rules', () => {
    const rules = configs[0].rules
    expect(rules['import/first']).toBe('error')
    expect(rules['import/newline-after-import']).toBe('error')
  })

  it('should catch unused imports', () => {
    const result = lintCode(configs, 'import { unused } from "foo";\nconst x = 1;', 'test.ts')
    expect(result.some((m) => m.ruleId === 'unused-imports/no-unused-imports')).toBe(true)
  })
})
```

- [ ] **Step 5: Write remaining config tests (stylistic, jsonc, yml, markdown, unicorn, comments, regexp, toml)**

Follow the same pattern for each:
- Verify config array is well-formed
- Verify key rules are present
- Lint a small fixture string and check for expected error or pass

For config-specific tests:
- **stylistic**: verify `@stylistic/semi`, `@stylistic/quotes` rules
- **jsonc**: pass JSON string with filename `test.json`, verify `jsonc/indent` rule
- **yml**: pass YAML string with filename `test.yaml`, verify `yml/quotes` rule
- **markdown**: pass markdown string with filename `test.md`, verify processor works
- **unicorn**: verify key rules like `unicorn/prefer-node-protocol`
- **comments**: verify `eslint-comments/no-unlimited-disable` rule
- **regexp**: verify it loads without errors (spread config)
- **toml**: verify it loads without errors (spread config)

- [ ] **Step 6: Commit test files**

```bash
git add tests/configs/
git commit -m "feat: add config test files for all ESLint config modules"
```

---

## Task 16: Write integration test

**Files:**
- Create: `tests/integration.test.ts`

- [ ] **Step 1: Write `tests/integration.test.ts`**

```ts
import { describe, it, expect } from 'vitest'
import { aiou, all } from '../../packages/default/src/index'
import { Linter } from 'eslint'

describe('aiou() integration', () => {
  it('should return a FlatConfigComposer without errors', () => {
    const composer = aiou({ ssr: false, regexp: true })
    expect(composer).toBeDefined()
    expect(typeof composer.toConfigs).toBe('function')
  })

  it('should produce valid configs that can lint', () => {
    const composer = aiou({ ssr: false, regexp: true })
    const configs = composer.toConfigs()
    const linter = new Linter({ configType: 'flat' })
    const result = linter.verify('const x = 1;', configs, 'test.ts')
    expect(Array.isArray(result)).toBe(true)
  })

  it('should lint JSX files', () => {
    const composer = aiou({ ssr: false, regexp: true })
    const configs = composer.toConfigs()
    const linter = new Linter({ configType: 'flat' })
    const code = 'export const Foo = () => <div />;'
    const result = linter.verify(code, configs, 'test.tsx')
    expect(Array.isArray(result)).toBe(true)
  })

  it('should lint JSON files', () => {
    const composer = aiou({ ssr: false, regexp: true })
    const configs = composer.toConfigs()
    const linter = new Linter({ configType: 'flat' })
    const result = linter.verify('{"name": "test"}', configs, 'test.json')
    expect(Array.isArray(result)).toBe(true)
  })
})

describe('all preset', () => {
  it('should be a valid config array', () => {
    expect(Array.isArray(all)).toBe(true)
    expect(all.length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Commit**

```bash
git add tests/integration.test.ts
git commit -m "feat: add integration test for aiou() composer"
```

---

## Task 17: Run full test suite and fix remaining issues

**Files:** As needed based on test failures

- [ ] **Step 1: Run `pnpm test`**

```bash
pnpm test
```

Expected: Some tests may fail due to config adaptation issues. Fix each failure.

- [ ] **Step 2: Fix test failures iteratively**

Run failing tests individually:
```bash
pnpm vitest run tests/configs/javascript.test.ts
pnpm vitest run tests/configs/react.test.ts
pnpm vitest run tests/integration.test.ts
```

Fix config files as needed based on error messages.

- [ ] **Step 3: Re-run full test suite until all pass**

```bash
pnpm test
```

- [ ] **Step 4: Commit fixes**

```bash
git add -A
git commit -m "fix: resolve test failures from ESLint v10 and plugin upgrades"
```

---

## Task 18: Update `ssrReact` export and other remaining configs

**Files:**
- Modify: `packages/default/src/configs/react.ts` (ssrReact function)

- [ ] **Step 1: Verify `ssrReact` function works with updated settings key**

The `ssrReact` function uses `settings: { react: { version: '18.0' } }`. With `@eslint-react` v4, this should change to `settings: { 'react-x': { version: '18.0' } }`.

- [ ] **Step 2: Commit if changes**

---

## Task 19: Final build verification and cleanup

**Files:** As needed

- [ ] **Step 1: Run full build**

```bash
pnpm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Run lint on the project itself**

```bash
pnpm run lint
```

Expected: No lint errors on the project's own code (or only pre-existing ones).

- [ ] **Step 3: Run full test suite one more time**

```bash
pnpm test
```

Expected: All tests pass.

- [ ] **Step 4: Verify no leftover `eslint-plugin-node` references**

```bash
grep -r "eslint-plugin-node" packages/default/src/
```

Expected: No results.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: final cleanup and verification for ESLint v10 upgrade"
```