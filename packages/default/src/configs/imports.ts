import pluginImport from 'eslint-plugin-i'
import pluginImportNewlines from 'eslint-plugin-import-newlines'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginUnsedImports from 'eslint-plugin-unused-imports'

import { GLOB_DTS, GLOB_TSX, GLOB_JSX, GLOB_SCRIPT_EXT } from '../globs'
import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const imports = () => {
  const config: FlatESLintConfigItem[] = [
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
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              // ignore dev scripts
              '**/scripts/**/*.{js,jsx,ts,tsx,cjs,mjs}',
              '**/*.test.{js,jsx,ts,tsx,cjs,mjs}',
              '**/*.spec.{js,jsx,ts,tsx,mjs,cjs}',
              '**/*.config.{js,jsx,ts,tsx,cjs,mjs}',
              // ignore require third packages in .eslintrc.* e.g. eslint-define-config
              '**/.eslintrc.{js,cjs,mjs}',
            ],
          },
        ],
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
            items: 2,
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
        `**/pages/**/*.${GLOB_SCRIPT_EXT}`,
        `**/{index,vite,esbuild,rollup,webpack,rspack}.ts`,
        GLOB_DTS,
      ],
      rules: {
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
  ]
  return config
}
