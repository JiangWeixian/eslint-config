const { isPackageExists } = require('local-pkg')
const compact = require('lodash.compact')

const isNext = isPackageExists('next')

module.exports = {
  plugins: ['ssr-friendly', 'react-refresh'],
  extends: compact([
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    isNext ? 'plugin:@next/next/recommended' : undefined,
    '@aiou/eslint-config-ts',
    'plugin:ssr-friendly/recommended',
  ]),
  settings: {
    react: {
      // 'detect' will throw warn on monorepo
      version: '18.0',
    },
  },
  overrides: [
    {
      files: ['**/*.test.{js,jsx,ts,tsx,cjs,mjs}', '**/*.spec.{js,jsx,ts,tsx,mjs,cjs}'],
      rules: {
        'react-refresh/*': 'off',
        'ssr-friendly/*': 'off',
      },
    },
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    // Enforce new line when declare jsx element e.g. const element = (\newline<div
    'react/jsx-wrap-multilines': [
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
    'react/jsx-closing-tag-location': 'error',
    // Enforce disallow </ div>
    'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'allow' }],
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    // indentLogicalExpressions will fix && element
    'react/jsx-indent': ['warn', 2, { indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['warn', 2],
    // < and > should be on the same line(y-axis) if jsx is multiline
    'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    // Enforce new line when multiline props jsx
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
    'react-refresh/only-export-components': 'warn',
  },
}
