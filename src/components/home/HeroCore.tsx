"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import styles from "./HeroCore.module.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return mobile;
}

/** Request frames only while visible — keeps Safari cool when scrolled away. */
function VisibilityGate({ active, fps = 60 }: { active: boolean; fps?: number }) {
  const { invalidate } = useThree();
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = 0;
    const minFrameMs = 1000 / fps;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      // Cap fps on mobile — halves GPU/CPU work; rotation speed is delta-based
      if (now - last >= minFrameMs - 1) {
        last = now;
        invalidate();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, invalidate, fps]);
  return null;
}

function Nucleus({
  isDark,
  reducedMotion,
  detail,
}: {
  isDark: boolean;
  reducedMotion: boolean;
  detail: number;
}) {
  const group = useRef<Group>(null);

  const colors = useMemo(
    () =>
      isDark
        ? {
            fill: "#1d4ed8",
            edge: "#3b82f6",
            fillOpacity: 0.18,
            ambient: 0.35,
          }
        : {
            fill: "#3b82f6",
            edge: "#1d4ed8",
            fillOpacity: 0.12,
            ambient: 0.55,
          },
    [isDark],
  );

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={group} position={[0.35, 0.1, 0]} scale={detail === 0 ? 0.85 : 1}>
      <ambientLight intensity={colors.ambient} />
      <directionalLight position={[4, 3, 5]} intensity={isDark ? 1.1 : 0.85} />
      <hemisphereLight
        args={[isDark ? "#93c5fd" : "#e2e8f0", isDark ? "#0a0a0b" : "#94a3b8", 0.6]}
      />

      <mesh>
        <icosahedronGeometry args={[1.75, detail]} />
        <meshStandardMaterial
          color={colors.fill}
          transparent
          opacity={colors.fillOpacity}
          roughness={0.45}
          metalness={0.35}
          depthWrite={false}
        />
        <Edges threshold={15} color={colors.edge} />
      </mesh>

      <mesh scale={0.42}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={colors.edge}
          transparent
          opacity={isDark ? 0.35 : 0.22}
          roughness={0.3}
          metalness={0.5}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function HeroCore() {
  const { resolvedTheme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pageVisible, setPageVisible] = useState(true);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const onVis = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(!!entry?.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reducedMotion) return null;

  const isDark = resolvedTheme !== "light";
  const detail = isMobile ? 0 : 1;
  const active = pageVisible && inView;

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden="true">
      <Canvas
        className={styles.canvas}
        dpr={1}
        frameloop="demand"
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 40 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
          // Safari: avoid preserveDrawingBuffer cost
          preserveDrawingBuffer: false,
        }}
        style={{ background: "transparent" }}
      >
        <VisibilityGate active={active} fps={isMobile ? 30 : 60} />
        <Nucleus isDark={isDark} reducedMotion={reducedMotion || !active} detail={detail} />
      </Canvas>
    </div>
  );
}
