import {
  describe,
  expect,
  it,
} from 'vitest'

import { storybook } from '../../packages/default/src/configs/storybook'

const configs = storybook()

describe('storybook config', () => {
  it('should export valid config array', () => {
    expect(configs).toBeDefined()
    expect(configs.length).toBeGreaterThan(0)
  })

  it('should contain storybook plugin', () => {
    const pluginConfig = configs.find(c => c.plugins?.storybook)
    expect(pluginConfig).toBeDefined()
    expect(pluginConfig!.plugins!.storybook).toBeDefined()
  })

  it('should scope rules to story files', () => {
    const fileScopedConfigs = configs.filter(c => c.files)
    expect(fileScopedConfigs.length).toBeGreaterThan(0)
    const hasStoryPattern = fileScopedConfigs.some(c =>
      c.files!.some(f => f.includes('stories')),
    )
    expect(hasStoryPattern).toBe(true)
  })
})
