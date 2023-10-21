import pluginComments from 'eslint-plugin-eslint-comments'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const comments = () => {
  const config: FlatESLintConfigItem[] = [
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
