# Exercise 1 - Understanding Token Consumption in GitHub Copilot

> Goal: Map what rides along with a Copilot request and identify the highest-impact token optimization levers.

Prefer the command line? See [Exercise CLI](exercise-cli.md).

## Context

The Platform Engineering team sees Copilot usage increasing across 12 teams. Leadership wants to understand why a simple question can become an expensive request when chat history, repository context, instructions, tools, MCP schemas, and output are included.

## Step 0 - Establish the Baseline

Open Copilot Chat in VS Code and send this inefficient prompt:

```text
Can you review the entire repository and explain why payment checkout is slow?
Use all available context and give me a detailed explanation.
```

Write down what Copilot likely had to consider:

| Token source | Present? | Notes |
| --- | --- | --- |
| User prompt | Yes | The visible text you typed. |
| Chat history | Depends | Previous turns may still be included. |
| Retrieved files | Likely | Broad wording invites broad retrieval. |
| Instructions | Yes | Repo and system instructions may be included. |
| Tool schemas | Depends | Enabled tools may add overhead. |
| Output tokens | Yes | “Detailed explanation” invites long output. |

## Step 1 - Run the Optimized Prompt

Use a narrower prompt:

```text
Explain the likely cause of slow checkout using only:
#file:services/payments-api/src/checkout/CheckoutService.ts
#file:services/payments-api/src/checkout/CheckoutRepository.ts

Return: top 3 hypotheses, evidence line, next measurement.
```

## Step 2 - Compare the Results

Score both prompts:

| Dimension | Baseline | Optimized |
| --- | --- | --- |
| Scope | Broad repo | Two files |
| Output | Unbounded | Three hypotheses |
| Follow-up effort | Likely high | Lower |
| Estimated token reduction | - | 50-85% |

## Validate

You should be able to explain input, cached, and output tokens, and why the user prompt is often the smallest part of the full Copilot turn.

## Done?

Next: [Exercise 2 - Writing Concise High-Quality Prompts](exercise-2.md)
