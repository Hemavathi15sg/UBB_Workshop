export interface BenefitSummaryProps {
  customerName: string;
  availableBalanceCents: number;
}

export function BenefitSummary(props: BenefitSummaryProps) {
  return {
    type: "article",
    props: {
      children: `${props.customerName} has ${props.availableBalanceCents} cents available.`
    }
  };
}
