# Hero 3D Atmosphere — Design

**Date:** 2026-07-15  
**Status:** Approved  
**Scope:** Phase A only (hero background). Not B (easter egg) or C (project demo).

## Goal

Add a subtle Three.js atmosphere behind the hero so the first viewport feels premium and technical, without competing with brand, role, or CTAs (projects / contact / CV).

## Decision

Full-bleed abstract “product nucleus” mesh (icosahedron / faceted sphere + soft edges), slow rotation, low opacity. Theme-aware blues from existing CSS tokens (`--accent-primary` / deep blue). No 3D text, no floating badges on the mesh.

## Placement

- Inside `HeroSection` background layer only
- Replace / remove `FloatingParticles` in the hero to avoid visual noise stacking
- Content (name, CTAs, code card) stays above; canvas is `pointer-events: none`

## Technical constraints

- Next.js 16 + React 19 client component
- `@react-three/fiber` + `@react-three/drei` + `three`, loaded via `next/dynamic` with `ssr: false`
- Cap DPR on mobile (~1–1.5); simpler geo on narrow viewports
- `prefers-reduced-motion: reduce` → static frame or no canvas
- Dark/light via `next-themes` (`resolvedTheme`)

## Out of scope

- Trust strip (clients / references)
- Testimonials
- Second 3D scene (B) or case-study demo (C)

## Success

- Brand + CTAs readable in ~2s
- Feels intentional, not generic WebGL portfolio
- Mobile still usable; no large Lighthouse collapse from blocking the main thread on load
