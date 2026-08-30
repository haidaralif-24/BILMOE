# B-ILMOE design system

Source of truth for anything visual. If a screen or component doesn't match
this, it's wrong, not the doc.

## Tone

Gen-alpha accessible, not childish. Bahasa gaul is fine in copy, but STEM
content still has to read as credible to adults (school supervisors, IB
scholarship reviewers). When in doubt, cut the slang before you cut the
accuracy.

## Color

Dark near-black base. Neon is used as an *accent*, never as a body-text color
or a full-bleed background — legibility and adult credibility both depend on
restraint here.

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A0C14` | Page background |
| `surface` | `#12162A` | Cards, elevated panels |
| `text` | `#EEF0FB` | Primary text |
| `muted` | `#8890B3` | Secondary text, captions |
| `stem` | `#C6FF3D` | STEM division accent (acid lime) |
| `arts` | `#FF3FAE` | Arts division accent (hot magenta) |
| `social` | `#3FD7FF` | Social/socio-politic division accent (electric cyan) |

Rules:
- A division's color is used consistently everywhere that division shows up
  (badges, card borders, chips) — never reassign colors per-page.
- Never rely on color alone to distinguish divisions — always pair the color
  with the division name or an icon (accessibility).
- Neon text on the dark background must be checked for contrast; prefer neon
  for borders/icons/small accents over large blocks of neon text.

## Typography

| Role | Font | Notes |
|---|---|---|
| Display / headlines | Space Grotesk | Bold weights (600–700) for hero/section headers |
| Body | Inter | 400–500 weight, this is what most people read |
| Labels / metadata / eyebrows | JetBrains Mono | Small caps or uppercase, used for tags, timestamps, "eyebrow" text above headlines |

## Shape & spacing

- Corner radius: 8px on cards and buttons — matches the diagrams/mockups
  already produced for this project, keep it consistent.
- Generous whitespace on the dark background; don't crowd neon elements
  together or the page reads as noisy rather than energetic.

## Motion

Subtle only — hover states, fades. Respect `prefers-reduced-motion` and
never auto-play anything that flashes (seizure risk with saturated neon).
