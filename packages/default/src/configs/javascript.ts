// eslint-disable-next-line import/no-extraneous-dependencies
import pluginStandard from 'eslint-config-standard'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginRegexp from 'eslint-plugin-regexp'
import globals from 'globals'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const javascript = () => {
  const config: FlatESLintConfigItem[] = [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
          // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      settings: {
        // This will do the trick
        'import/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import/resolver': {
          node: true,
        },
      },
      plugins: {
        n: pluginN,
        promise: pluginPromise,
        regexp: pluginRegexp,
      },
      rules: {
        ...(pluginStandard.rules as Rules),
        ...(pluginRegexp.configs.recommended.rules as Rules),
        curly: ['error', 'all'],
        'no-unused-vars': 'warn',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-constant-condition': 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-cond-assign': ['error', 'always'],
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'no-return-await': 'off',

        // es6
        'no-var': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
          },
        ],
        'prefer-arrow-callback': [
          'error',
          {
            allowNamedFunctions: false,
            allowUnboundThis: true,
          },
        ],
        'object-shorthand': [
          'error',
          'always',
          {
            ignoreConstructors: false,
            avoidQuotes: true,
          },
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

        // best-practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'off',
        complexity: ['off', 11],
        eqeqeq: ['error', 'allow-null'],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
      },
    },
  ]
  return config
}
