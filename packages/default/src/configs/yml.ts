import pluginYml from 'eslint-plugin-yml'

import { GLOB_WORKFLOW_YAML, GLOB_YAML } from '../globs'

import type { Config } from '../type'

export const yml = () => {
  const config: Config[] = [
    ...pluginYml.configs.standard as Config[],
    {
      files: [GLOB_YAML],
      rules: {
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: [GLOB_WORKFLOW_YAML],
      rules: {
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ]
  return config
}
