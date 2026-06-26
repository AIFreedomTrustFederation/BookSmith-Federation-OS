export interface ModuleBoundary {
  name: string;
  phase: string;
  implemented: boolean;
}

export const marketplaceCoreBoundary: ModuleBoundary = {
  name: "marketplace-core",
  phase: "Phase 4",
  implemented: false,
};
