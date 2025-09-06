import configComments from '@eslint-community/eslint-plugin-eslint-comments'

import type { Config } from '../type'

export const comments = () => {
  const config: Config[] = [
    {
      ...configComments.recommended,
    },
    {
      rules: {
        '@eslint-community/eslint-comments/disable-enable-pair': 'off',
      },
    },
  ]
  return config
}
