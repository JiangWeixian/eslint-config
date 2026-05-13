---
name: changeset
description: Use when asked to add a Changesets release note, create a .changeset markdown file, choose semver impact, or satisfy a missing changeset check before a pull request.
---

# Changeset

Create a Changesets markdown file from verified repository facts and the actual diff. A changeset should say which packages need a release, which semver bump they need, and what changelog text should ship.

## Workflow

### 1. Verify Changesets Setup

Check for project support before writing:

```bash
git status --short
git diff --stat
test -d .changeset && test -f .changeset/config.json
sed -n '1,220p' .changeset/config.json
rg -n '"@changesets/cli"|changeset' package.json pnpm-lock.yaml package-lock.json yarn.lock 2>/dev/null
```

Do not create `.changeset/*.md` until both `.changeset/` and
`.changeset/config.json` exist. If either is missing, stop and ask the user
whether to initialize Changesets first.

Use the package manager present in the repository:

```bash
pnpm changeset init
npx changeset init
yarn changeset init
```

After initialization, read `.changeset/config.json` before choosing packages,
bump types, or validation commands.

Always read package names from `package.json`. Package-manager workspace
commands are convenient views, but they are not the source of truth:

```bash
pnpm list --depth -1 --recursive
npm ls --workspaces --depth=0
yarn workspaces list
yarn workspaces list --json
bun pm ls
```

Use the command that matches the repository's favored package manager. For
Yarn classic v1, read the root `package.json` `workspaces` field directly or
use the project's existing workspace tooling.

### 2. Identify Release Impact

Read the changed files and package metadata. Use the `name` field from each
affected package's `package.json` in changeset frontmatter. Do not infer
package names from directory names alone.

Use this bump guide:

| Impact | Bump | Use for |
| --- | --- | --- |
| Breaking API or behavior | `major` | Removed exports, incompatible config, required migration |
| New backward-compatible capability | `minor` | New feature, option, command, or public skill |
| Backward-compatible fix or docs | `patch` | Bug fix, docs, metadata, internal polish |
| No package release | none | Repo docs, tests, chores, or unversioned content |

### 3. Write the File

Use the standard Changesets shape:

```markdown
---
"package-name": patch
---

Describe the user-facing change in one or two sentences.
```

For multiple packages, include one package per frontmatter line. Use an empty
changeset only when no packages should be bumped and the project or user
explicitly requires a changeset. Prefer the package manager's
`changeset --empty` command. Do not use empty frontmatter as a fallback for
unverified package names:

```markdown
---
---

Describe the change without inventing a package or bump.
```

### 4. Validate

Before finishing:

```bash
git diff -- .changeset
```

If the project exposes Changesets, check the result with the repository's
favored package manager:

```bash
pnpm changeset status
npx changeset status
yarn changeset status
```

Use the command that matches the repository's lockfile, package manager field,
or existing scripts. Otherwise, verify manually that the file has YAML
frontmatter, a concise summary, and no invented package names.

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| Creating changeset files before setup | Require both `.changeset/` and `.changeset/config.json`; ask before running init. |
| Inventing package names | Read `package.json` `name` fields; do not use empty changesets to hide uncertainty. |
| Treating workspace-list output as source of truth | Use package-manager list commands only as convenience views; verify final names in `package.json`. |
| Always using `patch` | Choose `major`, `minor`, `patch`, or none from release impact. |
| Skipping syntax validation | Run `changeset status` through the repository's package manager when Changesets is available. |
| Writing implementation detail | Write changelog text for users and maintainers. |
| Editing old changesets | Add a new file unless the user asked to fix a specific existing changeset. |
