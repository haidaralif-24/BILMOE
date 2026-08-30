# Frontend guidelines (apps/web)

Read docs/design-system.md first — this file is about *how to implement*
that system in this codebase, not what the system is.

## Tokens, not hardcoded hex

Define the colors/fonts from design-system.md as Tailwind theme extensions
(`tailwind.config`) or CSS variables — e.g. `bg-stem`, `text-muted`,
`font-display`. Never inline a hex code from the design system into a
component; if a new color is needed, it belongs in the config and in
design-system.md, not just in one file.

## Division color is data, not a per-component decision

A division's accent color should come from the `divisions` table (via the
API), not be re-derived or hardcoded per component. If `apps/api` returns
`accent_color` for a division, use that value — don't maintain a second copy
of the color mapping in the frontend.

## Talking to the backend

- All dynamic data goes through the Go API (`packages/contracts/openapi.yaml`
  is the contract) — never query Postgres directly from the frontend.
- Regenerate the TypeScript client from openapi.yaml when the contract
  changes, rather than hand-writing fetch calls that can drift from it.
- Supabase is used client-side for one thing only: login (Supabase Auth).
  Attach the resulting session token as a Bearer header on API calls.

## Structure

- Feature-based folders under `src/` — colocate a feature's components,
  hooks, and types rather than splitting by type across the whole app.
- Server Components by default; reach for Client Components only where
  interactivity is required (forms, the editor UI, anything with state).

## Accessibility & responsiveness

- Every interactive element needs a visible focus state (don't strip
  outlines without replacing them).
- Mobile-first layout — most of the target audience (gen alpha) will hit
  this on a phone.
- Don't ship motion that ignores `prefers-reduced-motion`.
