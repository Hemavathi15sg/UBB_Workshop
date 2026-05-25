# Demo Repository Structure

Use this structure for lab setup or as a reference when adapting the workshop to a customer repository.

```text
unified-benefits-banking/
├── .github/
│   ├── workflows/
│   │   ├── ci-payments.yml
│   │   ├── ci-claims.yml
│   │   └── release-prod.yml
│   ├── copilot-instructions.md
│   └── CODEOWNERS
├── apps/
│   ├── admin-portal/
│   │   ├── src/claims/ClaimStatusPanel.tsx
│   │   ├── src/payments/CheckoutDashboard.tsx
│   │   └── src/shared/statusLabels.ts
│   └── customer-portal/
│       └── src/benefits/BenefitSummary.tsx
├── services/
│   ├── payments-api/
│   │   ├── src/checkout/CheckoutService.ts
│   │   ├── src/authorization/CardAuthorizationService.ts
│   │   ├── src/settlement/FeeCalculator.ts
│   │   └── tests/checkout.test.ts
│   ├── claims-api/
│   │   ├── src/controllers/ClaimsController.ts
│   │   ├── src/services/ClaimStatusService.ts
│   │   └── tests/claim-status.test.ts
│   ├── identity-api/
│   │   └── src/tokens/TokenExchangeService.ts
│   └── notification-api/
│       └── src/email/NotificationTemplateService.ts
├── packages/
│   ├── shared-domain/
│   │   └── src/ClaimStatus.ts
│   └── design-system/
│       └── src/components/StatusBadge.tsx
├── database/
│   ├── migrations/
│   ├── stored-procedures/
│   └── seed/
├── legacy-benefits-engine/
│   ├── batch/
│   ├── soap-adapter/
│   └── README.md
├── docs/
│   ├── adr/
│   ├── runbooks/
│   ├── api/
│   └── onboarding/
├── prompts/
│   ├── api-endpoint.prompt.md
│   ├── refactor-plan.prompt.md
│   └── incident-triage.prompt.md
├── agents/
│   ├── payment-defect-triage.agent.md
│   └── release-readiness.agent.md
└── skills/
    ├── claims-domain/SKILL.md
    └── incident-summary/SKILL.md
```

## Naming Conventions

| Asset | Convention | Example |
| --- | --- | --- |
| Service | `<domain>-api` | `payments-api` |
| Prompt | `<workflow>.prompt.md` | `api-endpoint.prompt.md` |
| Agent | `<purpose>.agent.md` | `payment-defect-triage.agent.md` |
| Skill | `<domain>/SKILL.md` | `claims-domain/SKILL.md` |
| Runbook | `<service>-<scenario>.md` | `payments-checkout-latency.md` |

## Mock Enterprise Services

| Service | Team | Workshop use |
| --- | --- | --- |
| Payments API | Payments | Checkout debugging, authorization, settlement fee refactor. |
| Claims API | Claims | Endpoint generation and status workflow. |
| Identity API | Security | Token exchange and governance examples. |
| Admin Portal | Frontend | Multi-file refactoring and UI label updates. |
| Legacy Benefits Engine | Modernization | Context exclusion and legacy boundary examples. |
