module.exports = {
  extends: ['@aiou/eslint-config-react', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
}
