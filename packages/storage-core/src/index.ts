export type StorageAdapterKind = "local-filesystem" | "github" | "google-drive" | "federation-node";

export interface StorageAdapterManifest {
  id: string;
  kind: StorageAdapterKind;
  displayName: string;
  required: boolean;
  status: "planned" | "available" | "disabled";
}

export const plannedStorageAdapters: StorageAdapterManifest[] = [
  { id: "local", kind: "local-filesystem", displayName: "Local Filesystem", required: true, status: "planned" },
  { id: "github", kind: "github", displayName: "GitHub", required: false, status: "planned" },
  { id: "google-drive", kind: "google-drive", displayName: "Google Drive", required: false, status: "planned" },
  { id: "federation-node", kind: "federation-node", displayName: "Federation Node", required: false, status: "planned" },
];
