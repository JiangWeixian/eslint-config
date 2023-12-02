import pluginProgress from '@aiou/eslint-plugin-progress'

import type { FlatESLintConfig } from 'eslint-define-config'

export const progress = () => {
  const config: FlatESLintConfig[] = [
    {
      plugins: {
        progress: pluginProgress,
      },
      rules: {
        'progress/activate': 1,
      },
    },
  ]
  return config
}
