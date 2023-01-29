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
  },
}
