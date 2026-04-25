import { describe, it, expect } from 'vitest'
import { imports } from '../../packages/default/src/configs/imports'
import { lintCode } from '../helpers'

const configs = imports()

describe('imports config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain import rules', () => {
    const rules = configs[0].rules
    expect(rules['import/first']).toBe('error')
    expect(rules['import/newline-after-import']).toBe('error')
  })
})