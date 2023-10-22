import pluginMarkdown from 'eslint-plugin-markdown'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const markdown = () => {
  const config: FlatESLintConfigItem[] = [
    {
      // Enable the Markdown processor for all .md files.
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      plugins: {
        markdown: pluginMarkdown,
      },
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.?([cm])[jt]s?(x)'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            // Adding a "use strict" directive at the top of
            // every code block is tedious and distracting, so
            // opt into strict mode parsing without the
            // directive.
            impliedStrict: true
          }
        },
      },
      rules: {
        ...pluginMarkdown.configs.recommended.overrides[1].rules as Rules,
        'react/display-name': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
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
      },
    },
  ]
  return config
}
