const { isPackageExists } = require('local-pkg')
const compact = require('lodash.compact')

const isTailwindcss = isPackageExists('tailwindcss')

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: compact([
    'standard',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
    isTailwindcss ? 'plugin:tailwindcss/recommended' : undefined,
  ]),
  plugins: ['html', 'unicorn', 'unused-imports', 'simple-import-sort', 'import-newlines'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  overrides: [
    {
      files: ['*.json', '*.json5'],
      parser: 'jsonc-eslint-parser',
      rules: {
        // refs: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
        'jsonc/array-bracket-newline': [
          'error',
          {
            multiline: true,
            minItems: null,
          },
        ],
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2, {}],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
          },
        ],
        'jsonc/no-octal-escape': 'error',
        'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'type',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'engines',
              'homepage',
              'repository',
              'bugs',
              'funding',
              'author',
              'sideEffects',
              'files',
              'bin',
              'exports',
              'main',
              'module',
              'browser',
              'typings',
              'types',
              'typeVersions',
              'unpkg',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'pnpm',
              'overrides',
              'resolutions',
              'eslintConfig',
              'config',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
          {
            pathPattern: '^exports.*$',
            order: ['types', 'require', 'import'],
          },
        ],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'no-void': ['error', { allowAsStatement: true }],
      },
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js', '**/test/**', '**/tests/**', '**/__tests__/**'],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        // related: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
        // export anonymous function: ReactRefresh failed
        'import/no-anonymous-default-export': 'warn',
      },
    },
    {
      // Enable the Markdown processor for all .md files.
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      // Code blocks in markdown file
      files: ['**/*.md/*.*'],
      rules: {
        'react/display-name': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        'import/no-unresolved': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
  rules: Object.assign({
    // import
    // off: controlled by import/order
    'import/order': 'off',
    'sort-imports': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Relative imports.
          // Absolute imports and other imports such as `@/foo` or `~/foo`.
          // Anything not matched in another group.
          ['^', '^\\.', '^@/\\w', '^~/\\w'],
          // Virtual modules prefixed with `virtual:`, rollup & vite favor
          ['^virtual:'],
          // Types
          ['^[^/\\.].*\u0000$', '^\\..*\u0000$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // ignore dev scripts
          '**/scripts/**/*.{js,jsx,ts,tsx,cjs,mjs}',
          '**/*.test.{js,jsx,ts,tsx,cjs,mjs}',
          '**/*.spec.{js,jsx,ts,tsx,mjs,cjs}',
          '**/*.config.{js,jsx,ts,tsx,cjs,mjs}',
          // ignore require third packages in .eslintrc.* e.g. eslint-define-config
          '**/.eslintrc.{js,cjs,mjs}',
        ],
      },
    ],
    // Not allow import { default as named }
    'import/no-named-default': 'warn',

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],

    // Enforce newlines inside named import
    'import-newlines/enforce': [
      'error',
      {
        items: 2,
        'max-len': 120,
        semi: false,
      },
    ],

    // Common
    semi: ['error', 'never'],
    // Always need {}
    curly: ['error', 'all'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'array-bracket-spacing': ['error', 'never'],
    // https://eslint.org/docs/latest/rules/brace-style#1tbs
    'brace-style': ['error', '1tbs'],
    'block-spacing': ['error', 'always'],
    camelcase: 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-constant-condition': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-cond-assign': ['error', 'always'],
    'func-call-spacing': ['off', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    // https://github.com/prettier/prettier-eslint/issues/226
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'space-before-function-paren': ['error', 'never'],

    // es6
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'generator-star-spacing': 'off',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'off',
    complexity: ['off', 11],
    eqeqeq: ['error', 'allow-null'],
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',
    'no-useless-escape': 'off',
    'vars-on-top': 'error',
    'require-await': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': ['error', 'before'],

    // unicorns
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-array-instanceof': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    'unicorn/number-literal-case': 'error',
    // ** instead of Math.pow()
    'unicorn/prefer-exponentiation-operator': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-starts-ends-with': 'error',
    // textContent instead of innerText
    'unicorn/prefer-text-content': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
    // Use `node:` for built-in node modules
    'unicorn/prefer-node-protocol': 'warn',

    // yml
    'yml/quotes': ['error', { prefer: 'double', avoidEscape: false }],
    'yml/no-empty-document': 'off',

    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'eslint-comments/disable-enable-pair': 'off',
  }, isTailwindcss
    ? {
        // Enable custom classname
        'tailwindcss/no-custom-classname': 'off',
      }
    : {}),
}
