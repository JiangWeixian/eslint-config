import pluginComments from '@eslint-community/eslint-plugin-eslint-comments'

import type { Config } from '../type'

export const comments = () => {
  const config: Config[] = [
    {
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-aggregating-enable': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-unused-enable': 'error',
      },
    },
  ]
  return config
}
