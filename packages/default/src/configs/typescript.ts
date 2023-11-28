import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginETC from 'eslint-plugin-etc'

import { GLOB_TEST_DIRS, GLOB_TEST_SCRIPT, GLOB_TS, GLOB_TSX } from '../globs'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const typescript = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: [GLOB_TSX, GLOB_TS, GLOB_TEST_SCRIPT],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          sourceType: 'module',
        },
      },
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
      },
      plugins: {
        '@typescript-eslint': pluginTypeScript,
        etc: pluginETC,
      },
      rules: {
        ...(pluginTypeScript.configs.recommended.rules as Rules),
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/troubleshooting/Performance.md#eslint-plugin-import
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',

        // TS
        'no-useless-constructor': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        // Limit `interface` define object types, users could override with *.d.ts declare
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        // Sort type S = A | B
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/prefer-for-of': 'error',
        // https://www.npmjs.com/package/eslint-plugin-etc
        'etc/no-t': 'error',
        /**
         * refs:
         * 1. https://ncjamieson.com/dont-export-const-enums/
         * 2. https://www.huy.rocks/everyday/02-24-2022-typescript-enums-at-runtime-and-tree-shaking
         */
        'no-restricted-syntax': [
          'error',
          {
            selector: 'TSEnumDeclaration',
            message: 'Don\'t declare enums',
          },
        ],
        // required tsconfig.json
        // 'etc/no-misused-generics': 'error',

        // Overrides JS
        // original no-undef not compatiable with typescript
        // refs: https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false, variables: true },
        ],
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',

        // off
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // https://www.npmjs.com/package/eslint-plugin-unused-imports
        '@typescript-eslint/no-unused-vars': 'off',
        'no-void': ['error', { allowAsStatement: true }],
      },
    },
    {
      files: [GLOB_TEST_SCRIPT, GLOB_TEST_DIRS],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ]
  return config
}
