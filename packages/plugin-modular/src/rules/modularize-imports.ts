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
    schema: [
      {
        type: 'object',
        properties: {
          packageEntries: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
      },
    ],
    messages: {
      modularize: 'Import path `{{imported}}` should rewrite into {{modularImport}}',
    },
  },
  defaultOptions: [
    {
      packageEntries: [],
    },
  ],
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
    const { packageEntries }: { packageEntries: PackageEntries } = context.options[0] || { packageEntries: [] }
    const isRelativeImport = (seps: string[]) => {
      return seps.some(e => e === '..' || e === '.')
    }
    const resolvedPackagesEntries: string[][] = []
    packageEntries.forEach((entry) => {
      if (isAbsolute(entry)) {
        resolvedPackagesEntries.push([entry, entry])
      } else {
        resolvedPackagesEntries.push([entry, resolvePathSync(entry, context.getCwd())])
      }
    })
    return {
      ImportDeclaration(node) {
        const parts = node.source.value.split(sep).filter(e => !!e)
        if (isRelativeImport(parts)) {
          const filepath = resolvePathSync(node.source.value, context.getFilename())
          const suggestion = resolvedPackagesEntries.find(entry => entry[1] === filepath)
          suggestion && context.report({
            messageId: 'modularize',
            node: node.source,
            data: {
              imported: node.source.value,
              modularImport: suggestion[0],
            },
          })
        }
      },
    }
  },
})

export default rule
