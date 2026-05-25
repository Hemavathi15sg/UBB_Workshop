# Best Practices Summary and Quick-Reference Cheat Sheet

## Ten Enterprise Token Optimization Rules

| Rule | Practice |
| --- | --- |
| 1. Scope first | Use `#selection` and `#file` before `#codebase`. |
| 2. Compress prompts | Remove filler, keep task-critical constraints. |
| 3. Structure prompts | Task, scope, constraints, acceptance, output, stop rule. |
| 4. Control output | Ask for tables, bullets, patches, or plans with limits. |
| 5. Reset sessions | Start a new chat when switching tasks. |
| 6. Reuse instructions | Keep stable rules in concise instruction files. |
| 7. Choose mode intentionally | Ask for lookup, Edit for focused changes, Agent for multi-step work. |
| 8. Budget agents | Limit tools, files, commands, and steps. |
| 9. Audit MCP | Enable only relevant tools and summarize external payloads. |
| 10. Measure outcomes | Track useful response rate, turns per task, and savings estimates. |

## Bad vs Optimized Prompt Pattern

| Bad | Optimized |
| --- | --- |
| “Look at everything and fix it.” | “Using `#file:A` and `#file:B`, explain root cause and smallest fix.” |
| “Be detailed.” | “Return 5 bullets and one validation command.” |
| “Use all tools.” | “Use repository search only; ask before external tools.” |
| “Remember our standards...” | “Use repo instructions; task-specific constraints only.” |
| “Continue from earlier...” | “New task: summary, scope, and acceptance criteria.” |

## Context Selection Ladder

```text
#selection -> #file -> related #file -> #changes/#problems -> targeted search -> #codebase
```

## Workflow Mode Routing

| Workflow | Best first move |
| --- | --- |
| Understand code | Ask with `#file` or `#selection`. |
| Fix failing test | Ask for diagnosis, then Edit. |
| Add small endpoint | Edit with scoped files. |
| Multi-file refactor | Plan first, then staged edits. |
| Incident triage | Constrained Agent with tool budget. |
| External system lookup | MCP fetch, summarize, then reason. |
| Shell command | Copilot CLI with exact command goal. |

## Optimization Scorecard

| Dimension | Question |
| --- | --- |
| Scope | Did I provide only the context needed? |
| Clarity | Did I state the task and acceptance criteria? |
| Constraints | Did I name files or behavior not to touch? |
| Output | Did I bound the answer format and length? |
| Mode | Did I choose the cheapest workflow mode that can succeed? |
| Reuse | Can this prompt become a template, instruction, or skill? |
| Measurement | Did I capture before/after quality and estimated savings? |

## GitHub Copilot References

- GitHub Copilot documentation: <https://docs.github.com/en/copilot>
- GitHub Copilot billing, models, and pricing reference: <https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>
- GitHub Copilot Chat in VS Code: <https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-chat-in-your-ide>
- GitHub Copilot CLI: <https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line>
- Microsoft GHCP Lab: <https://github.com/microsoft/GHCP-Lab>
