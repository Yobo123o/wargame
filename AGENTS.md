# AGENTS.md

AI Development Agent Guidelines for the **Wargame** Monorepo

This repository is designed for AI-assisted development. Agents must follow the architecture, security model, and tool routing rules below to avoid cross-project confusion and accidental data exposure.

---

## Project Summary

Wargame is a web-based, persistent, asynchronous MMO war strategy game.

Monorepo layout (Turbo + npm workspaces):

- `apps/web` — Next.js web frontend (Vercel)
- `apps/docs` — Docs site (Vercel, optional)
- `apps/worker` — Always-on tick resolver (NOT Vercel)
- `packages/*` — Shared libraries (types, ui, game-core, db, etc.)

Authoritative simulation runs in the worker; the web app is a client/UI layer.

---

## Security Model

### Web (`apps/web`)
- Uses **Supabase anon/public** key only.
- Must obey RLS for all client-accessible tables.
- Must never contain service role keys.

### Worker (`apps/worker`)
- May use **Supabase service role** (server-only).
- Responsible for:
  - War tick resolution
  - Combat simulation execution
  - Unit lifecycle updates
  - Clan asset lifecycle updates
- Must be idempotent and safe to retry (tick locking will be implemented).

---

## MCP Tool Registry (Codex)

Agents must use the following MCP servers by name, exactly as listed here.
Do not guess tool names; use `/mcp` in Codex to inspect available tools.

### ✅ Supabase (Wargame project)
**MCP Server Name:** `supabase-wargame`  
**Type:** Remote MCP (OAuth)  
**Scope:** Wargame Supabase project ONLY

**Use for:**
- Inspecting schema (tables, columns, migrations)
- Running development SQL (prefer migrations)
- Generating TypeScript types from schema
- Viewing logs/advisors when debugging

**Rules:**
- Prefer **project-scoped** tools here. Do not use other Supabase MCP servers for Wargame.
- Do not connect MCP to production data. Use dev/test data only.
- Prefer migrations over direct destructive SQL.
- If asked to delete/alter large datasets, require explicit human confirmation in-chat before executing SQL.

**Prompt pattern:**
- “Use MCP tools from `supabase-wargame` only.”

---

### ⛔ Supabase (other project — NOT Wargame)
**MCP Server Name:** `supabase`  
**Type:** Local MCP server (`@supabase/mcp-server-supabase`)  
**Scope:** Another Supabase project (NOT Wargame)

**Rules:**
- **Do not use** `supabase` MCP server for any work in this repo.
- If a request references Supabase and is ambiguous, default to `supabase-wargame` and call out the assumption.

---

### ✅ GitHub (repo automation)
**MCP Server Name:** `github`  
**Type:** Remote MCP (Bearer token)

**Use for:**
- Reading issues/epics
- Creating issues for planned work
- Updating issues with progress notes
- Creating pull requests

**Rules:**
- New features should map to an issue/epic.
- PRs must include:
  - summary of changes
  - gameplay/system impact
  - how to test locally
- Do not expose tokens or secrets in issues/PRs.
- Prefer small, reviewable PRs over huge changesets.

**Prompt pattern:**
- “Use GitHub MCP tools (`github`) to read/update issues.”

---

### ✅ shadcn/ui generator
**MCP Server Name:** `shadcn`  
**Type:** Local MCP server (`npx shadcn@latest mcp`)

**Use for:**
- Adding shadcn/ui components to `apps/web` (or shared `packages/ui` if configured)
- Generating component boilerplate consistently

**Rules:**
- Only generate components where they will be used.
- Keep UI components dumb; business logic belongs in `packages/game-core` or server-side.
- Do not introduce heavy UI dependencies without justification.

**Prompt pattern:**
- “Use the `shadcn` MCP server to add a component.”

---

## Tool Routing Priorities (do this instead of guessing)

1. **Database/schema questions** → Use `supabase-wargame` MCP to inspect.
2. **Issue/epic tracking and PR work** → Use `github` MCP.
3. **UI component scaffolding** → Use `shadcn` MCP.
4. If multiple Supabase MCP servers exist, **never** use `supabase` for this repo.

---

## Development Practices

### When changing database schema
1. Inspect current schema via `supabase-wargame`.
2. Create/apply migrations (prefer `apply_migration` if available).
3. Regenerate types (if we add a types step).
4. Update code + tests accordingly.

### When implementing gameplay/simulation
- All authoritative simulation logic belongs in `packages/game-core`.
- `apps/worker` orchestrates ticks and writes results.
- `apps/web` only displays state and submits player actions.

---

## Prohibited Actions

Agents must not:
- Put service role keys in client code or `NEXT_PUBLIC_*` variables
- Run destructive SQL without explicit human approval
- Implement simulation resolution logic in the frontend
- Use the `supabase` MCP server for Wargame work

---

## Quick MCP Verification

Inside Codex:
- Run `/mcp` and verify servers exist:
  - `supabase-wargame`
  - `github`
  - `shadcn`

If a tool call fails due to auth, re-authenticate via CLI (where supported) and restart Codex if necessary.
