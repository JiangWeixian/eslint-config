import { describe, it, expect } from 'vitest'
import { Linter } from 'eslint'

const aiouModule = await import('../packages/default/dist/index.mjs')
const aiou = aiouModule.aiou
const all = aiouModule.all

describe('aiou() integration', () => {
  it('should return a FlatConfigComposer without errors', () => {
    const composer = aiou({ ssr: false, regexp: true })
    expect(composer).toBeDefined()
    expect(typeof composer.toConfigs).toBe('function')
  })

  it('should produce valid configs that can lint', () => {
    const composer = aiou({ ssr: false, regexp: true })
    const configs = composer.toConfigs()
    const linter = new Linter({ configType: 'flat' })
    const result = linter.verify('const x = 1;', configs, 'test.ts')
    expect(Array.isArray(result)).toBe(true)
  })

  it('should lint JSX files', () => {
    const composer = aiou({ ssr: false, regexp: true })
    const configs = composer.toConfigs()
    const linter = new Linter({ configType: 'flat' })
    const code = 'export const Foo = () => <div />;'
    const result = linter.verify(code, configs, 'test.tsx')
    expect(Array.isArray(result)).toBe(true)
  })
})

describe('all preset', () => {
  it('should be a valid config array', () => {
    expect(Array.isArray(all)).toBe(true)
    expect(all.length).toBeGreaterThan(0)
  })
})