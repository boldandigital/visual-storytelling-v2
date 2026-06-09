# Bold And Digital — visual storytelling

Three.js scroll-storytelling marketing site for **Bold And Digital**, a 3D web /
AI / brand studio.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Three.js 0.169** for the fixed hero scene
- **Scroll-bound MP4 background** (`public/videos/scroll-bg.mp4`)
- CSS Modules + design tokens (`app/globals.css`)

## Brand

- Deep navy `#051E40` / deeper `#020F23`
- Electric cyan `#29F2F2`
- Display: Space Grotesk · Body: Inter · Mono: JetBrains Mono

## Develop

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Layout

```
app/
  layout.tsx          root layout + fonts + metadata
  page.tsx            homepage composition
  globals.css         design tokens + global styles
components/
  Navbar.tsx          fixed glass nav with mobile menu
  Hero.tsx            scroll-driven hero copy
  HeroScene.tsx       Three.js fixed canvas (icosahedron + torus knot + particles)
  ScrollVideo.tsx     scroll-bound video background
  Services.tsx        5 services grid
  Work.tsx            selected clients
  Process.tsx         4-step process
  Contact.tsx         CTA card
  Footer.tsx          footer
  Reveal.tsx          viewport-triggered fade+rise wrapper
public/
  videos/scroll-bg.mp4   scroll-bound background video
```

## Notes

- `HeroScene` skips rendering when `prefers-reduced-motion: reduce` is set.
- `ScrollVideo` binds `currentTime` to document scroll progress, snapping only
  when the delta exceeds 0.05s to avoid jank.
- The video poster fallback is a layered radial gradient — works without JS.
