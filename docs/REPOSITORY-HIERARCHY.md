# AI Freedom Trust Federation Repository Hierarchy

BookSmith Federation OS is the orchestration desktop for the wider AI Freedom Trust Federation repository family.

It should coordinate the ecosystem without absorbing or replacing the specialist repositories.

```text
AI Freedom Trust Federation

├── BookSmith-Federation-OS     ← The operating system desktop
├── booksmith-ai                ← Publishing engine
├── AIFT-Forge                  ← Git, registry, and federation infrastructure
├── AI-Freedom-Trust            ← Constitution, doctrine, and governance
├── Aether_Coin_biozonecurrency ← Economic protocol
└── www.aifreedomtrust.com      ← Public portal
```

## Separation of responsibilities

### BookSmith-Federation-OS

The desktop operating environment. It provides the workspace, window manager, app launcher, dock, settings, local-first storage, search, and user-facing orchestration of the federation apps.

### booksmith-ai

The publishing engine. It remains focused on manuscripts, books, sources, citations, proofing, builds, release packets, and publishing workflows.

### AIFT-Forge

The Git, registry, package, artifact, build, and federation infrastructure layer. It should power repository management and federation-native source control without forcing everything through GitHub.

### AI-Freedom-Trust

The constitution, doctrine, governance, alignment, and stewardship repository. It should define the covenant logic, policy boundaries, trust principles, and federation governance model.

### Aether_Coin_biozonecurrency

The economic protocol layer. It should define wallets, treasury, accounting, biozone currency primitives, marketplace settlement, and trust-governed value flows.

### www.aifreedomtrust.com

The public portal. It should expose mission pages, published public works, marketplace entry points, federation onboarding, documentation, and public-facing trust information.

## Architectural rule

BookSmith Federation OS should be the **desktop**, not the entire federation.

It may import, invoke, index, sync with, or present data from the other repositories, but it should not collapse them into one monolith.

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

## Integration posture

Each external repository should be integrated through explicit adapters, manifests, registries, or APIs.

The OS should know what each app is, where its source lives, what capabilities it exposes, what data it needs, what data it writes, and what provenance record is created when an action occurs.
