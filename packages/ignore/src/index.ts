// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'
import fs from 'fs'
import path from 'path'

import defaultIgnorePatterns from './default'

const main = async () => {
  const result: string = await axios
    .get('https://www.toptal.com/developers/gitignore/api/node')
    .then(res => res.data)
  const nodePatterns = result.split('\n').filter((line) => {
    return !line.startsWith('#') && !!line
  })
  const patterns = nodePatterns.concat(defaultIgnorePatterns).map(line => line.startsWith('**') ? `"${line}"` : `"**/${line}"`)
  const exportIgnorePatterns = `
    module.exports = [${patterns}]
  `
  fs.writeFileSync(path.resolve(__dirname, '../index.js'), exportIgnorePatterns)
}

main()
