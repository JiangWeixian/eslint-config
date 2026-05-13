# ESLint Config 规则清理与 perfectionist 迁移 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 清理已废弃/已移除的 ESLint 规则，修复 @eslint-react 配置映射错误，引入 perfectionist 替换 simple-import-sort/import-newlines/sort-type-constituents。

**Architecture:** 修改 `packages/default/src/configs/` 下的 react.ts、typescript.ts、imports.ts 三个配置文件，移除废弃插件依赖，新增 perfectionist 配置文件。每个 task 独立可测试。

**Tech Stack:** @eslint-react/eslint-plugin v5.7.1, @typescript-eslint v8.59.x, eslint-plugin-perfectionist, eslint-plugin-unicorn

**参考文档:** `note.md`

---

### Task 1: 修复 react.ts — 移除重复 config spread 和错误映射

**Files:**
- Modify: `packages/default/src/configs/react.ts:35-54`

**问题:**
1. `recommended-typescript` 已包含 dom(11)、x(38)、naming-convention(3)、web-api(5)、jsx、rsc 的全部规则
2. 第 46-49 行额外 spread 了 4 个子 config，完全重复
3. 第 47 行把 x 规则 rename 为 `react-hooks-extra`（该包 v3 已移除）
4. 第 48 行把 x 规则 rename 为 `react-naming-convention`（错误：38 条 x 规则注册到 naming-convention 前缀下）

- [ ] **Step 1: 修改 react.ts plugins 和 rules**

将 `packages/default/src/configs/react.ts` 第 35-54 行替换为：

```ts
      plugins: {
        react: pluginReact,
        'react-dom': pluginReact,
        'react-hooks': pluginReactHooks,
        'react-naming-convention': pluginReact,
        'react-refresh': pluginReactRefresh,
        'react-web-api': pluginReact,
      },
      rules: {
        ...(renameRules(pluginReact.configs['recommended-typescript'].rules as any, { '@eslint-react': 'react' })),
        ...(pluginReactHooks.configs.flat.recommended.rules as any),
        'react/no-nested-component-definitions': 'warn',
        'react-dom/dom-no-unknown-property': 'off',
        'react-refresh/only-export-components': 'warn',
      },
```

关键变化：
- 移除 `'react-hooks-extra'` plugin 注册
- 移除第 46-49 行的 4 个重复 renameRules spread（dom、x、x→naming-convention、web-api）
- `recommended-typescript` 已包含所有子 config 的规则，只需一次 rename 即可

- [ ] **Step 2: 添加 unicorn/filename-case 替代已删除的 naming-convention/filename**

在第 55 行（第二个 config block 之前）插入：

```ts
    {
      files: ['src/components/**/*.{ts,tsx}'],
      rules: {
        'unicorn/filename-case': ['warn', { case: 'pascalCase' }],
      },
    },
    {
      files: ['src/hooks/**/use*.{ts,tsx}'],
      rules: {
        'unicorn/filename-case': ['warn', { case: 'kebabCase' }],
      },
    },
```

- [ ] **Step 3: 验证构建**

Run: `pnpm run build`
Expected: 构建成功

- [ ] **Step 4: Commit**

```bash
git add packages/default/src/configs/react.ts
git commit -m "fix(react): remove duplicate config spreads, fix naming-convention mapping, add unicorn/filename-case"
```

---

### Task 2: 清理 typescript.ts — 移除已废弃/已移除规则

**Files:**
- Modify: `packages/default/src/configs/typescript.ts:52-128`

- [ ] **Step 1: 替换 `@typescript-eslint/prefer-ts-expect-error`**

在 `packages/default/src/configs/typescript.ts` 中：

将第 52 行：
```ts
'@typescript-eslint/prefer-ts-expect-error': 'warn',
```
删除此行（`@typescript-eslint/ban-ts-comment` 在第 45 行已配置，覆盖了此功能）。

- [ ] **Step 2: 替换 `@typescript-eslint/sort-type-constituents`**

将第 55 行：
```ts
'@typescript-eslint/sort-type-constituents': 'error',
```
删除此行（将在 Task 3 中用 perfectionist 替代）。

- [ ] **Step 3: 替换 `@typescript-eslint/no-loss-of-precision`**

将第 99-100 行：
```ts
'no-loss-of-precision': 'off',
'@typescript-eslint/no-loss-of-precision': 'error',
```
替换为：
```ts
'no-loss-of-precision': 'error',
```

