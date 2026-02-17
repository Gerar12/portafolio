"use client";

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./StatsCounter.module.css";
import { useLanguage } from "@/context/LanguageContext";
import type { TranslationKey } from "@/data/translations";

const statsData: { labelKey: TranslationKey; value: number; suffix: string; isFloat?: boolean }[] = [
  { labelKey: "stats.projects", value: 9, suffix: "" },
  { labelKey: "stats.dtes", value: 10000, suffix: "+" },
  { labelKey: "stats.records", value: 1.5, suffix: "M+", isFloat: true },
  { labelKey: "stats.products", value: 2, suffix: "" },
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
