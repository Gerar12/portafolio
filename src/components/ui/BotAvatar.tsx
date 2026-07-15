"use client";

import { useId } from "react";
import styles from "./BotAvatar.module.css";

type Mood = "idle" | "typing" | "happy";

/**
 * Robotito mascota del asistente: carita tierna con ojos, antena y
 * animaciones idle. SVG vectorial; ids de gradiente únicos por instancia.
 */
export default function BotAvatar({
  size = 40,
  mood = "idle",
  className,
}: {
  size?: number;
  mood?: Mood;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const head = `botHead-${uid}`;
  const screen = `botScreen-${uid}`;
  const eye = `botEye-${uid}`;

  return (
    <svg
      className={`${styles.bot} ${styles[mood]} ${className ?? ""}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label="Robot asistente"
    >
      <defs>
        <radialGradient id={head} cx="36%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="68%" stopColor="#eef1ff" />
          <stop offset="100%" stopColor="#d4daf6" />
        </radialGradient>
        <linearGradient id={screen} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222a44" />
          <stop offset="100%" stopColor="#141a30" />
        </linearGradient>
        <radialGradient id={eye} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#bfe4ff" />
          <stop offset="100%" stopColor="#5db4ff" />
        </radialGradient>
      </defs>

      <g className={styles.float}>
        <g className={styles.body}>
          {/* Antena */}
          <g className={styles.antennaGroup}>
            <line x1="32" y1="12" x2="32" y2="7" stroke="#9fb4e8" strokeWidth="2" strokeLinecap="round" />
            <circle className={styles.antenna} cx="32" cy="5.5" r="3" fill="#3b82f6" />
          </g>

          {/* Orejitas */}
          <rect className={styles.earLeft} x="10" y="29" width="5" height="11" rx="2.5" fill={`url(#${head})`} />
          <rect className={styles.earRight} x="49" y="29" width="5" height="11" rx="2.5" fill={`url(#${head})`} />

          {/* Cabeza */}
          <rect x="14" y="13" width="36" height="36" rx="13" fill={`url(#${head})`} />

          {/* Pantalla / cara */}
          <rect x="19" y="19" width="26" height="22" rx="10" fill={`url(#${screen})`} />

          {/* Ojos */}
          <g className={styles.look}>
            <g className={styles.eyes}>
              <ellipse cx="26.5" cy="29" rx="3.4" ry="4.4" fill={`url(#${eye})`} />
              <ellipse cx="37.5" cy="29" rx="3.4" ry="4.4" fill={`url(#${eye})`} />
              <circle cx="27.6" cy="27.4" r="1.1" fill="#fff" />
              <circle cx="38.6" cy="27.4" r="1.1" fill="#fff" />
            </g>
          </g>

          {/* Sonrisa */}
          <path
            className={styles.smile}
            d="M28 35 Q32 38 36 35"
            stroke="#7fd1ff"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Mejillas */}
          <ellipse className={styles.cheek} cx="22.5" cy="34" rx="2.2" ry="1.5" fill="#ff9bb3" />
          <ellipse className={styles.cheek} cx="41.5" cy="34" rx="2.2" ry="1.5" fill="#ff9bb3" />
        </g>
      </g>
    </svg>
  );
}
