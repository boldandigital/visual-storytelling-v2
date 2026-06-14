# Bold And Digital — Brand Source of Truth (Jun 14 2026)

**This file is the single source of truth for all brand assets.** When in
conflict with `AGENTS.md`, `CLAUDE.md`, `globals.css`, or any other file,
**this file wins.** Update it first, propagate after.

## Logo

- **Mark form:** TALL VERTICAL navy `#051E40` rectangle, with ONE small
  bright cyan `#29F2F2` square in the **BOTTOM-RIGHT** corner.
- **NOT** a BD monogram, **NOT** letters, **NOT** corner reticles.
- See `public/logo.svg` (must match this spec — currently OUT OF SYNC,
  rebuild pending)

## Colors

| Token | Hex | Use |
|---|---|---|
| `--void` | `#000408` | Page background, deep blacks |
| `--navy` | `#051E40` | Logo rectangle, primary brand surface |
| `--cyan` | `#29F2F2` | Logo corner square, accents, links |
| `--cyan-core` | `#00FFFF` | Pure cyan (glows, particles) — derived, not primary |
| `--text` | `#D8E9F5` | Body text on dark backgrounds |
| `--text-dim` | `#6A7A8A` | Secondary text, meta |

**Rule:** Primary brand surface is navy `#051E40`. Cyan `#29F2F2` is the
accent. Do NOT use `#00FFFF` as a "primary" color — that's a derivative
glow tone, not a brand color.

## Typography

- **Display (H1, hero):** A modern geometric sans (Inter, Space Grotesk,
  or similar). Use via `next/font/google`.
- **Body / HUD chrome:** JetBrains Mono (monospace) — keep this for the
  cyberpunk terminal feel, but ONLY for HUD overlays, eyebrows, and
  meta info. Never for hero H1.
- **Hierarchy:** H1 must be ≥ 64px on desktop, 40px on mobile. Weight
  600-700. Tight letter-spacing.

## Voice

- Direct, technical, no marketing fluff.
- Eyebrow copy uses terminal-style: `./initialize_studio` style OK.
- CTAs in caps with arrows: `INITIALIZE_PROJECT →`
- Avoid: "solutions", "synergy", "transform your business", "cutting-edge"

## Hero asset

- **Video:** `public/videos/scroll-bg.mp4` (already exists, 16.5MB)
- **Pattern:** scroll-linked scrub — video plays/loops as background,
  scroll position drives opacity / blur / progress
- **Layout:** video fills viewport as background, text overlay top-left
  or center, panels appear on scroll

## Verification

Before declaring any hero "done":

1. Logo SVG matches the navy-rectangle + cyan-corner spec
2. `globals.css` color tokens match the table above
3. H1 uses a display sans (not JetBrains Mono)
4. `scroll-bg.mp4` is actually loaded in `app/page.tsx`
5. Mobile breakpoint tested (375px viewport)
6. `npm run build` succeeds
7. Lighthouse perf score ≥ 80 on a Vercel preview
