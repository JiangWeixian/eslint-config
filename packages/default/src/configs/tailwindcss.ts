import { createRequire } from 'node:module'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

const require = createRequire(import.meta.url)

export const tailwindcss = () => {
  const pluginTailwindcss = require('eslint-plugin-tailwindcss')
  const config: FlatESLintConfigItem[] = [
    {
      plugins: {
        tailwindcss: pluginTailwindcss,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...(pluginTailwindcss.configs.recommended.rules as Rules),
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
  return config
}
