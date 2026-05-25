import type { ClaimStatus } from "../../../../packages/shared-domain/src/ClaimStatus";

export const claimStatusLabels: Record<ClaimStatus, string> = {
  SUBMITTED: "Submitted",
  PENDING_REVIEW: "Pending review",
  APPROVED: "Approved",
  REJECTED: "Rejected"
};
