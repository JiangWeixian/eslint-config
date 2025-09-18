import pluginReact from '@eslint-react/eslint-plugin'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

import {
  GLOB_JSX,
  GLOB_PAGES_COMPONENTS_DIRS,
  GLOB_PAGES_DIRS,
  GLOB_SCRIPT_EXT,
  GLOB_TEST_DIRS,
  GLOB_TEST_SCRIPT,
  GLOB_TSX,
} from '../globs'
import { renameRules } from '../utils'

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
        ...(renameRules(plugins['@eslint-react'].configs['recommended-typescript'].rules as any, { 'react-x': 'react' })),
        ...(renameRules(plugins['@eslint-react/dom'].configs.recommended.rules as any, { '@eslint-react': 'react-dom' })),
        ...(renameRules(pluginReactHooks.configs.recommended.rules as any, { '@eslint-react': 'react-hooks' })),
        ...(renameRules(plugins['@eslint-react/hooks-extra'].configs.recommended.rules as any, { '@eslint-react': 'react-hooks-extra' })),
        ...(renameRules(plugins['@eslint-react/naming-convention'].configs.recommended.rules as any, { '@eslint-react': 'react-naming-convention' })),
        ...(renameRules(plugins['@eslint-react/web-api'].configs.recommended.rules as any, { '@eslint-react': 'react-web-api' })),
        'react/no-prop-types': 'error',
        'react-dom/no-unknown-property': 'off',
        'react/avoid-shorthand-boolean': ['error'],
        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
        'react-refresh/only-export-components': 'warn',
      },
    },
    {
      files: ['src/components/**/*.{ts,tsx}'],
      rules: {
        'react-naming-convention/filename': ['warn', { rule: 'PascalCase' }],
      },
    },
    {
      files: ['src/hooks/**/use*.{ts,tsx}'],
      rules: {
        'react-naming-convention/filename': ['warn', { rule: 'kebab-case' }],
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
      rules: {
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
          {
            selector: 'TSEnumDeclaration',
            message: 'Don\'t declare enums',
          },
          {
            selector: 'MemberExpression[object.name=\'window\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'window\'])',
            message: 'Use \'typeof window !== "undefined" && window.xxx\' for safe DOM access',
          },
          {
            selector: 'Identifier[name=\'window\']:not(UnaryExpression[operator=\'typeof\'] > Identifier)',
            message: 'Direct window access not allowed. Use \'typeof window !== "undefined"\' check first',
          },

          // Document 对象
          {
            selector: 'MemberExpression[object.name=\'document\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'document\'])',
            message: 'Use \'typeof document !== "undefined" && document.xxx\' for safe DOM access',
          },
          {
            selector: 'Identifier[name=\'document\']:not(UnaryExpression[operator=\'typeof\'] > Identifier)',
            message: 'Direct document access not allowed. Use \'typeof document !== "undefined"\' check first',
          },

          // Navigator 对象
          {
            selector: 'MemberExpression[object.name=\'navigator\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'navigator\'])',
            message: 'Use \'typeof navigator !== "undefined" && navigator.xxx\' for safe DOM access',
          },

          // Location 对象
          {
            selector: 'MemberExpression[object.name=\'location\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'location\'])',
            message: 'Use \'typeof location !== "undefined" && location.xxx\' for safe DOM access',
          },

          // History 对象
          {
            selector: 'MemberExpression[object.name=\'history\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'history\'])',
            message: 'Use \'typeof history !== "undefined" && history.xxx\' for safe DOM access',
          },

          // Storage 对象们
          {
            selector: 'MemberExpression[object.name=\'localStorage\']:not(LogicalExpression[right=MemberExpression] > MemberExpression[object.name=\'localStorage\'])',
            message: 'Use \'typeof localStorage !== "undefined" && localStorage.xxx\' for safe DOM access',
          },
          // Fork from enum
          {
            selector: 'TSEnumDeclaration',
            message: 'Don\'t declare enums',
          },
        ],
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
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
          {
            selector: 'TSEnumDeclaration',
            message: 'Don\'t declare enums',
          },
        ],
      },
    },
  ]
  return config
}
