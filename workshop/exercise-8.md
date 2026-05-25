# Exercise 8 - Efficient Refactoring and Multi-File Operations

> Goal: Break multi-file work into planned, scoped, validated steps instead of one broad request.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Identity team needs to rename a shared claim status enum across API, frontend, and tests without inviting Copilot to rewrite unrelated files.

## Step 0 - Avoid the Broad Refactor Prompt

```text
#codebase Refactor all claim status naming everywhere, update tests, docs, and CI.
```

## Step 1 - Ask for a Plan Only

```text
Plan only: rename `PENDING_REVIEW` to `AWAITING_REVIEW`.
Scope: #file:services/claims-api/src/domain/ClaimStatus.ts #file:apps/admin-portal/src/claims/statusLabels.ts
Return: ordered file list and validation command. No edits yet.
```

## Step 2 - Apply One Edit Slice

```text
Apply step 1 only to #file:ClaimStatus.ts and update co-located tests.
Return diff summary and validation command.
```

## Step 3 - Validate Before Continuing

Run the focused test or type-check command before expanding the scope.

## Validate

Your workflow should include a plan, a small edit slice, and a validation command.

## Token Savings Analysis

Expected savings: 30-65% across the refactor, plus lower review risk.

## Done?

Next: [Exercise 9 - Creating Reusable Prompt Templates and Skills](exercise-9.md)
