# Wargame

Persistent asynchronous MMO war strategy game (pre-MVP infrastructure phase).

## Current Status

This repository is currently focused on platform setup and project hygiene, not gameplay implementation.

What exists today:
- Monorepo scaffold with Turborepo + npm workspaces
- `apps/web` Next.js application
- `apps/docs` Next.js documentation app
- `apps/worker` Node.js worker scaffold with Supabase connectivity
- Shared `@repo/ui`, ESLint config, and TypeScript config packages

## Monorepo Layout

```text
apps/
  web/        Next.js app (main product surface)
  docs/       Next.js docs/reference app
  worker/     Background worker scaffold

packages/
  ui/                 Shared React components
  eslint-config/      Shared ESLint presets
  typescript-config/  Shared TypeScript presets
```

## Prerequisites

- Node.js 22 (recommended)
- npm 11+

## Environment Variables

Copy `.env.example` to `.env.local` at the repository root and fill in values.

Variables currently used:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_URL`

## Install

```bash
npm install
```

## Common Commands

```bash
# Run dev servers
npm run dev

# Workspace-level verification (recommended locally)
npm run verify

# If your local Turbo runtime is healthy
npm run lint
npm run check-types
```

## CI

GitHub Actions runs:
- workspace lint
- workspace typecheck
- worker syntax check

on pushes and pull requests to `main`.

## Notes

- `turbo` may crash on some local macOS environments; use `npm run verify` as a reliable fallback.
- Gameplay systems are intentionally not implemented yet.
