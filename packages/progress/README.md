# @aiou/eslint-plugin-progress

eslint fix reporter like [pretty-quick]()

## features

friendly eslint fix message

```console
$ eslint . --fix
```

<div align='center'>

<img src="https://user-images.githubusercontent.com/6839576/148364688-6a9fa8ac-94a3-4897-89fc-a3b64606e93c.png" width="400px" />

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
