import pluginToml from 'eslint-plugin-toml'

import type { Config } from '../type'

export const toml = () => {
  const config: Config[] = [
    ...pluginToml.configs['flat/recommended'],
    {
      rules: {
        'toml/comma-style': 'error',
        'toml/keys-order': 'error',
        'toml/no-space-dots': 'error',
        'toml/no-unreadable-number-separator': 'error',
        'toml/precision-of-fractional-seconds': 'error',
        'toml/precision-of-integer': 'error',
        'toml/tables-order': 'error',
        'toml/array-bracket-newline': 'error',
        // stylistic
        'toml/array-bracket-spacing': 'error',
        'toml/array-element-newline': 'error',
        'toml/indent': ['error', 4],
        'toml/inline-table-curly-spacing': 'error',
        'toml/key-spacing': 'error',
        'toml/padding-line-between-pairs': 'error',
        'toml/padding-line-between-tables': 'error',
        'toml/quoted-keys': 'error',
        'toml/spaced-comment': 'error',
        'toml/table-bracket-spacing': 'error',
      },
    },
  ]
  return config
}
