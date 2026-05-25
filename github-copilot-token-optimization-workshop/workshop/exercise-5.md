# Exercise 5 - Using Copilot Instructions Effectively

> Goal: Move repeated, stable project guidance into concise Copilot instructions without creating instruction bloat.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

Platform Engineering wants consistent Copilot behavior across teams without pasting coding standards into every chat.

## Step 0 - Identify Repeated Prompt Text

Wasteful prompt prefix:

```text
Before you answer, remember we use TypeScript, Node 20, Fastify, Postgres, Vitest, no classes unless necessary, no new dependencies, write behavioral tests, don't edit legacy folders, keep responses short, use existing error patterns, and ask questions when unsure. Now add an endpoint...
```

## Step 1 - Create Stable Instructions

Create `.github/copilot-instructions.md`:

```markdown
# Project: Unified Benefits Banking

Stack: TypeScript, Node 20, Fastify, Postgres, React, Vitest.
Style: async/await, small functions, existing service patterns first.
Tests: behavioral Vitest tests near changed code.
Do not add dependencies or edit `legacy-benefits-engine/*` unless requested.
When unsure, ask one clarifying question before editing.
Keep chat answers under 8 bullets unless asked for detail.
```

## Step 2 - Use a Short Task Prompt

```text
Add `GET /claims/{claimId}/status` using #file:ClaimsController.ts #file:ClaimStatusService.ts.
```

## Validate

Your instruction file should be short, durable, and free of task-specific details.

## Token Savings Analysis

Expected savings: 10-30% for repeated workflows, with better consistency from reusable guidance.

## Done?

Next: [Exercise 6 - Designing Token-Efficient Custom Agents](exercise-6.md)
