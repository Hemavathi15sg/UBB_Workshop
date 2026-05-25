# Exercise 9 - Creating Reusable Prompt Templates and Skills

> Goal: Turn repeated Copilot workflows into reusable prompt templates and skill-style guidance.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

Multiple teams repeatedly ask Copilot to create API endpoints, tests, PR descriptions, and runbook updates. Prompt quality varies widely.

## Step 0 - Identify Repeated Workflows

Choose three repeated tasks:

| Workflow | Example |
| --- | --- |
| API endpoint | Add route, service method, tests. |
| Refactor plan | Rename symbol across bounded files. |
| PR description | Summarize `#changes` with risk and validation. |

## Step 1 - Create a Prompt Template

```markdown
# API Endpoint Prompt
Task:
Scope:
Acceptance criteria:
Constraints:
Validation command:
Output required:
```

## Step 2 - Invoke the Template Concisely

```text
/api-endpoint
Task: add status endpoint for claims.
Scope: #file:ClaimsController.ts #file:ClaimStatusService.ts
Acceptance: returns 200, 404, and audit event.
```

## Validate

The reusable prompt should remove repeated explanation while preserving task-critical fields.

## Token Savings Analysis

Expected savings: 15-50% per repeated workflow, with improved consistency across teams.

## Done?

Next: [Exercise 10 - Enterprise Token Governance and Best Practices](exercise-10.md)
