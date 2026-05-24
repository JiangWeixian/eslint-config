# Storybook ESLint Plugin Integration

## Summary

Add `eslint-plugin-storybook` to `@aiou/eslint-config` as an always-enabled config, scoped to story files and `.storybook/` directory via file globs.

## Motivation

Storybook is widely used for component development. Its ESLint plugin provides best-practice rules for CSF (Component Story Format) stories and addon interactions. Integrating it ensures consistent story file patterns across projects using this config.

## Design

### Files Changed

1. **`packages/default/src/globs.ts`** — Add `GLOB_STORYBOOK_STORIES` for story file matching
2. **`packages/default/src/configs/storybook.ts`** — New config file (follows `next.ts` pattern)
3. **`packages/default/src/index.ts`** — Import and include storybook config in `presetDefault`
4. **`packages/default/package.json`** — Add `eslint-plugin-storybook` dependency

### Config Details

- **Plugin**: `eslint-plugin-storybook`
- **Preset**: `flat/recommended` (includes csf + addon-interactions rules)
- **File scope**: `**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)` and `.storybook/` config files
- **Activation**: Always enabled (no option toggle, no `isPackageExists` check)

### Included Rules (from flat/recommended)

| Rule | Description |
|------|-------------|
| await-interactions | Interactions should be awaited |
| context-in-play-function | Pass context when invoking play function of another story |
| default-exports | Story files should have a default export |
| hierarchy-separator | Deprecated hierarchy separator in title |
| no-redundant-story-name | No redundant name property |
| no-uninstalled-addons | Detect invalid/missing addon references |
| prefer-pascal-case | Stories should use PascalCase |
| story-exports | Story file must contain at least one story export |
| use-storybook-expect | Use expect from storybook/test |
| use-storybook-testing-library | Use storybook's testing-library re-exports |

### Implementation Notes

- The config follows the existing pattern used by `next.ts`: import plugin, register under `plugins`, spread recommended rules, scope with `files` glob
- `eslint-plugin-storybook` version `^0.10.0` for ESLint 8.57+/9+/10+ compatibility
- No user-facing API changes — the config activates automatically for matching files
