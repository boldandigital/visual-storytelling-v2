# Bold And Digital — Animation References (Jun 14 2026)

**Three YouTube shorts that define the visual direction for the hero.**

## Video 1: oMXURZqtl7s — "Loop Recorder Concept by Andrew"

- **URL:** https://www.youtube.com/shorts/oMXURZqtl7s
- **By:** @webflow / Spline 3D designer
- **What it is:** Animated 3D website mockup for a fictional brand "LOOP" — a portable music recorder for $299
- **Shown in:** A real desk photo with iMac, plant, and figurine (the "in-context" frame)

### Choreography (3 keyframes)

1. **Title card** — "Record music easily on the go." (left) + 3D LOOP product (right)
   - Dark navy void, slight cyan/red accent
   - Product is a stylized recorder with red square buttons + microphone grille
   - "NEW" small label in top-right
2. **Mid scroll** — "Ready, Steady, Record" (left) + product close-up (right)
   - Product has rotated ~30° toward camera
   - Camera has moved closer (zoom in)
   - Bottom of frame: "Buy Now" button in red
3. **Closing** — "$299 — Buy Now" (left) + product full-body rotating (right)

### What to steal

- **Animated 3D product on the right, text transitions on the left** — the text changes per scroll/keyframe
- **Camera arc + product rotation** — the product doesn't just sit there, it spins
- **Single accent color** (red here) used for: logo, "NEW" tag, product button, "Buy Now" CTA
- **Dark moody atmosphere** — black background, single accent pop

## Video 2: ZI6bARiHlGU — Tutorial by Andrew

- **URL:** https://www.youtube.com/shorts/ZI6bARiHlGU
- **By:** Same Andrew (the creator of LOOP)
- **What it is:** Tutorial showing how to make these animated 3D brand sites
- **Format:** Screencast + webcam in bottom-left

### What the tutorial reveals

- He uses **Figma** to plan the layout first
- He writes the page in **Spline** (3D tool) for the rotating product
- He exports a **scroll-bound video** (similar to our scroll-scrubbed bowl)
- The 3D product is the **focal point** — text is support, not the main act

## Video 3: YGk4H5v29PY — @gadgetindesign

- **URL:** https://www.youtube.com/shorts/YGk4H5v29PY
- **By:** @gadgetindesign
- **What it is:** Animated 3D product (smart water bottle) rotating on white stage

### Choreography

- 3D green water bottle with screen/display
- **Rotates ~360° over 10 seconds** in a smooth continuous spin
- **Background:** moss/forest scene, with the bottle appearing to "sit in" the environment
- **Marquee text** scrolling horizontally: "Hydration, Anytime, Anywhere"
- `@gadgetindesign` watermark bottom-center
- Outro: "Check out full Tutorial on YouTube Channel" with the bottle still rotating

### What to steal

- **Continuous rotation** — the product spins the entire time, never stops
- **Marquee text** as a secondary motion element
- **White-stage / studio lighting** — clean, premium, product-photography aesthetic
- **Single product, single accent color** — the bottle is the green accent, everything else is white/grey

## Synthesis — what these three together tell us

The user is showing me **the same design pattern three times**:

1. **A 3D product is the hero** (not text)
2. **The product rotates / animates continuously**
3. **Text transitions** (or marquee scroll) **over the product**
4. **Single accent color** (red / green) **plus dark or white stage**
5. **Camera moves** to keep it dynamic
6. **The product is presented in a "world"** (forest for the bottle, void for LOOP)

## How this maps to Bold And Digital

- **Our product is the bowl** — navy ceramic bowl with cyan ring
- **Our stage** — already white / cream (matches the bottle)
- **Our accent color** — cyan (matches the bottle's green)
- **Our motion** — orbital camera + counter-rotating objects (matches continuous spin)
- **What's missing** — the text doesn't transition. The text doesn't have a marquee. The product isn't rotating as dramatically as it could.

## Recommended v6 next steps

1. **Add a slow CSS rotation to the bowl video element** — make it spin 5° per second, so the orbital motion feels more continuous
2. **Add a horizontal marquee band** with the services / tagline — running at the bottom of the hero
3. **Add scroll-keyed text transitions** to Scene 1 — "we build scroll-driven digital worlds" (frame 0) → "ready, steady, ship" (frame 50%) → "let's initialize" (frame 100%)
4. **Consider increasing the bowl video duration** to 10-12s to match the bottle video's pace — current is 5.6s, bottle is 10s
5. **Update the bowl** to look more like a "product" — clearer silhouette, more sculptural
