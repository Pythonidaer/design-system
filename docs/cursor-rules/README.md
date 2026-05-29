---
description: Copy this folder to `.cursor/rules/` in your CRM or consumer app repo.
---

# Portable Cursor rules

Copy these files into your **CRM or consumer app** repository:

```
docs/cursor-rules/  →  .cursor/rules/
```

Files:

| File | Purpose |
|------|---------|
| `design-system.mdc` | Token-only styling, import boundaries |
| `accessibility.mdc` | WCAG AA standards |
| `crm-conventions.mdc` | How to consume `@pythonidaer/ui` in external apps |

The monorepo canonical rules live in [`.cursor/rules/`](../../.cursor/rules/) at the repo root. Keep consumer copies in sync when rules change.

See [EXTENDING.md](../EXTENDING.md) for the full evolution workflow.
