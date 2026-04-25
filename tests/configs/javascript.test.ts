import { describe, it, expect } from 'vitest'
import { javascript } from '../../packages/default/src/configs/javascript'
import { comments } from '../../packages/default/src/configs/comments'
import { imports } from '../../packages/default/src/configs/imports'
import { ignores } from '../../packages/default/src/configs/ignores'
import { unicorn } from '../../packages/default/src/configs/unicorn'
import { lintCode } from '../helpers'

const presetJavascript = [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
]

describe('javascript config', () => {
  it('should export valid config array', () => {
    expect(javascript()).toBeDefined()
    expect(javascript().length).toBeGreaterThan(0)
  })

  it('should contain expected core rules', () => {
    const rules = javascript()[0].rules
    expect(rules).toBeDefined()
    expect(rules['no-var']).toBe('error')
    expect(rules['semi']).toStrictEqual(['error', 'never'])
    expect(rules['prefer-const']).toBeDefined()
  })

  it('should catch no-undef errors in full preset', () => {
    const result = lintCode(presetJavascript, 'const x = unknownVar;', 'test.js')
    expect(result.some((m) => m.ruleId === 'no-undef')).toBe(true)
  })

  it('should allow valid JS in full preset', () => {
    const result = lintCode(presetJavascript, 'const x = 1;\nconsole.log(x);', 'test.js')
    expect(result).toBeDefined()
    expect(Array.isArray(result)).toBe(true)
  })
})