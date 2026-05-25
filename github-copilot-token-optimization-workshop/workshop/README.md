# GitHub Copilot Token Optimization Workshop

> Goal: Learn how to reduce GitHub Copilot token consumption while improving response quality, context efficiency, and enterprise-scale AI-assisted development workflows.

## The Scenario

Contoso Retail Banking is modernizing and maintaining **Unified Benefits Banking**, a large enterprise application with backend APIs, frontend components, database migrations, CI/CD workflows, documentation, legacy code, and multiple engineering teams.

Copilot adoption is growing quickly. Teams are productive, but they are also seeing long chats, broad `#codebase` prompts, overused Agent mode, noisy MCP tool context, and repeated prompt text. This workshop teaches teams to make each Copilot turn smaller, sharper, and more measurable.

## What You Will Learn

| Area | Outcome |
| --- | --- |
| Token fundamentals | Explain input, cached, output, history, tool, MCP, and retrieved-context tokens. |
| Prompt quality | Rewrite vague prompts into concise, scoped, high-signal prompts. |
| Context efficiency | Choose `#selection`, `#file`, `#changes`, and `#problems` before `#codebase`. |
| Reusable guidance | Use instructions, prompts, skills, and custom agents without creating context bloat. |
| Enterprise governance | Measure token efficiency and create sustainable team practices. |

## Prerequisites

- VS Code with GitHub Copilot Chat enabled.
- GitHub Copilot Business or Enterprise access recommended.
- GitHub CLI and Copilot CLI recommended for the CLI path.
- Optional MCP-capable Copilot environment for Exercise 7.
- Basic familiarity with Git, APIs, frontend components, CI/CD, and pull requests.

## Workshop Structure

| # | Exercise | Topic | Time |
| --- | --- | --- | --- |
| 1 | [Exercise 1](exercise-1.md) | Understanding Token Consumption in GitHub Copilot | ~30 min |
| 2 | [Exercise 2](exercise-2.md) | Writing Concise High-Quality Prompts | ~35 min |
| 3 | [Exercise 3](exercise-3.md) | Reducing Unnecessary Context | ~35 min |
| 4 | [Exercise 4](exercise-4.md) | Optimizing Large Repository Navigation | ~40 min |
| 5 | [Exercise 5](exercise-5.md) | Using Copilot Instructions Effectively | ~40 min |
| 6 | [Exercise 6](exercise-6.md) | Designing Token-Efficient Custom Agents | ~45 min |
| 7 | [Exercise 7](exercise-7.md) | Optimizing MCP and External Context Usage | ~45 min |
| 8 | [Exercise 8](exercise-8.md) | Efficient Refactoring and Multi-File Operations | ~45 min |
| 9 | [Exercise 9](exercise-9.md) | Creating Reusable Prompt Templates and Skills | ~35 min |
| 10 | [Exercise 10](exercise-10.md) | Enterprise Token Governance and Best Practices | ~40 min |
| - | [Exercise CLI](exercise-cli.md) | Command-line consolidated flow | Optional |

## Get Started

Start here: [Exercise 1 - Understanding Token Consumption](exercise-1.md).

Prefer the terminal? Use [Exercise CLI - Full Workflow from the Command Line](exercise-cli.md).

## Supporting Assets

- [Instructor Guide](../instructor-guide.md)
- [Participant Handbook](../participant-handbook.md)
- [Demo Scripts](../demo-scripts.md)
- [Sample Prompts](../sample-prompts.md)
- [Demo Repository Structure](../demo-repo-structure.md)
- [Metrics Dashboard Concept](../metrics-dashboard.md)
- [Executive Summary Deck Outline](../executive-summary-deck-outline.md)
- [Best Practices Cheat Sheet](../best-practices-cheat-sheet.md)

## Resources

- GitHub Copilot documentation: <https://docs.github.com/en/copilot>
- GitHub Copilot Chat in VS Code: <https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-chat-in-your-ide>
- GitHub Copilot CLI: <https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line>
- GitHub Copilot models and pricing: <https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing>
- Microsoft GHCP Lab: <https://github.com/microsoft/GHCP-Lab>
