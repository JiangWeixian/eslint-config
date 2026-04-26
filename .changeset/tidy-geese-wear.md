---
"@aiou/eslint-config": patch
---

fix: drop CJS build to fix `ERR_PACKAGE_PATH_NOT_EXPORTED` with ESM-only `@eslint-react/eslint-plugin`

`@eslint-react/eslint-plugin` v4 is ESM-only. Shipping a CJS build caused Node to fail when trying to `require()` it from the CJS bundle. This removes the CJS output and makes the package ESM-only.
