import {
  describe,
  expect,
  it,
} from 'vitest'

import { unicorn } from '../../packages/default/src/configs/unicorn'

const configs = unicorn()

describe('unicorn config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain unicorn plugin', () => {
    const plugins = configs[0].plugins
    expect(plugins).toBeDefined()
    expect(plugins.unicorn).toBeDefined()
  })
})
