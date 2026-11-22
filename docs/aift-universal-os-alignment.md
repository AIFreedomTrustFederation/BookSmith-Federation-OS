# BookSmith-Federation-OS — AIFT Universal OS Alignment

> **Planning document only.** The proposed AIFT OS is not proven installed, bootable on an arbitrary device or operating as an authenticated hosted desktop. This fork/project retains its own authority, instructions and upstream credits. See [central architecture and infographics in AIFT-OS PR #92](https://github.com/AIFreedomTrustFederation/AIFT-OS/pull/92).

## Existing scope

Local-first publishing OS/workspace concept and federation synchronization interfaces; publishing ownership and rights remain independent from AIFT's host OS.

## Proposed opt-in application contract

Propose a manifest-backed AIFT publishing application adapter, optional file/session APIs and offline authorship/export with explicit permissions. Do not duplicate canonical implementation owned by booksmith-ai.

~~~mermaid
flowchart LR
  SOURCE["BookSmith-Federation-OS: current project authority"] --> ADAPTER["Optional versioned app / capability adapter"]
  ADAPTER -. "only if tested" .-> OS["AIFT native / hosted desktop"]
  USER["Explicit owner grants"] --> ADAPTER
  TEST["Device-specific tests and rollback"] --> ADAPTER
~~~

## Measurable milestones

1. Verify source license/ownership, README and AGENTS constraints before any implementation.
2. Specify app entrypoint, supported host/device targets, local data boundaries, required permissions and unavailable state.
3. Add independent regression tests proving authorization, opt-out and actual operation; reject a visual mock as deployment evidence.
4. Document Existing author-workspace tests, manifest/capability denial checks, browser and API contract evidence on exact head; publishing and marketplace claims separately verified.
5. Publish an exact-head artifact/log and downstream consumer test before claiming integration.

## Explicit safety and non-goals

Never publish manuscripts, change rights, author identity, marketplace visibility, financial custody or sync external accounts without explicit approval. Device firmware, Apple boot policy, Windows boot entries, robot actuation and production release remain out of scope for this docs proposal.

[Central OS platform proposal](https://github.com/AIFreedomTrustFederation/AIFT-OS/pull/92).
