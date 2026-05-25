import { ClaimStatusService } from "../services/ClaimStatusService";

export interface HttpResponse<TBody> {
  statusCode: number;
  body: TBody;
}

export class ClaimsController {
  constructor(private readonly claimStatusService = new ClaimStatusService()) {}

  async getClaimStatus(claimId: string): Promise<HttpResponse<unknown>> {
    const status = await this.claimStatusService.getStatus(claimId);

    if (!status) {
      return {
        statusCode: 404,
        body: {
          error: "CLAIM_NOT_FOUND",
          message: `Claim ${claimId} was not found`
        }
      };
    }

    return {
      statusCode: 200,
      body: status
    };
  }
}
