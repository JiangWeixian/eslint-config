import { configs } from 'eslint-plugin-regexp'

import type { Config } from '../type'

export const regexp = () => {
  const config: Config[] = [
    {
      ...(configs.recommended as Config),
    },
  ]
  return config
}
