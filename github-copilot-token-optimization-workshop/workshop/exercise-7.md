# Exercise 7 - Optimizing MCP and External Context Usage

> Goal: Use MCP selectively and summarize external context before combining it with code context.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Platform team connects Copilot to issue tracking, observability, and internal documentation through MCP. Capability improves, but every agent step becomes heavier when too many tools are enabled.

## Step 0 - Avoid All-Tools Prompts

```text
Use all MCP tools to investigate incident INC-1842 and fix the checkout bug.
```

## Step 1 - Fetch One Artifact Only

```text
Use only the incident MCP tool to fetch INC-1842 summary.
Return a 10-bullet technical summary with IDs, timestamps, error signatures, and affected service.
Do not fetch logs or docs yet.
```

## Step 2 - Use the Summary in a Code Prompt

```text
Using this incident summary and #file:CheckoutService.ts, propose the smallest diagnostic test.
Return test name, assertion, and validation command.
```

## Validate

Confirm that the workflow separates fetch, summarize, reason, and edit phases.

## Token Savings Analysis

Expected savings: 25-80%, depending on MCP tool count and payload size.

## Done?

Next: [Exercise 8 - Efficient Refactoring and Multi-File Operations](exercise-8.md)
