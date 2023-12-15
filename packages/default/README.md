# @aiou/eslint-config
*my flat eslint config*

[![npm](https://img.shields.io/npm/v/@aiou/eslint-config)](https://www.npmjs.com/package/@aiou/eslint-config) [![GitHub](https://img.shields.io/npm/l/@aiou/eslint-config)](https://github.com/JiangWeixian/eslint-config/tree/master/packages/default) 

## features

- Common ignore patterns from [nodejs's gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore)
- Support typescript, yaml, jsonc, markdown, etc..
- Built-in best practices react rules, react-refresh and ssr-friendly rules...
- Friendly fix reporter

    <div align='center'>

    <img src="https://user-images.githubusercontent.com/6839576/148364688-6a9fa8ac-94a3-4897-89fc-a3b64606e93c.png" width="400px" />

    *▲ @aiou/eslint-plugin-progress*

    </div>

## install

```console
npm install @aiou/eslint-config --save-dev
```

## usage

in `eslint.config.js`

```js
const { aiou } = require('@aiou/eslint-config')

module.exports = aiou()
```

### options

#### `options.ssr`

- default: `true`

enabled ssr-friendly rules

#### `options.regexp`

- default: `true`

enabled regexp rules
    
## rules

extends from 

```console
eslint-config-standard
eslint-plugin-eslint-comments
eslint-plugin-html
eslint-plugin-i
eslint-plugin-regexp (configured when regexp enabled)
eslint-plugin-markdown
eslint-plugin-simple-import-sort
eslint-plugin-import-newlines
eslint-plugin-unused-imports
eslint-plugin-jsonc
eslint-plugin-n (forked eslint-plugin-node)
eslint-plugin-promise
eslint-plugin-unicorn
eslint-plugin-yml
eslint-plugin-react
eslint-plugin-ssr-friendly (configured when ssr enabled)
eslint-plugin-react-refresh
@next/eslint-plugin-next (enabled when next found)
eslint-plugin-react-hooks
eslint-plugin-tailwindcss
@typescript-eslint/eslint-plugin
@stylistic/eslint-plugin
```
