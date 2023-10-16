/* eslint-disable @typescript-eslint/quotes */
import path from 'node:path'

import {
  describe,
  expect,
  it,
} from 'vitest'

import { resolvePackageJson, resolvePathSync } from '../src/utils/path'

// import rule from '../src/rules/modularize-imports'

// const options = [{
//   allRelativeImports: true,
//   containSrc: true,
//   importFromSrc: true,
// }]

// const tester = new RuleTester({
//   parser: require.resolve('@typescript-eslint/parser'),
// })

// describe('modularize-imports', () => {
//   it('modularize-imports', () => {
//     tester.run('modularize-imports', rule, {
//       valid: [
//         {
//           code: `import path from "path"`,
//         },
//       ],
//       invalid: [
//         {
//           code: `import { foo } from "module-name"`,
//           options,
//           errors: [
//             {
//               data: {
//                 imported: '../',
//               },
//               messageId: 'all-relative-imports',
//               line: 1,
//               column: 21,
//             },
//           ],
//         },
//       ],
//     })
//   })
// })

describe('utils', () => {
  it('resolve relative path', () => {
    const cwd = path.resolve(expect.getState().testPath!, '../..')
    const filepath = path.join(cwd, 'src/rules/modularize-imports.ts')
    expect(resolvePathSync('../rules', filepath)).toBe(path.join(cwd, 'src/rules/index.ts'))
  })
  it('resolve eslint package.json', () => {
    expect(resolvePackageJson('eslint')).toBe(require.resolve('eslint/package.json'))
    expect(resolvePackageJson('mlly')).toBe(require.resolve('mlly').replace('dist/index.cjs', 'package.json'))
  })
})
