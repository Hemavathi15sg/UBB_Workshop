export interface CheckoutDashboardProps {
  readyCount: number;
  reviewCount: number;
  blockedCount: number;
}

export function CheckoutDashboard(props: CheckoutDashboardProps) {
  return {
    type: "dl",
    props: {
      children: [
        ["Ready", props.readyCount],
        ["Review", props.reviewCount],
        ["Blocked", props.blockedCount]
      ]
    }
  };
}
