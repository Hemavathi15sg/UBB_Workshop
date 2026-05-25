# Instructor Guide

## Delivery Tips

- Keep the workshop hands-on: every concept should lead to a prompt rewrite, context choice, reusable asset, or metric.
- Use the same enterprise storyline throughout so participants see cumulative improvement.
- Ask learners to estimate token savings before revealing suggested ranges.
- Show that optimization is not “short prompts only”; the real target is the complete context packet.
- When Copilot produces a poor answer, use it as a teachable moment: inspect scope, history, output bounds, and tool access.

## Timing Guidance

| Module | 1-day timing | 2 half-day timing |
| --- | --- | --- |
| Welcome and objectives | 20 min | Day 1, 20 min |
| Token fundamentals | 40 min | Day 1, 40 min |
| Exercises 1-3 | 90 min | Day 1, 90 min |
| Exercises 4-5 | 70 min | Day 1, 70 min |
| Exercises 6-8 | 100 min | Day 2, 100 min |
| Exercises 9-10 | 80 min | Day 2, 80 min |
| Executive readout and wrap | 30 min | Day 2, 30 min |

## Demo Checkpoints

| Checkpoint | What to show | Success signal |
| --- | --- | --- |
| Token packet | Prompt plus hidden context contributors. | Learners can name at least five contributors. |
| Narrow scope | `#file` or `#selection` versus `#codebase`. | Better answer with less context. |
| Prompt rewrite | Vague prompt to structured prompt. | Fewer follow-up turns. |
| Instructions | Repeated rules moved to instruction file. | Shorter task prompts. |
| Agent budget | Broad agent versus constrained agent. | Fewer steps and clearer stop condition. |
| MCP summary | External payload summarized before use. | Smaller, safer downstream prompt. |
| Dashboard | Baseline and target metrics. | Team can propose a 30-day improvement plan. |

## Common Learner Issues

| Issue | Instructor response |
| --- | --- |
| “Shorter prompts lose detail.” | Keep constraints, remove filler. Use structured fields. |
| “Agent mode is easier.” | Use Agent for multi-step work after Ask or Plan has scoped the task. |
| “We need `#codebase` in monorepos.” | Sometimes, but start with discovery prompts that return paths only. |
| “MCP gives better answers.” | Yes, when the right tool and summarized payload are used. Tool schemas and payloads still cost tokens. |
| “Governance will slow developers.” | Govern defaults and reusable assets; do not require manual approval for every prompt. |

## Suggested Q&A Responses

| Question | Suggested answer |
| --- | --- |
| How do we measure exact token savings? | Use available billing and usage reporting where provided, then supplement with estimates by workflow: input scope, output length, number of turns, and agent steps. |
| Should every team use the same instructions? | Use a short enterprise baseline plus team-scoped guidance. Avoid one giant universal file. |
| When should we use stronger models? | Use them for ambiguous design, architecture, hard debugging, or planning. Use lighter models for simple edits, formatting, boilerplate, and summaries. |
| Is `#codebase` bad? | No. It is expensive and broad. Use it when narrower scopes fail or when discovery truly requires it. |
| Are reusable prompts worth maintaining? | Yes, for repeated workflows. Assign owners and retire stale templates. |

## Facilitation Pattern

1. Show a bad prompt.
2. Ask participants to identify waste.
3. Rewrite as a group.
4. Run the optimized version.
5. Score it against scope, clarity, mode, output, reusability, and governance.
