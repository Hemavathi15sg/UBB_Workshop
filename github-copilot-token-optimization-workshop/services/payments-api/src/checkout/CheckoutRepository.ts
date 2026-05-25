export interface CheckoutRecord {
  checkoutId: string;
  customerId: string;
  amountCents: number;
  merchantCategory: string;
  authorizationStatus: "APPROVED" | "DECLINED" | "PENDING";
}

const checkoutRecords: CheckoutRecord[] = [
  {
    checkoutId: "chk_1001",
    customerId: "cust_42",
    amountCents: 1299,
    merchantCategory: "GROCERY",
    authorizationStatus: "APPROVED"
  }
];

export class CheckoutRepository {
  async findById(checkoutId: string): Promise<CheckoutRecord | undefined> {
    return checkoutRecords.find((record) => record.checkoutId === checkoutId);
  }

  async save(record: CheckoutRecord): Promise<CheckoutRecord> {
    const existingIndex = checkoutRecords.findIndex((item) => item.checkoutId === record.checkoutId);
    if (existingIndex >= 0) {
      checkoutRecords[existingIndex] = record;
      return record;
    }

    checkoutRecords.push(record);
    return record;
  }
}
