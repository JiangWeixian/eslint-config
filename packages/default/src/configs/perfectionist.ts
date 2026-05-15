import pluginPerfectionist from 'eslint-plugin-perfectionist'

import type { Config } from '../type'

export const perfectionist = (): Config[] => {
  return [
    {
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-imports': [
          'warn',
          {
            type: 'natural',
            order: 'asc',
            newlinesBetween: 'ignore',
            groups: [
              'type-import',
              ['value-builtin', 'value-external'],
              'type-internal',
              'value-internal',
              ['type-parent', 'type-sibling', 'type-index'],
              ['value-parent', 'value-sibling', 'value-index'],
              'side-effect',
              'unknown',
            ],
            customGroups: [
              {
                groupName: 'virtual-modules',
                elementNamePattern: ['^virtual:', '^virtual-'],
              },
            ],
            internalPattern: ['^~/.+', '^@/.+', '^#.+'],
          },
        ],
        'perfectionist/sort-union-types': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-intersection-types': ['error', { type: 'natural', order: 'asc' }],
        'perfectionist/sort-named-imports': ['warn', { type: 'natural', order: 'asc' }],
      },
    },
  ]
}
