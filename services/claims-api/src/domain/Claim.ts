import type { ClaimStatus } from "../../../../packages/shared-domain/src/ClaimStatus";

export interface Claim {
  claimId: string;
  customerId: string;
  status: ClaimStatus;
  submittedAt: string;
  updatedAt: string;
}
