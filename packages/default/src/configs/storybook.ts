import storybookPlugin from 'eslint-plugin-storybook'

import type { Config } from '../type'

export const storybook = () => {
  const config: Config[] = [
    ...(storybookPlugin.configs['flat/recommended'] as Config[]),
  ]
  return config
}
