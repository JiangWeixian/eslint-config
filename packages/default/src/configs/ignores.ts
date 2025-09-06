import ignoreGlobs from '@aiou/eslint-ignore'

import type { Config } from '../type'

export const ignores = () => {
  const config: Config[] = [
    {
      ignores: ignoreGlobs,
    },
  ]
  return config
}
