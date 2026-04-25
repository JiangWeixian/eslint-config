---
"@aiou/eslint-config": major
---

Upgrade ESLint to v10 and all plugins to latest versions, add Vitest test system

**Breaking changes:**

- Requires ESLint v10+ and Node.js >=20.19
- `@eslint-react/eslint-plugin` upgraded from v1 to v4 — consolidated plugin API, all sub-plugins merged under single `@eslint-react` key, updated settings key from `react` to `react-x`
- `eslint-plugin-react-hooks` upgraded from v5 to v7 — new flat config API (`configs.flat.recommended`), 15 new recommended rules
- `@stylistic/eslint-plugin` upgraded from v1 to v5 — `customize()` no longer needs `flat: true`
- `eslint-plugin-jsonc` upgraded from v2 to v3 — configs now include parser/language setup, manual parser registration removed
- `eslint-plugin-yml` upgraded from v1 to v3 — configs now include parser/language setup, manual parser registration removed
- `eslint-plugin-regexp` upgraded from v2 to v3 — use `configs.recommended` instead of `configs['flat/recommended']`
- `eslint-plugin-toml` upgraded from v0.12 to v1 — use `configs.recommended` instead of `configs['flat/recommended']`
- `eslint-plugin-unicorn` upgraded from v60 to v64 — new rules, some removed (`no-instanceof-array`, `no-length-as-slice-end`, `no-array-push-push`)
- `eslint-plugin-react-hooks` removed rule `no-prop-types` (no longer exists in `@eslint-react` v4)
- `eslint-plugin-react` rules `avoid-shorthand-boolean` and `no-prop-types` removed (no longer exist in v4)

**Removed dependencies:**

- `eslint-plugin-node` (deprecated, superseded by `eslint-plugin-n`)
- `eslint-config-standard` (unused)

**New features:**

- Added Vitest test system with 24 tests covering all config modules and integration