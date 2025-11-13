<div align="center">

# @aiou/eslint-config

**A comprehensive, flat ESLint configuration for modern TypeScript/JavaScript projects**

[![npm version](https://img.shields.io/npm/v/@aiou/eslint-config)](https://www.npmjs.com/package/@aiou/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@aiou/eslint-config)](https://www.npmjs.com/package/@aiou/eslint-config)
[![license](https://img.shields.io/npm/l/@aiou/eslint-config)](https://github.com/JiangWeixian/eslint-config/blob/master/LICENSE)
[![node version](https://img.shields.io/node/v/@aiou/eslint-config)](https://nodejs.org)

</div>

## ✨ Features

- 🚀 **ESLint Flat Config** - Uses the modern flat config format (ESLint v9+)
- 📦 **Zero Config** - Sensible defaults that work out of the box
- 🎯 **Multi-Language Support** - TypeScript, JavaScript, YAML, JSON(C), Markdown, TOML
- ⚛️ **React Ready** - Built-in React, React Hooks, React Refresh, and SSR-friendly rules
- 🔧 **Auto-Detection** - Automatically enables Next.js and Tailwind CSS rules when detected
- 📊 **Progress Reporter** - Beautiful, informative fix progress display
- 🎨 **Code Style** - Integrated stylistic rules for consistent formatting
- 🛡️ **Best Practices** - Curated rules from 20+ ESLint plugins
- 🔍 **Smart Imports** - Auto-sorting and formatting of imports
- 🚫 **Common Ignores** - Pre-configured ignore patterns based on Node.js gitignore

<div align='center'>

<img src="https://user-images.githubusercontent.com/6839576/148364688-6a9fa8ac-94a3-4897-89fc-a3b64606e93c.png" width="500px" />

*▲ Built-in progress reporter powered by @aiou/eslint-plugin-progress*

</div>

## 📦 Installation

```bash
npm install @aiou/eslint-config --save-dev
```

```bash
pnpm add @aiou/eslint-config -D
```

```bash
yarn add @aiou/eslint-config -D
```

**Requirements:**
- Node.js >= 20
- ESLint >= 9

## 🚀 Usage

### Basic Setup

Create `eslint.config.js` (or `.mjs`) in your project root:

```js
import { aiou } from '@aiou/eslint-config'

export default aiou()
```

Or with CommonJS:

```js
const { aiou } = require('@aiou/eslint-config')

module.exports = aiou()
```

### With Options

```js
import { aiou } from '@aiou/eslint-config'

export default aiou({
  ssr: true,      // Enable SSR-friendly rules (default: true)
  regexp: true,   // Enable regexp rules (default: true)
})
```

### Advanced Configuration

Extend or override rules using the flat config composer:

```js
import { aiou } from '@aiou/eslint-config'

export default aiou()
  .append({
    files: ['**/*.ts'],
    rules: {
      // Your custom rules
      '@typescript-eslint/no-explicit-any': 'error',
    },
  })
  .override('typescript', {
    rules: {
      // Override existing rules
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  })
```

## ⚙️ Configuration Options

### `options.ssr`

- **Type:** `boolean`
- **Default:** `true`

Enables SSR-friendly React rules. When enabled, prevents usage of browser-only APIs that would break server-side rendering.

```js
export default aiou({ ssr: true })
```

### `options.regexp`

- **Type:** `boolean`
- **Default:** `true`

Enables advanced regular expression linting rules to catch common regex mistakes and suggest optimizations.

```js
export default aiou({ regexp: true })
```

## 📚 Supported File Types

This configuration automatically handles the following file types:

| File Type | Extensions | Features |
|-----------|-----------|----------|
| **JavaScript** | `.js`, `.cjs`, `.mjs` | Standard + Promise + Node.js rules |
| **TypeScript** | `.ts`, `.tsx`, `.cts`, `.mts` | Full TypeScript support |
| **React** | `.jsx`, `.tsx` | React + Hooks + Refresh |
| **JSON** | `.json`, `.jsonc`, `.json5` | JSON with comments support |
| **YAML** | `.yaml`, `.yml` | YAML linting |
| **Markdown** | `.md` | Code blocks in Markdown |
| **TOML** | `.toml` | TOML configuration files |

## 🔌 Included Plugins

This configuration extends and configures the following plugins:

### Core & Standards
- `eslint-config-standard` - JavaScript Standard Style
- `@eslint-community/eslint-plugin-eslint-comments` - Best practices for ESLint directives
- `eslint-plugin-n` - Node.js specific rules (forked from eslint-plugin-node)
- `eslint-plugin-promise` - Promise best practices
- `eslint-plugin-unicorn` - Various awesome ESLint rules

### TypeScript
- `@typescript-eslint/eslint-plugin` - TypeScript specific linting rules
- `@typescript-eslint/parser` - Parser for TypeScript

### React
- `@eslint-react/eslint-plugin` - Modern React rules
- `eslint-plugin-react-hooks` - Rules for React Hooks
- `eslint-plugin-react-refresh` - React Fast Refresh compatibility
- `@next/eslint-plugin-next` - Next.js specific rules (auto-enabled)
- `eslint-plugin-tailwindcss` - Tailwind CSS class sorting (auto-enabled)

### Imports & Formatting
- `eslint-plugin-import-x` - Import/export syntax validation
- `eslint-plugin-simple-import-sort` - Auto-sorting imports
- `eslint-plugin-import-newlines` - Import formatting
- `eslint-plugin-unused-imports` - Remove unused imports
- `@stylistic/eslint-plugin` - Code style rules

### Languages & Formats
- `eslint-plugin-jsonc` - JSON/JSONC/JSON5 support
- `eslint-plugin-yml` - YAML support
- `eslint-plugin-toml` - TOML support
- `@eslint/markdown` - Markdown code blocks

### Additional
- `eslint-plugin-regexp` - Regular expression rules
- `eslint-plugin-etc` - Miscellaneous rules
- `@aiou/eslint-plugin-progress` - Progress reporter

## 📝 Package Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 🔍 Auto-Detection Features

The configuration automatically detects and enables rules for:

- **Next.js**: Enables `@next/eslint-plugin-next` when `next` package is found
- **Tailwind CSS**: Enables `eslint-plugin-tailwindcss` when `tailwindcss` package is found

No additional configuration needed!

## 🤝 Integration

### VS Code

Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and add to your `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.experimental.useFlatConfig": true
}
```

### Git Hooks

Use [lint-staged](https://github.com/okonet/lint-staged) with [husky](https://github.com/typicode/husky):

```json
{
  "lint-staged": {
    "*.{js,ts,jsx,tsx,vue,json,md}": ["eslint --fix"]
  }
}
```

## 📦 Monorepo

This is a monorepo containing:

- `@aiou/eslint-config` - Main ESLint configuration
- `@aiou/eslint-ignore` - Common ignore patterns
- `@aiou/eslint-plugin-progress` - Progress reporter plugin
- `eslint-plugin-modular` - Modular architecture rules

## 🐛 Troubleshooting

### Type Errors with ESLint

If you encounter type errors, ensure you have TypeScript installed:

```bash
npm install typescript --save-dev
```

### Flat Config Not Recognized

Make sure you're using ESLint v9 or later:

```bash
npm install eslint@^9 --save-dev
```

## 📄 License

[MIT](./LICENSE) License © 2024 [JiangWeixian](https://github.com/JiangWeixian)

## 🙏 Acknowledgments

Built with and inspired by the amazing ESLint community and their plugins.
