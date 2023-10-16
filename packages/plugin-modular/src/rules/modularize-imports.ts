import { isAbsolute, sep } from 'node:path'

import { RuleCreator } from '@typescript-eslint/utils/eslint-utils'

import { resolvePathSync } from '../utils/path'

const messageId = 'modularize-imports'

type PackageEntries = string[]

const rule = RuleCreator(name => name)({
  name: messageId,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer import from package defined exported entry',
    },
    schema: [], // no options
    messages: {
      modularize: 'Import path `{{imported}}` should rewrite into {{modularImport}}',
    },
  },
  defaultOptions: [],
  create(context) {
    /**
     * ```json
     * {
     *   "packageEntries": [
     *     "package-a/components",
     *     "<path>/components/index.ts"
     *   ]
     * }
     * ```
     */
    const packageEntries: PackageEntries = []
    const isRelativeImport = (seps: string[]) => {
      return seps.some(e => e === '..' || e === '.')
    }
    const resolvedPackagesEntries: PackageEntries = packageEntries.map((entry) => {
      return isAbsolute(entry) ? entry : resolvePathSync(entry, context.getCwd())
    })
    return {
      ImportDeclaration(node) {
        const parts = node.source.value.split(sep).filter(e => !!e)
        if (isRelativeImport(parts)) {
          const filepath = resolvePathSync(node.source.value, context.getFilename())
          const suggestion = resolvedPackagesEntries.find(entry => entry === filepath)
          suggestion && context.report({
            messageId: 'modularize',
            node: node.source,
            data: {
              imported: node.source.value,
              modularImport: suggestion,
            },
          })
        }
      },
    }
  },
})

export default rule
