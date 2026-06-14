# Bold And Digital — Brand Source of Truth (Jun 14 2026 — v5)

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
| `--void` | `#fafbfc` | Page background (light stage) |
| `--navy` | `#051E40` | Logo rectangle, primary brand surface, primary button bg |
| `--cyan` | `#29F2F2` | Logo corner square, accent CTA, links, brand-cyan |
| `--cyan-core` | `#0bb5b5` | Slightly darker cyan for text on white (reads better) |
| `--text` | `#0a1929` | Body text, headlines, H1 on white |
| `--text-dim` | `#5a6a7a` | Secondary text, mono body copy, meta |

**Rule:** The v5 site is **light-first**. Primary brand surface is white
with navy text. Cyan is the single accent. Do NOT use neon cyan `#00FFFF`
as a "primary" — that's a derivative glow tone, not a brand color.

## Typography

- **Display (H1, H2, hero):** Inter (geometric sans). Loaded via
  `next/font/google` as `--font-inter`. Weights 300, 600, 700, 800.
- **Body / HUD chrome / eyebrows / step numbers:** JetBrains Mono.
- **Hierarchy:**
  - H1: `clamp(2rem, 4vw, 4rem)` — weight 300 default, mixed 300/600/800
    per line for the "layered" td-moro effect.
  - H2: `clamp(1.6rem, 3.2vw, 2.8rem)` — weight 600.
  - Body / lead: JetBrains Mono, 0.88rem line-height 1.6, `--text-dim`.
  - Eyebrow: JetBrains Mono, 0.7rem, letter-spacing 0.32em, uppercase.

## Voice

- Direct, technical, no marketing fluff.
- Eyebrow copy uses terminal-style: `./initialize_studio --brand=boldandigital`
- CTAs in mixed case (lowercase initials) with arrows: `Initialize project →`
- Avoid: "solutions", "synergy", "transform your business", "cutting-edge"

## v5 hero — Mantis-style single viewport (Jun 14 2026)

**Reference boards:**
- td-moro.framer.website — typography layering, mixed weights
- Mantis / @edgedotdesign — single-viewport "product in its world" composition
- Loop Recorder Concept by Andrew — 50/50 split, minimal nav, single CTA

**Concept:** The bowl is the product. It sits on the left side of the
viewport like a product photograph — Apple-product-photography aesthetic,
soft warm cream gradient (not pure white), soft shadow under the bowl.

The typography sits on the right side. **No scroll, no fly-in, no opacity
gates, no parallax.** Everything is composed at scroll=0.

- **Stage:** Soft warm cream gradient (`#fefcf8` → `#ece8df`) on the
  left half; pure white `#ffffff` on the right half. NOT a flat color.
- **Bowl video:** `public/videos/scroll-bg.mp4` plays as an **ambient
  loop** — `loop` + `autoplay` + `muted`, no scroll binding. Slow
  orbital camera + counter-rotating objects.
- **Layout:**
  - Top: thin nav bar (`B` logo + BOLD AND DIGITAL | WEBSITES / IMAGERY / AI | CONTACT →)
  - Left half: bowl video, centered
  - Right half: eyebrow + layered H1 (mixed weights) + lead + 2 CTAs
  - Edges: vertical fine print ("MAKE YOUR WORK / THE ANSWER." on right)
- **Typography layering:** "we build" (300) / "& strategy" (italic 300) /
  "_scroll-driven_" (800 cyan with blinking carets) / "digital worlds." (300)
- **CTAs:** Primary `Initialize project →` (cyan filled), secondary
  `See the work →` (ghost outlined)

## Below-the-fold — editorial column

Below the single-viewport hero, the page continues as a **clean editorial
column** with four sections:

1. `01 — Disciplines` — 5 services, cyan step numbers, max-width 1100px
2. `02 — Selected work` — 3 clients (LiteSpeed, QUIC.cloud, aaads)
3. `03 — Process` — 4 cards (Discover/Design/Build/Grow) in a row
4. `04 — Contact` — H2 + email link with cyan underline

No 3D perspective. No scroll-bound animations. No parallax. Just type
and whitespace.

## Verification

Before declaring any hero "done":

1. Logo SVG matches the navy-rectangle + cyan-corner spec
2. `globals.css` color tokens match the table above
3. H1 uses Inter (not JetBrains Mono)
4. `scroll-bg.mp4` is loaded and playing as an ambient loop (not scroll-bound)
5. Mobile breakpoint tested (375px viewport — hero stacks vertically)
6. `npm run build` succeeds
7. Lighthouse perf score ≥ 80 on a Vercel preview
8. Hero is fully composed at scroll=0 (no opacity gates, no fly-in)
