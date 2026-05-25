import { claimStatusLabels } from "./statusLabels";
import type { ClaimStatus } from "../../../../packages/shared-domain/src/ClaimStatus";

export interface ClaimStatusPanelProps {
  claimId: string;
  status: ClaimStatus;
}

export function ClaimStatusPanel(props: ClaimStatusPanelProps) {
  return {
    type: "section",
    props: {
      "aria-label": `Claim ${props.claimId} status`,
      children: claimStatusLabels[props.status]
    }
  };
}
