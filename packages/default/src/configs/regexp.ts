// eslint-disable-next-line import/no-extraneous-dependencies
import pluginRegexp from 'eslint-plugin-regexp'
import globals from 'globals'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const regexp = () => {
  const config: FlatESLintConfig[] = [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
          // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
        sourceType: 'module',
      },
      settings: {
        // This will do the trick
        'import-x/parsers': {
          espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import-x/resolver': {
          node: true,
        },
      },
      plugins: {
        regexp: pluginRegexp,
      },
      rules: {
        ...(pluginRegexp.configs.recommended.rules as Rules),
      },
    },
  ]
  return config
}
