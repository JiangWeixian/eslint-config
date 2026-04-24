import { aiou } from '@aiou/eslint-config'

export default aiou({
  ssr: false,
  regexp: true,
}, [
  {
    ignores: ['**/typegen.ts'],
  },
])
