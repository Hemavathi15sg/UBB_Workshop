# Exercise-by-Exercise Lab Guide

Use the same enterprise scenario throughout: Contoso Retail Banking is modernizing Unified Benefits Banking while optimizing GitHub Copilot token usage.

Each exercise produces a before/after prompt, a token-savings estimate, and one reusable practice.

## Exercise 1: Understanding Token Consumption in GitHub Copilot

### Business Scenario

The Platform Engineering team sees Copilot usage increasing across 12 teams. Leadership wants to understand why simple questions sometimes consume large amounts of context.

### Objective

Map the full token packet for common Copilot workflows and identify the biggest cost drivers.

### Concepts Covered

Input tokens, output tokens, cached tokens, chat history, instructions, tool schemas, retrieved context, context windows.

### Token Optimization Principle

Optimize the complete Copilot request, not only the words typed by the user.

### Before Optimization Example

```text
Can you review the entire repository and explain why payment checkout is slow?
Use all available context and give me a detailed explanation.
```

### After Optimization Example

```text
Explain the likely cause of slow checkout using only:
#file:services/payments-api/src/checkout/CheckoutService.ts
#file:services/payments-api/src/checkout/CheckoutRepository.ts

Return: top 3 hypotheses, evidence line, next measurement.
```

### Step-by-Step Instructions

1. Open GitHub Copilot Chat in VS Code.
2. Ask the before prompt and note how broad the request is.
3. Identify token packet contributors: prompt, history, files, instructions, tools, MCP schemas, output.
4. Ask the after prompt with explicit file references.
5. Compare answer relevance, response length, and number of follow-up questions needed.
6. Fill in the workshop scorecard.

### Expected Outcome

Participants can name what Copilot sends beyond the typed prompt and explain why narrow context improves quality and cost.

### Token Savings Analysis

- Why it works: removes whole-repo retrieval and limits output format.
- Estimated token reduction: 50-85% for the turn, depending on repository size.
- Performance improvement: faster response and fewer irrelevant findings.

### Best Practices

- Start with `#file`, `#selection`, `#changes`, and `#problems`.
- Use `#codebase` only after narrower scopes fail.
- Bound the output by count, format, or artifact.

### Common Mistakes

- Treating prompt text as the only token source.
- Asking for exhaustive analysis when a diagnostic answer is enough.
- Continuing old chats after switching tasks.

### Discussion Questions

- Which part of your team’s Copilot usage likely creates the most hidden context?
- Where do long chat histories affect quality today?

### Optional Advanced Challenge

Create a simple spreadsheet that estimates input, cached, and output tokens for three workflows: quick Q&A, daily refactor, and agent task.

---

## Exercise 2: Writing Concise High-Quality Prompts

### Business Scenario

The Claims team frequently asks Copilot to generate boilerplate and then spends time correcting verbose, misdirected responses.

### Objective

Transform vague prompts into structured prompts with goal, scope, constraints, and output format.

### Concepts Covered

Prompt compression, intent-driven prompting, role-based prompting, output constraints, prompt transformations.

### Token Optimization Principle

Use fewer words with higher information density.

### Before Optimization Example

```text
Hi Copilot, I need help with something in our claims service. Could you please look at the code and maybe create a new endpoint that lets users get claim status? Make sure it is good and follows our patterns.
```

### After Optimization Example

```text
Add `GET /claims/{claimId}/status` to the claims API.
Scope: #file:services/claims-api/src/controllers/ClaimsController.ts #file:services/claims-api/src/services/ClaimStatusService.ts
Constraints: follow existing error format, no new dependencies.
Return: patch plus tests only.
```

### Step-by-Step Instructions

1. Paste the before prompt into Copilot Chat and review the response.
2. Highlight filler words and ambiguous phrases.
3. Rewrite with four sections: task, scope, constraints, output.
4. Re-run using the optimized prompt.
5. Compare completeness and number of follow-up turns.

### Expected Outcome

Participants produce a concise prompt that improves response precision without losing important constraints.

### Token Savings Analysis

- Why it works: removes low-information text and prevents broad retrieval.
- Estimated token reduction: 20-60% for input; larger savings if follow-up turns are avoided.
- Performance improvement: more direct implementation and fewer clarification loops.

### Best Practices

- Use code-native references such as endpoint names, type names, and file paths.
- State exclusions: “no new dependencies,” “do not edit legacy folder.”
- Ask for the next artifact, not a lecture.

