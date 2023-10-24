import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginSSRFriendly from 'eslint-plugin-ssr-friendly'
import { mapValues } from 'lodash-es'

import { GLOB_JSX, GLOB_TSX } from '../globs'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const react = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ...pluginReact.configs.recommended.parserOptions,
          ...pluginReact.configs['jsx-runtime'].parserOptions,
        },
      },
      settings: {
        react: {
          // 'detect' will throw warn on monorepo
          version: '18.0',
        },
      },
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
        'ssr-friendly': pluginSSRFriendly,
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        ...(pluginReact.configs.recommended.rules as Rules),
        ...(pluginReact.configs['jsx-runtime'].rules as Rules),
        ...(pluginReactHooks.configs.recommended.rules as Rules),
        ...(pluginSSRFriendly.configs.recommended.rules as Rules),
        'jsx-quotes': ['error', 'prefer-double'],
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-unknown-property': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        // Enforce new line when declare jsx element e.g. const element = (\newline<div
        'react/jsx-wrap-multilines': [
          'warn',
          {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            return: 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
          },
        ],
        'react/jsx-closing-tag-location': 'error',
        // Enforce disallow </ div>
        'react/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'always', afterOpening: 'never', beforeClosing: 'allow' }],
        'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
        // indentLogicalExpressions will fix && element
        'react/jsx-indent': ['warn', 2, { indentLogicalExpressions: true }],
        'react/jsx-indent-props': ['warn', 2],
        // < and > should be on the same line(y-axis) if jsx is multiline
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        // Enforce new line when multiline props jsx
        'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
        'react-refresh/only-export-components': 'warn',
      },
    },
    {
      files: ['**/*.test.{js,jsx,ts,tsx,cjs,mjs}', '**/*.spec.{js,jsx,ts,tsx,mjs,cjs}'],
      rules: {
        ...mapValues(pluginSSRFriendly.configs.recommended.rules as Rules, () => 'off'),
        'ssr-friendly/only-export-components': 'off',
      },
    },
  ]
  return config
}
