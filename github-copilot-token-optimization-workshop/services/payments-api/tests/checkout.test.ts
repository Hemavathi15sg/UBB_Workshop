import { describe, expect, it } from "vitest";
import { CheckoutService } from "../src/checkout/CheckoutService";

describe("CheckoutService", () => {
  it("returns ready when authorization is approved", async () => {
    const service = new CheckoutService();

    await expect(service.getCheckoutSummary("chk_1001")).resolves.toMatchObject({
      checkoutId: "chk_1001",
      status: "READY"
    });
  });

  it("blocks unknown checkout records", async () => {
    const service = new CheckoutService();

    await expect(service.getCheckoutSummary("missing")).resolves.toMatchObject({
      status: "BLOCKED"
    });
  });
});
