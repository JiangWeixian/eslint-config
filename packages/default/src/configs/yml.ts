import pluginYaml from 'eslint-plugin-yml'
import yamlParser from 'yaml-eslint-parser'

import { GLOB_YAML } from '../globs'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const yml = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: [GLOB_YAML],
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
