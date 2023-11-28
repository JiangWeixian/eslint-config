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
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-unknown-property': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
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
