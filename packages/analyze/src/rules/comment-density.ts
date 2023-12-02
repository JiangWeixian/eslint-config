/**
 * refs: https://github.com/TristanFAURE/tslint/blob/4126PR/src/rules/commentDensityRule.ts
 */

import { ESLintUtils } from '@typescript-eslint/experimental-utils'

import { store } from '../store'

let totalCommentDensity = 0

const rule = ESLintUtils.RuleCreator(name => name)({
  name: 'comment-density',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Allows a minimum percentage of comment in the file',
      requiresTypeChecking: false,
      recommended: 'warn',
    },
    messages: {
      density:
        'This file has {{percentage}}% of comments, '
        + 'which is lower than the minimum of {{minPercent}}% allowed, '
        + '{{missingLines}} {{lineString}} of comments missing',
    },
    schema: [
      {
        type: 'object',
        properties: {
          min: {
            type: 'number',
            default: 10,
          },
        },
      },
    ],
  },
  defaultOptions: [{ min: 10 }],
  create(context, [options]) {
    function apply() {
      const sourceFile = context.getSourceCode()
      const minPercent = options.min
      const lineCount = sourceFile.getLines().length
      let numberOfLinesOfComments = 0
      const len = sourceFile.text.length
      const comments = sourceFile.getAllComments()
      if (len > 0) {
        comments.forEach((comment) => {
          numberOfLinesOfComments = comment.loc.end.line - comment.loc.start.line + 1
        })
      }
      const percentage
        = lineCount === 0 ? 0 : Math.round((numberOfLinesOfComments / lineCount) * 100)
      totalCommentDensity += percentage
      store.files += 1
      store.commentDensity = totalCommentDensity / store.files
      if (len !== 0 && percentage < minPercent) {
        const missingLines = Math.ceil((minPercent * lineCount) / 100) - numberOfLinesOfComments
        context.report({
          messageId: 'density',
          data: {
            percentage,
            minPercent,
            missingLines,
            lineString: missingLines > 1 ? 'lines' : 'line',
          },
          loc: {
            line: 1,
            column: 1,
          },
        })
      }
    }

    return {
      Program(): void {
        apply()
      },
    }
  },
})

export default rule
