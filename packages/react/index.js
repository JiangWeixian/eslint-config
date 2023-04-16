const { isPackageExists } = require('local-pkg')
const compact = require('lodash.compact')

const isNext = isPackageExists('next')

module.exports = {
  extends: compact([
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    isNext ? 'plugin:@next/next/recommended' : undefined,
    '@aiou/eslint-config-ts',
  ]),
  settings: {
    react: {
      // 'detect' will throw warn on monorepo
      version: '18.0',
    },
  },
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
        logical: 'ignore',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-closing-tag-location': 'error',
    // Enforce disallow </ div>
    'react/jsx-space-before-closing': ['error', 'always'],
    'react/jsx-max-props-per-line': ['warn', { maximum: 2 }],
    'react/jsx-indent': ['warn', 2],
  },
}
