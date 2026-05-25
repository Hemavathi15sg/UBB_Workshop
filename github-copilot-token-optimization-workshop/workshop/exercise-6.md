# Exercise 6 - Designing Token-Efficient Custom Agents

> Goal: Design a custom agent with a narrow mission, minimal tools, explicit budgets, and bounded output.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Support Engineering team wants a Copilot agent to triage production defects. The first version has every tool enabled and a long generic persona.

## Step 0 - Review the Overbroad Agent Prompt

```text
You are an expert in everything related to our enterprise platform. Use all tools available. Investigate any issue deeply, inspect the whole repo, query all systems, and provide a comprehensive report.
```

## Step 1 - Create a Constrained Agent Spec

```text
Agent: PaymentDefectTriage
Mission: triage one payment defect from failing test or incident summary.
Tools: repository search, file read, test command only.
Rules: inspect max 5 files before summarizing; ask before external tools; no code edits unless requested.
Output: root cause hypothesis, evidence, next command, risk.
Stop when confidence is below 70% and ask one question.
```

## Step 2 - Run the Agent on One Defect

Prompt the agent:

```text
Triage checkout latency from this failing test and service file. Stay within your file budget and do not edit code.
```

## Validate

The agent should produce a bounded triage result instead of exploring the whole repository.

## Token Savings Analysis

Expected savings: 30-70% for agent tasks because tool schemas, retrieved files, and step count are constrained.

## Done?

Next: [Exercise 7 - Optimizing MCP and External Context Usage](exercise-7.md)
