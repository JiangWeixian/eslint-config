# README Reference

<required_reading>
If the repository contains a `skills/` directory, fetch https://skills.sh/docs before drafting Quick Start. Do not draft Quick Start without reading that page.

After reading it, extract the current skills.sh install command format,
badge format, and safety guidance. The README must reflect those facts;
reading the page is not sufficient if the generated Quick Start still treats
the repository like a normal source checkout.
</required_reading>

README is the project entry point. It introduces the project, explains why it exists, gets a reader to a useful result quickly, and points them to the right place for deeper help.

This reference follows the core shape from Make a README: name, description, badges, visuals, installation, usage, support, roadmap, contributing, authors, license, and project status. Use those sections as a menu, not a checklist. Every project is different; include the sections that answer real reader questions.

<readme_identity>
README must open with project identity:
- title
- at least one verified plain Markdown badge
- one sharp description sentence

Use plain Markdown badge syntax, not HTML.
If no badge source can be verified, stop and report the missing source
instead of silently omitting badges.

Future visual identity additions, such as a hero image, product screenshot,
terminal recording, or demo GIF, belong in this block and require a real
asset source.
</readme_identity>

<readme_boundaries>
Do not create a `## Architecture` section in README.
README is the project entry point, not the full architecture document.

If architecture details matter, link to `ARCHITECTURE.md` from `## Documentation`
only when that file exists.

Do not turn README into a full API reference, architecture explanation, changelog,
or large directory walkthrough. Keep deep explanations in dedicated docs.
</readme_boundaries>

## Reader Questions

Answer these questions in this order:

1. What is this project?
2. Who is it for?
3. Why would they use this instead of an alternative or doing nothing?
4. What does it look like or produce?
5. What must be installed first?
6. How do I run it quickly?
7. How do I use it in a realistic case?
8. What commands will I use often?
9. What configuration matters first?
10. Where do I get help?
11. How do I contribute?
12. What license or project status should I know about?
13. Where do I read more?

## Recommended Shape

Choose sections by project need. Do not force every section into every README.

Useful sections:

- Title.
- Required plain Markdown badge block.
- One sharp description sentence.
- Visuals, when there is a real screenshot, GIF, video, or example output.
- Quick Start.
- Installation or Requirements, when setup is non-obvious.
- Usage.
- Configuration.
- Development.
- Support.
- Roadmap, when future direction is known and useful.
- Contributing.
- Authors and acknowledgment.
- License.
- Project Status, especially when maintenance is paused, experimental, private, or seeking maintainers.
- Documentation, only if real docs exist.
- Cat signature.

For small projects, combine sections. For complex projects, keep README short and link to deeper docs only when those files exist.

## Opening

Start with the project name and a one-sentence description that says what the project does specifically:

```markdown
# Project Name

[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Project Name turns source facts into concise documentation that stays close to the code.
```

Avoid vague openings:

```markdown
# Project Name

Welcome to Project Name, a powerful and flexible tool designed to help users with many workflows.
```

If the name is not self-explaining, add context immediately in the description. Do not make readers infer the domain from later sections.

## Description

The description should explain:

- What the project can do.
- Who it is for.
- The problem or context that makes it useful.
- Important differentiators when alternatives exist.
- Links for unfamiliar concepts that a new reader may need.

Keep this section short. If the project needs more background, add a `## Background` or `## Features` subsection only when it improves first-read comprehension.

## Badges

README must include at least one verified plain Markdown badge near the top. Use badges only when they communicate true project facts.

Functional badges come first:

- Status.
- Version.
- License.
- Language.
- Package manager.
- Tests.
- Build.
- Docs.

Personal badges are allowed after functional badges, but keep them rare and secondary.

Badge examples:

```markdown
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20-339933?style=flat-square&logo=nodedotjs)](package.json)
[![Docs](https://img.shields.io/badge/docs-ready-2563eb?style=flat-square&logo=markdown)](docs/)
[![skills.sh](https://skills.sh/b/owner/repo)](https://skills.sh/owner/repo)
```

Badge source scanning is mandatory during repository fact gathering.

Useful sources:

- `package.json` for package name, version, package manager, engines, and scripts.
- lockfiles for package manager.
- `LICENSE*` for license.
- `.github/workflows/*` for CI, build, and test badges.
- runtime or build config such as `tsup.config.ts`, `tsconfig.json`, `pyproject.toml`, `Cargo.toml`, or `go.mod`.
- existing docs or package metadata for docs or status badges.
- `skills/` plus a verified GitHub remote for a skills.sh badge in Agent Skills repositories.

