"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./FloatingParticles.module.css";

export default function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 3 + 1, // 1px - 4px (Star-like)
      duration: Math.random() * 10 + 5, // Faster: 5-15s
      delay: Math.random() * 5,
      type: Math.random() > 0.7 ? "accent" : "primary" // 30% accent color
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.container}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`${styles.particle} ${p.type === "accent" ? styles.accent : styles.primary}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0], // Move up more significantly
            x: [0, Math.random() * 50 - 25, 0], // Sideways drift
            opacity: [0.3, 0.8, 0.3], // Twinkle effect
            scale: [1, 1.2, 1], // Subtle pulse
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
            times: [0, 0.5, 1] // Sync opacity/scale with movement peak
          }}
        />
      ))}
    </div>
  );
}
