import { describe, expect, it } from "vitest";
import { ClaimsController } from "../src/controllers/ClaimsController";

describe("ClaimsController", () => {
  it("returns claim status for existing claim", async () => {
    const controller = new ClaimsController();

    await expect(controller.getClaimStatus("clm_1001")).resolves.toMatchObject({
      statusCode: 200,
      body: {
        claimId: "clm_1001",
        status: "PENDING_REVIEW"
      }
    });
  });

  it("returns 404 when claim is missing", async () => {
    const controller = new ClaimsController();

    await expect(controller.getClaimStatus("missing")).resolves.toMatchObject({
      statusCode: 404,
      body: {
        error: "CLAIM_NOT_FOUND"
      }
    });
  });
});
