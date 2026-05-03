import { aiou } from '@aiou/eslint-config'

export default await aiou({
  ssr: false,
  regexp: true,
}, [
  {
    ignores: ['**/typegen.ts', 'packages/ignore/**', 'docs/superpowers/**'],
  },
])
