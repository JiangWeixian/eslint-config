import pluginJsonc from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs'

import type { FlatESLintConfigItem, Rules } from 'eslint-define-config'

export const jsonc = () => {
  const config: FlatESLintConfigItem[] = [
    {
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      languageOptions: {
        parser: jsoncParser,
      },
      plugins: {
        jsonc: pluginJsonc,
      },
    },
    {
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      rules: {
        ...(pluginJsonc.configs['recommended-with-jsonc'].rules as Rules),
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
      files: ['**/package.json'],
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
            // According to webpack, default condition should be last item
            order: ['import', 'require', 'types', 'node', 'browser', 'default'],
          },
          {
            order: { type: 'asc' },
            pathPattern: '^resolutions$',
          },
          {
            order: { type: 'asc' },
            pathPattern: '^pnpm.overrides$',
          },
        ],
      },
    },
    // refs: https://github.com/sxzz/eslint-config/blob/main/src/configs/sort.ts
    {
      files: ['**/tsconfig.json', '**/tsconfig.*.json'],
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            order: [
              'extends',
              'compilerOptions',
              'references',
              'files',
              'include',
              'exclude',
            ],
            pathPattern: '^$',
          },
          {
            order: [
              /* Projects */
              'incremental',
              'composite',
              'tsBuildInfoFile',
              'disableSourceOfProjectReferenceRedirect',
              'disableSolutionSearching',
              'disableReferencedProjectLoad',
              /* Language and Environment */
              'target',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'useDefineForClassFields',
              'emitDecoratorMetadata',
              'experimentalDecorators',
              /* Modules */
              'baseUrl',
              'rootDir',
              'rootDirs',
              'customConditions',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'resolvePackageJsonExports',
              'resolvePackageJsonImports',
              'typeRoots',
              'types',
              'allowArbitraryExtensions',
              'allowImportingTsExtensions',
              'allowUmdGlobalAccess',
              /* JavaScript Support */
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',
              /* Type Checking */
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'useUnknownInCatchVariables',
              /* Emit */
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',
              /* Interop Constraints */
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              'verbatimModuleSyntax',
              /* Completeness */
              'skipDefaultLibCheck',
              'skipLibCheck',
            ],
            pathPattern: '^compilerOptions$',
          },
        ],
      },
    },
  ]
  return config
}
