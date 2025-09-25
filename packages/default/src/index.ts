import { FlatConfigComposer } from 'eslint-flat-config-utils'
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
import { toml } from './configs/toml'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { yml } from './configs/yml'

import type { Linter } from 'eslint'
import type { Arrayable, Awaitable } from 'eslint-flat-config-utils'
import type { Config } from './type'
import type { ConfigNames } from './typegen'

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
  ...toml(),
]

const presetDefault = [
  ...presetTypescript,
  ...react(),
  ...stylistic(),
  ...presetLangsExtensions,
  ...progress(),
]

export const all = [
  ...presetDefault,
  ...tailwindcss(),
  ...next(),
  ...ssrReact(),
  ...regexpConfig(),
]

interface Options {
  ssr?: boolean
  regexp?: boolean
}

export const aiou = ({ ssr = true, regexp = true }: Options = { ssr: true, regexp: true }, ...userConfigs: Awaitable<
  Arrayable<Config> | FlatConfigComposer<any, any> | Linter.Config[]
>[]): FlatConfigComposer<Config, ConfigNames> => {
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
  const composer = new FlatConfigComposer<Config, ConfigNames>(
    ...configs,
    ...(userConfigs as any),
  )
  return composer
}
