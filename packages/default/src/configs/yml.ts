import pluginYaml from 'eslint-plugin-yml'
import yamlParser from 'yaml-eslint-parser'

import { GLOB_WORKFLOW_YAML, GLOB_YAML } from '../globs'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const yml = () => {
  const config: FlatESLintConfig[] = [
    {
      files: [GLOB_YAML],
      languageOptions: {
        parser: yamlParser,
      },
      plugins: {
        yml: pluginYaml,
      },
      rules: {
        ...(pluginYaml.configs.standard.rules as unknown as Rules),
        // yml
        'spaced-comment': 'off',
        'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
        'yml/no-empty-document': 'off',
      },
    },
    {
      files: [GLOB_WORKFLOW_YAML],
      rules: {
        /**
         * on:
         *  push:
         *  pull_request:
         *   branches: []
         */
        'yml/no-empty-mapping-value': 'off',
      },
    },
  ]
  return config
}
