import { isPackageExists } from 'local-pkg'

import { comments } from './configs/comments'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { jsonc } from './configs/jsonc'
import { markdown } from './configs/markdown'
import { next } from './configs/next'
import { progress } from './configs/progress'
import { react } from './configs/react'
import { tailwindcss } from './configs/tailwindcss'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { yml } from './configs/yml'

import type { FlatESLintConfigItem } from 'eslint-define-config'

const presetJavascript = [
  ...ignores(),
  ...progress(),
  ...javascript(),
  ...comments(),
  ...imports(),
  ...unicorn(),
]

const presetLangsExtensions = [
  ...yml(),
  ...markdown(),
  ...jsonc(),
]

const presetDefault = [
  ...presetJavascript,
  ...typescript(),
  ...react(),
  ...presetLangsExtensions,
]

export const aiou = (config: FlatESLintConfigItem | FlatESLintConfigItem[] = []) => {
  const configs = [...presetDefault]
  if (isPackageExists('tailwindcss')) {
    configs.push(...tailwindcss())
  }
  if (isPackageExists('next')) {
    configs.push(...next())
  }
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  return configs
}
