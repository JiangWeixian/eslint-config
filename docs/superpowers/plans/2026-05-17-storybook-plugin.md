# Storybook ESLint Plugin Integration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `eslint-plugin-storybook` to `@aiou/eslint-config` as an always-enabled config, scoped to story files via file globs.

**Architecture:** Create a new `storybook.ts` config file following the `next.ts` pattern — import the plugin, spread its `flat/recommended` config. Add it to `presetDefault` in `index.ts` and the `all` array (used by typegen). The plugin provides flat config arrays that include file-scoped rules, so we spread them directly.

**Tech Stack:** eslint-plugin-storybook ^0.10.0, ESLint flat config, TypeScript, Vitest

---

### Task 1: Add eslint-plugin-storybook dependency

**Files:**
- Modify: `packages/default/package.json`

- [ ] **Step 1: Install the dependency**

Run: `pnpm --filter @aiou/eslint-config add eslint-plugin-storybook`
Expected: `eslint-plugin-storybook` appears in `packages/default/package.json` dependencies and `pnpm-lock.yaml` is updated.

- [ ] **Step 2: Verify installation**

Run: `ls packages/default/node_modules/eslint-plugin-storybook 2>/dev/null && echo OK || echo FAIL`
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add packages/default/package.json pnpm-lock.yaml
git commit -m "chore: add eslint-plugin-storybook dependency"
```

---

### Task 2: Add storybook glob constant

**Files:**
- Modify: `packages/default/src/globs.ts`

- [ ] **Step 1: Add the glob constant**

Add to end of `packages/default/src/globs.ts`:

```ts
export const GLOB_STORYBOOK_STORIES = '**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'
export const GLOB_STORYBOOK_MAIN = '.storybook/main.@(js|cjs|mjs|ts)'
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `pnpm --filter @aiou/eslint-config exec tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add packages/default/src/globs.ts
git commit -m "feat: add storybook file globs"
```

---

### Task 3: Create storybook config file

**Files:**
- Create: `packages/default/src/configs/storybook.ts`

- [ ] **Step 1: Write the failing test**

Create `tests/configs/storybook.test.ts`:

```ts
import {
  describe,
  expect,
  it,
} from 'vitest'

import { storybook } from '../../packages/default/src/configs/storybook'

const configs = storybook()

describe('storybook config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain storybook plugin', () => {
    const pluginConfig = configs.find(c => c.plugins?.storybook)
    expect(pluginConfig).toBeDefined()
    expect(pluginConfig!.plugins!.storybook).toBeDefined()
  })

  it('should scope rules to story files', () => {
    const fileScopedConfigs = configs.filter(c => c.files)
    expect(fileScopedConfigs.length).toBeGreaterThan(0)
    const hasStoryPattern = fileScopedConfigs.some(c =>
      c.files!.some(f => f.includes('stories')),
    )
    expect(hasStoryPattern).toBe(true)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test -- tests/configs/storybook.test.ts`
Expected: FAIL — `Cannot find module '../../packages/default/src/configs/storybook'`

- [ ] **Step 3: Write implementation**

Create `packages/default/src/configs/storybook.ts`:

```ts
import storybookPlugin from 'eslint-plugin-storybook'

import type { Config } from '../type'

export const storybook = () => {
  const config: Config[] = [
    ...(storybookPlugin.configs['flat/recommended'] as Config[]),
  ]
  return config
}
```

Note: `eslint-plugin-storybook`'s `flat/recommended` already provides 3 config entries:
1. Plugin registration (`storybook:recommended:setup`)
2. Story file rules with `files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)']`
3. Main config rules with `files: ['.storybook/main.@(js|cjs|mjs|ts)']`

