---
name: fast-commit
description: Use when asked to quickly stage all current changes and commit them with an automatically selected commit message.
---

# Fast Commit

Stage all current changes, analyze the diff, generate three commit message candidates, choose the best one, and commit without asking the user to pick.

## Workflow

### 1. Stage All Changes

Stage untracked, modified, and deleted files:

```bash
git add -A
```

### 2. Analyze the Diff

Read the staged diff before writing the commit message:

```bash
git diff --cached
git status --short
```

Identify:

- Change type.
- Scope.
- User-facing behavior.
- Tests or docs included.
- Risk or migration notes.

### 3. Generate Three Candidates

Generate exactly three candidates. Each candidate has:

- A title of 50 characters or fewer.
- Imperative mood.
- czemoji format: `<gitmoji_code> <type>(<scope>): <subject>`.
- A body wrapped at 72 characters explaining why.

Use gitmoji text codes from `https://gitmoji.dev/`, such as:

- `:sparkles:` for features.
- `:bug:` for fixes.
- `:memo:` for documentation.
- `:wrench:` for tooling or configuration.
- `:recycle:` for refactors.
- `:white_check_mark:` for tests.

Display candidates in this format:

```markdown
1. **title**: `<title>`
   **body**:
   `<body lines>`

2. **title**: `<title>`
   **body**:
   `<body lines>`

3. **title**: `<title>`
   **body**:
   `<body lines>`
```

### 4. Commit

Pick the most appropriate candidate yourself. Do not ask the user.

Commit immediately:

```bash
git commit -m "<title>" -m "<body>"
```

Append AI co-author trailers when the matching environment is detected.

If the `OPENCODE` environment variable is set, append:

```text
Co-authored-by: opencode <opencode@ai>
```

If `CODEX_SHELL` or `CODEX_CI` is set, append:

```text
Co-authored-by: Codex <codex@openai.com>
```

Use `CODEX_SHELL` or `CODEX_CI` for Codex detection. Do not rely on
`CODEX_THREAD_ID`; it is session metadata, not the environment signal.

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| Asking the user to choose | Pick the best candidate yourself. |
| Committing without reading diff | Inspect `git diff --cached` first. |
| Using actual emoji characters | Use gitmoji text codes like `:memo:`. |
| Forgetting deleted files | Use `git add -A`. |
| Missing AI co-author trailers | Check `OPENCODE`, `CODEX_SHELL`, and `CODEX_CI` before committing. |
