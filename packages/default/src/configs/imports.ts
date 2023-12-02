import pluginImport from 'eslint-plugin-i'
import pluginImportNewlines from 'eslint-plugin-import-newlines'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnsedImports from 'eslint-plugin-unused-imports'

import {
  GLOB_DTS,
  GLOB_JSX,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const imports = () => {
  const config: FlatESLintConfig[] = [
    {
      plugins: {
        import: pluginImport,
        'simple-import-sort': pluginSimpleImportSort,
        'import-newlines': pluginImportNewlines,
        'unused-imports': pluginUnsedImports,
      },
      rules: {
        ...(pluginImport.configs.recommended.rules as Rules),
        // import
        // off: controlled by import/order
        'import/order': 'off',
        'sort-imports': 'off',
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Node.js builtins prefixed with `node:`.
              ['^node:'],
              // Packages.
              // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
              ['^@?\\w'],
              // Relative imports.
              // Absolute imports and other imports such as `@/foo` or `~/foo`.
              // Anything not matched in another group.
              ['^', '^\\.', '^@/\\w', '^~/\\w'],
              // Virtual modules prefixed with `virtual:`, rollup & vite favor
              ['^virtual:'],
              // Types
              ['^[^/\\.].*\u0000$', '^\\..*\u0000$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        // Not allowed import devDependencies
        'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
        // Not allow import { default as named }
        'import/no-named-default': 'warn',

        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],

        // Enforce newlines inside named import
        'import-newlines/enforce': [
          'error',
          {
            items: 4,
            'max-len': 120,
            semi: false,
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
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import/no-anonymous-default-export': 'error',
        // perfer named export
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
        GLOB_DTS,
      ],
      rules: {
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: [
        // ignore devDependencies on scripts files
        `**/script?(s)/**/*.${GLOB_SCRIPT_EXT}`,
        `**/**/script?(s).${GLOB_SCRIPT_EXT}`,
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        // ignore devDependencies on test files
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
        // ignore require third packages in .eslintrc.* e.g. eslint-define-config
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
