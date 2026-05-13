# Tutorial Reference

Tutorial docs help the reader complete one real path. A tutorial is not a feature list.

## Reader Questions

Answer:

1. What will I finish?
2. What do I need before starting?
3. What files or commands will I touch?
4. What should I see after each major step?
5. How do I verify the result?
6. What should I try next?

## Recommended Shape

Use this shape when it fits:

- Goal.
- Prerequisites.
- Starting State.
- Steps.
- Verify the Result.
- Troubleshooting.
- Next Steps.

## Goal

State the finished outcome:

```markdown
## Goal

You will create a new README from repository facts, then verify that the documented commands and links match the project.
```

## Prerequisites

List only required knowledge, tools, files, or commands:

```markdown
## Prerequisites

- Node.js 20 or newer.
- `pnpm install` has completed.
- The repository has a `package.json`.
```

## Steps

Each step should pair an action with an expected result:

````markdown
## Step 1: Inspect available commands

```bash
cat package.json
```

Expected: the `scripts` field lists the commands this tutorial uses.
````

Do not ask readers to run commands that were not found in the repository.

## Options in Tutorials

Introduce only the options needed for the tutorial path.

If a table appears, use:

```markdown
| Option | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
```

If one option appears in prose, include its default or source when that helps the reader avoid mistakes.

Do not infer option types from default values. If the source type is unavailable, keep the tutorial in prose or state that the type needs source verification.

## Troubleshooting

Troubleshooting entries should connect symptoms to actions:

```markdown
| Symptom | Check |
| --- | --- |
| `pnpm test` is missing | Re-open `package.json` and confirm the repository exposes a test script. |
```

## Next Steps

Point to one or two real next moves:

```markdown
## Next Steps

- Read [Architecture](ARCHITECTURE.md) to see how the workflow is organized.
- Read [Contributing](CONTRIBUTING.md) before changing documented options.
```

## Tutorial Self-Check

Before finishing, verify:

- The tutorial completes one concrete task.
- Prerequisites are real and necessary.
- Every command exists or is clearly marked as user-provided input.
- Each major step has an expected result.
- Links use exact path casing.
- The tutorial does not become a feature list.
