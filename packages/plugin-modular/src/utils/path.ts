import { dirname } from 'node:path'
import { pathToFileURL } from 'node:url'

// eslint-disable-next-line import/no-extraneous-dependencies
import { findUpSync } from 'find-up'
import { resolvePathSync as _resolvePathSync } from 'mlly'

export const resolvePathSync = (importPath: string, filepath: string) => {
  const url = pathToFileURL(filepath).href
  return _resolvePathSync(importPath, { url, extensions: ['.ts', 'tsx', '.mjs', '.cjs', '.js'] })
}

const tryResolvePackageJsonFromExports = (p: string) => {
  const packageJson = _resolvePathSync(`${p}/package.json`)
  return packageJson
}

const tryResolvePackageJsonFromEntry = (p: string) => {
  // If defined package.json in exports
  const packageEntry = _resolvePathSync(p)
  const packageJson = findUpSync('package.json', { cwd: dirname(packageEntry) })
  return packageJson ?? ''
}

export const resolvePackageJson = (p: string) => {
  let packageJson = ''
  try {
    // If defined package.json in exports
    packageJson = tryResolvePackageJsonFromExports(p)
    if (packageJson) {
      return packageJson
    }
  } catch (e) {
    // console.error(e)
  }
  try {
    packageJson = tryResolvePackageJsonFromEntry(p)
  } catch (e) {
    // console.error(e)
  }
  return packageJson
}

export const resolvePackageRoot = (p: string) => {
  const packageJson = resolvePackageJson(p)
  return dirname(packageJson)
}
