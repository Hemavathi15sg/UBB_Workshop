import type { Claim } from "../domain/Claim";

const claims: Claim[] = [
  {
    claimId: "clm_1001",
    customerId: "cust_42",
    status: "PENDING_REVIEW",
    submittedAt: "2026-05-01T10:30:00Z",
    updatedAt: "2026-05-03T14:00:00Z"
  }
];

export interface ClaimStatusResponse {
  claimId: string;
  status: Claim["status"];
  updatedAt: string;
}

export class ClaimStatusService {
  async getStatus(claimId: string): Promise<ClaimStatusResponse | undefined> {
    const claim = claims.find((item) => item.claimId === claimId);

    if (!claim) {
      return undefined;
    }

    return {
      claimId: claim.claimId,
      status: claim.status,
      updatedAt: claim.updatedAt
    };
  }
}
