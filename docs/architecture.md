# B-ILMOE — system architecture

Stack: Next.js (frontend) - Go (backend API) - Supabase (Postgres + Auth) - Cloudinary (media)

## Component responsibilities

- Next.js (apps/web): public pages, internal editor UI, calls the Go API,
  uploads media directly to Cloudinary using a signature issued by Go.
- Go API (apps/api): auth verification (Supabase JWT), all business logic,
  the editorial workflow state machine, Postgres access, Cloudinary signing.
- Supabase: managed Postgres + Auth. Go owns the schema via migrations in
  /supabase/migrations. RLS is enabled as defense-in-depth even though Go
  is the primary gatekeeper.
- Cloudinary: stores cover images / media. Secret key lives only in Go, never
  in the frontend.

## Editorial workflow (maps to the org's SOP)

Status values on `posts.status`:
  draft -> in_review -> changes_requested -> approved -> published

Every transition writes a row to `workflow_events` (who, from, to, note) —
this is the audit trail, not a status-per-role scheme. Roles: writer, editor,
reviewer, designer, admin.

## Data model

See /supabase/migrations/0001_init.sql for the authoritative schema:
profiles, divisions, posts, workflow_events, media_assets.

## API surface

Defined in /packages/contracts/openapi.yaml — treat this file as the source
of truth. Regenerate the Go handlers' request/response shapes and the
frontend TS client from it rather than hand-writing both sides independently.

## Environment variables

Frontend (apps/web/.env.local):
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  NEXT_PUBLIC_API_BASE_URL

Backend (apps/api/.env):
  DATABASE_URL
  SUPABASE_JWT_SECRET
  SUPABASE_SERVICE_ROLE_KEY   (server-only, bypasses RLS)
  CLOUDINARY_CLOUD_NAME
  CLOUDINARY_API_KEY
  CLOUDINARY_API_SECRET       (server-only, never expose to the browser)

## Rules an agent working in this repo should not break

- Never put SUPABASE_SERVICE_ROLE_KEY or CLOUDINARY_API_SECRET in apps/web.
- Never let the frontend call Postgres directly — always through the Go API.
- Any change to a table touched by posts/workflow_events must ship as a new
  file in /supabase/migrations, never an edit to an already-applied migration.
- Update openapi.yaml in the same change as any Go handler that adds/changes
  a route.
