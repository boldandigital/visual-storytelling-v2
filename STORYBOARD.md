# STORYBOARD — Bold And Digital (v7, Jun 14 2026)

> **The bones before the pixels.** This is the contract. No stills, no
> video, no code ships until this document is signed off.

---

## 0. North Star

**One sentence:** The site is a single continuous scroll through seven
"moments" — each one earns its viewport by being impossible to do as a
static page, a template, or a 2023 agency brochure.

**The site is not:** a portfolio, a services menu, a contact form, a
"Webflow template with a 3D hero."

**The site is:** a proof-of-capability. The visitor should finish the
scroll believing that if the studio can build THIS for themselves, they
can build anything for the visitor's brand.

**The single emotional arc:** *curiosity → confidence → desire → relief.*
The visitor arrives curious (what is this?), becomes confident (these
people can actually build), wants to hire them (we want this), and feels
relief at the contact (one email, done).

---

## 1. Vibe — what "2026" means in concrete terms

### References (the visual north stars)
- **Active Theory** — *Dreams of Dalí*, *Is It Trash*, *Future Artefacts Museum*. Each project is its own immersive browser, not a section of a longer page. We are NOT Active Theory (we don't have the R&D budget) but we borrow their discipline: **one viewport = one moment.**
- **Studio Bruch** — *Mad Magazine* site, *Idle Games*. Editorial typography on a clean stage, with one specific 3D moment that rewards the scroll.
- **Resn** — *The Great Red Spot*, *Endless Voyage*. Generative, never the same twice, but composed with intention.
- **Locomotive** — *Beauce* (Atlas Céréales), *Sid Lee Architecture*. Calm editorial restraint, big display type, the page breathes.
- **@gadgetindesign** (water bottle video, our ref) — product-as-protagonist, marquee text as the only other element, cinematic environment.
- **LOOP recorder** (our ref) — 3D product owns the right 60%, text transitions own the left 40%, single accent color, no other content competing for attention.
- **@td-moro** (our ref) — mixed-weight H1 with `mix-blend-mode: difference` color-flip on a dark shape.

### What 2026 means (and 2023 doesn't)
- **One moment per viewport.** A 2023 site has 8 equal-weight sections. A 2026 site has 4 hero-quality moments and 3 supporting beats.
- **Display type ≥ 96px on desktop.** Body type ≤ 14px. The hierarchy is enormous.
- **No "section heading → paragraph → button" template.** Each section's structure is bespoke to its content.
- **3D is the default, not the cherry on top.** A flat section in 2026 reads as cheap.
- **AI-generated assets are openly used.** The hero still isn't a stock photo. The bowl video isn't a dribbble pack asset. The copy isn't agency-fluff.
- **Negative space is the design.** Whitespace, not chrome.
- **Cursor effects.** The mouse pointer is part of the visual language.
- **Audio is optional but expected.** A toggle. The hero video has a hum.

### What 2023 looks like (do not do)
- Hero with 3 stacked buttons.
- "Services" as 6 equal cards in a grid.
- "Our Process" as 4 numbered steps in a row.
- "Recent Work" as 3 thumbnails in a carousel.
- "Contact Us" as a form with name/email/message fields.
- Sticky nav with 5 links.
- Footer with social icons + sitemap.

---

## 2. The Seven Moments (narrative arc)

```
[0] ARRIVAL      — 100vh — Curiosity. "What is this?"
[1] PROOF         —  80vh — Confidence. "They can build."
[2] CAPABILITIES  — 100vh — Desire. "We want this."
[3] METHOD        —  80vh — Trust. "They'll deliver."
[4] WORK          — 100vh — Recognition. "They've done it before."
[5] MANIFESTO     —  60vh — Calm. "I want to work with people like this."
[6] DOORS         — 100vh — Relief. "One email. Done."
[7] MARQUEE BAND  —  20vh — Echo. "Lasting impression."
```

Total scroll: ~640vh. The visitor spends ~3-4 minutes if they read; ~45s
if they scroll quickly. Both are valid. The reward scales with attention.

### Emotional contract per moment
| # | Beat | Visitor feels | Exit state |
|---|------|---------------|------------|
| 0 | The Bowl | Intrigued, watching | "What is this brand?" |
| 1 | The Orbit | Convinced | "They build real things." |
| 2 | Capabilities | Hungry | "We need this." |
| 3 | Method | Trusting | "They'll ship." |
| 4 | Work | Recognized | "They know our world." |
| 5 | Manifesto | Aligned | "We'd fit together." |
| 6 | Doors | Relieved | "Email. Done." |
| 7 | Marquee | Echoing | "Bold and digital." |

---

## 3. Visual Language (cross-cutting rules)

### Composition
- **60/40 splits** (not 50/50, not 70/30). The dominant side holds the visual; the secondary side holds the type. **The bowl is always on the bigger side.**
- **Asymmetric grid.** No centered content unless the moment is a manifesto.
- **One focal point per viewport.** The eye should land in < 400ms.
- **Negative space ≥ 40% of viewport** at all times. We are not cramming.
- **Edge-aligned fine print** (Mantis pattern). Vertical text on the right edge of hero/product moments.

### Typography
- **Display:** Inter Variable, weight 400/500/700. H1 = 96–140px desktop, 56px mobile. Tight letter-spacing (-0.04em). Sentence case.
- **Mono:** JetBrains Mono for eyebrows, meta, prices, fine print. NEVER for H1/H2.
- **Eyebrows:** Always 11px, all caps, letter-spacing 0.32em, cyan.
- **Copy rhythm:** Display → Eyebrow → Display → Mono detail → Mono CTA. Never three display blocks in a row.

### Color
- **Stage:** Off-white `#F7F8F9` for content sections. Pure white `#FFFFFF` for product moments. Navy `#051E40` for manifesto + contact. Never #000 (dead).
- **Brand:** Navy `#051E40` rectangle + cyan `#29F2F2` square (BRAND.md). The cyan is **always ≤ 5% of viewport area.** A 2026 site uses cyan like a sniper rifle — one shot, then nothing.
- **Text:** Navy on white. Off-white on navy. **Never navy on navy. Never white on white. Never cyan as a background.**

### Motion
- **Scroll-linked, not time-based.** The H1 doesn't cycle every 2.8s — it transitions when the visitor scrolls past a keyframe.
- **All easing is `cubic-bezier(0.2, 0.8, 0.2, 1)`.** Never `linear`, never `ease-in-out` for content. (Loaders are the only exception.)
- **Duration:** 600–900ms for entry, 1200–1800ms for exit. Faster feels twitchy, slower feels broken.
- **CSS-first.** Only Three.js for the bowl itself. Everything else is `transform` + `opacity`.
- **The bowl rotates 360° over 24s continuously** (always, not scroll-bound). This is the heartbeat of the site.
- **No parallax on text.** Parallax on backgrounds only. Text reads cleanly.
- **Cursor:** custom cursor on desktop. Mix of `crosshair` over interactive elements, `default` elsewhere. Never a 2023 "circle that follows the cursor with a 200ms delay" — that ship has sailed.

### Sound (optional, toggle)
- A 0.5s click on CTA. A 2s ambient hum under the hero. Nothing else. If the visitor doesn't toggle, no sound.

---

## 4. The Seven Moments — Detailed

### [0] ARRIVAL — The Bowl (100vh)

**Beat:** The visitor lands. They see a single ceramic bowl on a
seamless white stage. Cyan ring inside. Three small objects orbit it
(book, clapperboard, paper plane). The bowl rotates slowly. No other
content for 2 seconds. Then the type fades in.

**Composition (60/40, bowl right):**
- LEFT 40%: eyebrow → H1 → lead → CTAs → service tags
- RIGHT 60%: bowl video, 86% width, centered, with vertical "BOWL-01 / 3D ASSET / LOOP" fine print on the right edge, and a "FROM $4,800 USD" price tag in the bottom-right
- TOP-LEFT: BOLD/DIGITAL wordmark (BRAND.md)
- TOP-RIGHT: thin nav, /start cyan pill

**H1:** "Brand worlds." on first paint. On scroll (50% of viewport
scrolled), H1 transitions to "Strategy + code." On 100% scrolled, to
"Ship it." This is the LOOP pattern (text transitions), but
**scroll-keyed** not time-keyed. 2.8s was a gimmick. Scroll is honest.

**Motion:**
- Bowl video: continuous 24s loop, 360° orbital camera
- CSS-driven micro-wobble on the bowl container: ±4° tilt, 6s period
- Eyebrow dot: pulse 1.6s
- H1 transition: 700ms crossfade + 8px Y shift, on scroll threshold
- Scroll cue (bottom center): pulsing 1px line

**Reference frame:** LOOP recorder video frame at 0:08.

**Copy direction (not final, just tone):**
- H1 candidates: "Brand worlds." / "Strategy + code." / "Ship it."
- Lead: 2 sentences, ≤ 200 chars total, mono, no marketing fluff.
- CTAs: "Initialize project →" (primary) / "See the work" (ghost)

**Do not:**
- Do not center the bowl. It lives on the right.
- Do not stack H1s and cycle them with setInterval. Scroll-keyed or die.
- Do not put any other content in this viewport besides what's listed.

---

### [1] PROOF — The Orbit (80vh)

**Beat:** A horizontal marquee. Just text. The visitor is still
processing the hero. This section exists to be the **anti-scroll**: a
moment of motion that is not about the product, it's about the studio.

**Composition:**
- Full-bleed navy `#051E40` background, cyan `#29F2F2` 1.5px top + bottom borders
- Single line of text scrolling left-to-right, infinite loop
- Text: "STRATEGY · CODE · 3D · AI · HOSTING · BRAND WORLDS ·" repeated 3x
- Font: Inter Variable, 96px desktop / 56px mobile, weight 600, white with every 3rd item in cyan
- Vertical: centered

**Motion:**
- `translateX(0) → translateX(-33.333%)` over 38s linear, infinite
- Pauses on hover (so people can read)
- No entrance animation — the marquee is already moving when the visitor arrives

**Reference frame:** @gadgetindesign water bottle video, the rotating text band.

**Copy direction:**
- The text is the studio's own vocabulary. Not "AI · ML · Blockchain" buzzwords. "3D · AI · Hosting" is the actual service menu. (Loops back to BRAND.md.)

**Do not:**
- Do not add any other content. No eyebrow, no CTA, no logo.
- Do not animate the speed. 38s is the heartbeat.
- Do not use a JavaScript marquee. CSS keyframes.

---

### [2] CAPABILITIES — Five Things We Ship (100vh)

**Beat:** The visitor's curiosity is now "what do they actually do?"
This section answers without a list. Each capability is its own
**vertical micro-scene**: 1 capability = 1 viewport, scrolled past
individually, each with a different composition and a different
3D/AI-generated asset.

**Composition (5 sub-sections, 100vh each, but visually they flow as one):**
- [2a] BRAND WORLDS — Cyan H1, navy bowl asset (left), "Strategy, identity, naming, visual systems" (right)
- [2b] WEBSITES — Navy H1, white-bowl asset (right), "Three-dimensional web. Performance budgets under 100kB" (left)
- [2c] IMAGERY — Cyan H1, asset = a single product still rendered by AI (left), "Product stills, motion loops, AI-rendered brand photography" (right)
- [2d] AI AUTOMATION — Navy H1, asset = a wireframe/schematic of a workflow (right), "Agent pipelines, retrieval systems, on-device inference" (left)
- [2e] HOSTING — Cyan H1, asset = a stylized server (left), "LiteSpeed + QUIC.cloud edge. Obsessed with TTFB" (right)

Each micro-scene has:
- A 01–05 number, cyan, top-left
- An H1, 96px desktop, sentence case
- A lead, mono, 14px, max 60ch
- A "→ View case" link that does nothing (or scrolls to Work)
- The asset: an AI-generated still or a 3-second loop

The alternation pattern: 2a (asset right), 2b (asset left), 2c (asset right), 2d (asset left), 2e (asset right). The visitor's eye moves rhythmically.

**Motion:**
- Each asset fades in from `opacity 0.3 → 1` as it enters the viewport, with 8px Y shift, 800ms ease-out
- The H1 letter-spacing animates from -0.01em to -0.04em on entry (subtle "settling")
- No parallax. No scroll-scrubbed video. Just the assets on their stages.

**Reference frame:** Active Theory *Future Artefacts Museum* — each project in its own immersive moment.

**Copy direction:**
- H1 = service name, lowercase or sentence case
- Lead = ≤ 80 chars, mono, declarative
- No bullet points. No "what's included" lists. The visitor trusts the studio or doesn't.

**Do not:**
- Do not use 5 equal cards in a 5-column grid.
- Do not use icons. Icons are 2023.
- Do not use 5 separate "Learn more →" buttons. One link, at the end of the section, that scrolls to Work.

---

### [3] METHOD — From Brief to Ship (80vh)

**Beat:** Trust. The visitor needs to know what it's like to work with
this studio. Not a process diagram — a **timeline** that reads like
a single sentence.

**Composition:**
- Single horizontal line, navy, 2px tall, 100% width
- Four nodes on the line: 01 BRIEF / 02 STRATEGY / 03 BUILD / 04 OPERATE
- Above each node: a number (cyan, 11px, mono), title (Inter 32px, weight 600, navy), description (mono, 14px, max 40ch)
- Below each node: a small icon-less glyph (a single character: `>` `_` `+` `~`)
- The line itself is dotted from 03 to 04 to indicate ongoing retainer

**Motion:**
- The line draws itself from left to right as the section enters the viewport (1.2s)
- Each node fades in 200ms after the previous
- The line does not redraw on scroll-out (it stays drawn)

**Reference frame:** Locomotive's *Beauce* — single editorial line with rhythmic beats.

**Copy direction:**
- Node titles: 1 word each. BRIEF. STRATEGY. BUILD. OPERATE.
- Descriptions: ≤ 40 chars each. "A 30-min call. We listen." / "Naming, narrative, direction. 2 weeks." / "Design + code. 6–10 weeks." / "Hosting, observability, AI. Ongoing."

**Do not:**
- Do not use 4 cards. A horizontal line, not a grid.
- Do not animate the dots to "flow" continuously. The line draws once.
- Do not use icons.

---

### [4] WORK — Recent (100vh)

**Beat:** Recognition. The visitor has seen the capabilities, the
method, the bowl. Now they want to see **proof in the wild**. Not a
carousel of thumbnails — three case studies, each presented as a
**typographic statement** with a hover preview.

**Composition (3 rows, full-width, 100vh total):**
- Each row is one case study
- Row layout: number (cyan, 11px) | client name (Inter 96px, weight 700, navy) | tag (mono 14px, dim) | arrow (cyan, 24px) — laid out as a 4-column grid
- On hover: the client name gets a `mix-blend-mode: difference` color-flip on a background that fades in (a still from the case study)
- The arrow translates +6px on hover
- The row's bottom border is 1px navy at 10% opacity

**Motion:**
- On row enter: name fades in with 4px Y shift, 600ms
- On hover: background-image fades in over 400ms, mix-blend flips the text from navy to white
- The whole row has a `padding-left: 0 → 12px` shift on hover, 300ms

**Reference frame:** @td-moro (color-flip on hover) + Resn (typographic restraint).

**Copy direction:**
- Client names only. No project descriptions. No metrics. (The site is not a case study portfolio. It's a studio identity.)
- Tags: 2-3 words, lower-case, mono, dim. "edge / cdn" / "cdn / r&d" / "ad-tech / brand"

**Do not:**
- Do not use 3 thumbnails in a row.
- Do not show screenshots. We don't have them. And we don't need them — the typographic statement IS the portfolio.
- Do not link to case study pages that don't exist. The hover preview is the entire experience.

---

### [5] MANIFESTO — A Statement (60vh)

**Beat:** Calm. The visitor has been reading, scrolling, processing.
This is the breath. One statement, centered, in the dark.

**Composition:**
- Navy `#051E40` background, full bleed
- Single sentence, centered, vertically and horizontally
- Inter Variable, 56px desktop / 32px mobile, weight 400, off-white `#D8E9F5`
- Letter-spacing -0.02em
- Max width 24ch (so it wraps dramatically on smaller viewports)
- Above: a 1px cyan horizontal line, 40px wide, centered
- Below: a single mono line, 11px, cyan, "— Bold And Digital · 2026"

**Motion:**
- Statement fades in (opacity 0 → 1) over 1200ms when section enters viewport
- The 1px cyan line above scales from 0% to 100% width over 800ms
- No other motion. This section is the most still.

**Reference frame:** Locomotive *Beauce* end-of-page manifesto, RAAR agency site.

**Copy direction:**
- One sentence. ≤ 120 chars. Declarative. No "we believe." No "our mission."
- Candidate: "We build the things other studios say can't be done — then we hand over the keys."
- Or: "Three-dimensional web. AI automation. Razor-sharp brand strategy. One shipping crew."
- Or: "Most websites are brochures. We build worlds."

**Do not:**
- Do not animate letter-by-letter.
- Do not add a CTA.
- Do not use this section for testimonials. Testimonials are 2014.

---

### [6] DOORS — Initialize a Project (100vh)

**Beat:** Relief. The visitor is ready. The page has earned this moment.
**One email, one button, no form.** The contact friction is a single
keystroke.

**Composition:**
- Off-white `#F7F8F9` background
- Top: eyebrow "— CONTACT / 06"
- Center: H2 "Initialize\na project." in Inter 140px desktop / 80px mobile, weight 700, navy
- Below: a 1-sentence lead, mono, 14px, dim, max 50ch
- Center bottom: a single button, "contact@boldandigital.com →", navy background, off-white text, pill shape, 1.6rem
- Bottom strip: 3 meta items (STUDIO / HOURS / REPLY) in mono, dim, 11px caps, separated by 1px vertical lines

**Motion:**
- The button has a hover state: navy background darkens 10%, Y -2px, arrow translates +6px. 200ms.
- The "→" arrow in the email button has a 200ms loop animation: translateX(0 → 4 → 0) every 1.6s. Subtle. Drawing the eye.
- No other motion in this section.

**Reference frame:** Resn's contact page, Active Theory's contact, Locomotive's contact.

**Copy direction:**
- H2: short, imperative. "Initialize a project." not "Let's work together."
- Lead: "One email. We reply within one business day."
- Button: just the email. No subject, no message field, no form.

**Do not:**
- Do not include a form. Forms are 2023. The email link is enough.
- Do not include phone, address, or social links. The studio is in Hamburg and works remote. The studio is on X and LinkedIn. Neither belongs on a 2026 contact page.
- Do not animate the H2.

---

### [7] MARQUEE BAND — Echo (20vh)

**Beat:** Echo. The visitor has seen the marquee before. This one is
the same vocabulary, but it's the **last thing they see before
scrolling back to the top or closing the tab.** It seals the
impression.

**Composition:**
- Navy `#051E40` background, cyan 1.5px top border
- Same horizontal scrolling text as [1], but in REVERSE direction (right-to-left)
- Text: "BOLD AND DIGITAL · BOLD AND DIGITAL · BOLD AND DIGITAL ·" repeated, all cyan

**Motion:**
- `translateX(0) → translateX(33.333%)` over 60s linear, infinite (slower than the first marquee)
- Pauses on hover

**Reference frame:** Same as [1] but reversed.

**Do not:**
- Do not add a footer with sitemap, social icons, copyright notice. (Copyright goes inline as one mono line at the very bottom, in 11px dim.)
- Do not add a "back to top" button.

---

## 5. Hard Rules (do / do not, all 2026)

### Do
- One moment per viewport. Every section earns its height.
- 60/40 splits, not 50/50.
- Display type ≥ 96px. Body ≤ 14px.
- Cyan is a sniper rifle — one shot, then nothing.
- Negative space ≥ 40% of viewport.
- The bowl is always on the bigger side of every split.
- Cursor is part of the design (custom on desktop).
- Every asset is AI-generated or hand-made. No stock photos. No icons.
- All copy is declarative. No "we believe," no "transform your business."
- All motion is scroll-linked or scroll-triggered. No setInterval cycles.
- Every section has a "do not" list (above) and we honour it.

### Do not
- Do not center content (unless it's the manifesto).
- Do not use 5-card service grids.
- Do not use 4-step process diagrams.
- Do not use case-study carousels.
- Do not use contact forms.
- Do not use icons.
- Do not use parallax on text.
- Do not use stock photos.
- Do not use footer sitemaps.
- Do not use `setInterval` for content changes.
- Do not use `linear` easing for content.
- Do not use `#000` as a background.
- Do not use cyan as a background.
- Do not use multiple accent colors.

---

## 6. Mood Brief — The First Three Stills (next step)

Once this storyboard is signed off, generate these three AI stills
first (no video, no code):

### Still 1 — The Bowl
> A single navy ceramic bowl on a seamless off-white studio
> background. Cyan glow ring inside the rim. Three small objects
> orbit the bowl: a black-and-white film clapperboard, a delicate
> white plant, a paper plane. Soft shadow under the bowl. Cinematic,
> Apple product photography aesthetic, 3D render, no text, no
> watermark. Aspect 4:3.

**Why:** This becomes the hero. If this still doesn't feel like a
2026 agency site, no amount of CSS will save it.

### Still 2 — The Method
> A horizontal navy line on off-white background, with four nodes
> spaced evenly: 01, 02, 03, 04. Above each node, a single word in
> a clean geometric sans (Inter, 64px, weight 600): BRIEF,
> STRATEGY, BUILD, OPERATE. Below each node, a tiny mono caption
> (12px, dim). Top-left eyebrow "— METHOD / 03" in cyan, 11px caps.
> Aspect 16:9.

**Why:** Tests whether the typographic restraint works in a still.
If "BRIEF" looks like a font specimen and not a design moment, we
revise the type scale.

### Still 3 — The Manifesto
> A single sentence centered on a navy background, in off-white
> Inter Variable 56px: "Three-dimensional web. AI automation.
> Razor-sharp brand strategy. One shipping crew." Above the text,
> a 1px cyan horizontal line, 40px wide. Below, a small mono line
> in cyan: "— Bold And Digital · 2026". Aspect 4:3.

**Why:** The manifesto is the most "designed" section. If this still
reads as a poster, not a webpage, the section works.

---

## 7. Open Questions for Lars

These need to be answered before still generation:

1. **The bowl's contents.** Book + clapperboard + paper plane is a
   placeholder. What objects SHOULD orbit the bowl? Each represents
   a service (book = brand, clapperboard = imagery, paper plane =
   websites, server cube = hosting, etc.). I need a final 3–5
   objects list.

2. **The H1 trio.** "Brand worlds. / Strategy + code. / Ship it." is
   the current trio. The middle one ("Strategy + code.") is the
   weakest. Is this the right progression (poetic → operational →
   punchy), or should we rethink?

3. **The 5 capabilities** — do we keep the 5 from BRAND.md
   (Brand / Websites / Imagery / AI / Hosting) or do we want to
   drop one and add something else? The current 5 are fine, but 4
   might give us more breathing room per capability.

4. **The manifesto sentence** — I gave 3 candidates. Which one (or
   what new one) is the real voice?

5. **The 3 case studies** — LiteSpeed, QUIC.cloud, aaads are in
   BRAND.md. Are these the final 3, or are there 1–2 others
   (privately, off-the-record) that should appear here instead?

6. **Tone for "ye" / pirate / technical** — the studio's voice in
   this storyboard is direct-technical-declarative. Is that the
   right register, or do we want more playfulness (closer to
   Resn's "we make the web more interesting") or more gravitas
   (closer to RAAR's "we build with intention")?

---

**End of storyboard. Next step on sign-off:** generate 3 mood stills
from §6, then 3 motion tests (5s loops), then the full page.

**Status: DRAFT, awaiting Lars sign-off.**
