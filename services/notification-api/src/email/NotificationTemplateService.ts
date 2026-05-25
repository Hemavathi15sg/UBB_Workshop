export interface NotificationTemplateInput {
  customerName: string;
  claimId: string;
  status: string;
}

export function renderClaimStatusEmail(input: NotificationTemplateInput): string {
  return `Hello ${input.customerName}, claim ${input.claimId} is currently ${input.status}.`;
}
