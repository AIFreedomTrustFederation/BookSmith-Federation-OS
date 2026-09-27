# BookSmith Federation OS Agent Guide

## Scope

This repository is the local-first publishing workspace and federation layer. Preserve authorship, provenance, rights, identity, and human editorial authority across libraries, storage adapters, sync, publishing, and marketplace surfaces.

## Safety boundaries

- Treat AI output as a proposal until a human approves it.
- Do not publish, sync externally, change rights or visibility, connect accounts, set prices, or move funds without explicit human approval.
- Do not claim an upload, sync, release, or marketplace action succeeded without inspecting the provider's resulting state.
- Never commit credentials, private manuscripts, private keys, access tokens, or generated build output.
- Keep provider integrations replaceable and local workflows usable without a hosted service.

## Verification

Use the pinned package manager and reproduce the canonical workspace gate:

```bash
corepack enable
corepack prepare pnpm@10.0.0 --activate
pnpm install --frozen-lockfile --ignore-scripts
pnpm run lint
pnpm run typecheck
pnpm -r --if-present test
pnpm run build
git diff --check
test -z "$(git status --porcelain)"
```

Run the final clean-tree assertion from a clean committed checkout. While preparing a change, confirm with `git status --short` that only intended files differ.

Use narrower package checks during iteration, but do not replace the full gate before handoff. Keep Next.js telemetry disabled when running builds.
