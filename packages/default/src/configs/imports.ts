import pluginImport from 'eslint-plugin-import-x'
import pluginUnsedImports from 'eslint-plugin-unused-imports'

import {
  GLOB_DTS,
  GLOB_JSX,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'

import type { Config } from '../type'

export const imports = (): Config[] => {
  const config: Config[] = [
    {
      plugins: {
        import: pluginImport,
        'unused-imports': pluginUnsedImports,
      },
      rules: {
        // import
        // off: controlled by import/order
        'import/order': 'off',
        'sort-imports': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'import/dynamic-import-chunkname': [2, {
          allowEmpty: true,
        }],
        // Not allowed import devDependencies
        'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
        // Not allow import { default as named }
        'import/no-named-default': 'warn',

        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            // https://github.com/sweepline/eslint-plugin-unused-imports/issues/105
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
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
        // Allow default export in page and route file
        `**/{page,route}.${GLOB_SCRIPT_EXT}`,
        GLOB_DTS,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
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
