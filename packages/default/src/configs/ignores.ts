import ignoreGlobs from '@aiou/eslint-ignore'

import type { FlatESLintConfigItem } from 'eslint-define-config'

export const ignores = () => {
  const config: FlatESLintConfigItem[] = [
    {
      ignores: ignoreGlobs,
    },
  ]
  return config
}
