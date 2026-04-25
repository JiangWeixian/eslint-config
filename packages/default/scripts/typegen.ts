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

  const lines = dts.split('\n')
  const seen = new Map<string, number>()
  const deduped: string[] = []
  for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^interface\s+(\w+)\s*\{/)
    if (match) {
      if (seen.has(match[1])) {
        let depth = 1
        i++
        while (i < lines.length && depth > 0) {
          if (lines[i].includes('{')) depth++
          if (lines[i].includes('}')) depth--
          i++
        }
        i--
        continue
      }
      seen.set(match[1], i)
    }
    deduped.push(lines[i])
  }

  await writeFile('src/typegen.ts', deduped.join('\n'))
}

main()
