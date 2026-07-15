"use client";

import { Canvas, useFrame } from "@react-three/fiber";
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
    <group ref={group} position={[0.35, 0.1, 0]} scale={mobileScale(detail)}>
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

      {/* Inner core — subtle depth without extra scenes */}
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

function mobileScale(detail: number) {
  return detail === 0 ? 0.85 : 1;
}

export default function HeroCore() {
  const { resolvedTheme } = useTheme();
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  // Keep CSS blobs; skip WebGL when user prefers reduced motion
  if (reducedMotion) return null;

  const isDark = resolvedTheme !== "light";
  const detail = isMobile ? 0 : 1;

  return (
    <div className={styles.wrap} aria-hidden="true">
      <Canvas
        className={styles.canvas}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42, near: 0.1, far: 40 }}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ background: "transparent" }}
      >
        <Nucleus isDark={isDark} reducedMotion={reducedMotion} detail={detail} />
      </Canvas>
    </div>
  );
}
