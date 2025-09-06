import pluginNext from '@next/eslint-plugin-next'

import { GLOB_JSX, GLOB_TSX } from '../globs'

import type { Config } from '../type'

export const next = () => {
  const config: Config[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        '@next/next': pluginNext,
      },
      rules: {
        // Enable rules for next project
        ...pluginNext.configs.recommended.rules as any,
      },
    },
  ]
  return config
}