（`@typescript-eslint/no-loss-of-precision` 已废弃，ESLint 内置 `no-loss-of-precision` 已足够）

- [ ] **Step 4: 删除已从插件移除的规则（4 行）**

删除以下行：
```ts
'@typescript-eslint/camelcase': 'off',             // 行 109
'@typescript-eslint/no-parameter-properties': 'off', // 行 113
'@typescript-eslint/ban-ts-ignore': 'off',          // 行 115
'@typescript-eslint/ban-types': 'off',              // 行 119
```

这些规则在 @typescript-eslint v8 中已不存在，设 off 无实际效果。

- [ ] **Step 5: 删除已废弃但已有替代的规则（2 行）**

删除以下行：
```ts
'@typescript-eslint/no-empty-interface': 'off',  // 行 114（替代规则 no-empty-object-type 在 61 行已 off）
'@typescript-eslint/no-var-requires': 'off',     // 行 121（替代规则 no-require-imports 在 60 行已 error）
```

- [ ] **Step 6: 验证构建**

Run: `pnpm run build`
Expected: 构建成功

- [ ] **Step 7: Commit**

```bash
git add packages/default/src/configs/typescript.ts
git commit -m "fix(typescript): remove deprecated/removed rules, use built-in no-loss-of-precision"
```

---

### Task 3: 引入 perfectionist — 替换 simple-import-sort 和 import-newlines

**Files:**
- Create: `packages/default/src/configs/perfectionist.ts`
- Modify: `packages/default/src/configs/imports.ts`
- Modify: `packages/default/src/index.ts`
- Modify: `packages/default/src/configs/markdown.ts`
- Modify: `packages/default/package.json`（移除旧依赖）

- [ ] **Step 1: 创建 perfectionist 配置文件**

创建 `packages/default/src/configs/perfectionist.ts`：

```ts
import pluginPerfectionist from 'eslint-plugin-perfectionist'

import type { Config } from '../type'

export const perfectionist = (): Config[] => {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-imports': [
          'warn',
          {
            type: 'natural',
            order: 'asc',
            newlinesBetween: 'ignore',
            groups: [
              'type-import',
              ['value-builtin', 'value-external'],
              'type-internal',
              'value-internal',
              ['type-parent', 'type-sibling', 'type-index'],
              ['value-parent', 'value-sibling', 'value-index'],
              'side-effect',
              'unknown',
            ],
            customGroups: [
              {
                groupName: 'virtual-modules',
                elementNamePattern: ['^virtual:', '^virtual-'],
              },
            ],
            internalPattern: ['^~/.+', '^@/.+', '^#.+'],
          },
        ],
        'perfectionist/sort-union-types': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-intersection-types': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-named-imports': ['warn', { type: 'natural', order: 'asc' }],
      },
    },
  ]
}
```

说明：
- `sort-imports` 使用 `natural` 排序 + 预定义分组（builtin > external > internal > relative > side-effect）
- `sort-union-types` + `sort-intersection-types` 替代 `@typescript-eslint/sort-type-constituents`
- `sort-named-imports` 排序具名导入
- `newlinesBetween: 'ignore'` 保持与现有格式化工具兼容
- `virtual-modules` customGroup 对应原 simple-import-sort 的 virtual 模块分组

- [ ] **Step 2: 修改 imports.ts — 移除 simple-import-sort 和 import-newlines**

将 `packages/default/src/configs/imports.ts` 整体替换为：

```ts
import pluginImport from 'eslint-plugin-import-x'
import pluginUnsedImports from 'eslint-plugin-unused-imports'

import {
  GLOB_DTS,
  GLOB_JSX,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'

import type { Config } from '../type'

export const imports = (): Config[] => {
  const config: Config[] = [
    {
      plugins: {
        import: pluginImport,
        'unused-imports': pluginUnsedImports,
      },
      rules: {
        'import/order': 'off',
        'sort-imports': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/dynamic-import-chunkname': [2, {
          allowEmpty: true,
        }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
        'import/no-named-default': 'warn',

        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: [GLOB_DTS],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: [GLOB_TSX, GLOB_JSX],
      rules: {
        'import/no-anonymous-default-export': 'error',
        'import/no-default-export': 'error',
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        `**/{app,pages,routes}/**/*.${GLOB_SCRIPT_EXT}`,
        `**/App*.${GLOB_SCRIPT_EXT}`,
        `**/Document.${GLOB_SCRIPT_EXT}`,
        '**/{vite,esbuild,rollup,webpack,rspack}.ts',
        `**/{page,route}.${GLOB_SCRIPT_EXT}`,
        GLOB_DTS,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
      ],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: [
        `**/script?(s)/**/*.${GLOB_SCRIPT_EXT}`,
        `**/**/script?(s).${GLOB_SCRIPT_EXT}`,
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
        `**/.eslintrc.${GLOB_SCRIPT_EXT}`,
        `**/**/eslint.config.${GLOB_SCRIPT_EXT}`,
        '**/{vite,esbuild,rollup,webpack,rspack}.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ]
  return config
}
```

