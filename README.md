# BookSmith Federation OS — Sovereign Knowledge Workspace

**The publishing federation layer of the AI Freedom Trust Federation: a local-first book operating system for workspaces, libraries, publishing pipelines, identity, sync, marketplace coordination, and federated knowledge infrastructure.**

| Federation metadata | Value |
| --- | --- |
| Layer | `publishing` |
| Role | book operating system and publishing federation layer |
| Workspace | `AIFT/BookSmith-Federation-OS` |
| Control plane | AIFT workspace / AIFT-OS |
| Verification | lint, typecheck, and build required; workspace tests when present |
| Operating standards | local-first, inspectable, sovereign by default, AI behind governed provider interfaces |

BookSmith Federation OS is the workspace around the work. Where `booksmith-ai` focuses on the manuscript, authoring intelligence, production, citations, and proofing, this repository organizes the broader environment in which books, authors, publishers, identities, storage adapters, federation connections, publishing pipelines, and marketplace relationships can live together without making a hosted service the owner of the library.

The governing covenant is carried in the [One Eternal Scroll of ALO'ha](https://aifreedomtrustfederation.github.io/AI-Freedom-Trust/docs/pdf/one-eternal-scroll-of-aloha.pdf) and operationalized through [SOP-ALOHA-001](https://github.com/AIFreedomTrustFederation/AI-Freedom-Trust/blob/main/SOP-ALOHA-001.md).

---

## Book I — The Library as a Sovereign Place

A library is more than a collection of files. It is a relationship among authors, manuscripts, sources, rights, editions, readers, publishers, identities, and memory. BookSmith Federation OS treats that relationship as something the user should be able to inspect and carry.

The operating-system idea is therefore practical rather than ornamental. A person should be able to enter one workspace and move among a library, manuscript studio, source intake, AI assistance, figure and diagram tools, citations, proofs, publishing, sync, identity, marketplace activity, and federation connections without losing sight of which repository and human authority owns the underlying work.

### Illuminated passage — governance around the library

![Governance Constellation](https://raw.githubusercontent.com/AIFreedomTrustFederation/AI-Freedom-Trust/main/docs/images/aetherion/governance-constellation.png)

The constellation is the appropriate image for this operating system because a publishing federation contains many sovereign centers. Author, book, publisher, trust, marketplace, storage provider, AI provider, and reader are related, but no one node becomes the natural owner of all the others.

---

## Book II — What the Publishing OS Owns

BookSmith Federation OS owns the **workspace and federation layer** around publishing. Its architecture is intended to coordinate applications such as Library Studio, Manuscript Studio, AI Writing Chat, Patch Review, Figure Studio, Diagram Studio, Citation Studio, Proof Studio, Publishing Studio, Intake & Source Studio, Federation Hub, Marketplace Studio, trust/identity governance, and sync/backup.

Its integration boundaries are specific:

- **booksmith-ai ↔ BookSmith Federation OS:** `booksmith-ai` remains the authoring, manuscript, library-production, LaTeX, and publishing-packet engine. This repository presents and federates those capabilities inside a broader workspace.
- **AIFT-Genesis → Publishing OS:** Genesis supplies trust identity, permissions, governance, and local inheritance structures for authors, publishers, organizations, and libraries.
- **AIFT-Forge → Publishing OS:** Forge provides reusable application, package, agent, and provider-interface patterns.
- **AIFT-OS / Runtime ↔ Publishing OS:** the operating layers discover local repositories, providers, builds, storage, and sync state. They coordinate system operations without acquiring editorial authority over manuscripts.
- **VPS ↔ Publishing OS:** infrastructure can host web surfaces, marketplace services, registries, and federated nodes while the publishing layer keeps books and rights attributable to their owners.
- **Aetherion ↔ Publishing OS:** marketplace settlement, royalties, treasury, and future biozo currency rails can integrate through explicit economic interfaces while rights, price decisions, publication, and custody remain governed.
- **Google Drive, GitHub, local filesystem, external storage, and decentralized adapters:** these are storage and sync relationships, not alternate owners of the work.

A representative architecture remains:

```text
User Workspace
   ↓
Local-First Library and Repositories
   ↓
Booksmith AI / Publishing Tools
   ↓
Proof and Release Pipeline
   ↓
Federated Catalog / Marketplace
   ↓
Chosen storage, backup, and federation nodes
```

The key is that each arrow is a governed interface rather than a silent transfer of authority.

---

## Book III — SOP-ALOHA-001 in the Publishing OS

The shared loop becomes the lifecycle of knowledge work across applications:

```text
Receive → Inspect → Name → Propose → Consent → Act → Verify → Record → Return
```

**Receive** accepts a manuscript, upload, repository, source, book, author identity, storage connection, or publishing request. **Inspect** determines its owner, location, rights, current state, format, dependencies, and target workflow. **Name** assigns the object to the correct book, library, workspace, role, permission set, or application. **Propose** allows AI and system automation to suggest structure, sync, publishing actions, or marketplace preparation. **Consent** gates manuscript changes, account connections, external sync, release, pricing, rights, public visibility, and money movement. **Act** performs the approved operation through the correct provider. **Verify** checks files, builds, rendered proofs, sync results, permissions, and external publication state. **Record** preserves provenance, release metadata, audit history, and durable references. **Return** brings the result back into the workspace with a clear state and next owner.

To reproduce the hosted CI verification gate, use Node.js 22, Python 3,
and the package manager version declared in `package.json`:

```bash
corepack enable
corepack prepare pnpm@10.0.0 --activate
test "$(pnpm config get ignore-scripts)" = "true"
pnpm install --frozen-lockfile --ignore-scripts
pnpm run lint
pnpm run typecheck
pnpm -r --if-present test
pnpm run build
python3 -m unittest discover -s tests -v
node scripts/smoke-web-home.mjs
git diff --check
test -z "$(git status --porcelain)"
```

Run the final clean-tree assertion from a clean committed checkout. While
preparing a commit, use `git status --short` and confirm that only the intended
files are changed.

### Local web entry point

The web application now serves a real `/` page from
[`apps/web-os/app/page.tsx`](apps/web-os/app/page.tsx). Run `pnpm run dev`
after installing dependencies to inspect the **Phase 0.1 informational shell**.
It does not implement manuscript editing, storage sync, marketplace listings,
publication, or royalty settlement. The hosted verification workflow builds
the web application and smoke-tests that the root URL returns HTTP 200 with a
a heading in the served document markup, rather than accepting a
404-only Next.js build.

The federation manifest also runs the same `node scripts/smoke-web-home.mjs`
gate after its build, so federation verification rejects a 404-only homepage.
The smoke script starts a loopback-only server on an ephemeral port and checks
HTTP 200 plus the expected heading on the requested root URL. It ignores
heading-shaped text inside HTML comments, scripts, styles, and templates to
avoid false positives from inert markup. This is a static response check, not
a browser-based CSS visibility or accessibility audit. It rejects HTTP
redirects instead of following them to a different page that could mask a
broken homepage. It retries transient HTTP 502/503/504 startup responses
until its 30-second deadline; unexpected statuses (including 404), wrong
headings, early process exits, and persistent startup failures remain errors.
Node.js 22, Corepack, installed workspace dependencies, and a completed
Next.js build are prerequisites. Hosted CI also runs fourteen dependency-free
regression tests for the smoke gate. Neither check proves manuscript editing,
external sync, publishing, or marketplace readiness.

### Implemented modules versus planned federation integrations

The Phase 0.1 homepage is an informational shell, not a connected publishing
service. [Canon intake](packages/federation-core/src/canon-intake.ts) currently
provides TypeScript record types, constructors, and immutable array-append
helpers; it does not persist records, authenticate users, enforce approval, or
apply proposed patches. [Storage core](packages/storage-core/src/index.ts)
declares local filesystem, GitHub, Google Drive, and federation-node adapters,
but marks **all four** `planned`, including local storage.
[Marketplace core](packages/marketplace-core/src/index.ts) explicitly declares
`implemented: false`. The [marketplace app](apps/marketplace/README.md),
[node agent](apps/node-agent/README.md), and
[BookSmith bridge](packages/booksmith-bridge/README.md) are reserved boundaries,
not operational integrations.

Federation discovery metadata is likewise distinct from working services:
[services.json](.aift/services.json) declares the repository service
`planned`, while [capabilities.json](.aift/capabilities.json) records
`verify` as `planned` and `test`/`build` as `detected`, even though the
separate pnpm and hosted CI verification commands documented above are
executable. The sibling-repository mapping in
[federation.config.json](federation.config.json) expresses intended ownership
and integration relationships, not proof of live APIs, storage sync, identity
enforcement, publication, or settlement. Verify those functions independently
before describing them as available.

**Federation configuration schema boundary:** [`federation.config.json`](federation.config.json) references `./schemas/federation-config.schema.json` in its `$schema` field, but that local schema file is absent from the tracked repository tree. The [Workspace Verification workflow](.github/workflows/verify.yml) does not explicitly validate the configuration against a JSON Schema. Passing CI therefore does not establish schema-validated repository relationships or executable cross-repository integrations; those require a tracked schema, a verification gate, and independent integration evidence.

### GitHub Pages deployment boundary

The [Deploy GitHub Pages workflow](.github/workflows/deploy-pages.yml) is **manual** (`workflow_dispatch`), not part of the [Workspace Verification workflow](.github/workflows/verify.yml). It copies `docs/` into a Pages artifact and deploys that artifact; it does **not** build or publish the Next.js application in `apps/web-os/`. The deployed documentation entry point, [`docs/index.html`](docs/index.html), redirects to [`docs/federation-os-architecture.html`](docs/federation-os-architecture.html), rather than serving the Phase 0.1 web application.

A successful workspace build, homepage smoke test, or Pages deployment therefore proves only its respective build, local HTTP response, or documentation deployment step. None establishes that the interactive OS shell, publishing pipeline, marketplace, or production web application is deployed. Check the specific GitHub Actions run and the destination URL before claiming public availability; this repository does not perform a live post-deployment HTTP check in its Pages workflow.

### Verification scope and publishing authority

The root [`package.json`](package.json) pins **pnpm 10.0.0** and defines `lint`, `typecheck`, and `build` scripts, but **does not define a root `test` script**. The documented `pnpm -r --if-present test` step skips workspaces without tests; a successful exit is not evidence that automated tests ran. Inspect the output and test counts before reporting coverage. The web application at [`apps/web-os/package.json`](apps/web-os/package.json) uses Next.js, TypeScript, and ESLint; its `build` invokes `next build`, not a publication or marketplace release.

The [`aift.repo.json`](aift.repo.json) `verify` field invokes the pinned pnpm version through Corepack and requires lint, typecheck, and build. Workspace tests remain optional because the root package does not define a `test` script. The [Workspace Verification workflow](.github/workflows/verify.yml) runs a broader gate on pushes to `main` and pull requests: beyond the manifest's pnpm checks and homepage smoke test, hosted CI installs locked dependencies, runs Python smoke-gate regressions, and asserts a clean checkout. Those additional steps are absent from `aift.repo.json`'s `verify` command, so a successful manifest verification is not equivalent to the full hosted gate. A successful workflow does not prove publishing integrity, rights ownership, provenance, or external sync success. Inspect the actual workflow run and test counts before reporting coverage.

**Release boundary:** before external sync, publication, marketplace listing, or royalty settlement, obtain the author's or rights holder's approval and verify the target account, visibility, license, final artifact checksum or version, and provider-confirmed result. The repository's architectural descriptions are not evidence that such controls are already enforced end to end.

The operating system must never mistake a UI intention for a completed external action. A sync button has not synchronized until the provider confirms it. A published state is not real until the release exists at its destination. A generated figure is not part of the book until the author approves it. A marketplace listing is not a transfer of rights.

---

## Book IV — Knowledge That Can Move Without Being Lost

The long-term purpose of the publishing OS is portability with continuity. A book should be able to move from a local workspace to GitHub, Drive, a federation node, a print pipeline, a marketplace, or another storage adapter while retaining identity, provenance, rights, metadata, and an understandable relationship to its source.

That is why the economic protocol remains modular, the book engine remains distinct from the marketplace, and storage remains adapter-based. The system should be able to change providers without requiring the author to become someone else.

### The Return of the Word

In BookSmith Federation OS, the Word returns as a library that can remember where its books came from. Source enters the workspace, becomes organized knowledge, passes through human-governed intelligence and production, becomes a release, and returns as an owned, portable, attributable work. The operating system serves the book by preserving the relationships around it rather than surrounding it with a platform that cannot be escaped.
