# Contributing to BookSmith Federation OS

Thank you for helping build BookSmith Federation OS.

This repository is the operating-system layer for the AI Freedom Trust Federation knowledge platform. Contributions should strengthen local-first ownership, inspectable AI, clean app boundaries, and federation readiness.

## Core rule

```text
User input = accepted canon
AI output = proposed patch until approved
```

Do not design workflows where AI silently overwrites user canon.

## Development priorities

1. Keep the OS separate from its apps.
2. Keep `booksmith-ai` as the publishing engine, not duplicated inside this repository.
3. Prefer explicit adapters for GitHub, Google Drive, AIFT-Forge, BookSmith, and economy integrations.
4. Keep local-first storage useful without required cloud accounts.
5. Make provenance visible for imports, AI suggestions, patches, releases, and sync operations.

## Before contributing

- Read `README.md`.
- Read `docs/ARCHITECTURE.md`.
- Read `docs/ROADMAP.md`.
- Keep changes small enough to review.
- Avoid adding mandatory paid AI services or mandatory centralized dependencies.

## Pull request expectations

A good pull request should include:

- clear purpose
- files changed
- user-facing effect
- implementation notes
- tests or validation steps when applicable
- explicit note if AI was used to draft or modify code/docs

## Code style

- TypeScript-first
- strict types where practical
- small modules
- clear boundaries between apps, packages, and adapters
- no hidden writes to user canon