移除的内容：
- `eslint-plugin-import-newlines` import 和 plugin 注册
- `eslint-plugin-simple-import-sort` import 和 plugin 注册
- `simple-import-sort/imports` 规则
- `simple-import-sort/exports` 规则
- `import-newlines/enforce` 规则

- [ ] **Step 3: 修改 index.ts — 引入 perfectionist 配置**

在 `packages/default/src/index.ts` 中：

添加 import（第 12 行后）：
```ts
import { perfectionist } from './configs/perfectionist'
```

修改 `presetJavascript`（第 26-32 行）：
```ts
const presetJavascript = [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
  ...perfectionist(),
]
```

- [ ] **Step 4: 修改 markdown.ts — 添加 perfectionist 规则 off**

在 `packages/default/src/configs/markdown.ts` 的 rules 对象中添加：
```ts
'perfectionist/sort-imports': 'off',
```

- [ ] **Step 5: 移除旧依赖**

Run:
```bash
pnpm remove eslint-plugin-simple-import-sort eslint-plugin-import-newlines --filter @aiou/eslint-config
```

- [ ] **Step 6: 验证构建**

Run: `pnpm run build`
Expected: 构建成功

- [ ] **Step 7: Commit**

```bash
git add packages/default/src/configs/perfectionist.ts packages/default/src/configs/imports.ts packages/default/src/index.ts packages/default/src/configs/markdown.ts packages/default/package.json pnpm-lock.yaml
git commit -m "feat: replace simple-import-sort and import-newlines with perfectionist"
```

---

### Task 4: 更新 README.md

**Files:**
- Modify: `readme.md`

- [ ] **Step 1: 更新 Features 列表**

将 `readme.md` 第 13 行：
```
- Import sorting, unused import removal, and multi-line import enforcement
```
替换为：
```
- Import sorting and unused import removal via `eslint-plugin-perfectionist`
```

- [ ] **Step 2: 更新 Style Defaults 表格**

将第 99 行：
```
| Import sorting | side-effects → `node:` builtins → packages → relative/alias → virtual → types |
```
替换为：
```
| Import sorting | type-imports → builtins/externals → internal → relative → side-effects (via `perfectionist`) |
```

- [ ] **Step 3: 更新 Included Plugins 表格**

将第 111-112 行：
```
| `eslint-plugin-simple-import-sort` | Import sorting |
| `eslint-plugin-import-newlines` | Multi-line import enforcement |
```
替换为：
```
| `eslint-plugin-perfectionist` | Import sorting, type sorting (union/intersection/named imports) |
```

- [ ] **Step 4: Commit**

```bash
git add readme.md
git commit -m "docs: update README for perfectionist migration"
```

---

### Task 5: 全局验证

**Files:** 无修改，纯验证

- [ ] **Step 1: 构建验证**

Run: `pnpm run build`
Expected: 构建成功，无错误

- [ ] **Step 2: Lint 自检**

Run: `pnpm run lint`
Expected: 无错误（可能有新的 perfectionist 排序 warning，属于预期行为）

- [ ] **Step 3: 在测试项目中验证**

在你的 `viberss` 项目中运行：
```bash
bun run lint
```
Expected: 不再出现 `react-naming-convention/filename` 和 `react-naming-convention/component-name` 相关错误

- [ ] **Step 4: 更新 note.md**

将 `note.md` 中所有"待修复"/"待清理"条目标记为"已完成"。

- [ ] **Step 5: Final commit**

```bash
git add note.md
git commit -m "docs: update note.md with completed cleanup status"
```
