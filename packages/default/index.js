module.exports = {
  extends: ['@aiou/eslint-config-react'],
  plugins: ['@aiou/progress'],
  rules: {
    '@aiou/progress/activate': 1,
  },
  ignorePatterns: require('@aiou/eslint-ignore'),
}
