export function mapLegacyBenefitStatus(statusCode: string): string {
  const statusMap: Record<string, string> = {
    A: "ACTIVE",
    S: "SUSPENDED",
    T: "TERMINATED"
  };

  return statusMap[statusCode] ?? "UNKNOWN";
}
