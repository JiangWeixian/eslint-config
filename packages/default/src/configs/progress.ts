import pluginProgress from '@aiou/eslint-plugin-progress'

import type { FlatESLintConfigItem } from 'eslint-define-config'

export const progress = () => {
  const config: FlatESLintConfigItem[] = [
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
