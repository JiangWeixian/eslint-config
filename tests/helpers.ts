import { Linter } from 'eslint'

export function lintCode(
  configs: any[],
  code: string,
  filename?: string,
): Linter.LintMessage[] {
  const linter = new Linter({ configType: 'flat' })
  return linter.verify(code, configs, filename)
}

export function expectRuleError(
  configs: any[],
  code: string,
  ruleId: string,
  filename?: string,
): { pass: boolean; errors: Linter.LintMessage[] } {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter((m) => m.ruleId === ruleId)
  return {
    pass: matches.length > 0,
    errors: matches,
  }
}

export function expectRulePass(
  configs: any[],
  code: string,
  ruleId: string,
  filename?: string,
): { pass: boolean; errors: Linter.LintMessage[] } {
  const messages = lintCode(configs, code, filename)
  const matches = messages.filter((m) => m.ruleId === ruleId)
  return {
    pass: matches.length === 0,
    errors: matches,
  }
}