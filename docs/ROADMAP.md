# BookSmith Federation OS Roadmap

This roadmap organizes the work around the OS as the federation desktop. BookSmith remains one built-in application and publishing engine rather than the name of the whole platform.

## Phase 0 — Foundation

Goal: establish the minimum local-first desktop operating environment.

- Desktop shell
- Window manager
- Dock
- App launcher
- User workspace
- Settings
- Local-first storage

### Exit criteria

- A user can open the OS shell.
- Apps can be represented as launchable modules.
- Workspace state can be stored locally.
- Settings can be read and updated.
- The UI clearly separates the operating system from individual apps.

## Phase 1 — Knowledge

Goal: make the OS useful for collecting, browsing, searching, and reasoning over knowledge sources.

- Library Studio
- Manuscript Studio
- AI Chat
- Upload Center
- Google Drive integration
- GitHub integration
- Local filesystem browser
- Search

### Exit criteria

- A user can create or open a library workspace.
- A user can import or register manuscripts, documents, and source material.
- A user can search across local workspace records.
- AI chat can reason over selected user-approved context.
- Cloud and GitHub integrations remain optional adapters.

## Phase 2 — Publishing

Goal: connect the OS to the publishing engine and make BookSmith a first-class built-in app.

- BookSmith AI integration
- Figure Studio
- Citation Studio
- Proof Studio
- Publishing Studio
- Release Manager

### Exit criteria

- BookSmith projects can be opened from the OS.
- Manuscripts can move through proofing and publishing workflows.
- Figures, citations, proofs, and releases have visible provenance.
- Publishing actions produce inspectable release records.

## Phase 3 — Federation

Goal: let users and organizations manage federated repositories, shared libraries, identities, and sync relationships.

- Repository Manager
- Federation Hub
- Organization management
- Shared libraries
- Synchronization
- Identity

### Exit criteria

- A user can connect or create repository-backed workspaces.
- Organizations and trust identities can be represented.
- Shared libraries can be discovered or registered.
- Sync is explicit, reviewable, and reversible.

## Phase 4 — Marketplace

Goal: create the author/publisher marketplace layer for books, licenses, storefronts, and analytics.

- Author dashboard
- Publisher dashboard
- Storefronts
- Licensing
- Orders
- Royalties
- Analytics

### Exit criteria

- Published works can become marketplace listings.
- Authors and publishers can manage storefront metadata.
- Orders, licenses, and royalties can be tracked.
- Analytics can be displayed without compromising author sovereignty.

## Phase 5 — Federation Economy

Goal: connect marketplace activity to the federation economy while keeping the economic protocol modular.

- Wallets
- Treasury
- Organization accounting
- Biozone currency integration
- Marketplace settlement
- Trust governance

### Exit criteria

- Wallet and treasury interfaces exist as modular adapters.
- Marketplace settlement can be tracked through conventional and federation-native rails.
- Organization accounting and governance actions produce audit records.
- Biozone currency integration remains separate from the publishing engine.

## Product naming rule

Use **BookSmith Federation OS** for the operating environment.

Use **BookSmith** or **BookSmith AI** for the publishing application and engine.

This keeps the long-term architecture clean:

```text
Operating system: BookSmith Federation OS
Flagship app:     BookSmith
Engine:           booksmith-ai
Infrastructure:   AIFT-Forge
Governance:       AI-Freedom-Trust
Economy:          Aether_Coin_biozonecurrency
Public portal:    www.aifreedomtrust.com
```