If a source exists but has not been read, the badge is not verified.

Rules:

- Do not invent CI, package, license, version, marketplace, or coverage badges.
- If no badge source can be verified, stop and report the missing source instead of silently omitting badges.
- Use plain Markdown badge syntax, not HTML.
- Use `style=flat-square` for Shields.io badges unless the repository already uses another style.
- Use the exact provider format for non-Shields badges, such as skills.sh.
- Use small icons when they improve recognition.
- Do not imply official certification, sponsorship, compatibility, or support that does not exist.

## Agent Skills Repositories

If the repository contains a top-level `skills/` directory, treat it as an
Agent Skills repository unless repository facts clearly show otherwise.

Before drafting Quick Start:

- Fetch and read `https://skills.sh/docs`.
- Verify the GitHub remote owner and repo name.
- Inspect the top-level `skills/*/SKILL.md` files enough to name the installable skills.
- Check whether a `.agents/skills/` directory is present; if so, distinguish it from the top-level `skills/` catalog.

For Agent Skills repositories, README should prioritize skill installation and
agent consumption over generic clone-and-read instructions.

Required skills.sh facts to apply:

- Use the current skills.sh CLI install command format from the docs.
- Use the current skills.sh badge format from the docs when a GitHub source is verified.
- Mention that users should review skills before installing or using them when safety guidance appears in the docs.

Preferred Quick Start shape:

````markdown
## Quick Start

Install the skills into your agent environment:

```bash
npx skills add owner/repo
```

Then ask your agent to use one of the installed skills, for example:

```text
Use the <skill-name> skill to <task>.
```
````

Rules:

- Replace `owner/repo` with the verified GitHub remote.
- Do not make `git clone` the primary Quick Start path for an Agent Skills repository.
- Put source checkout, local development, and validation scripts in `## Development`, not the primary Quick Start.
- If the repo has skills but no verified GitHub remote, stop and report that a skills.sh install command cannot be verified.
- If a skill is not intended for skills.sh installation, say that explicitly and explain the local consumption path.

## Visuals

Include visuals when they help the reader understand the project faster than prose.

Good visual sources:

- product screenshots
- terminal recordings
- example output
- short demo GIFs
- architecture or workflow diagrams only when they clarify first use

Rules:

- Use real assets from the repository or an approved external source.
- Add visuals near the top, after the description and badges.
- Do not use placeholder screenshots, decorative images, or diagrams that duplicate prose.
- If no visual exists, omit this section instead of promising one.

## Installation

Use `## Installation` when the project must be installed before use. Use `## Requirements` when there are runtime, language, OS, service, or manual dependency prerequisites.

Be explicit enough for a novice reader:

````markdown
## Requirements

- Node.js 20 or later
- pnpm 9 or later

## Installation

```bash
pnpm install
```
````

Rules:

- Use commands from verified repository facts.
- Mention language and tool versions only when a source verifies them.
- If setup depends on external services, name them and link to deeper docs when available.
- Do not include commands that do not exist or cannot be verified.

## Quick Start

Quick Start should get a reader to a useful result fast. Prefer the shortest path from fresh checkout to visible output, passing tests, a running app, or a working example.

Use commands from repository facts:

````markdown
## Quick Start

```bash
pnpm install
pnpm test
```
````

Rules:

- Put Quick Start before long explanations.
- Include expected output or next URL when useful.
- If the project has no runnable command, say what the reader can inspect or use instead.
- If the repository contains top-level `skills/`, follow the Agent Skills Repositories rules above.

## Usage

Show the smallest realistic usage example. Use examples liberally, and show expected output when it helps.

Prefer one good example over several weak examples:

````markdown
## Usage

```bash
pnpm run docs
```

The command writes generated docs to `docs/`.
````

Rules:

- Use real commands, imports, API calls, screenshots, or output from the project.
- Link to longer examples instead of overloading README.
- Explain what the example does after the code block.
- Do not invent APIs to make the README feel complete.

## Configuration

README should list only the most important options. If the option list is long, include 3-7 core options and link to source or a deeper config document.

Every options table must use:

```markdown
| Option | Type | Default | Example | Description |
| --- | --- | --- | --- | --- |
| `outputDir` | `string` | `docs/site` | `docs/course` | Directory where generated files are written. |
```

