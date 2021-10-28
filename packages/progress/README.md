# @aiou/eslint-plugin-progress

eslint fix reporter like [pretty-quick]()

## features

friendly eslint fix message

```console
$ eslint . --fix
```

<div align='center'>

<img src="https://github.com/JiangWeixian/eslint-config/blob/master/packages/progress/snapshots/demo.png?raw=true" width="400px" />

*▲ @aiou/eslint-plugin-progress*

</div>

## Usage

```
yarn add @aiou/eslint-plugin-progress --dev
```

```js
// .eslintrc.js
module.exports = {
  plugins: ['@aiou/progress'],
  rules: {
    '@aiou/progress/activate': 1,
  },
}

```

## Known issues

It doesn’t keep the stat of the last file processed.
