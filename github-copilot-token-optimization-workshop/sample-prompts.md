# Sample Prompts

## Task Kickoff Template

```text
Task: <what should be true when done>
Scope: #file:<path> #file:<path>
Do not touch: <paths or behavior>
Constraints: <API, performance, dependency, style constraints>
Acceptance: <tests, observable behavior, validation command>
Output: <plan only | patch | table | bullets>
If ambiguous: ask one question and stop.
```

## Bug Diagnosis

```text
Why does this test fail?
Scope: #file:<test-file> #file:<implementation-file>
Return: root cause, evidence, smallest fix, validation command.
Do not inspect unrelated folders unless these files are insufficient.
```

## API Endpoint

```text
Add `<method> <route>`.
Scope: #file:<controller> #file:<service> #file:<test>
Constraints: preserve existing response envelope, no new dependencies.
Acceptance: <status codes and behavior>.
Output: patch and tests only.
```

## Refactor Plan

```text
Plan only: refactor `<symbol>` to `<new-symbol>`.
Scope: #file:<domain-file> #file:<consumer-file>
Return: ordered file groups, risk, validation command.
No edits yet.
```

## Agent Prompt

```text
Agent task: <single mission>
Budget: inspect max <N> files, run max <N> commands, ask before external tools.
Tools: <allowed tools only>.
Stop rule: stop and summarize if confidence is below <threshold>.
Output: hypothesis, evidence, next action, risks.
```

## MCP Summary Prompt

```text
Use only <MCP tool name> to fetch <artifact ID>.
Return a concise technical summary: IDs, timestamps, service names, errors, decisions, open questions.
Do not fetch related docs or logs yet.
```

## Copilot CLI Prompt

```text
gh copilot suggest "<specific command goal, service, test target, and required output>"
```

Example:

```text
gh copilot suggest "run only claims-api tests matching claim status and show verbose failures"
```

## PR Description Prompt

```text
Using #changes, draft a PR description.
Output sections: Summary, Validation, Risk, Rollback.
Keep each section under 3 bullets.
```
