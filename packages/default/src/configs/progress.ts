import pluginProgress from '@aiou/eslint-plugin-progress'

import type { Config } from '../type'

export const progress = () => {
  const config: Config[] = [
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
