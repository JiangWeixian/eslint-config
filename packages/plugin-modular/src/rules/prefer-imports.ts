import { sep } from 'node:path'

import { RuleCreator } from '@typescript-eslint/utils/eslint-utils'

const messageId = 'perf-imports'

const rule = RuleCreator(name => name)({
  name: messageId,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Prefer imported path should not relative or contain src',
    },
    schema: [{
      type: 'object',
      properties: {
        allRelativeImports: {
          type: 'boolean',
          default: true,
        },
        containSrc: {
          type: 'boolean',
          default: true,
        },
        importFromSrc: {
          type: 'boolean',
          default: true,
        },
      },
    }],
    messages: {
      'all-relative-imports': 'Import path `{{imported}}` without any dir is not recommended',
      'contain-source-dir': 'Import path `{{imported}}` contain source dir `src` is not recommended',
      'import-from-src': 'Import from src is not recommmend',
    },
  },
  defaultOptions: [
    {
      allRelativeImports: true,
      containSrc: false,
      importFromSrc: false,
    },
  ],
  create(context) {
    const { allRelativeImports, containSrc, importFromSrc } = context.options[0] ?? {}
    // only contain .. or . is invalid, e.g. import { foo } from '../'
    const isRelativeImport = (seps: string[]) => {
      return seps.every(e => e === '..' || e === '.')
    }
    // contain src, e.g. import { foo } from '../src/component'
    // much strict than import-from-src
    const isContainSrc = (seps: string[]) => {
      return seps.includes('src')
    }
    // import from src entry, e.g. import { foo } from '../src'
    const isImportFromSrc = (seps: string[]) => {
      return seps[seps.length - 1] === 'src'
    }
    return {
      ImportDeclaration(node) {
        const parts = node.source.value.split(sep).filter(e => !!e)
        if (allRelativeImports && isRelativeImport(parts)) {
          context.report({
            node: node.source,
            messageId: 'all-relative-imports',
            data: {
              imported: node.source.value,
            },
          })
        }
        if (containSrc && isContainSrc(parts)) {
          context.report({
            node: node.source,
            messageId: 'contain-source-dir',
            data: {
              imported: node.source.value,
            },
          })
        }
        if (importFromSrc && isImportFromSrc(parts)) {
          context.report({
            node: node.source,
            messageId: 'import-from-src',
            data: {
              imported: node.source.value,
            },
          })
        }
      },
    }
  },
})

export default rule
