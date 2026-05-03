import {
  describe,
  expect,
  it,
} from 'vitest'

import { typescript } from '../../packages/default/src/configs/typescript'

const configs = typescript()

describe('typescript config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain @typescript-eslint rules', () => {
    const rules = configs[0].rules
    expect(rules).toBeDefined()
    expect(rules['@typescript-eslint/no-require-imports']).toBe('error')
    expect(rules['@typescript-eslint/consistent-type-imports']).toBeDefined()
  })
})
