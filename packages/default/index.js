module.exports = {
  extends: ['@aiou/eslint-config-react', 'plugin:prettier/recommended'],
  plugins: ['@aiou/progress'],
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
    "@aiou/progress/activate": 1
  },
  ignorePatterns: ['**/pnpm-lock.yaml', '**/pnpm-workspace.yaml', '*.lock', 'dist', 'lib', 'jest'],
}