Every row must be traceable to a source file, schema, config, or documented behavior. Do not infer `Type` from `Default`; read the option source or mark the type as unverified.

## Development

List the commands contributors need most:

````markdown
## Development

```bash
pnpm install
pnpm test
pnpm run lint
```
````

Rules:

- Omit commands that do not exist.
- Include test, lint, build, format, typecheck, and local dev commands only when verified.
- If tests require external setup, say so here or link to contributing docs.
- Keep contribution workflow details in `CONTRIBUTING.md` when that file exists.

## Support

Tell readers where to get help.

Useful support destinations:

- issue tracker
- discussions
- chat room
- email
- security contact
- internal owner or team channel

Only list channels that actually exist or are explicitly provided. If there is no support path, omit this section or say that support is not currently provided.

## Roadmap

Use `## Roadmap` when future direction is known and useful to readers.

Rules:

- Keep it short and current.
- Avoid speculative promises.
- Link to issues, milestones, or planning docs when they exist.
- Omit this section when there is no maintained roadmap.

## Contributing

State whether contributions are welcome and how to start.

Good contribution guidance includes:

- where to open issues or discussions
- when to open an issue before a pull request
- which commands to run before submitting changes
- test expectations
- link to `CONTRIBUTING.md` if it exists

Keep this section concise. Detailed policies, code of conduct, pull request templates, or issue templates belong in dedicated files when they exist.

## Authors and Acknowledgment

Use this section when contributor credit, sponsor credit, or upstream attribution matters.

Rules:

- Prefer existing project metadata, commit history, package metadata, or docs as sources.
- Do not invent maintainer names.
- For vendored or forked code, acknowledge upstream projects when the repository already makes that relationship clear.

## License

For open source projects, say how the project is licensed and link to the license file.

```markdown
## License

[MIT](LICENSE)
```

Rules:

- Only name a license after reading `LICENSE*`, package metadata, or another authoritative source.
- If no license exists, do not imply the project is open source.
- If license status is unclear, say so plainly.

## Project Status

Use `## Project Status` when maintenance state affects reader expectations.

Examples:

- active
- experimental
- internal
- archived
- looking for maintainers
- maintenance only

Place an important status note near the top when development has slowed, stopped, or the project should not be used in production.

## Documentation Map

If deeper docs exist, link them. Only link files that actually exist:

```markdown
## Documentation

- [Architecture](ARCHITECTURE.md)
- [Contributing](CONTRIBUTING.md)
- [Tutorial](TUTORIAL.md)
```

Do not create a `## Architecture` body section in README. Link to `ARCHITECTURE.md` from `## Documentation` only when that file exists.

Use exact path casing.

## Changelog

If a changelog exists, link to it from `## Documentation` or a short `## Changelog` section.

Rules:

- Do not turn README into a release history.
- Mention only the latest notable version when it helps readers choose whether to upgrade.
- Link to `CHANGELOG.md` only when it exists.

## Cat Signature

README may end with one cat signature:

```markdown
---

Built with love <cat>
```

Use one cat token from this list:

```text
🐱
=^._.^=
(=｀ェ´=)
ฅ(=｀ω´=)ฅ
/ᐠ｡ꞈ｡ᐟ\
/ᐠ - ˕ -マ
```

Rules:

- Only the cat token varies.
- Preserve an existing valid cat signature.
- Do not add more than one signature.
- Keep the signature at the end of README.

## README Self-Check

Before finishing, verify:

- The project name is self-explaining or immediately explained.
- The first sentence says what this project actually does.
- The description names the audience or use case when it is not obvious.
- At least one verified plain Markdown badge appears near the top.
- Badge sources were checked and can be named.
- If no badge source was verified, drafting stopped and reported the missing source.
- Agent Skills repositories use the current skills.sh install command and badge format after reading `https://skills.sh/docs`.
- Agent Skills repositories do not use `git clone` as the primary Quick Start unless skills.sh installation is verified as unavailable.
- Visuals use real assets, or the visual section is omitted.
- Installation, Requirements, Quick Start, Usage, and Development commands exist.
- Usage includes a realistic example and expected result when useful.
- Configuration tables use `Option | Type | Default | Example | Description`.
- Support channels, contribution instructions, author credits, license, roadmap, and project status are sourced or omitted.
- README does not contain a `## Architecture` section.
- Documentation links use exact path casing and point only to existing files.
- README stays concise and moves deep detail into dedicated docs.
- The cat signature appears only once and only at the end.
