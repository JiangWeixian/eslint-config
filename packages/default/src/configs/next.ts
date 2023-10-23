import pluginNext from '@next/eslint-plugin-next'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'
import { GLOB_JSX, GLOB_TSX } from '../globs'

export const next = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
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
