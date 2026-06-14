import { createRequire } from 'node:module'

import type { Config } from '../type'

const require = createRequire(import.meta.url)

export const tailwindcss = (): Config[] => {
  const pluginTailwindcss = require('eslint-plugin-tailwindcss')
  const recommended = pluginTailwindcss.configs.recommended
  const configs = Array.isArray(recommended) ? recommended : [recommended]
  const rules = {
    ...(configs.find((c: any) => c.rules)?.rules as any),
    'tailwindcss/no-custom-classname': 'off',
  }
  const config: Config[] = [
    ...configs,
    {
      plugins: { tailwindcss: pluginTailwindcss.default ?? pluginTailwindcss },
      rules,
    },
  ]
  return config
}
