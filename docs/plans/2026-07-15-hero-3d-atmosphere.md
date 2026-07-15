# Hero 3D Atmosphere Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a lazy-loaded, theme-aware, reduced-motion-safe Three.js nucleus behind the portfolio hero.

**Architecture:** Client-only R3F canvas in the hero background; dynamic import with `ssr: false`; remove FloatingParticles from hero; match accent blue palette.

**Tech Stack:** Next.js 16, React 19, three, @react-three/fiber, @react-three/drei, next-themes

---

### Task 1: Dependencies

**Files:**
- Modify: `package.json`

**Steps:**
1. `pnpm add three @react-three/fiber @react-three/drei`
2. `pnpm add -D @types/three` if types not bundled
3. Commit deps when user asks (or with feature commit)

### Task 2: HeroCore scene component

**Files:**
- Create: `src/components/home/HeroCore.tsx`
- Create: `src/components/home/HeroCore.module.css` (optional if styles live in HeroSection)

**Behavior:**
- IcosahedronGeometry (detail 1 desktop / 0 mobile)
- MeshStandardMaterial + Edges / line overlay in accent blue
- Slow `useFrame` rotation
- Transparent Canvas; lights hemisphere + directional soft
- Read `resolvedTheme` for material colors
- If `matchMedia('(prefers-reduced-motion: reduce)')` → render once, no continuous spin (or skip Canvas)

### Task 3: Wire into HeroSection

**Files:**
- Modify: `src/components/home/HeroSection.tsx`
- Modify: `src/components/home/HeroSection.module.css`

**Steps:**
1. `dynamic(() => import('./HeroCore'), { ssr: false })`
2. Place inside `.background`; remove `<FloatingParticles />`
3. Canvas absolute inset 0, z under content, pointer-events none, opacity ~0.35–0.5

### Task 4: Verify

**Steps:**
1. `pnpm build` — must pass
2. `pnpm lint` on touched files
3. Manual: dark/light, reduced-motion, mobile width

---
