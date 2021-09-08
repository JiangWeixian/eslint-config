/**
 * refs: https://github.com/TristanFAURE/tslint/blob/4126PR/src/rules/commentDensityRule.ts
 */

import { ESLintUtils } from '@typescript-eslint/experimental-utils'
import { store } from '../store'

const rule = ESLintUtils.RuleCreator((name) => name)({
  name: 'comment-density',
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Allows a minimum percentage of comment in the file',
      category: 'Stylistic Issues',
      requiresTypeChecking: false,
      recommended: 'warn',
    },
    messages: {
      density: `
        Density of comment lines = Comment lines / (Lines of code + Comment lines) * 100
        With such a formula:
        50% means that the number of lines of code equals the number of comment lines
        100% means that the file only contains comment lines
      `,
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
    function FAILURE_STRING(lineCount: number, percentLimit: number, missingLines: number) {
      const lineString = missingLines > 1 ? 'lines' : 'line'
      return (
        `This file has ${lineCount}% of comments, ` +
        `which is lower than the minimum of ${percentLimit}% allowed, ` +
        `${missingLines} ${lineString} of comments missing`
      )
    }

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
      const percentage =
        lineCount === 0 ? 0 : Math.round((numberOfLinesOfComments / lineCount) * 100)
      store.commentDensity += percentage
      if (len !== 0 && percentage < minPercent) {
        const missingLines = Math.ceil((minPercent * lineCount) / 100) - numberOfLinesOfComments
        context.report({
          messageId: 'density',
          data: {
            density: FAILURE_STRING(percentage, minPercent, missingLines),
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
