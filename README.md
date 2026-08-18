# BookSmith Federation OS — Sovereign Knowledge Workspace

**The publishing federation layer of the AI Freedom Trust Federation: a local-first book operating system for workspaces, libraries, publishing pipelines, identity, sync, marketplace coordination, and federated knowledge infrastructure.**

| Federation metadata | Value |
| --- | --- |
| Layer | `publishing` |
| Role | book operating system and publishing federation layer |
| Workspace | `AIFT/BookSmith-Federation-OS` |
| Control plane | AIFT workspace / AIFT-OS |
| Verification | lint, typecheck, tests, and build when present |
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

The repository-level verification contract follows its metadata:

```bash
npm run lint --if-present
npm run typecheck --if-present
npm run test --if-present
npm run build --if-present
```

The operating system must never mistake a UI intention for a completed external action. A sync button has not synchronized until the provider confirms it. A published state is not real until the release exists at its destination. A generated figure is not part of the book until the author approves it. A marketplace listing is not a transfer of rights.

---

## Book IV — Knowledge That Can Move Without Being Lost

The long-term purpose of the publishing OS is portability with continuity. A book should be able to move from a local workspace to GitHub, Drive, a federation node, a print pipeline, a marketplace, or another storage adapter while retaining identity, provenance, rights, metadata, and an understandable relationship to its source.

That is why the economic protocol remains modular, the book engine remains distinct from the marketplace, and storage remains adapter-based. The system should be able to change providers without requiring the author to become someone else.

### The Return of the Word

In BookSmith Federation OS, the Word returns as a library that can remember where its books came from. Source enters the workspace, becomes organized knowledge, passes through human-governed intelligence and production, becomes a release, and returns as an owned, portable, attributable work. The operating system serves the book by preserving the relationships around it rather than surrounding it with a platform that cannot be escaped.
