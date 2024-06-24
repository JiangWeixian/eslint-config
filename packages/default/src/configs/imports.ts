import pluginImportNewlines from 'eslint-plugin-import-newlines'
import pluginImport from 'eslint-plugin-import-x'
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
        // @ts-expect-error -- ignore
        'import-x': pluginImport,
        'simple-import-sort': pluginSimpleImportSort,
        'import-newlines': pluginImportNewlines,
        'unused-imports': pluginUnsedImports,
      },
      rules: {
        ...(pluginImport.configs.recommended.rules as unknown as Rules),
        // import
        // off: controlled by import/order
        'import-x/order': 'off',
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
              // Virtual modules prefixed with `virtual:` or `virtual-`, rollup & vite favor
              ['^virtual:', '^virtual-'],
              // Types
              ['^[^/\\.].*\u0000$', '^\\..*\u0000$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'off',
        'import-x/first': 'error',
        'import-x/newline-after-import': 'error',
        'import-x/no-duplicates': 'error',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-unresolved': 'off',
        'import-x/no-absolute-path': 'off',
        'import-x/dynamic-import-chunkname': [2, {
          allowEmpty: true,
        }],
        // Not allowed import devDependencies
        'import-x/no-extraneous-dependencies': ['error', { devDependencies: false }],
        // Not allow import { default as named }
        'import-x/no-named-default': 'warn',

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
        'import-x/no-duplicates': 'off',
      },
    },
    {
      files: [GLOB_TSX, GLOB_JSX],
      rules: {
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import-x/no-anonymous-default-export': 'error',
        // prefer named export
        'import-x/no-default-export': 'error',
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        `**/{app,pages,routes}/**/*.${GLOB_SCRIPT_EXT}`,
        `**/App*.${GLOB_SCRIPT_EXT}`,
        `**/Document.${GLOB_SCRIPT_EXT}`,
        '**/{vite,esbuild,rollup,webpack,rspack}.ts',
        // Allow default export in page and route file
        `**/{page,route}.${GLOB_SCRIPT_EXT}`,
        GLOB_DTS,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
      ],
      rules: {
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import-x/no-anonymous-default-export': 'off',
        'import-x/no-default-export': 'off',
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
        'import-x/no-extraneous-dependencies': 'off',
      },
    },
  ]
  return config
}
