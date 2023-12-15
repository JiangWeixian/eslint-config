import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginSSRFriendly from 'eslint-plugin-ssr-friendly'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapValues } from 'lodash-es'

import {
  GLOB_JSX,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'

import type { FlatESLintConfig, Rules } from 'eslint-define-config'

export const react = () => {
  const config: FlatESLintConfig[] = [
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
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        ...(pluginReact.configs.recommended.rules as Rules),
        ...(pluginReact.configs['jsx-runtime'].rules as Rules),
        ...(pluginReactHooks.configs.recommended.rules as Rules),
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'react/no-unknown-property': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
        'react-refresh/only-export-components': 'warn',
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        `**/*{-entry,entry.}*.${GLOB_SCRIPT_EXT}`,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
      ],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ]
  return config
}

export const ssrReact = () => {
  const config: FlatESLintConfig[] = [
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
        'ssr-friendly': pluginSSRFriendly,
      },
      rules: {
        ...(pluginSSRFriendly.configs.recommended.rules as Rules),
      },
    },
    {
      files: [
        `**/*config*.${GLOB_SCRIPT_EXT}`,
        // Client entry files not need to be SSR friendly
        `**/*{client-entry,entry.client}*.${GLOB_SCRIPT_EXT}`,
        GLOB_TEST_SCRIPT,
        GLOB_TEST_DIRS,
      ],
      rules: {
        ...mapValues(pluginSSRFriendly.configs.recommended.rules as Rules, () => 'off'),
      },
    },
  ]
  return config
}
