# BookSmith Federation OS Architecture

BookSmith Federation OS is a local-first, AI-native, federated desktop environment for creating, organizing, publishing, preserving, synchronizing, and monetizing human knowledge.

The central architectural decision is simple:

> BookSmith Federation OS is the operating system. BookSmith is one flagship built-in application.

## Desktop model

```text
BookSmith Federation OS

Desktop
│
├── 📚 BookSmith
├── 🤖 AI Studio
├── 📁 Repository Manager
├── ☁ Drive
├── 🛒 Marketplace
├── 💼 Wallet
├── 🌐 Federation Hub
├── ⚙ System
└── 🔍 Search
```

The desktop provides the shared shell, app frame, identity context, local storage, search, task center, notifications, and integration layer.

Applications plug into the OS rather than becoming the OS.

## Core layers

### 1. Desktop shell

The shell owns the visible operating environment.

Responsibilities:

- desktop layout
- window manager
- dock
- app launcher
- command palette
- task center
- notifications
- system settings
- app permissions

### 2. Workspace layer

The workspace layer owns local-first user state.

Responsibilities:

- user workspace records
- local libraries
- project registry
- source registry
- upload records
- settings storage
- recent activity
- local search index

### 3. Application layer

The application layer owns user-facing modules.

Initial apps:

- BookSmith
- AI Studio
- Repository Manager
- Drive
- Marketplace
- Wallet
- Federation Hub
- System
- Search

Each app should declare:

- app id
- display name
- icon
- permissions
- routes
- storage needs
- integration adapters
- provenance events it may emit

### 4. Adapter layer

Adapters connect the OS to external systems while keeping the core local-first.

Initial adapters:

- local filesystem adapter
- GitHub adapter
- Google Drive adapter
- BookSmith AI adapter
- AIFT-Forge adapter
- marketplace adapter
- wallet/economy adapter

Adapters must be optional unless a specific workflow requires them.

### 5. Provenance and approval layer

The OS must preserve the federation canon rule:

```text
User input = accepted canon
AI output = proposal until approved
```

AI-generated edits, imports, transformations, figure prompts, citations, releases, and sync actions should produce inspectable records.

## Repository boundaries

BookSmith Federation OS should not duplicate specialized logic from sibling repositories.

Instead:

- Use `booksmith-ai` for the publishing engine.
- Use `AIFT-Forge` for Git, registry, artifact, package, and federation infrastructure.
- Use `AI-Freedom-Trust` for doctrine, constitution, governance, and alignment rules.
- Use `Aether_Coin_biozonecurrency` for economic protocol primitives.
- Use `www.aifreedomtrust.com` for public portal and public marketplace surfaces.

## Suggested monorepo shape

```text
BookSmith-Federation-OS/
├── apps/
│   └── web-os/                 # desktop shell and primary UI
├── packages/
│   ├── desktop-core/           # window manager, launcher, dock, shell state
│   ├── workspace-core/         # local-first workspace model and storage
│   ├── app-registry/           # built-in app manifests and permissions
│   ├── search-core/            # indexing and query interfaces
│   ├── federation-core/        # identity, orgs, sync, shared libraries
│   ├── booksmith-bridge/       # adapter to booksmith-ai
│   ├── forge-bridge/           # adapter to AIFT-Forge
│   ├── drive-bridge/           # Google Drive adapter boundary
│   ├── github-bridge/          # GitHub adapter boundary
│   ├── marketplace-core/       # listings, orders, royalties, licensing
│   ├── wallet-core/            # treasury, accounting, settlement interfaces
│   └── ui/                     # shared UI primitives
├── docs/
├── scripts/
└── federation.config.json
```

## First implementation priority

Build the smallest honest desktop shell first.

Do not start with marketplace, wallets, or deep federation sync until the OS can reliably:

1. render a desktop shell,
2. launch apps,
3. persist local workspace state,
4. show settings,
5. represent BookSmith as an app rather than the whole platform,
6. expose provenance and approval boundaries for AI output.

## Non-goals for the foundation phase

- Do not rebuild the publishing engine inside this repo.
- Do not hardwire one cloud provider as mandatory.
- Do not make AI output canonical without user approval.
- Do not mix economy, governance, publishing, and infrastructure into one unbounded module.
- Do not replace the sibling repositories.

## Architectural north star

The OS should make the federation feel like a sovereign web computer:

- local-first workspace
- modular apps
- inspectable AI
- repository-backed knowledge
- optional federation sync
- optional marketplace publishing
- optional economy integration
- user-approved provenance at every boundary
