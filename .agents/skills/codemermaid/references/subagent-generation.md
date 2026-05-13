# Subagent Generation

Use this reference only when subagents are available and the repo has enough independent modules or directories to make parallel work useful. Serial generation remains valid.

## Coordinator Owns

The main agent is always the coordinator. It owns:

- Repo boundary and skip list.
- Module registry.
- Filename registry.
- Mermaid node id registry.
- Perspective list.
- Global voice, unit, storyboard, and link rules.
- `index.html`.
- Final page graph and link closure.
- Final `validate-units.js` runs.
- Final browser/manual verification.

Do not delegate global architecture decisions or final consistency checks.

## Safe To Parallelize

| Phase | Worker task |
| --- | --- |
| Scan | Read assigned directories and report source facts |
| Analyze | Draft layer, pattern, and dependency observations |
| Page data | Draft assigned module `COURSE` data or perspective drafts |
| Mermaid | Draft local diagrams for assigned pages |
| Assemble | Generate assigned `module-<name>.html` files after coordinator provides exact rules |

Coordinator-owned work stays serial: final module list, perspective list, filename map, node id map, `index.html`, cross-page links, and final validation.

## Worker Limits

Workers may:

- Scan assigned paths.
- Draft assigned page data.
- Generate assigned `docs/codebase-course/module-<name>.html` files.
- Draft local Mermaid diagrams, code-walks, and storyboards for assigned scope.

Workers must not:

- Rename modules.
- Create unassigned modules or files.
- Change global node ids or filenames.
- Write `index.html`.
- Write unassigned perspective pages.
- Decide the final perspective list.
- Skip validation for generated pages.

## Coordinator Checklist

Before dispatching workers, prepare:

- Assigned modules, source files, and output filenames.
- Global `INDEX` link rules.
- Node id registry.
- Template paths and assembly rules.
- Voice examples, unit examples, and storyboard rules.
- Validation command.

After workers return, reject any handoff that lacks source evidence, validation, assigned-path discipline, registry-safe links, unique filenames, or valid unit/storyboard budgets.

## Module Worker Prompt

```markdown
You are generating one assigned codemermaid module page.

Scope:
- Module: <module name>
- Source files: <paths>
- Output file: docs/codebase-course/module-<name>.html

Rules:
- Read only assigned source plus provided references.
- Use exact real code snippets.
- Follow global node ids and filename registry exactly.
- Use storyboard for sequence-heavy lessons.
- Do not write index.html or unassigned files.
- Validate before reporting.

Return the output contract below.
```

## Perspective Worker Prompt

```markdown
You are drafting one assigned codemermaid perspective.

Scope:
- Perspective: <name>
- Covered modules: <module list>
- Registry: <filenames and node ids>

Rules:
- Draft PERSPECTIVE page data only unless coordinator assigns an output file.
- Use inline markdown links only to registered pages.
- Do not add modules, rename modules, or change node ids.
- Return assumptions and requested links.
```

## Scan Worker Prompt

```markdown
You are scanning assigned codebase paths for codemermaid.

Scope:
- Paths: <paths>

Report:
- Files read.
- Candidate modules and responsibilities.
- Imports, exports, entry points, public interfaces.
- Dependency edges with source evidence.
- Unknowns or skipped paths.

Do not decide final module names or write course files.
```

## Output Contract

Every worker returns:

```markdown
## Assignment

- Worker type: module-page | perspective-draft | scan
- Assigned scope: <modules, directories, or perspective>

## Source Evidence

- Files read:
  - `path/to/file.ext`
- Imports/exports observed:
  - `<fact>`

## Generated Or Drafted Artifacts

- Page data kind: COURSE | PERSPECTIVE_DRAFT | SCAN_REPORT
- Generated files:
  - `docs/codebase-course/module-auth.html`
- Draft-only files:
  - none

## Validation

- Command: `node skills/codemermaid/scripts/validate-units.js <path-or-stdin>`
- Result: PASS | FAIL | NOT_RUN
- Notes: <exact errors if failed>

## Links And Assumptions

- Cross-links requested:
  - `module-router.html`
- Unresolved assumptions:
  - none
```

## Merge Gate

Before accepting parallel work:

- Every discovered module has exactly one page.
- No duplicate `module-*.html` files exist.
- Every module page linked from `index.html` exists.
- Perspective links point to real registered pages.
- All module pages pass validation.
- Voice, pedagogy, storyboards, and code presentation rules are consistent.

## Failure Handling

If validation fails, ask the same worker to fix only its assigned output or fix it directly when the issue is small and local. Reassign if the output lacks source evidence or is too speculative.

If global inconsistencies appear, fix the coordinator-owned registry first, then ask affected workers to regenerate against the updated registry.

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| Worker writes `index.html` | Reject; coordinator owns the index |
| Worker invents a module | Reject; coordinator owns module registry |
| Worker uses unregistered links | Reject until links match filename registry |
| Worker skips validation | Reject generated pages without validation |
| Multiple workers edit same output | Assign disjoint files only |
