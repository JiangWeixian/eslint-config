import { describe, it, expect } from 'vitest'
import { comments } from '../../packages/default/src/configs/comments'

const configs = comments()

describe('comments config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain eslint-comments plugin', () => {
    const plugins = configs[0].plugins
    expect(plugins).toBeDefined()
    expect(plugins['eslint-comments']).toBeDefined()
  })
})