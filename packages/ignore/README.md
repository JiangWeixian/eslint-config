# @aiou/eslint-ignore
*collection of eslint common ignore patterns with [gitignore](https://github.com/github/gitignore)*


[![npm](https://img.shields.io/npm/v/@aiou/eslint-ignore)](https://github.com/JiangWeixian/templates/tree/master/packages/eslint-ignore) [![GitHub](https://img.shields.io/npm/l/@aiou/eslint-ignore)](https://github.com/JiangWeixian/templates/tree/master/packages/eslint-ignore) 

Transform [nodejs's gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) into eslint **ignorePatterns**, and with common eslint ignore patterns like `jest`, etc..

## install

```console
npm install @aiou/eslint-ignore --save-dev
```

## usage

```js
module.exports = {
  // others config
  ignorePatterns: require('@aiou/eslint-ignore'),
}
```