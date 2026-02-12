# web

Next.js application for the main Wargame product surface.

## Commands

```bash
npm -w apps/web run dev
npm -w apps/web run lint
npm -w apps/web run check-types
npm -w apps/web run build
```

## Notes

- Uses shared configs from `@repo/eslint-config` and `@repo/typescript-config`.
- Uses shared components from `@repo/ui`.
- Supabase clients live under `src/lib/supabase/`.
