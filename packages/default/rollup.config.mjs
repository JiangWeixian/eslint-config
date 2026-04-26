import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import size from 'rollup-plugin-filesize'
import { externals } from 'rollup-plugin-node-externals'

export default defineConfig([
  // ES module build only (ESM-only due to ESM-only dependencies like @eslint-react/eslint-plugin)
  {
    input: 'src/index.ts',
    plugins: [
      /**
       * Bundle devDependencies, exclude dependencies
       */
      externals({
        devDeps: false,
      }),
      commonjs(),
      esbuild({
        target: 'node20',
      }),
      json(),
      resolve(),
      /**
       * Auto setup package.json
       * @see {@link https://github.com/JiangWeixian/rollup-plugin-condition-exports}
       */
      size(),
    ],
    output: [
      { dir: 'dist', entryFileNames: '[name].mjs', format: 'es' },
    ],
  },
])
