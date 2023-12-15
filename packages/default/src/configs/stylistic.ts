import pluginStylistic from '@stylistic/eslint-plugin'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs'

import type { FlatESLintConfig } from 'eslint-define-config'

export const stylistic = () => {
  const config = pluginStylistic.configs.customize({
    flat: true,
    indent: 2,
    jsx: true,
    quotes: 'single',
    semi: false,
  })
  // Off original eslint stylistic rules
  const off = {}
  Object.keys(config.rules).forEach((key) => {
    off[key.replace('@stylistic/', '')] = 'off'
  })
  const configs: FlatESLintConfig[] = [
    {
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      plugins: {
        ...config.plugins,
      },
      rules: {
        ...off,
        ...config.rules,
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/array-bracket-spacing': ['error', 'never'],
        // https://eslint.org/docs/latest/rules/brace-style#1tbs
        '@stylistic/brace-style': ['error', '1tbs'],
        '@stylistic/block-spacing': ['error', 'always'],
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],
        '@stylistic/comma-style': ['error', 'last'],
        'comma-dangle': 'off',
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
        '@stylistic/indent': ['error', 2, {
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
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/template-curly-spacing': 'error',
        '@stylistic/generator-star-spacing': 'off',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/operator-linebreak': ['error', 'before'],
        '@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@stylistic/type-annotation-spacing': ['error', {}],
        // no-spaced-func alert -- https://eslint.org/docs/latest/rules/no-spaced-func
        '@stylistic/func-call-spacing': ['error', 'never'],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/space-before-blocks': ['error', 'always'],
        '@stylistic/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        '@stylistic/space-infix-ops': 'error',
        '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
        '@stylistic/no-extra-parens': ['error', 'functions'],
        '@stylistic/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],
        '@stylistic/jsx-quotes': ['error', 'prefer-double'],
        // React
        // Enforce new line when declare jsx element e.g. const element = (\newline<div
        '@stylistic/jsx-wrap-multilines': [
          'warn',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
          },
        ],
        '@stylistic/jsx-closing-tag-location': 'error',
        // Enforce disallow </ div>
        '@stylistic/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'allow' }],
        '@stylistic/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
        // indentLogicalExpressions will fix && element
        '@stylistic/jsx-indent': ['warn', 2, { indentLogicalExpressions: true }],
        '@stylistic/jsx-indent-props': ['warn', 2],
        // < and > should be on the same line(y-axis) if jsx is multiline
        '@stylistic/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        // Enforce new line when multiline props jsx
        '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        '@stylistic/jsx-one-expression-per-line': 'off',
      },
    },
  ]
  return configs
}
