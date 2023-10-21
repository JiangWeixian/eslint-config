import pluginTailwindcss from 'eslint-plugin-tailwindcss'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const tailwindcss = () => {
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
