# Contributing Reference

CONTRIBUTING docs make collaboration executable. The reader should know how to set up the project, run checks, change code, and submit work.

## Reader Questions

Answer:

1. What tools do I need?
2. How do I install dependencies?
3. How do I run the project locally?
4. How do I run tests and checks?
5. What style or workflow rules matter?
6. How do I open a useful pull request?
7. How do I update docs when behavior changes?

## Recommended Shape

Use sections that match the repository:

- Prerequisites.
- Setup.
- Local Development.
- Tests and Checks.
- Code Style.
- Branches and Commits.
- Pull Requests.
- Issues.
- Updating Options and Docs.

## Commands

Use commands from package scripts, Makefiles, task runners, or existing docs.

````markdown
## Tests and Checks

```bash
pnpm test
pnpm run lint
```
````

Do not list commands that are absent from the repository.

## Pull Requests

Make expectations concrete:

```markdown
## Pull Requests

Before opening a pull request:

1. Run the test command listed above.
2. Update docs for behavior, command, or option changes.
3. Include a short summary and verification notes in the PR description.
```

## Updating Options and Docs

When contributors add or change an option, require synchronized updates:

```markdown
## Updating Options

When adding an option:

1. Update the source schema or default definition.
2. Add or update tests that cover the option.
3. Update any README or tutorial section that mentions the option.
4. Use the required options table columns when documenting it.
```

If an options table appears, use:

```markdown
| Option | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
```

Do not guess option types, defaults, or examples. Each row must come from source code, schema, existing docs, or tests. A default value alone is not enough to infer `Type`.

## Tone

Keep encouragement short. The useful content is the workflow.

Write:

```text
Open an issue with the failing command, expected result, and actual output.
```

Avoid:

```text
We warmly welcome all contributions from everyone in the community.
```

## Contributing Self-Check

Before finishing, verify:

- Setup commands exist.
- Test and lint commands exist before listing them.
- Contribution steps are ordered from local setup to PR.
- Option changes mention source, tests, and docs.
- The document avoids empty encouragement as primary content.
