import pluginJsonc from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const jsonc = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: ['*.json', '*.json5'],
      languageOptions: {
        parser: jsoncParser,
      },
      plugins: {
        jsonc: pluginJsonc,
      },
    },
    {
      files: ['*.json', '*.json5'],
      rules: {
        ...(pluginJsonc.configs['recommended-with-jsonc'].rules as Rules),
        // refs: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
        'jsonc/array-bracket-newline': [
          'error',
          {
            multiline: true,
            minItems: null,
          },
        ],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2, {}],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
          },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
      },
    },
    {
      files: ['package.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'type',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'engines',
              'homepage',
              'repository',
              'bugs',
              'funding',
              'author',
              'sideEffects',
              'files',
              'bin',
              'exports',
              'main',
              'module',
              'browser',
              'typings',
              'types',
              'typeVersions',
              'unpkg',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'eslintConfig',
              'config',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            // According to webpack, default condition should be last item
            order: ['require', 'import', 'types', 'node', 'browser', 'default'],
          },
        ],
      },
    },
  ]
  return config
}
