# Jonnovative Design System

A production-grade, accessible React + TypeScript design system monorepo for Jonnovative Designs.

## Stack

| Tool | Purpose |
|------|---------|
| pnpm workspaces | Package manager & monorepo |
| Turborepo | Task pipeline & caching |
| React 18 + TypeScript (strict) | Component framework |
| CSS Modules + CSS custom properties | Styling |
| Storybook 8 | Component documentation |
| Vitest + React Testing Library | Unit & interaction tests |
| jest-axe | Accessibility testing |
| tsup | Library bundler |

## Workspace Structure

```
design-system/
├── apps/
│   ├── crm/              — CRM application
│   └── marketing-site/   — Marketing website
├── packages/
│   ├── tokens/           — Design tokens (CSS vars + TS constants)
│   ├── ui/               — Component library (@jonnovative/ui)
│   ├── eslint-config/    — Shared ESLint config
│   └── tsconfig/         — Shared TypeScript configs
└── .cursor/rules/        — Cursor AI enforcement rules
```

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 9

### Install

```bash
pnpm install
```

### Development

```bash
# Start Storybook (component development)
pnpm --filter @jonnovative/ui storybook

# Start CRM app
pnpm --filter @jonnovative/crm dev

# Start marketing site
pnpm --filter @jonnovative/marketing-site dev

# Run all dev servers via Turborepo
pnpm dev
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests for UI package only
pnpm --filter @jonnovative/ui test
```

### Building

```bash
# Build all packages (Turborepo handles dependency order)
pnpm build

# Build UI library only
pnpm --filter @jonnovative/ui build
```

### Linting & Formatting

```bash
# Lint all packages
pnpm lint

# Format all files
pnpm format

# Type-check all packages
pnpm type-check
```

## Design Tokens

All design decisions live in `packages/tokens/src/tokens.css` as CSS custom properties. Import in any app:

```tsx
import '@jonnovative/tokens/tokens.css';
```

### Color System

| Scale | Purpose | Example token |
|-------|---------|---------------|
| Neutral 0–900 | Text, backgrounds, borders | `var(--color-neutral-700)` |
| Primary 500–700 | Brand blue, CTAs | `var(--color-primary-600)` |
| Accent 500–600 | Highlights | `var(--color-accent-500)` |
| Success / Warning / Error | Semantic states | `var(--color-error-600)` |

All color combinations meet **WCAG AA** (4.5:1 normal text, 3:1 large text).

### Spacing

4px base scale: `--space-1` (4px) through `--space-32` (128px).

## Component Library (`@jonnovative/ui`)

### Import

```tsx
import { Button, Card, Navigation, PricingCard } from '@jonnovative/ui';
import '@jonnovative/tokens/tokens.css';
```

### Architecture

```
src/
├── primitives/   Box, Text, Stack, Container
├── components/   Button, Card, Input, Select, Checkbox, FormField, TextArea
└── patterns/     Navigation, Footer, Testimonial, LogoCloud, StatsBlock,
                  CaseStudyCard, PricingCard
```

### Key APIs

**Button**
```tsx
<Button variant="primary" size="md" loading={false}>Submit</Button>
// variants: primary | secondary | outline | ghost | danger
// sizes: sm | md | lg
```

**Navigation** — sticky, accessible mobile drawer with focus trap
```tsx
<Navigation
  logo={<Logo />}
  links={[{ label: 'Home', href: '/', current: true }]}
  variant="split"
  ctaLabel="Get in touch"
/>
```

**PricingCard** — featured plan clearly highlighted
```tsx
<PricingCard
  title="Pro"
  price="$79"
  features={[{ text: 'Unlimited projects', included: true }]}
  featured
  badge="Most Popular"
  ctaLabel="Start free trial"
/>
```

**CaseStudyCard** — metrics array
```tsx
<CaseStudyCard
  title="Redesigning the Sales Pipeline"
  summary="..."
  metrics={[{ value: '40%', label: 'Faster cycles' }]}
  tags={['CRM', 'B2B']}
  ctaHref="/case-study"
/>
```

## Adding a New Component

1. Create the folder: `packages/ui/src/components/MyComponent/`
2. Add: `MyComponent.tsx`, `MyComponent.module.css`, `index.ts`
3. Add: `MyComponent.stories.tsx`
4. Add: `MyComponent.test.tsx`
5. Add: `MyComponent.a11y.test.tsx` (zero violations required)
6. Export from `packages/ui/src/components/index.ts`

Rules (enforced by Cursor):
- No hardcoded color values — only `var(--color-*)` tokens
- No `style=` inline styles on JSX
- All props interfaces exported and fully typed
- No `any` types
- No business logic inside `packages/ui`

## Using the CRM

```bash
# In the CRM, always import from the package:
import { Button, Card } from '@jonnovative/ui';

# Never redefine components or override token colors
```

