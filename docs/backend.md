# Backend guidelines (apps/api)

## Contract-first

Any new or changed route gets added to `packages/contracts/openapi.yaml` in
the *same* change as the Go handler. If the two disagree, the contract is
what the frontend was built against — fix the code, not the doc, unless the
contract change is the actual intent of the change.

## Suggested layout

```
apps/api/
  cmd/server/main.go     entrypoint, wiring only
  internal/handlers/     one file per resource (posts.go, divisions.go, ...)
  internal/middleware/   auth (JWT verification), logging
  internal/store/        Postgres access (pgx), one file per table cluster
```

Keep `main.go` thin — it should wire dependencies and start the server, not
contain business logic.

## Auth middleware

Verify the Supabase-issued JWT using `SUPABASE_JWT_SECRET`. On success,
attach the caller's `profile` (id + role + division_id) to the request
context so handlers can do role checks without a second DB round-trip per
request where avoidable.

## Error responses

Consistent JSON shape across every endpoint:

```json
{ "error": "human-readable message", "code": "machine_readable_code" }
```

Don't leak raw Postgres errors to the client — log them, return a generic
message with an appropriate status code.

## Database

- Schema changes are new files in `/supabase/migrations`, never edits to an
  already-applied migration.
- Use `SUPABASE_SERVICE_ROLE_KEY` only for operations that legitimately need
  to bypass RLS (admin actions) — default to the regular connection path
  otherwise so RLS stays a meaningful safety net, not dead code.

## Workflow transitions

See `.opencode/skills/editorial-workflow/SKILL.md` for the exact status
machine and role rules before implementing `/posts/{id}/transition`.
