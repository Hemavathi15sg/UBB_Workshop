# Exercise 3 - Reducing Unnecessary Context

> Goal: Practice selecting the smallest useful Copilot context for debugging and implementation.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Payments team often uses `#codebase` for every bug. Copilot answers are long and sometimes mix current implementation with legacy code.

## Step 0 - Start with the Wasteful Pattern

```text
#codebase Why is card authorization failing? Look everywhere and fix it.
```

This prompt creates three risks: broad retrieval, unclear ownership, and unbounded edits.

## Step 1 - Scope the Investigation

```text
Why does this test fail?
#file:services/payments-api/src/authorization/CardAuthorizationService.test.ts
#file:services/payments-api/src/authorization/CardAuthorizationService.ts

Do not inspect `legacy-benefits-engine` unless both files are insufficient.
Return: root cause and smallest code change.
```

## Step 2 - Use the Context Escalation Ladder

```text
#selection -> #file -> related #file -> #changes/#problems -> targeted search -> #codebase
```

Add context only when the previous answer proves it is needed.

## Validate

Confirm that your prompt includes:

- A failing test or selected error.
- One implementation file.
- An explicit exclusion.
- A bounded output request.

## Token Savings Analysis

Expected savings: 60-90% versus whole-codebase retrieval in a large repository.

## Done?

Next: [Exercise 4 - Optimizing Large Repository Navigation](exercise-4.md)
