"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styles from "./FloatingParticles.module.css";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  type: "accent" | "primary";
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const newParticles: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 1 + 1, // 1px - 2px
      duration: Math.random() * 10 + 15, // Slower: 15-25s
      delay: Math.random() * 5,
      drift: Math.random() * 50 - 25, // -25px .. 25px sideways
      type: Math.random() > 0.7 ? "accent" : "primary", // 30% accent color
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((p) => (
        <div
          key={p.id}
          className={`${styles.particle} ${p.type === "accent" ? styles.accent : styles.primary}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            "--drift": `${p.drift}px`,
            "--dur": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
