import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

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
        indent: 'off',
        // https://github.com/prettier/prettier-eslint/issues/226
        // JSX indent config in react
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [
            'TemplateLiteral *',
            'JSXElement',
            'JSXElement > *',
            'JSXAttribute',
            'JSXIdentifier',
            'JSXNamespacedName',
            'JSXMemberExpression',
            'JSXSpreadAttribute',
            'JSXExpressionContainer',
            'JSXOpeningElement',
            'JSXClosingElement',
            'JSXFragment',
            'JSXOpeningFragment',
            'JSXClosingFragment',
            'JSXText',
            'JSXEmptyExpression',
            'JSXSpreadChild',
            'TSTypeParameterInstantiation',
            'FunctionExpression > .params[decorators.length > 0]',
            'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
            'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
          ],
          offsetTernaryExpressions: true,
        }],
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false },
        ],
        // Limit `interface` define object types, users could override with *.d.ts declare
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/prefer-ts-expect-error': 'warn',

        // Overrides JS
        // no-spaced-func alert -- https://eslint.org/docs/latest/rules/no-spaced-func
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
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
        'brace-style': 'off',
        // https://eslint.org/docs/latest/rules/brace-style#1tbs
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'never'],
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'space-before-blocks': 'off',
        '@typescript-eslint/space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],

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