So we don't need to add `files` or `plugins` manually — the preset handles it.

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test -- tests/configs/storybook.test.ts`
Expected: PASS (all 3 tests)

- [ ] **Step 5: Commit**

```bash
git add packages/default/src/configs/storybook.ts tests/configs/storybook.test.ts
git commit -m "feat: add storybook eslint config"
```

---

### Task 4: Integrate storybook config into presetDefault

**Files:**
- Modify: `packages/default/src/index.ts`

- [ ] **Step 1: Write the failing test**

Add to `tests/integration.test.ts` (inside the `aiou() integration` describe block, after the existing tests):

```ts
it('should include storybook plugin in configs', () => {
  const composer = aiou({ ssr: false, regexp: true })
  const configs = composer.toConfigs()
  const hasStorybookPlugin = configs.some(c => c.plugins?.storybook)
  expect(hasStorybookPlugin).toBe(true)
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm build && pnpm test -- tests/integration.test.ts`
Expected: FAIL — `expected true, received false` (storybook plugin not yet registered)

Note: Integration tests import from `dist/`, so a build is needed first.

- [ ] **Step 3: Update index.ts**

In `packages/default/src/index.ts`:

1. Add import at top (after existing imports):
```ts
import { storybook } from './configs/storybook'
```

2. Add to `presetDefault` array (after `...progress()`):
```ts
...storybook(),
```

3. Add to `all` array (after `...regexpConfig()`):
```ts
...storybook(),
```

The final `index.ts` should look like:

```ts
import type { Linter } from 'eslint'
import type { Arrayable, Awaitable } from 'eslint-flat-config-utils'

import { FlatConfigComposer } from 'eslint-flat-config-utils'
import { isPackageExists } from 'local-pkg'
import type { Config } from './type'
import type { ConfigNames } from './typegen'
import { comments } from './configs/comments'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { jsonc } from './configs/jsonc'
import { markdown } from './configs/markdown'
import { next } from './configs/next'
import { perfectionist } from './configs/perfectionist'
import { progress } from './configs/progress'
import { react, ssrReact } from './configs/react'
import { regexp as regexpConfig } from './configs/regexp'
import { storybook } from './configs/storybook'
import { stylistic } from './configs/stylistic'
import { tailwindcss } from './configs/tailwindcss'
import { toml } from './configs/toml'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { yml } from './configs/yml'

const presetJavascript = [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
  ...perfectionist(),
]

const presetTypescript = [
  ...presetJavascript,
  ...typescript(),
]

const presetLangsExtensions = [
  ...yml(),
  ...markdown(),
  ...jsonc(),
  ...toml(),
]

const presetDefault = [
  ...presetTypescript,
  ...react(),
  ...stylistic(),
  ...presetLangsExtensions,
  ...progress(),
  ...storybook(),
]

export const all = [
  ...presetDefault,
  ...tailwindcss(),
  ...next(),
  ...ssrReact(),
  ...regexpConfig(),
  ...storybook(),
]

interface Options {
  ssr?: boolean
  regexp?: boolean
  tailwindcss?: boolean
}

export const aiou = ({ ssr = true, regexp = true, tailwindcss: enableTailwindcss = true }: Options = {}, ...userConfigs: Awaitable<
  Arrayable<Config> | FlatConfigComposer<any, any> | Linter.Config[]
>[]): FlatConfigComposer<Config, ConfigNames> => {
  const configs = [...presetDefault]
  if (enableTailwindcss && isPackageExists('tailwindcss')) {
    configs.push(...tailwindcss())
  }
  if (isPackageExists('next')) {
    configs.push(...next())
  }
  if (ssr) {
    configs.push(...ssrReact())
  }
  if (regexp) {
    configs.push(...regexpConfig())
  }
  const composer = new FlatConfigComposer<Config, ConfigNames>(
    ...configs,
    ...(userConfigs as any),
  )
  return composer
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm build && pnpm test -- tests/integration.test.ts`
Expected: PASS (all tests, including the new storybook plugin test)

- [ ] **Step 5: Run all existing tests to verify no regressions**

Run: `pnpm test`
Expected: All tests PASS

- [ ] **Step 6: Commit**

```bash
git add packages/default/src/index.ts tests/integration.test.ts
git commit -m "feat: integrate storybook config into presetDefault"
```

---

### Task 5: Regenerate type definitions

**Files:**
- Modify: `packages/default/src/typegen.ts` (auto-generated)

- [ ] **Step 1: Run typegen script**

Run: `pnpm --filter @aiou/eslint-config run build:typegen`
Expected: Script completes without errors, `src/typegen.ts` is regenerated with storybook rules.

- [ ] **Step 2: Verify storybook rules appear in typegen**

Run: `grep -c "storybook/" packages/default/src/typegen.ts`
Expected: A positive number (storybook rule types are included)

- [ ] **Step 3: Run full build**

Run: `pnpm --filter @aiou/eslint-config run build`
Expected: Build completes without errors

- [ ] **Step 4: Commit**

```bash
git add packages/default/src/typegen.ts
git commit -m "chore: regenerate type definitions with storybook rules"
```

---

### Task 6: Lint and final verification

**Files:**
- None (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `pnpm test`
Expected: All tests PASS

- [ ] **Step 2: Run linter on the project itself**

Run: `pnpm lint`
Expected: No errors (or only pre-existing ones)

- [ ] **Step 3: Final commit if any fixes needed**

Only if lint/test required fixes:
```bash
git add -A
git commit -m "fix: address lint issues from storybook integration"
```
