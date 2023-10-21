import pluginNext from '@next/eslint-plugin-next'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const next = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: ['*.tsx', '*.jsx'],
      plugins: {
        '@next/next': pluginNext,
      },
      rules: {
        // Enable rules for next project
        ...pluginNext.configs.recommended.rules as Rules,
      },
    },
  ]
  return config
}
