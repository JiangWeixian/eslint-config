export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@aiou/analyze'],
  rules: {
    '@aiou/analyze/comment-density': [{ min: 10 }],
  },
}
