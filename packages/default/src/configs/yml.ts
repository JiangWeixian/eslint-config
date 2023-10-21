import pluginYaml from 'eslint-plugin-yml'
import yamlParser from 'yaml-eslint-parser'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const yml = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: ['*.yaml', '*.yml'],
      languageOptions: {
        parser: yamlParser,
      },
      plugins: {
        yml: pluginYaml,
      },
      rules: {
        ...(pluginYaml.configs.standard.rules as Rules),
        // yml
        'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
  ]
  return config
}
