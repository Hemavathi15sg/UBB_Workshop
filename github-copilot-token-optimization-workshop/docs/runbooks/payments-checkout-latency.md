# Payments Checkout Latency Runbook

## Signals

- Increased latency on checkout summary calls.
- Authorization service dependency warnings.
- Elevated review status count.

## First Checks

1. Inspect `CheckoutService.ts` for status branching.
2. Review recent changes in authorization and settlement fee logic.
3. Avoid loading `legacy-benefits-engine` unless the issue crosses into batch settlement.
