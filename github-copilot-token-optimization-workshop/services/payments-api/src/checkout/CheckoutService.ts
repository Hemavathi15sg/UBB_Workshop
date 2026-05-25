import { CheckoutRepository } from "./CheckoutRepository";

export interface CheckoutSummary {
  checkoutId: string;
  status: "READY" | "BLOCKED" | "REVIEW";
  message: string;
}

export class CheckoutService {
  constructor(private readonly repository = new CheckoutRepository()) {}

  async getCheckoutSummary(checkoutId: string): Promise<CheckoutSummary> {
    const record = await this.repository.findById(checkoutId);

    if (!record) {
      return {
        checkoutId,
        status: "BLOCKED",
        message: "Checkout was not found"
      };
    }

    if (record.authorizationStatus === "PENDING") {
      return {
        checkoutId,
        status: "REVIEW",
        message: "Authorization is still pending"
      };
    }

    if (record.authorizationStatus === "DECLINED") {
      return {
        checkoutId,
        status: "BLOCKED",
        message: "Authorization was declined"
      };
    }

    return {
      checkoutId,
      status: "READY",
      message: "Checkout can continue"
    };
  }
}
