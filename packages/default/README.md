# @aiou/eslint-config
*my eslint config*

[![npm](https://img.shields.io/npm/v/@aiou/eslint-config)](https://www.npmjs.com/package/@aiou/eslint-config) [![GitHub](https://img.shields.io/npm/l/@aiou/eslint-config)](https://github.com/JiangWeixian/eslint-config/tree/master/packages/default) 

## features

- 🙈 built in ignore patterns from [nodejs's gitignore](https://github.com/github/gitignore/blob/master/Node.gitignore) and with common eslint ignore patterns like `jest`, etc..
- 💅 friendly fix reporter

    <div align='center'>

    <img src="https://user-images.githubusercontent.com/6839576/148364688-6a9fa8ac-94a3-4897-89fc-a3b64606e93c.png" width="400px" />

    *▲ @aiou/eslint-plugin-progress*

    </div>
    
## rules

extends from 

```tsx
eslint-plugin-prettier
eslint-config-standard
eslint-plugin-eslint-comments
eslint-plugin-html
eslint-plugin-import
eslint-plugin-jsonc
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-unicorn
eslint-plugin-yml
eslint-plugin-react
eslint-plugin-react-hooks
@typescript-eslint/eslint-plugin
```

## install

```console
npm install @aiou/eslint-config --save-dev
```

## usage

in `.eslintrc.js`

```
module.exports = {
  "extends": ["@aiou"]
}
```