### Common Mistakes

- Removing constraints while shortening the prompt.
- Asking for “best practice” without naming the local pattern.
- Requesting code, explanation, tests, docs, and architecture in one turn.

### Discussion Questions

- What phrases in your team’s prompts carry no useful information?
- Which constraints should become reusable templates?

### Optional Advanced Challenge

Create a team prompt lint checklist with five rules for prompt quality.

---

## Exercise 3: Reducing Unnecessary Context

### Business Scenario

The Payments team often uses `#codebase` for every bug. Copilot answers are long and sometimes mix current and legacy implementations.

### Objective

Practice selecting only the minimum context required for a bug investigation.

### Concepts Covered

Scoped file references, selections, context exclusions, chat resets, context summarization.

### Token Optimization Principle

Attach the narrowest context that can answer the question.

### Before Optimization Example

```text
#codebase Why is card authorization failing? Look everywhere and fix it.
```

### After Optimization Example

```text
Why does this test fail?
#file:services/payments-api/src/authorization/CardAuthorizationService.test.ts
#file:services/payments-api/src/authorization/CardAuthorizationService.ts

Do not inspect `legacy-benefits-engine` unless both files are insufficient.
Return: root cause and smallest code change.
```

### Step-by-Step Instructions

1. Open the failing test and service file.
2. Select only the failing assertion and relevant function.
3. Ask Copilot using `#selection` or file references.
4. If the answer is insufficient, add one dependency file.
5. Record each context expansion in the scorecard.

### Expected Outcome

Participants learn to expand context incrementally instead of starting broad.

### Token Savings Analysis

- Why it works: prevents retrieval of unrelated files and conflicting legacy patterns.
- Estimated token reduction: 60-90% versus whole-codebase retrieval.
- Performance improvement: less hallucinated cross-file reasoning and faster diagnosis.

### Best Practices

- Use context escalation: selection → file → related file → codebase.
- Include “do not touch” paths.
- Start a new chat for unrelated tasks.

### Common Mistakes

- Keeping unrelated tabs open and assuming they are harmless.
- Adding documentation, tests, and source files when one failing test is enough.
- Forgetting that old chat turns still ride along.

### Discussion Questions

- What is the smallest context unit your team can standardize on?
- Which legacy folders should usually be excluded?

### Optional Advanced Challenge

Create a “context escalation ladder” for your repository.

---

## Exercise 4: Optimizing Large Repository Navigation

### Business Scenario

A new developer joins the Benefits team and needs to find where merchant settlement fees are calculated in a large monorepo.

### Objective

Use Copilot and repository search together to navigate large codebases without overloading context.

### Concepts Covered

Repository organization, semantic search, targeted file discovery, prompt chaining, incremental prompting.

### Token Optimization Principle

Use search to find anchors, then ask Copilot about the smallest relevant slice.

### Before Optimization Example

```text
#codebase Explain everything about merchant settlement fee calculation and update it for the new policy.
```

### After Optimization Example

```text
Find likely files for merchant settlement fee calculation. Return only file paths and why each is relevant. Do not propose code yet.
```

Then:

```text
Using #file:services/settlement/src/fees/FeeCalculator.ts, explain where to apply policy `FEE-2026-04`. Return a 3-step edit plan.
```

### Step-by-Step Instructions

1. Use VS Code Search or Copilot Ask to locate candidate files.
2. Ask for file paths only.
3. Open the top two candidates and inspect names/types.
4. Ask Copilot for a plan using only selected files.
5. Implement with Edit or Agent only after the plan is specific.

### Expected Outcome

Participants separate discovery, planning, and implementation turns.

### Token Savings Analysis

- Why it works: avoids loading a broad repository before finding anchors.
- Estimated token reduction: 40-80% across the workflow.
- Performance improvement: more defensible code changes and lower review churn.

### Best Practices

- Ask for paths first, not a full explanation.
- Use file names, symbols, and tests as anchors.
- Keep discovery chats short and reset before implementation.

### Common Mistakes

- Combining “find, understand, change, test, document” in one prompt.
- Letting Agent mode explore a monorepo without constraints.
- Accepting a plan without file evidence.

### Discussion Questions

- Which repository landmarks help Copilot navigate safely?
- Where can ownership metadata reduce unnecessary search?

### Optional Advanced Challenge

Design a `CODEOWNERS` and folder README strategy that improves both human and Copilot navigation.

---

## Exercise 5: Using Copilot Instructions Effectively

