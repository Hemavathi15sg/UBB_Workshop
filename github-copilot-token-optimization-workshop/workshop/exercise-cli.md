# Exercise CLI - Full Workflow from the Command Line

> Goal: Complete the token optimization workshop flow from a terminal-oriented workflow using GitHub Copilot CLI prompts and repository files.

This path consolidates the 10 IDE exercises into a command-line friendly sequence. Use it when participants prefer terminal workflows or when VS Code setup time is limited.

## Prerequisites

- Git installed.
- GitHub CLI installed.
- GitHub Copilot CLI available where supported.
- Access to the demo repository structure or a customer-safe sample repository.
- Optional MCP tools configured only for Exercise 7.

## Step 0 - Open the Workshop

```powershell
cd github-copilot-token-optimization-workshop
code .
```

Review:

- `sample-prompts.md`
- `demo-repo-structure.md`
- `best-practices-cheat-sheet.md`

## Step 1 - Analyse Token Consumption

Use Copilot CLI or Copilot Chat with this prompt:

```text
Explain the likely token contributors in this Copilot request:
"Can you review the entire repository and explain why payment checkout is slow?"
Return a table with input, cached, output, history, retrieved context, and tool/MCP schema impact.
```

Expected output: a token packet map similar to Exercise 1.

## Step 2 - Rewrite a Prompt

```text
Rewrite this prompt to be token efficient while preserving intent:
"Hi Copilot, I need help with something in our claims service. Could you please look at the code and maybe create a new endpoint that lets users get claim status? Make sure it is good and follows our patterns."

Return: optimized prompt only.
```

Expected output: a structured task, scope, constraints, and output request.

## Step 3 - Create a Context Ladder

```text
Create a context escalation ladder for debugging card authorization failures.
Use: selection, file, related file, changes, problems, codebase.
Return a markdown table with when to use each level.
```

Expected output: the context ladder from Exercise 3 adapted to the repository.

## Step 4 - Discover Files Before Reasoning

```text
Find likely files for merchant settlement fee calculation.
Return only file paths and why each is relevant.
Do not propose code yet.
```

Expected output: candidate files, not implementation.

## Step 5 - Draft Copilot Instructions

```text
Draft a concise .github/copilot-instructions.md for Unified Benefits Banking.
Keep it under 120 lines.
Include stack, style, tests, dependency rules, legacy exclusion, and output-length guidance.
Do not include onboarding prose.
```

Expected output: stable project instructions similar to Exercise 5.

## Step 6 - Design a Custom Agent

```text
Design a token-efficient custom agent called PaymentDefectTriage.
Include mission, allowed tools, file budget, command budget, stop rule, and output format.
Do not write a long persona.
```

Expected output: constrained agent spec from Exercise 6.

## Step 7 - Summarize MCP Context Before Use

If MCP is available, use one incident or issue tool only. If not, simulate with a pasted incident summary.

```text
Summarize this incident for downstream code reasoning.
Return 10 bullets with IDs, timestamps, service names, error signatures, decisions, and open questions.
Do not propose a fix yet.
```

Expected output: small external-context summary.

## Step 8 - Plan a Multi-File Refactor

```text
Plan only: rename PENDING_REVIEW to AWAITING_REVIEW.
Return ordered file groups, risk, and validation command.
No edits yet.
```

Expected output: staged refactor plan.

## Step 9 - Create Reusable Prompt Templates

```text
Create three reusable prompt templates for: API endpoint, refactor plan, and PR description.
Each template must include placeholders for task, scope, constraints, acceptance, validation, and output.
```

Expected output: reusable prompt catalog starter.

## Step 10 - Produce Governance Charter

```text
Create a one-page enterprise Copilot token governance charter.
Include individual, team, and enterprise layers; metrics; owners; cadence; and a 30-day rollout backlog.
```

Expected output: governance charter similar to Exercise 10.

## Quick Reference - Prompt Files

Recommended local prompt assets:

| Prompt | Purpose |
| --- | --- |
| API endpoint | Generate scoped endpoint changes and tests. |
| Refactor plan | Plan staged multi-file changes. |
| Incident triage | Summarize incident context and propose diagnostics. |
| PR description | Summarize `#changes` with validation and risk. |
| Governance charter | Produce rollout and dashboard actions. |

## What You Did

| Area | Result |
| --- | --- |
| Token analysis | Mapped full Copilot context packet. |
| Prompt optimization | Rewrote vague prompts into structured prompts. |
| Context efficiency | Applied the context ladder. |
| Instructions | Drafted stable reusable repo guidance. |
| Agents and MCP | Designed constrained agents and summarized external context. |
| Governance | Created a measurable enterprise operating model. |
