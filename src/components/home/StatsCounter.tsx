"use client";

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./StatsCounter.module.css";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";

const statsData: { labelKey: TranslationKey; value: number; suffix: string; isFloat?: boolean; prefix?: string }[] = [
  { labelKey: "stats.projects", value: 9, suffix: "" },
  { labelKey: "stats.clients", value: 3, suffix: "" },
  { labelKey: "stats.lots", value: 5000, suffix: "+" },
  { labelKey: "stats.optimization", value: 284, suffix: "x" },
];

function CounterItem({ item }: { item: { label: string; value: number; suffix: string; isFloat?: boolean } }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

    useEffect(() => {
      if (inView) {
        motionValue.set(item.value);
      }
    }, [inView, item.value, motionValue]);

    const displayValue = useTransform(springValue, (latest) => {
      if (item.isFloat) return latest.toFixed(1);
      return Math.round(latest).toLocaleString();
    });

    return (
      <div className={styles.statItem} ref={ref}>
        <div className={styles.numberWrapper}>
           <motion.span className={styles.number}>{displayValue}</motion.span>
           <span className={styles.suffix}>{item.suffix}</span>
        </div>
        <span className={styles.label}>{item.label}</span>
      </div>
    );
}

export default function StatsCounter() {
  const { t } = useLanguage();

  return (
    <section className={styles.container}>
      {statsData.map((stat, index) => (
        <CounterItem
          key={index}
          item={{ label: t(stat.labelKey), value: stat.value, suffix: stat.suffix, isFloat: stat.isFloat }}
        />
      ))}
    </section>
  );
}