## Cursor Rules

Four rules live in `.cursor/rules/`:

| Rule file | Scope |
|-----------|-------|
| `design-system.mdc` | All component/app files — tokens, no inline styles, API contracts |
| `accessibility.mdc` | All `.tsx` files — WCAG AA, focus rings, form labels |
| `testing.mdc` | All test files — required file set, query priority |
| `crm-conventions.mdc` | `apps/crm/**` — import rules, no token overrides |

## Working with Cursor AI — Prompt Guide

Use the prompts below when starting a new Cursor session to give the agent full context of where everything lives and what the workflow is.

### Starter context prompt (copy-paste at the start of any Cursor session)

```
You are working inside the Jonnovative Design System monorepo at /Users/johnnyhammond/Documents/design-system.

ARCHITECTURE
- packages/tokens/src/tokens.css     ← ALL design tokens (colors, spacing, type, shadows). Edit here first.
- packages/tokens/src/typography.ts  ← TS constants that mirror tokens.css
- packages/ui/src/primitives/        ← Box, Text, Stack, Container
- packages/ui/src/components/        ← Button, Card, Input, Select, Checkbox, FormField, TextArea
- packages/ui/src/patterns/          ← Navigation, Footer, Testimonial, LogoCloud, StatsBlock,
                                        CaseStudyCard, PricingCard
- packages/ui/src/index.ts           ← Main barrel export
- packages/ui/src/declarations.d.ts  ← CSS module type shim (do not delete)

Each component folder contains exactly:
  ComponentName.tsx          — implementation
  ComponentName.module.css   — CSS Modules (token vars only, no hardcoded values)
  ComponentName.stories.tsx  — Storybook story
  ComponentName.test.tsx     — unit + interaction tests (Vitest + RTL)
  ComponentName.a11y.test.tsx — accessibility tests (jest-axe, zero violations required)
  index.ts                   — named re-exports

CURSOR RULES (always active)
- .cursor/rules/design-system.mdc   — token-only values, no inline styles, API contracts
- .cursor/rules/accessibility.mdc   — WCAG AA, focus rings, form labels, aria attributes
- .cursor/rules/testing.mdc         — required test trio per component, RTL query priority
- .cursor/rules/crm-conventions.mdc — CRM import rules, never override tokens

WORKFLOW FOR MODIFYING A COMPONENT
1. Edit the token in packages/tokens/src/tokens.css if it is a design-value change.
2. Edit ComponentName.module.css to change visual appearance (use var(--token-name)).
3. Edit ComponentName.tsx to change API / behaviour.
4. Run: pnpm --filter @jonnovative/ui test        ← must stay at 112/112 (or higher)
5. Run: pnpm --filter @jonnovative/crm exec tsc --noEmit  ← must be zero errors
6. Run: pnpm --filter @jonnovative/ui storybook   ← visually verify in browser

WORKFLOW FOR ADDING A NEW COMPONENT
1. Decide tier: primitives / components / patterns
2. Create the folder and all five files (tsx, module.css, stories, test, a11y.test, index.ts)
3. Export from the tier's index.ts and from packages/ui/src/index.ts
4. All tests must pass with zero accessibility violations before the work is done.

STYLING RULES (non-negotiable)
- No hex / rgb / hsl values in .module.css — only var(--token-name)
- No style= attributes on JSX elements
- No @tailwind, no styled-components, no emotion
- Spacing uses var(--space-N), typography uses var(--font-size-*) and var(--font-weight-*)
```

### Prompt for restyling / visual refresh work

Use this when providing design images or a design brief to reshape the visual language:

```
Context: [paste the starter context prompt above]

I want to visually refresh the Jonnovative Design System. I am attaching:
- [reference images / screenshots / Figma exports]
- [any ChatGPT/research output describing the target aesthetic]

Target aesthetic:
- [describe in your own words — e.g. "clean SaaS, neutral greys, generous whitespace, Inter font, subtle depth"]

For this session, please:
1. Review packages/tokens/src/tokens.css and propose token-level changes
   (color palette, spacing rhythm, border-radius, shadow scale, transition speeds).
2. Update each component's .module.css to reflect the new visual language.
3. Do NOT change any component APIs or test logic — only tokens and CSS.
4. After CSS changes, confirm pnpm --filter @jonnovative/ui test still passes.
5. Once the design system is refreshed, build a sample marketing webpage at
   apps/marketing-site/src/App.tsx that showcases every component in its best light,
   using only @jonnovative/ui imports.
```

## Contributing

1. Branch from `main`
2. Follow the **WORKFLOW FOR ADDING A NEW COMPONENT** section above
3. Run `pnpm test` — all tests must pass, zero a11y violations
4. Run `pnpm --filter @jonnovative/crm exec tsc --noEmit` — zero type errors
5. Open a PR
