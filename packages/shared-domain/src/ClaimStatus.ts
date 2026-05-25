export const claimStatuses = ["SUBMITTED", "PENDING_REVIEW", "APPROVED", "REJECTED"] as const;

export type ClaimStatus = (typeof claimStatuses)[number];

export function isClaimStatus(value: string): value is ClaimStatus {
  return claimStatuses.includes(value as ClaimStatus);
}
