import { describe, it, expect } from 'vitest'
import { stylistic } from '../../packages/default/src/configs/stylistic'
import { lintCode } from '../helpers'

const configs = stylistic()

describe('stylistic config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain @stylistic plugin', () => {
    const plugins = configs[0].plugins
    expect(plugins).toBeDefined()
    expect(plugins['@stylistic']).toBeDefined()
  })

  it('should contain stylistic rules', () => {
    const rules = configs[0].rules
    expect(rules['@stylistic/semi']).toStrictEqual(['error', 'never'])
    expect(rules['@stylistic/quotes']).toStrictEqual(['error', 'single', { avoidEscape: true }])
  })
})