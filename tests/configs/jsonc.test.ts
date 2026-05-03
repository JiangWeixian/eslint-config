import {
  describe,
  expect,
  it,
} from 'vitest'

import { jsonc } from '../../packages/default/src/configs/jsonc'

const configs = jsonc()

describe('jsonc config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })
})
