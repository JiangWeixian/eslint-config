import { ESLintUtils } from '@typescript-eslint/experimental-utils'
import rule from '../src/rules/comment-density'

const RuleTester = ESLintUtils.RuleTester

const tester = new RuleTester({
  parser: '@typescript-eslint/parser',
})

tester.run('comment-density', rule, {
  valid: [
    {
      code: `
if (false) {
  // TODO: highlight
  console.log('hello');
}
      `,
    },
  ],
  invalid: [
    {
      code: `
if (false) {
  // TODO: highlight
  console.log('hello');
}
      `,
      options: [{ min: 20 }],
      errors: [
        {
          data: {
            density: 0,
          },
          messageId: 'density',
          line: 1,
          column: 2,
        },
      ],
    },
  ],
})
