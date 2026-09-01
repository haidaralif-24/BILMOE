# B-ILMOE design system

Source of truth for anything visual. If a screen or component doesn't match
this, it's wrong, not the doc.

## Tone

Classic paper-comic book: ink outlines, Ben-Day halftone, sticker accents,
hard offset shadows. Gen-alpha accessible, not childish. Bahasa gaul is fine
in copy, but STEM content still has to read as credible to adults (school
supervisors, IB scholarship reviewers). When in doubt, cut the slang before
you cut the accuracy.

## Color

Warm paper background with near-black ink. The division accents are used as
bold solid fills (cards, stickers) — never as body-text color. Text on
accent fills is always ink (`ink`), never white.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F7F1E4` | Page background (warm cream) |
| `card` | `#FFFAF0` | Cards, speech bubbles, elevated panels |
| `ink` | `#16110A` | Borders, outlines, text, hard shadows |
| `stem` | `#ADED50` | STEM division accent (green) |
| `arts` | `#FF5CA1` | Arts division accent (pink) |
| `social` | `#FF7B1C` | Social/socio-politic division accent (orange) |
| `danger` | `#ED2626` | Danger/error accent (red) |
| `warning` | `#FCD717` | Warning accent (yellow), burst stickers |

Legacy dark-neon tokens (`bg`, `surface`, `text`, `muted`, `navy`) remain in
`design-tokens.ts` and the `.dark` CSS block for future use but are not part
of the active comic theme.

Rules:
- A division's color is used consistently everywhere that division shows up
  (cards, badges, chips) — never reassign colors per-page.
- Never rely on color alone to distinguish divisions — always pair the color
  with the division name or an icon (accessibility).
- Ink on paper and ink on accent fills must pass AA contrast. `heading-outline`
  strokes are ink over a paper fill — the fill is what carries contrast, so
  keep stroke widths reasonable (1.5–3px).
- Halftone dots and speed lines are decorative only — keep alpha low
  (≤ 0.08) so body copy stays legible.

## Typography

| Role | Font | Notes |
|---|---|---|
| Display / headlines | Luckiest Guy | Chunky comic display, caps-friendly, for hero wordmark + section headers |
| Body | Inter (Geist) | 400–500 weight, this is what most people read |
| Labels / metadata / eyebrows | Geist Mono | Uppercase tracking, tags, timestamps, "eyebrow" text above headlines |

Comic styling helpers (globals.css `@layer utilities`):
- `.heading-outline` / `.heading-outline-sm` — sticker outline: paper fill,
  ink stroke, hard ink offset shadow. Headings on accent fills only.
- `.comic-panel` / `.comic-panel-sm` — solid ink frame + hard offset shadow.
- `.comic-tail` — speech-bubble tail, for caption callouts.
- `.comic-rays` — faint speed lines radiating from top-center.
- `.comic-tilt-1..3` — slight rotations; pair with hover-straightens.

## Shape & spacing

- Corner radius: 8–16px on cards and buttons; cards on paper use rounded-2xl.
- Hard-edged offset shadows (`4–7px 4–7px 0 ink`) instead of blur shadows —
  reads as print registration, not drop shadow.
- Ink borders are 2–4px solid; dashes for dividers.
- Generous whitespace on the paper background; don't crowd stickers or the
  page reads as noisy rather than energetic. Burst stickers: small, sparing,
  corners only.

## Motion

Playful but restrained — sticker drift, card drop/swap, hover lifts, slow
burst rotation. Respect `prefers-reduced-motion` (static fallbacks in
ComicBackground, no scroll-snap locking, no flashes — seizure risk with
saturated accent fills).
