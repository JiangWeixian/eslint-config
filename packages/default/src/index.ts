import { isPackageExists } from 'local-pkg'

import { comments } from './configs/comments'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { jsonc } from './configs/jsonc'
import { markdown } from './configs/markdown'
import { next } from './configs/next'
import { progress } from './configs/progress'
import { react, ssrReact } from './configs/react'
import { regexp as regexpConfig } from './configs/regexp'
import { stylistic } from './configs/stylistic'
import { tailwindcss } from './configs/tailwindcss'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { yml } from './configs/yml'

import type { FlatESLintConfig } from 'eslint-define-config'

const presetJavascript = [
  ...ignores(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
]

const presetTypescript = [
  ...presetJavascript,
  ...typescript(),
]

const presetLangsExtensions = [
  ...yml(),
  ...markdown(),
  ...jsonc(),
]

const presetDefault = [
  ...presetTypescript,
  ...react(),
  ...stylistic(),
  ...presetLangsExtensions,
  ...progress(),
]

interface Options {
  ssr?: boolean
  regexp?: boolean
}

export const aiou = ({ ssr = true, regexp = true }: Options = { ssr: true, regexp: true }, config: FlatESLintConfig | FlatESLintConfig[] = []) => {
  const configs = [...presetDefault]
  if (isPackageExists('tailwindcss')) {
    configs.push(...tailwindcss())
  }
  if (isPackageExists('next')) {
    configs.push(...next())
  }
  if (ssr) {
    configs.push(...ssrReact())
  }
  if (regexp) {
    configs.push(...regexpConfig())
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
