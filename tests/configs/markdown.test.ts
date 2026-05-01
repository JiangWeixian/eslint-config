import {
  describe,
  expect,
  it,
} from 'vitest'

import { markdown } from '../../packages/default/src/configs/markdown'

const configs = markdown()

describe('markdown config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })
})
