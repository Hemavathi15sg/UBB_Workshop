import { describe, expect, it } from "vitest";
import { authorizeCard } from "./CardAuthorizationService";

describe("authorizeCard", () => {
  it("approves supported merchant transactions within balance", () => {
    expect(
      authorizeCard({
        customerId: "cust_42",
        amountCents: 1200,
        availableBalanceCents: 2000,
        merchantCategory: "GROCERY"
      })
    ).toEqual({ approved: true, reason: "APPROVED" });
  });

  it("declines unsupported merchant categories", () => {
    expect(
      authorizeCard({
        customerId: "cust_42",
        amountCents: 1200,
        availableBalanceCents: 2000,
        merchantCategory: "ENTERTAINMENT"
      })
    ).toEqual({ approved: false, reason: "UNSUPPORTED_MERCHANT" });
  });
});
