# Exercise 4 - Optimizing Large Repository Navigation

> Goal: Use discovery prompts and repository search to find the right anchor before asking Copilot to reason deeply.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

A new developer joins the Benefits team and needs to find where merchant settlement fees are calculated in a large monorepo.

## Step 0 - Avoid the Broad Prompt

```text
#codebase Explain everything about merchant settlement fee calculation and update it for the new policy.
```

This combines discovery, explanation, implementation, and policy interpretation in one expensive turn.

## Step 1 - Ask for File Discovery Only

```text
Find likely files for merchant settlement fee calculation.
Return only file paths and why each is relevant.
Do not propose code yet.
```

## Step 2 - Ask for a Plan on the Best Anchor

```text
Using #file:services/settlement/src/fees/FeeCalculator.ts, explain where to apply policy `FEE-2026-04`.
Return a 3-step edit plan. No edits yet.
```

## Step 3 - Implement Only After the Plan Is Specific

Use Edit or Agent mode only after you have a small file list and validation command.

## Validate

Your workflow should separate discovery, planning, and implementation into different turns.

## Token Savings Analysis

Expected savings: 40-80% across the workflow because broad repo context is avoided until necessary.

## Done?

Next: [Exercise 5 - Using Copilot Instructions Effectively](exercise-5.md)
