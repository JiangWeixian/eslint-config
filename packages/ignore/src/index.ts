import fs from 'node:fs'
import path from 'node:path'

// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'

import defaultIgnorePatterns from './default'

const main = async () => {
  const [node, rust] = await Promise.all<string>([
    await axios
      .get('https://www.toptal.com/developers/gitignore/api/node')
      .then(res => res.data),
    await axios
      .get('https://www.toptal.com/developers/gitignore/api/rust')
      .then(res => res.data),
  ])
  const nodePatterns = node.split('\n')
    .concat(rust.split('\n'))
    .filter((line) => {
      return !line.startsWith('#') && !!line
    })
  const patterns = nodePatterns.concat(defaultIgnorePatterns).map(line => line.startsWith('**') ? `"${line}"` : `"**/${line}"`)
  const cjsExportIgnorePatterns = `
    module.exports = [${patterns}]
  `
  const mjsExportIgnorePatterns = `
    export default [${patterns}]
  `
  fs.writeFileSync(path.resolve(__dirname, '../index.js'), cjsExportIgnorePatterns)
  fs.writeFileSync(path.resolve(__dirname, '../index.mjs'), mjsExportIgnorePatterns)
}

main()
