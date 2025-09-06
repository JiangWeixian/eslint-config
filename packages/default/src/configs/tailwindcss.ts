import { createRequire } from 'node:module'

import type { Config } from '../type'

const require = createRequire(import.meta.url)

export const tailwindcss = () => {
  const pluginTailwindcss = require('eslint-plugin-tailwindcss')
  const config: Config[] = [
    ...pluginTailwindcss.configs['flat/recommended'],
    {
      rules: {
        ...(pluginTailwindcss.configs.recommended.rules as any),
        'tailwindcss/no-custom-classname': 'off',
      },
    },
  ]
  return config
}
