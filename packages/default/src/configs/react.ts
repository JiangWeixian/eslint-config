import pluginReact from '@eslint-react/eslint-plugin'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'
import pluginSSRFriendly from 'eslint-plugin-ssr-friendly'
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapValues } from 'lodash-es'

import {
  GLOB_JSX,
  GLOB_PAGES_COMPONENTS_DIRS,
  GLOB_PAGES_DIRS,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'

import type { Config } from '../type'

export const react = () => {
  const plugins = pluginReact.configs.all.plugins
  const config: Config[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      settings: {
        react: {
          // 'detect' will throw warn on monorepo
          version: '18.0',
        },
      },
      plugins: {
        react: plugins['@eslint-react'],
        'react-dom': plugins['@eslint-react/dom'],
        'react-hooks': pluginReactHooks,
        'react-hooks-extra': plugins['@eslint-react/hooks-extra'],
        'react-naming-convention': plugins['@eslint-react/naming-convention'],
        'react-refresh': pluginReactRefresh,
        'react-web-api': plugins['@eslint-react/web-api'],
      },
      rules: {
        ...(pluginReact.configs['recommended-typescript'].rules as any),
        'react/no-prop-types': 'error',
        'dom/no-unknown-property': 'off',
        'react/avoid-shorthand-boolean': ['error', 'always'],
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
        // With next.js pages will export getStaticProps funcs
        // There are some bad cases for not all files are route files
        // RECOMMEND: pages/routes should only contain page files
        GLOB_PAGES_DIRS,
      ],
      ignores: [
        GLOB_PAGES_COMPONENTS_DIRS,
      ],
      rules: {
        'react-refresh/only-export-components': 'off',
      },
    },
  ]
  return config
}

export const ssrReact = () => {
  const config: Config[] = [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
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
        ...(pluginSSRFriendly.configs.recommended.rules as any),
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
        ...mapValues(pluginSSRFriendly.configs.recommended.rules as any, () => 'off'),
      },
    },
  ]
  return config
}
