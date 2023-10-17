import modularizeImports from './rules/modularize-imports'
import preferImports from './rules/prefer-imports'

const config = {
  rules: {
    'prefer-imports': preferImports,
    'modularize-imports': modularizeImports,
  },
}

export default config
