export interface SettlementFeeInput {
  merchantId: string;
  amountCents: number;
  cardNetwork: "VISA" | "MASTERCARD" | "AMEX";
  crossBorder: boolean;
}

export interface SettlementFeeResult {
  feeCents: number;
  policyCode: string;
}

const networkBasisPoints: Record<SettlementFeeInput["cardNetwork"], number> = {
  VISA: 180,
  MASTERCARD: 190,
  AMEX: 240
};

export function calculateSettlementFee(input: SettlementFeeInput): SettlementFeeResult {
  const networkFee = Math.ceil((input.amountCents * networkBasisPoints[input.cardNetwork]) / 10000);
  const crossBorderFee = input.crossBorder ? 35 : 0;

  return {
    feeCents: networkFee + crossBorderFee,
    policyCode: "FEE-2025-11"
  };
}
