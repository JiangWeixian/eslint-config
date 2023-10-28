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
        // Common
        semi: ['error', 'never'],
        // Always need {}
        curly: ['error', 'all'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        'no-unused-vars': 'warn',
        'no-param-reassign': 'off',
        'array-bracket-spacing': ['error', 'never'],
        // https://eslint.org/docs/latest/rules/brace-style#1tbs
        'brace-style': ['error', '1tbs'],
        'block-spacing': ['error', 'always'],
        camelcase: 'off',
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-constant-condition': 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-cond-assign': ['error', 'always'],
        'func-call-spacing': ['off', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        // https://github.com/prettier/prettier-eslint/issues/226
        indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
        ],
        'object-curly-spacing': ['error', 'always'],
        'no-return-await': 'off',
        'space-before-function-paren': ['error', 'never'],

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
        'template-curly-spacing': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'generator-star-spacing': 'off',

        // best-practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'off',
        complexity: ['off', 11],
        eqeqeq: ['error', 'allow-null'],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
        'operator-linebreak': ['error', 'before'],
      },
    },
  ]
  return config
}
