# Demo Scripts

## Demo 1: Prompt Scope Transformation

### Setup

Open `services/payments-api/src/checkout/CheckoutService.ts` and `tests/checkout.test.ts`.

### Script

1. Ask the inefficient prompt:

```text
#codebase Why is checkout broken? Review everything and fix it.
```

2. Point out broad retrieval, unclear success criteria, and long output risk.
3. Ask the optimized prompt:

```text
Why does this checkout assertion fail?
#file:services/payments-api/tests/checkout.test.ts
#file:services/payments-api/src/checkout/CheckoutService.ts
Return: root cause, smallest fix, one validation command.
```

4. Compare response focus and follow-up effort.

## Demo 2: Instructions Reduce Repetition

### Setup

Open `.github/copilot-instructions.md`.

### Script

1. Show a long prompt that repeats project standards.
2. Move durable rules into instructions.
3. Ask a short task prompt:

```text
Add the claim status endpoint using #file:ClaimsController.ts #file:ClaimStatusService.ts.
```

4. Explain stable prefix and repeated-rule reduction.

## Demo 3: Agent Budgeting

### Setup

Open a failing incident summary and the payments service file.

### Script

1. Run a broad agent prompt with all tools available.
2. Stop after it explores too widely.
3. Run the constrained prompt:

```text
Triage checkout latency. Inspect max 4 files. Use repository search and test command only.
Return root cause hypothesis, evidence, next command. Ask before editing.
```

4. Compare number of steps and relevance.

## Demo 4: MCP Summarization Boundary

### Setup

Use any available issue, incident, or documentation MCP tool.

### Script

1. Fetch one external artifact.
2. Ask Copilot to summarize the artifact into 10 technical bullets.
3. Use only the summary plus one source file for reasoning.
4. Explain schema tax and payload control.

## Demo 5: Copilot CLI Prompt

### Setup

Open a terminal at the repository root.

### Script

1. Ask for a command broadly:

```text
gh copilot suggest "help me run the tests and find what's wrong"
```

2. Ask with a constrained command goal:

```text
gh copilot suggest "run only payments-api checkout tests with verbose failure output"
```

3. Compare command specificity and correction effort.
