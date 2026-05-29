# Consuming @pythonidaer/ui in a CRM (or any app)

Use this guide when installing the design system into a **separate repository** — for example a Vite + React CRM.

## Install from npm

```bash
pnpm create vite my-crm --template react-ts
cd my-crm
pnpm add @pythonidaer/ui @pythonidaer/tokens react react-dom
```

Both packages are required: `@pythonidaer/ui` depends on `@pythonidaer/tokens` for CSS variables referenced by components.

## Bootstrap the app

In `src/main.tsx`, load styles **before** rendering:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@pythonidaer/ui/styles.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Import components from the package entry only:

```tsx
import { Button, Card, Navigation, Container, Stack } from '@pythonidaer/ui';
```

Alternative: import tokens directly instead of the bundled styles entry:

```tsx
import '@pythonidaer/tokens/tokens.css';
```

## Page-level styling

Use CSS Modules in your app with token variables — never hardcoded colors:

```css
/* App.module.css */
.page {
  padding: var(--space-section-md);
  background-color: var(--color-bg-subtle);
}
```

Do **not** use inline `style=` attributes on JSX elements.

## CRM-specific tokens

Add domain tokens in your app CSS without overriding design-system primitives:

```css
:root {
  --crm-deal-won: var(--color-success-600);
  --crm-deal-lost: var(--color-error-600);
}
```

## Import rules

| Allowed | Forbidden |
|---------|-----------|
| `@pythonidaer/ui` | `@pythonidaer/ui/dist/...` |
| `@pythonidaer/ui/styles.css` | `@pythonidaer/ui/src/...` |
| `@pythonidaer/tokens/tokens.css` | Copy-pasting component source |

## Local development before npm publish

Link packages from this monorepo while iterating:

```bash
pnpm add ../design-system/packages/ui ../design-system/packages/tokens
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@pythonidaer/ui": "link:../design-system/packages/ui",
    "@pythonidaer/tokens": "link:../design-system/packages/tokens"
  }
}
```

Run `pnpm --filter @pythonidaer/ui build` in the design-system repo after changes so `dist/` stays current.

## Cursor rules for your CRM repo

Copy rules from [`docs/cursor-rules/`](./cursor-rules/) into your CRM repo at `.cursor/rules/` so AI sessions enforce the same boundaries. See [`EXTENDING.md`](./EXTENDING.md) for the full evolution workflow.

## TypeScript

Ensure `moduleResolution` is `"bundler"` or `"node16"` in `tsconfig.json` (Vite templates use this by default). Types ship from `@pythonidaer/ui` at `dist/index.d.ts`.

## Troubleshooting

**Styles look unstyled** — confirm `@pythonidaer/ui/styles.css` is imported in `main.tsx` before any component render.

**Module not found for CSS** — ensure Vite is used (or a bundler that resolves package CSS exports).

**Wrong component types** — upgrade `@pythonidaer/ui` and `@pythonidaer/tokens` to the same release (check changelog).
