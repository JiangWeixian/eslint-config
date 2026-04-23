import { describe, it, expect } from 'vitest'
import { yml } from '../../packages/default/src/configs/yml'

const configs = yml()

describe('yml config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })
})