---
"@aiou/eslint-config": minor
"@aiou/eslint-ignore": patch
---

Upgrade `eslint-plugin-tailwindcss` to `4.0.0-alpha.6` and `tailwindcss` to v4.
- `tailwindcss` is now an optional peer dependency requiring `^4.0.0`
- Config adapted to alpha.6 API (`configs.recommended` replaces `configs['flat/recommended']`)
- Removed deprecated `migration-from-tailwind-2` rule from typegen
- Added `vendor`, `coverage`, `storybook-static`, `test-results`, `docs`, `samples` to default ignore patterns
