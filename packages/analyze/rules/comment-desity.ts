/**
 * @license
 * Copyright 2018 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ESLintUtils } from '@typescript-eslint/experimental-utils'

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
    schema: [],
  },
  defaultOptions: [
    [true, 0],
    [true, 20],
  ],
  create(context) {
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
      const minPercent = this.ruleArguments[0] as number
      const lineCount = sourceFile.getLines().length
      let numberOfLinesOfComments = 0
      const len = sourceFile.text.length
      const comments = sourceFile.getAllComments()
      if (len > 0) {
        comments.forEach((comment) => {
          numberOfLinesOfComments = comment.loc.end.line - comment.loc.start.line
        })
      }
      const percentage =
        lineCount === 0 ? 0 : Math.round((numberOfLinesOfComments / lineCount) * 100)
      if (len === 0 || percentage >= minPercent) {
      } else {
        const missingLines = Math.ceil((minPercent * lineCount) / 100) - numberOfLinesOfComments
        context.report({
          messageId: 'density',
          data: {
            density: FAILURE_STRING(percentage, minPercent, missingLines),
          },
          loc: {
            line: lineCount - 1,
            column: 0,
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
