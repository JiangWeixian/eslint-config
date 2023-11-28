import ignoreGlobs from '@aiou/eslint-ignore'

import type { FlatESLintConfig } from 'eslint-define-config'

export const ignores = () => {
  const config: FlatESLintConfig[] = [
    {
      ignores: ignoreGlobs,
    },
  ]
  return config
}
