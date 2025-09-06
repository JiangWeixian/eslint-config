import { writeFile } from 'node:fs/promises'

import { flatConfigsToRulesDTS } from 'eslint-typegen/core'

import { all } from '../src'

const configs = [
  ...all,
]

const main = async () => {
  let dts = await flatConfigsToRulesDTS(configs, {
    includeAugmentation: false,
    exportTypeName: 'Rules',
    filterPlugin(name) {
      return name !== 'sxzz' && name !== 'vue'
    },
  })

  const configNames = configs.map(i => i.name).filter(Boolean) as string[]
  dts += `
    // Names of all the configs
    export type ConfigNames = ${configNames.map(i => `'${i}'`).join(' | ')}
    `

  await writeFile('src/typegen.ts', dts)
}

main()
