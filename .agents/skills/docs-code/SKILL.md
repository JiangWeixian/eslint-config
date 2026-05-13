---
name: docs-code
description: Use when asked to analyze code and add explanatory code annotations, file headers, doc comments, inline comments, or JSX-safe comments.
---

# Docs Code

Analyze a codebase, get confirmation on the module map, then add high-value comments without changing code behavior.

## Argument Handling

This skill accepts an optional target path:

- No argument: operate on the whole codebase.
- Directory argument: scope analysis and annotation to that directory.
- File argument: analyze that file plus one-hop local importers/imports, then annotate only the target file.
- Missing path: stop and report the missing path.

Resolve the argument relative to the project root.

Always skip generated and dependency directories:

```text
node_modules
.git
dist
build
.next
out
target
vendor
__pycache__
.cache
coverage
.turbo
.changeset
*.tsbuildinfo
```

## Phase 1: Module Analysis

Complete this phase before editing.

1. Explore the target codebase or directory exhaustively.
2. Identify project type: monorepo, single package, or multi-language project.
3. For each top-level module, package, or meaningful directory, read key files and map:
   - Module name and one-sentence responsibility.
   - Key files and what each does.
   - Core exports or public API.
   - Dependencies on other modules.
   - Which modules depend on it.
4. Present a report and wait for user confirmation before Phase 2.

Report format:

```markdown
## Module Analysis Report

### [Module Name]
- **Responsibility**: one-sentence description
- **Key Files**:
  - `path/to/file1.ext` — what it does
  - `path/to/file2.ext` — what it does
- **Exports**: key exported functions, types, classes, or commands
- **Depends On**: other modules it uses
- **Used By**: modules that depend on it
```

For a file argument, skip the module-level report. Instead:

1. Read the target file.
2. Read files it imports or requires and files that import it, one hop within the project.
3. Produce one paragraph explaining what the file does, what it depends on, and what depends on it.
4. Wait for user confirmation.
5. In Phase 2, annotate only the target file.

## Phase 2: Add Annotations

After user confirmation, add only comments. Do not modify code logic.

### Comment Style

Detect project conventions first. If a project already uses a comment style, follow it.

| Language | File header | Doc comments | Inline |
| --- | --- | --- | --- |
| JS / TS | `/** @file ... */` or `//` | TSDoc `/** ... */` | `//` |
| JSX / TSX | same as JS / TS | TSDoc on exports | `//` outside JSX, `{/* ... */}` inside JSX |
| Python | `"""Module docstring."""` | `"""..."""` | `#` |
| Shell | `# ...` | `# ...` | `#` |
| Go | `// ...` | `// ...` | `//` |
| Rust | `//! ...` | `/// ...` | `//` |
| Java / Kotlin | `/** ... */` | `/** ... */` | `//` |
| C / C++ | `/* ... */` | `/** ... */` | `//` |
| Ruby | `# ...` | `# ...` | `#` |
| Lua | `-- ...` | `--- ...` | `--` |

JSX / TSX rule: `//` and `/* */` are invalid inside JSX markup. Inside returned JSX, use `{/* ... */}`. Outside JSX markup, use normal JS comment syntax.

### What to Add

Add comments only where they do not already exist:

1. File header: brief role of the file in the module.
2. Exported functions, classes, and interfaces: purpose, parameters, and return value when useful.
3. Non-obvious logic blocks: a short comment explaining why the block exists.

## Comment Quality Rules

- Explain why, not what.
- Do not restate obvious code.
- Do not duplicate existing comments.
- If a comment would be vague, leave it out and flag the code as unclear.
- For bug workarounds, explain the bug and reference the issue when available.
- For copied or adapted code, include a source link.
- For standards or specs, include a source link.
- Use `TODO:` for incomplete implementation and `FIXME:` for known bugs.
- Add `NOTE:` for critical logic that requires extra care.
- Do not add emojis to comments.
- Match the natural language of existing comments, README, or the user's language.

## Large File Rules

- If a function exceeds 50 lines or cyclomatic complexity exceeds 10, add intent comments before major branches or loops.
- If a file exceeds 300 lines, add section banners between major logical groups.
- If lint config sets `max-lines`, `max-lines-per-function`, or `complexity`, use project thresholds instead.
- For large files, focus on top-level structure and exported API. Do not comment every line.

Example section banner:

```javascript
// ═══════════ Parsing ═══════════
```

## Final Report

Process files module by module. After each module, list changed files and annotation types:

```markdown
## Annotation Summary

- `src/parser.ts` — file header and exported function docs
- `src/render.tsx` — JSX-safe inline comments for non-obvious branches
```

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| Editing code while documenting | Only add comments. |
| Skipping Phase 1 confirmation | Stop after the report and wait. |
| Using `//` inside JSX markup | Use `{/* ... */}` inside JSX. |
| Commenting trivial code | Explain intent only where it reduces confusion. |
| Adding comments to generated files | Skip generated, bundled, dependency, and build output files. |
