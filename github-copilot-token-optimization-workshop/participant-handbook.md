# Participant Handbook

## Lab Setup

- Open the demo repository in VS Code.
- Sign in to GitHub Copilot.
- Confirm Copilot Chat can access the workspace.
- Confirm GitHub CLI is installed with `gh --version`.
- Optional: confirm Copilot CLI and MCP tools are enabled if your organization supports them.

## Exercise Checklist

| Exercise | Completed | Artifact |
| --- | --- | --- |
| 1. Token consumption | [ ] | Token packet map. |
| 2. Concise prompts | [ ] | Before/after prompt. |
| 3. Context reduction | [ ] | Context escalation ladder. |
| 4. Large repo navigation | [ ] | File discovery prompt chain. |
| 5. Instructions | [ ] | Draft Copilot instructions. |
| 6. Custom agents | [ ] | Token-efficient agent spec. |
| 7. MCP usage | [ ] | MCP summary workflow. |
| 8. Multi-file refactor | [ ] | Plan-first refactor prompt. |
| 9. Prompt templates | [ ] | Reusable prompt template. |
| 10. Governance | [ ] | Team governance charter. |

## Quick Reference: Context Order

1. `#selection`: selected code or error.
2. `#file`: one relevant file.
3. Multiple `#file` references: current file plus dependency or test.
4. `#changes`: current diff.
5. `#problems`: compiler or diagnostic issues.
6. `#codebase`: last resort for discovery or broad reasoning.

## Prompt Cheat Sheet

```text
Task: <one sentence>
Scope: #file:<path> #selection
Constraints: <no new deps, do not edit X, preserve API>
Acceptance: <tests, behavior, output>
Output: <plan only | patch | table | bullets | command>
Stop rule: <ask one question if ambiguous>
```

## Mode Selection

| Need | Recommended mode |
| --- | --- |
| Quick explanation | Ask |
| Small code change in current file | Inline Chat or Edit |
| Plan before implementation | Ask or Plan |
| Multi-file implementation | Agent with explicit budget |
| Shell command help | Copilot CLI |
| External enterprise data | MCP, summarized before reasoning |

## Personal Token Habits

- Start a new chat when the task changes.
- Ask for plans before broad edits.
- Add context only when the previous answer proves it is needed.
- Keep reusable rules in instructions or templates.
- Ask for concise output by default.
