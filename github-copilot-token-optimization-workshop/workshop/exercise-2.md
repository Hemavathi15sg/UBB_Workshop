# Exercise 2 - Writing Concise High-Quality Prompts

> Goal: Convert vague, wordy prompts into structured prompts that preserve intent while reducing token waste.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Claims team frequently asks Copilot to generate boilerplate and then spends time correcting verbose or misdirected responses. The issue is not that prompts are too short; it is that prompts mix filler with unclear scope.

## Step 0 - Run the Inefficient Prompt

```text
Hi Copilot, I need help with something in our claims service. Could you please look at the code and maybe create a new endpoint that lets users get claim status? Make sure it is good and follows our patterns.
```

Identify the weak parts:

- No exact route.
- No target files.
- No acceptance criteria.
- “Good” and “our patterns” are vague.

## Step 1 - Rewrite the Prompt

Use this optimized version:

```text
Add `GET /claims/{claimId}/status` to the claims API.
Scope: #file:services/claims-api/src/controllers/ClaimsController.ts #file:services/claims-api/src/services/ClaimStatusService.ts
Constraints: follow existing error format, no new dependencies.
Return: patch plus tests only.
```

## Step 2 - Apply the Prompt Pattern

Use this reusable structure for your own prompt:

```text
Task: <one sentence>
Scope: #file:<path> #file:<path>
Constraints: <rules and exclusions>
Acceptance: <observable result>
Output: <plan only | patch | table | bullets>
```

## Validate

Your optimized prompt should be shorter, more specific, and easier for Copilot to answer without follow-up repair turns.

## Token Savings Analysis

Expected savings: 20-60% for prompt and context, with additional savings if follow-up turns are avoided.

## Done?

Next: [Exercise 3 - Reducing Unnecessary Context](exercise-3.md)
