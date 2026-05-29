# Extending the Jonnovative Design System

Playbook for evolving tokens, components, and visuals — including LLM-assisted sessions with screenshots or AI-generated references.

## Architecture reminder

```
packages/tokens/src/tokens.css   ← all raw design values (only place for hex/rgb)
packages/ui/src/
  primitives/                    ← Box, Text, Stack, Container
  components/                    ← Button, Card, forms
  patterns/                      ← Navigation, Footer, PricingCard, …
```

Change **tokens first**, then **CSS modules**, then **TSX** only if the public API must change.

---

## A. Visual refresh session (screenshots / AI references)

Use when you want the whole system to feel different — e.g. Webstacks-dark, Blend-editorial, a client mood board, or an AI-generated landing page.

### Cursor starter prompt

```
You are working in the Jonnovative design-system monorepo.

I am attaching reference images / screenshots for the target aesthetic.

Target feel: [describe — e.g. darker hero bands, warmer accent, tighter type]

For this session:
1. Propose token changes in packages/tokens/src/tokens.css (colors, spacing, radius, shadows, motion). Wait for my approval before editing files.
2. Mirror approved values in packages/tokens/src/typography.ts.
3. Update affected *.module.css files in packages/ui/src/ — do NOT change .tsx or tests unless the API must change.
4. Confirm pnpm --filter @pythonidaer/ui test still passes.
5. Visual QA in Storybook.
6. Tell me which changeset bump (patch/minor) to use before publish.

Rules: no hardcoded hex/rgb in CSS modules; no style= on JSX; token-only styling.
```

### Workflow

1. Attach references + describe aesthetic
2. **Approve** proposed token diff
3. Apply tokens → typography.ts → module CSS
4. `pnpm --filter @pythonidaer/ui test`
5. Storybook + marketing site spot-check
6. `pnpm changeset` → patch or minor → `pnpm version-packages` → `pnpm release`

---

## B. Adding a net-new component

### 1. Choose a tier

| Tier | When |
|------|------|
| `primitives/` | Layout/text wrappers, no UI semantics |
| `components/` | Reusable controls (Button, Input) |
| `patterns/` | Composed marketing/app sections |

### 2. Scaffold the folder

```
ComponentName/
  ComponentName.tsx
  ComponentName.module.css
  ComponentName.stories.tsx
  ComponentName.test.tsx
  ComponentName.a11y.test.tsx
  index.ts
```

### 3. Implementation rules

- CSS Modules only; use `var(--token-name)` from tokens
- Export typed `Props` interface
- Export from tier `index.ts` → `packages/ui/src/index.ts`
- Stories: typed `Meta` / `StoryObj`, tag `autodocs` where useful
- Tests: RTL by role/label; a11y test with zero jest-axe violations

### 4. If you need a new token

Add it to `tokens.css` first, then consume in CSS. Never hardcode in components.

### 5. Before publish

```bash
pnpm --filter @pythonidaer/ui test
pnpm --filter @pythonidaer/ui build-storybook
pnpm changeset   # minor for new exported component
```

---

## C. LLM adaptability tips

- **Storybook is the visual contract** — always add/update stories when adding variants; LLM edits can be validated against stories.
- **Keep APIs stable** — prefer new variants over one-off props; visual change belongs in CSS.
- **One session = one concern** — token refresh OR new component OR CRM integration; avoids drift.
- **Copy Cursor rules** from [`docs/cursor-rules/`](./cursor-rules/) into consumer repos (CRM) so the same rules apply outside the monorepo.
- **Publish often** — small patch releases after token/CSS tweaks keep CRM installs current.

---

## D. Consumer repos (CRM)

When the CRM lives in another repository:

1. Install published packages (see [`CONSUMING.md`](./CONSUMING.md))
2. Copy `docs/cursor-rules/*` → CRM `.cursor/rules/`
3. Never fork component source into the CRM — request changes here, publish, bump dependency

---

## E. Related docs

- [`CONSUMING.md`](./CONSUMING.md) — install in external apps
- [`PUBLISHING.md`](./PUBLISHING.md) — npm release process
- [`README.md`](../README.md) — monorepo development
