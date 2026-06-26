export const CANON_RULE = {
  userInput: "accepted-canon",
  aiOutput: "proposed-patch-until-approved",
} as const;

export type CanonIntakeKind = "paste" | "upload";

export type CanonSourceStatus = "accepted-canon";

export type ProposedPatchStatus = "proposed" | "approved" | "rejected" | "applied";

export interface CanonIntakeRecord {
  id: string;
  kind: CanonIntakeKind;
  title: string;
  status: CanonSourceStatus;
  createdAt: string;
  createdBy: string;
  contentType: string;
  sourceName?: string;
  tags: string[];
  checksum?: string;
  notes?: string;
}

export interface ProposedPatchRecord {
  id: string;
  canonRecordId: string;
  status: ProposedPatchStatus;
  createdAt: string;
  createdBy: "ai" | "human";
  modelProvider?: string;
  modelName?: string;
  prompt?: string;
  summary: string;
  patch: string;
}

export interface CanonIntakeRegistry {
  version: "0.1";
  canonRule: typeof CANON_RULE;
  canonRecords: CanonIntakeRecord[];
  proposedPatches: ProposedPatchRecord[];
}

export function createEmptyCanonIntakeRegistry(): CanonIntakeRegistry {
  return {
    version: "0.1",
    canonRule: CANON_RULE,
    canonRecords: [],
    proposedPatches: [],
  };
}

export function createCanonIntakeRecord(
  input: Omit<CanonIntakeRecord, "status" | "createdAt"> & { createdAt?: string },
): CanonIntakeRecord {
  return {
    ...input,
    status: CANON_RULE.userInput,
    createdAt: input.createdAt ?? new Date().toISOString(),
  };
}

export function createProposedPatchRecord(
  input: Omit<ProposedPatchRecord, "status" | "createdAt"> & { createdAt?: string },
): ProposedPatchRecord {
  return {
    ...input,
    status: "proposed",
    createdAt: input.createdAt ?? new Date().toISOString(),
  };
}

export function addCanonRecord(
  registry: CanonIntakeRegistry,
  record: CanonIntakeRecord,
): CanonIntakeRegistry {
  return {
    ...registry,
    canonRecords: [...registry.canonRecords, record],
  };
}

export function addProposedPatch(
  registry: CanonIntakeRegistry,
  patch: ProposedPatchRecord,
): CanonIntakeRegistry {
  return {
    ...registry,
    proposedPatches: [...registry.proposedPatches, patch],
  };
}
