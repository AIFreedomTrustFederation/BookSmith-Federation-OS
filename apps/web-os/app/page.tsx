const capabilities = [
  {
    name: "Canon intake",
    state: "Scaffolded",
    detail: "Typed records and proposed-patch structures exist in federation-core; no connected editing workflow is provided here yet.",
  },
  {
    name: "Storage and sync",
    state: "Planned",
    detail: "Adapter manifests describe possible providers, but do not establish working connections.",
  },
  {
    name: "Marketplace",
    state: "Planned",
    detail: "Listings, publication, rights verification, and settlement are not implemented by this shell.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="workspace">
      <header className="intro">
        <p className="eyebrow">AI Freedom Trust Federation · Phase 0.1</p>
        <h1>BookSmith Federation OS</h1>
        <p className="lead">
          A local-first publishing workspace foundation. This is an informational
          entry point, not a connected manuscript editor or marketplace.
        </p>
        <a href="https://github.com/AIFreedomTrustFederation/BookSmith-Federation-OS">
          Explore the repository and documentation
        </a>
      </header>
      <section aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading">Current implementation boundaries</h2>
        <ul className="capabilities">
          {capabilities.map((capability) => (
            <li key={capability.name}>
              <h3>{capability.name}</h3>
              <p className="status">{capability.state}</p>
              <p>{capability.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
