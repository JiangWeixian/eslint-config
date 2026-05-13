---
"@aiou/eslint-config": patch
---

Replace `eslint-plugin-simple-import-sort` and `eslint-plugin-import-newlines` with `eslint-plugin-perfectionist` for import sorting. Fix React config duplicate spreads, correct `react-dom` rule prefix, and switch filename rules from `react-naming-convention/filename` to `unicorn/filename-case`. Remove deprecated TypeScript rules (`camelcase`, `ban-ts-ignore`, `ban-types`, `no-var-requires`, `no-parameter-properties`, `no-empty-interface`, `prefer-ts-expect-error`, `sort-type-constituents`) and use built-in `no-loss-of-precision`.
