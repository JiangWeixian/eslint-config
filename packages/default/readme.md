# @aiou/eslint-config

[![npm](https://img.shields.io/npm/v/@aiou/eslint-config)](https://www.npmjs.com/package/@aiou/eslint-config) [![GitHub](https://img.shields.io/npm/l/@aiou/eslint-config)](https://github.com/JiangWeixian/eslint-config/tree/master/packages/default)

Flat ESLint config with TypeScript, React, SSR, and more.

## Features

- Common ignore patterns (dist, lib, .next, .nuxt, lock files, etc.)
- TypeScript, YAML, JSONC, Markdown, TOML support
- Built-in React rules via `@eslint-react`, react-refresh, and SSR-safe linting
- Auto-detected framework support (Next.js, Tailwind CSS)
- Import sorting, unused import removal, and multi-line import enforcement
- Sorted keys for `package.json` and `tsconfig.json`
- Visual linting progress reporter

<div align='center'>

<img src="https://user-images.githubusercontent.com/6839576/148364688-6a9fa8ac-94a3-4897-89fc-a3b64606e93c.png" width="400px" />

*▲ @aiou/eslint-plugin-progress*

</div>

## Install

```console
npm install @aiou/eslint-config --save-dev
```

Requires **Node.js >= 20.19** and **ESLint >= 10**.

## Usage

In `eslint.config.mjs`:

```js
import { aiou } from '@aiou/eslint-config'

export default await aiou()
```

### With Options

```js
import { aiou } from '@aiou/eslint-config'

export default await aiou({
  ssr: true,
  regexp: true,
})
```

### With Custom Overrides

```js
import { aiou } from '@aiou/eslint-config'

export default await aiou(
  { ssr: false },
  {
    ignores: ['**/generated/**'],
    rules: {
      'no-console': 'off',
    },
  },
)
```

`aiou()` returns a `FlatConfigComposer` — you can chain `.append()`, `.override()`, etc.

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ssr` | `boolean` | `true` | Enable SSR-safe rules — forbids direct access to `window`, `document`, `navigator`, `location`, `history`, `localStorage` without `typeof` guards |
| `regexp` | `boolean` | `true` | Enable `eslint-plugin-regexp` recommended rules |

## Auto-Detection

The following plugins are enabled automatically when their packages are found in your project:

| Feature | Package | Plugin |
|---------|---------|--------|
| Next.js | `next` | `@next/eslint-plugin-next` |
| Tailwind CSS | `tailwindcss` | `eslint-plugin-tailwindcss` |

## Style Defaults

| Setting | Value |
|---------|-------|
| Indentation | 2 spaces |
| Quotes | Single (JS/TS), Double (JSX, YAML) |
| Semicolons | Never |
| Trailing commas | `always-multiline` |
| Arrow parens | `as-needed` |
| Curly | `all` |
| File naming | `kebab-case` (via unicorn) |
| Import sorting | side-effects → `node:` builtins → packages → relative/alias → virtual → types |

## Included Plugins

| Plugin | Notes |
|--------|-------|
| `@typescript-eslint/eslint-plugin` | TypeScript rules, type imports, enum prohibition |
| `@eslint-react/eslint-plugin` | React rules (recommended-typescript, dom, x, web-api) |
| `eslint-plugin-react-hooks` | Hooks rules |
| `eslint-plugin-react-refresh` | React Refresh compatibility |
| `@stylistic/eslint-plugin` | Formatting rules |
| `eslint-plugin-import-x` | Import rules |
| `eslint-plugin-simple-import-sort` | Import sorting |
| `eslint-plugin-import-newlines` | Multi-line import enforcement |
| `eslint-plugin-unused-imports` | Unused import/variable removal |
| `eslint-plugin-unicorn` | Best practice rules |
| `eslint-plugin-n` | Node.js rules |
| `eslint-plugin-promise` | Promise rules |
| `eslint-plugin-jsonc` | JSON/JSONC rules + sorted `package.json`/`tsconfig.json` keys |
| `eslint-plugin-yml` | YAML rules |
| `@eslint/markdown` | Markdown linting |
| `eslint-plugin-toml` | TOML rules |
| `eslint-plugin-regexp` | RegExp rules (when `regexp: true`) |
| `@eslint-community/eslint-plugin-eslint-comments` | ESLint directive rules |
| `eslint-plugin-etc` | TypeScript extras (no single-char type params) |
| `@next/eslint-plugin-next` | Next.js rules (auto-detected) |
| `eslint-plugin-tailwindcss` | Tailwind CSS rules (auto-detected) |
| `@aiou/eslint-plugin-progress` | Visual progress reporter |

## Exports

- **`aiou(options?, ...userConfigs)`** — Main factory. Returns `FlatConfigComposer`.
- **`all`** — Full flat config array of all rules (useful for tooling/typegen).
