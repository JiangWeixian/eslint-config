import pluginNext from '@next/eslint-plugin-next'

import { GLOB_JSX, GLOB_TSX } from '../globs'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const next = () => {
  const config: FlatESLintConfig[] = [
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
