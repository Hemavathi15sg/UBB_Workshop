export interface CardAuthorizationRequest {
  customerId: string;
  amountCents: number;
  availableBalanceCents: number;
  merchantCategory: string;
}

export interface CardAuthorizationResult {
  approved: boolean;
  reason: "APPROVED" | "INSUFFICIENT_FUNDS" | "UNSUPPORTED_MERCHANT";
}

const supportedMerchantCategories = new Set(["GROCERY", "PHARMACY", "TRANSIT", "HEALTHCARE"]);

export function authorizeCard(request: CardAuthorizationRequest): CardAuthorizationResult {
  if (!supportedMerchantCategories.has(request.merchantCategory)) {
    return { approved: false, reason: "UNSUPPORTED_MERCHANT" };
  }

  if (request.amountCents > request.availableBalanceCents) {
    return { approved: false, reason: "INSUFFICIENT_FUNDS" };
  }

  return { approved: true, reason: "APPROVED" };
}
