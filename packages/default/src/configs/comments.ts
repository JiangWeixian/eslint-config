import pluginComments from 'eslint-plugin-eslint-comments'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const comments = () => {
  const config: FlatESLintConfig[] = [
    {
      plugins: {
        'eslint-comments': pluginComments,
      },
      rules: {
        ...(pluginComments.configs.recommended.rules as Rules),
        'eslint-comments/disable-enable-pair': 'off',
      },
    },
  ]
  return config
}