### Business Scenario

Platform Engineering wants consistent Copilot behavior across teams without pasting coding standards into every chat.

### Objective

Create concise, stable, reusable Copilot instructions and avoid instruction bloat.

### Concepts Covered

`.github/copilot-instructions.md`, scoped instructions, cached tokens, stable prefix, reusable constraints.

### Token Optimization Principle

Move stable, reusable guidance into short instruction files and keep task-specific details in prompts.

### Before Optimization Example

```text
Before you answer, remember we use TypeScript, Node 20, Fastify, Postgres, Vitest, no classes unless necessary, no new dependencies, write behavioral tests, don't edit legacy folders, keep responses short, use existing error patterns, and ask questions when unsure. Now add an endpoint...
```

### After Optimization Example

`.github/copilot-instructions.md`:

```markdown
# Project: Unified Benefits Banking

Stack: TypeScript, Node 20, Fastify, Postgres, React, Vitest.
Style: async/await, small functions, existing service patterns first.
Tests: behavioral Vitest tests near changed code.
Do not add dependencies or edit `legacy-benefits-engine/*` unless requested.
When unsure, ask one clarifying question before editing.
Keep chat answers under 8 bullets unless asked for detail.
```

Prompt:

```text
Add `GET /claims/{claimId}/status` using #file:ClaimsController.ts #file:ClaimStatusService.ts.
```

### Step-by-Step Instructions

1. Draft a sub-200-line instruction file.
2. Remove facts Copilot can infer from code.
3. Keep stable rules separate from task-specific requirements.
4. Test a simple prompt before and after adding instructions.
5. Record which repeated prompt text disappeared.

### Expected Outcome

Participants create a concise instruction file that improves consistency and reduces repeated prompt text.

### Token Savings Analysis

- Why it works: stable instructions can be reused, while repeated chat text is removed.
- Estimated token reduction: 10-30% per repeated workflow, larger over long sessions.
- Performance improvement: more consistent answers and fewer policy reminders.

### Best Practices

- Keep always-on instructions short and durable.
- Use scoped `*.instructions.md` files for file-pattern-specific rules when supported.
- Store prompts and skills for on-demand guidance instead of always-on walls of text.

### Common Mistakes

- Auto-generating giant instruction files.
- Including onboarding docs, org history, and obvious style rules.
- Changing instruction files constantly and losing cache stability.

### Discussion Questions

- Which team rules are true on every request?
- Which rules belong in on-demand prompt templates instead?

### Optional Advanced Challenge

Split one large instruction file into always-on, glob-scoped, and on-demand guidance.

---

## Exercise 6: Designing Token-Efficient Custom Agents

### Business Scenario

The Support Engineering team wants a Copilot agent to triage production defects, but the first version has every tool enabled and a long persona.

### Objective

Design a custom agent that uses a narrow mission, minimal tools, and bounded outputs.

### Concepts Covered

Custom agents, role-based prompting, tool restriction, agent mode costs, subagent summaries, output control.

### Token Optimization Principle

Agents multiply token usage across steps, so constrain role, tools, scope, and stopping conditions.

### Before Optimization Example

```text
You are an expert in everything related to our enterprise platform. Use all tools available. Investigate any issue deeply, inspect the whole repo, query all systems, and provide a comprehensive report.
```

### After Optimization Example

```text
Agent: PaymentDefectTriage
Mission: triage one payment defect from failing test or incident summary.
Tools: repository search, file read, test command only.
Rules: inspect max 5 files before summarizing; ask before external tools; no code edits unless requested.
Output: root cause hypothesis, evidence, next command, risk.
Stop when confidence is below 70% and ask one question.
```

### Step-by-Step Instructions

1. Define the agent’s single mission.
2. Remove generic persona text.
3. List only required tools.
4. Add a file-inspection budget and stop rule.
5. Run the same triage task with broad and constrained agent instructions.
6. Compare number of steps and answer usefulness.

### Expected Outcome

Participants design a practical custom agent spec that is cheaper and easier to govern.

### Token Savings Analysis

- Why it works: fewer agent calls, fewer tool schemas, less retrieved context, bounded output.
- Estimated token reduction: 30-70% for agent tasks.
- Performance improvement: predictable investigation and less irrelevant exploration.

### Best Practices

- Use agents for multi-step tasks, not simple Q&A.
- Give agents budgets: files, commands, turns, and output length.
- Prefer subagents or isolated research summaries when broad exploration is unavoidable.

### Common Mistakes

- Enabling all tools by default.
- Writing long personality sections that do not affect task quality.
- Using Agent mode for single-answer questions.

### Discussion Questions

- Which enterprise tasks deserve custom agents?
- What tool permissions should be disabled by default?

### Optional Advanced Challenge

Create an agent scorecard covering mission clarity, tool budget, context budget, and governance risk.

---

## Exercise 7: Optimizing MCP and External Context Usage

### Business Scenario

The Platform team connects Copilot to issue tracking, observability, and internal documentation through MCP. Usage grows, but every agent turn becomes expensive.

### Objective

Use MCP selectively and summarize external context before injecting it into Copilot workflows.

### Concepts Covered

MCP schema tax, external context, tool selection, context summarization, governance boundaries.

### Token Optimization Principle

Every enabled tool and external payload should earn its place in the request.

### Before Optimization Example

```text
Use all MCP tools to investigate incident INC-1842 and fix the checkout bug.
```

### After Optimization Example

```text
Use only the incident MCP tool to fetch INC-1842 summary.
Return a 10-bullet technical summary with IDs, timestamps, error signatures, and affected service.
Do not fetch logs or docs yet.
```

Then:

```text
Using this incident summary and #file:CheckoutService.ts, propose the smallest diagnostic test.
```

### Step-by-Step Instructions

1. Inventory available MCP tools.
2. Disable or ignore tools unrelated to the scenario.
3. Fetch one external artifact and summarize it.
4. Use the summary, not the full external payload, in the next Copilot prompt.
5. Record token estimate and quality difference.

### Expected Outcome

Participants understand that MCP improves capability but must be governed for cost and relevance.

### Token Savings Analysis

- Why it works: reduces schema overhead and large external payload injection.
- Estimated token reduction: 25-80%, depending on tool count and payload size.
- Performance improvement: fewer irrelevant citations and faster agent steps.

### Best Practices

- Enable the smallest tool set needed for the workflow.
- Ask for summaries before broad external retrieval.
- Separate fetch, summarize, reason, and edit phases.

### Common Mistakes

- Treating MCP tools as free context.
- Leaving large enterprise toolboxes enabled in every workspace.
- Mixing logs, docs, tickets, and code in one first prompt.

### Discussion Questions

- Which MCP tools should be approved for default use?
- What external data requires redaction or summarization first?

### Optional Advanced Challenge

Design an MCP usage policy with default-off tools, allowed workflows, and audit metrics.

---

## Exercise 8: Efficient Refactoring and Multi-File Operations

### Business Scenario

The Identity team needs to rename a shared claim status enum across API, frontend, and tests without inviting Copilot to rewrite unrelated files.

### Objective

Use staged multi-file workflows with plans, scoped edits, and validation.

### Concepts Covered

Multi-file workflows, plan-first prompting, incremental edits, scoped validation, CLI and Agent tradeoffs.

### Token Optimization Principle

Break large refactors into small, validated steps instead of one broad agent request.

### Before Optimization Example

```text
#codebase Refactor all claim status naming everywhere, update tests, docs, and CI.
```

### After Optimization Example

```text
Plan only: rename `PENDING_REVIEW` to `AWAITING_REVIEW`.
Scope: #file:services/claims-api/src/domain/ClaimStatus.ts #file:apps/admin-portal/src/claims/statusLabels.ts
Return: ordered file list and validation command. No edits yet.
```

Then:

```text
Apply step 1 only to #file:ClaimStatus.ts and update co-located tests. Return diff summary.
```

### Step-by-Step Instructions

1. Ask Copilot for a plan only.
2. Validate the file list manually.
3. Apply one step with Edit mode or a constrained Agent prompt.
4. Run focused tests or type checks.
5. Continue to the next file group only after validation.

### Expected Outcome

Participants complete a refactor with less context, less risk, and clearer validation.

### Token Savings Analysis

- Why it works: limits each prompt to the current edit slice and avoids repeated full-repo scans.
- Estimated token reduction: 30-65% across the refactor.
- Performance improvement: easier review and fewer broad, hard-to-debug changes.

### Best Practices

- Plan first, edit second.
- Use file groups by ownership or test boundary.
- Ask for validation commands as part of the plan.

### Common Mistakes

- Combining rename, behavior change, docs, and CI in one prompt.
- Letting Agent mode keep editing after first validation failure.
- Not bounding output to patches and summaries.

### Discussion Questions

- Which refactors should use language-server rename before Copilot edits?
- What is the right maximum file count per Copilot turn?

### Optional Advanced Challenge

Create a reusable refactor prompt template for your team.

---

## Exercise 9: Creating Reusable Prompt Templates and Skills

### Business Scenario

Multiple teams repeatedly ask Copilot to create API endpoints, tests, PR descriptions, and runbook updates. Prompt quality varies widely.

### Objective

Create reusable prompt templates and skill-style guidance that reduce repeated context and improve consistency.

### Concepts Covered

Reusable prompts, skills, prompt chaining, task kickoff templates, quick references, enterprise standardization.

### Token Optimization Principle

Move repeated task structure into reusable assets and keep each invocation short.

### Before Optimization Example

```text
Please create an endpoint. Remember our API structure, validation style, error format, tests, docs, PR summary format, and all the usual things.
```

### After Optimization Example

```text
/api-endpoint
Task: add status endpoint for claims.
Scope: #file:ClaimsController.ts #file:ClaimStatusService.ts
Acceptance: returns 200, 404, and audit event.
```

Template:

```markdown
# API Endpoint Prompt
Task:
Scope:
Acceptance criteria:
Constraints:
Validation command:
Output required:
```

### Step-by-Step Instructions

1. Identify three repeated Copilot tasks.
2. Convert each into a reusable template with placeholders.
3. Remove project rules already covered by instructions.
4. Add an output format and validation prompt.
5. Test the template with one real scenario.

### Expected Outcome

Participants leave with reusable prompt templates that can be shared across teams.

### Token Savings Analysis

- Why it works: reduces repeated explanatory text and standardizes high-signal fields.
- Estimated token reduction: 15-50% per repeated task; quality gains from fewer omissions.
- Performance improvement: easier onboarding and more consistent Copilot outputs.

### Best Practices

- Keep templates short and task-specific.
- Use placeholders instead of prose.
- Include acceptance criteria and validation command.

### Common Mistakes

- Making one universal prompt template for every workflow.
- Duplicating instructions in every template.
- Forgetting to retire templates that no longer match the codebase.

### Discussion Questions

- Which templates should be owned by platform versus feature teams?
- How will teams review and version reusable prompts?

### Optional Advanced Challenge

Create a prompt catalog with owner, version, intended mode, and token-efficiency score.

---

## Exercise 10: Enterprise Token Governance and Best Practices

### Business Scenario

Engineering leadership wants sustainable Copilot adoption: useful AI usage should grow, but token waste, unmanaged tools, and inconsistent practices must not.

### Objective

Define a governance model, metrics dashboard, and team operating practices.

### Concepts Covered

Governance, budgets, dashboards, model routing, tool audits, adoption patterns, scorecards.

### Token Optimization Principle

Individual prompt habits reduce waste per developer; governance reduces waste across the enterprise.

### Before Optimization Example

```text
Each team uses Copilot however they prefer. We will look at billing at the end of the quarter.
```

### After Optimization Example

```text
Enterprise Copilot operating model:
- Monthly token-efficiency review by team.
- Default context and MCP tool policy.
- Reusable prompt catalog with owners.
- Model and mode routing guidance.
- Dashboard: usage, estimated savings, acceptance quality, overage risk.
```

### Step-by-Step Instructions

1. Define three governance layers: individual, team, enterprise.
2. Select metrics from the dashboard concept.
3. Create a mode-routing policy for Ask, Edit, Agent, CLI, and MCP.
4. Define review cadence and owners.
5. Create a 30-day improvement backlog.

### Expected Outcome

Participants produce an enterprise Copilot token governance charter.

### Token Savings Analysis

- Why it works: prevents systemic waste from long sessions, broad agents, unused tools, and duplicated prompts.
- Estimated token reduction: 20-45% at team scale after adoption of core practices.
- Performance improvement: predictable cost, better quality, stronger compliance posture.

### Best Practices

- Govern modes, tools, and reusable assets without blocking productive use.
- Measure useful outcomes, not only total tokens.
- Review top waste patterns monthly.

### Common Mistakes

- Treating governance as a ban list.
- Optimizing cost while ignoring quality and developer flow.
- Failing to publish team examples and reusable assets.

### Discussion Questions

- What level of token variance is acceptable across teams?
- Which practices should become engineering standards?

### Optional Advanced Challenge

Build a one-page executive scorecard showing baseline, target, savings, adoption, and quality metrics.
