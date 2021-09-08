export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@aiou/analyze'],
  rules: {
    '@aiou/analyze/comment-density': ['error', { min: 10 }],
  },
}
