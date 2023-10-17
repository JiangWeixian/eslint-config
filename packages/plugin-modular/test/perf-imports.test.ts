/* eslint-disable @typescript-eslint/quotes */
import { RuleTester } from '@typescript-eslint/utils/ts-eslint'
import { describe, it } from 'vitest'

import rule from '../src/rules/prefer-imports'

const options = [{
  allRelativeImports: true,
  containSrc: true,
  importFromSrc: true,
}]

const tester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
})

describe('prefer-imports', () => {
  it('prefer-imports', () => {
    tester.run('prefer-imports', rule, {
      valid: [
        {
          code: `import { foo } from "./foo"`,
        },
        {
          code: `import path from "path"`,
        },
      ],
      invalid: [
        {
          code: `import { foo } from "../"`,
          options,
          errors: [
            {
              data: {
                imported: '../',
              },
              messageId: 'all-relative-imports',
              line: 1,
              column: 21,
            },
          ],
        },
        {
          code: `import { foo } from ".."`,
          options,
          errors: [
            {
              data: {
                imported: '..',
              },
              messageId: 'all-relative-imports',
            },
          ],
        },
        {
          code: `import { foo } from "."`,
          options,
          errors: [
            {
              data: {
                imported: '.',
              },
              messageId: 'all-relative-imports',
            },
          ],
        },
        {
          code: `import { foo } from "src"`,
          options: [{
            allRelativeImports: true,
            containSrc: false,
            importFromSrc: true,
          }],
          errors: [
            {
              data: {
                imported: 'src',
              },
              messageId: 'import-from-src',
            },
          ],
        },
        {
          code: `import { foo } from "../src/foo"`,
          options,
          errors: [
            {
              data: {
                imported: '../src/foo',
              },
              messageId: 'contain-source-dir',
            },
          ],
        },
      ],
    })
  })
})
