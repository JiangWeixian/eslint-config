import pluginMarkdown from '@eslint/markdown'

import { GLOB_MARKDOWN, GLOB_SCRIPT_EXT } from '../globs'

import type { Config } from '../type'

export const markdown = () => {
  const config: Config[] = [
    ...pluginMarkdown.configs.processor.map((config: Config) => ({
      ...config,
    })),
    {
      // Code blocks in markdown file
      files: [`${GLOB_MARKDOWN}/*.${GLOB_SCRIPT_EXT}`],
      rules: {
        // https://eslint-react.xyz/docs/migration
        'react/no-missing-component-display-name': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',

        // Off imports
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'off',
        'import/no-anonymous-default-export': 'off',
        'react-refresh/only-export-components': 'off',
        'react/jsx-no-undef': 'off',
      },
    },
  ]
  return config
}
