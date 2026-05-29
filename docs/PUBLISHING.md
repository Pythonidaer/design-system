# Publishing @pythonidaer packages to npm

## Prerequisites

1. [npm account](https://www.npmjs.com/signup) — you publish under your user scope **`@pythonidaer`**
2. Log in locally: `npm login` (confirm with `npm whoami` → should show `pythonidaer`)

No separate npm org is required. Scoped packages publish as `@pythonidaer/tokens` and `@pythonidaer/ui` under your existing account (same scope as `@pythonidaer/complexity-report`).

## First publish (v0.1.0)

From the monorepo root:

```bash
pnpm install
pnpm --filter @pythonidaer/ui build
pnpm --filter @pythonidaer/ui test

# Dry-run: inspect tarballs
pnpm --filter @pythonidaer/tokens pack
pnpm --filter @pythonidaer/ui pack

# Publish tokens first, then ui (ui depends on tokens)
pnpm --filter @pythonidaer/tokens publish --access public --no-git-checks
pnpm --filter @pythonidaer/ui publish --access public --no-git-checks
```

`changeset publish` rewrites `workspace:*` to semver ranges automatically on subsequent releases.

## Subsequent releases (Changesets)

1. **Record a change** after any tokens/ui update:

   ```bash
   pnpm changeset
   ```

   Select `@pythonidaer/tokens` and/or `@pythonidaer/ui`, choose patch/minor/major, write a summary.

2. **Apply version bumps** (updates `package.json` + `CHANGELOG.md`):

   ```bash
   pnpm version-packages
   ```

3. **Publish**:

   ```bash
   pnpm release
   ```

   Runs `pnpm build` then `changeset publish` for all versioned packages.

## Version bump guidance

| Change | Bump |
|--------|------|
| Token/CSS-only visual refresh | patch |
| New optional component or prop | minor |
| Removed or breaking public API | major |

## Verify before publish

```bash
pnpm --filter @pythonidaer/ui test          # must pass (112/112)
pnpm --filter @pythonidaer/ui build
pnpm --filter @jonnovative/marketing-site build
```

## Install in CRM after publish

```bash
pnpm add @pythonidaer/ui @pythonidaer/tokens
```

See [`CONSUMING.md`](./CONSUMING.md) for app setup.
