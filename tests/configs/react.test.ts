import {
  describe,
  expect,
  it,
} from 'vitest'

import { react } from '../../packages/default/src/configs/react'

const configs = react()

describe('react config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain react plugin', () => {
    const plugins = configs[0].plugins
    expect(plugins).toBeDefined()
    expect(plugins.react).toBeDefined()
  })
})
