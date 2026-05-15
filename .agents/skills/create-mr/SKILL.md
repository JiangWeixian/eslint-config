---
name: create-mr
description: Use when creating a GitHub pull request or merge request from the current branch, especially when a project PR template may exist.
---

# Create MR

Create a GitHub pull request from the current branch by reading the repository state, respecting any PR template, and verifying the created PR.

## Workflow

### 1. Detect PR Template

Search for a PR template in this order:

1. `.github/PULL_REQUEST_TEMPLATE.md`
2. `.github/PULL_REQUEST_TEMPLATE/*.md` (pick the first match)
3. `PULL_REQUEST_TEMPLATE.md`
4. `docs/PULL_REQUEST_TEMPLATE.md`

If a template is found, read it and use it as the base structure for the PR body. Preserve all template sections and fill them from the actual changes.

If no template is found, use the default body format below.

### 2. Gather Context

Run these checks, parallelizing file reads and git commands where possible:

```bash
git status
git diff --staged
git diff
git log --oneline -20
git remote -v
git branch --show-current
```

### 3. Analyze Changes

From the gathered context:

1. Summarize commits and diffs into a coherent narrative.
2. Identify the change type: feature, bugfix, refactor, docs, chore, or test.
3. Note verification evidence already present in the branch.

### 4. Generate PR Title and Body

Title requirements:

- 72 characters or fewer.
- Imperative mood.
- Conventional commit style: `<type>(<scope>): <short description>`.

Example:

```text
feat(auth): add OAuth2 login flow
```

Default body when no template exists:

```markdown
## Summary
- <1-3 bullets summarizing what this PR does>

## Changes
- <key change 1>
- <key change 2>

## Test Plan
- <how to verify these changes>

## Screenshots
<before/after for visual changes, or omit if not applicable>
```

## Create the Pull Request

Use GitHub CLI:

```bash
gh pr create --title "<title>" --body "<body>"
```

If the body is large, write it to a temporary file and pass `--body-file`.

If the current branch has no remote tracking branch, push first:

```bash
git push -u origin HEAD
```

Then retry `gh pr create`.

## Verify

After creation, run:

```bash
gh pr view <number>
```

For machine-readable verification, prefer:

```bash
gh pr view <number> --json number,title,url,state,headRefName,baseRefName
```

Report the PR URL to the user.

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| Ignoring a PR template | Search all supported template locations first. |
| Writing a title from memory | Base the title on the actual diff and commits. |
| Claiming tests passed without evidence | Put only verified commands in the test plan. |
| Forgetting to push the branch | Push with `git push -u origin HEAD`, then create the PR. |
