export = {
  parser: '@typescript-eslint/parser',
  plugins: ['@aiou/analyze'],
  rules: {
    '@aiou/analyze/comment-density': ['warn', { min: 10 }],
  },
}
