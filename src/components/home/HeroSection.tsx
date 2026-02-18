"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Cloud,
  Database,
  Smartphone,
  Gamepad2,
  Monitor,
  Bot,
} from "lucide-react";
import FloatingParticles from "@/components/ui/FloatingParticles";
import styles from "./HeroSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20, delay: 0.4 },
  },
};

const lineVariant = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.8 + i * 0.1 },
  }),
};

const CHIPS = [
  { key: "saas", icon: Cloud },
  { key: "erp", icon: Database },
  { key: "mobile", icon: Smartphone },
  { key: "games", icon: Gamepad2 },
  { key: "desktop", icon: Monitor },
  { key: "ai", icon: Bot },
] as const;

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [inView, text]);

  return (
    <span ref={ref}>
      {displayed}
      {showCursor && <span className={styles.typingCursor} />}
    </span>
  );
}

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const codeLines = [
    { content: <><span className={styles.codeKeyword}>const</span> <span className={styles.codeVar}>developer</span> <span className={styles.codePunctuation}>=</span> <span className={styles.codePunctuation}>{"{"}</span></> },
    { content: <>&nbsp;&nbsp;<span className={styles.codeKey}>name</span><span className={styles.codePunctuation}>:</span> <span className={styles.codeString}>&quot;Gerar Arévalo&quot;</span><span className={styles.codePunctuation}>,</span></> },
    { content: <>&nbsp;&nbsp;<span className={styles.codeKey}>experience</span><span className={styles.codePunctuation}>:</span> <span className={styles.codeString}>&quot;{t("hero.code.experience")}&quot;</span><span className={styles.codePunctuation}>,</span></> },
    { content: <>&nbsp;&nbsp;<span className={styles.codeKey}>products</span><span className={styles.codePunctuation}>:</span> <span className={styles.codeNumber}>9</span><span className={styles.codePunctuation}>,</span></> },
    { content: <>&nbsp;&nbsp;<span className={styles.codeKey}>stack</span><span className={styles.codePunctuation}>:</span> <span className={styles.codePunctuation}>[</span><span className={styles.codeString}>&quot;Next.js&quot;</span><span className={styles.codePunctuation}>,</span> <span className={styles.codeString}>&quot;React&quot;</span><span className={styles.codePunctuation}>,</span> <span className={styles.codeString}>&quot;...&quot;</span><span className={styles.codePunctuation}>],</span></> },
    { content: <>&nbsp;&nbsp;<span className={styles.codeKey}>status</span><span className={styles.codePunctuation}>:</span> <span className={styles.codeString}>&quot;{t("hero.code.status")}&quot;</span> <span className={styles.codeComment}>{"// ✓"}</span></> },
    { content: <><span className={styles.codePunctuation}>{"}"}</span></> },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.dotGrid} />
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <FloatingParticles />
      </div>

      <div className={styles.container}>
        {/* Left Column */}
        <motion.div
          className={styles.content}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className={styles.greeting}>
            {t("hero.greeting")}
            <span className={styles.cursor} />
          </motion.div>

          <motion.h1 variants={fadeUp} className={styles.title}>
            <span className={styles.firstName}>Gerar</span>{" "}
            Arévalo
          </motion.h1>

          <motion.div variants={fadeUp} className={styles.role}>
            <TypingText text={t("hero.role")} />
          </motion.div>

          <motion.div variants={fadeUp} className={styles.chips}>
            {CHIPS.map(({ key, icon: Icon }) => (
              <div key={key} className={styles.chip}>
                <Icon size={14} />
                {t(`hero.chip.${key}` as any)}
                <span className={styles.chipTooltip}>
                  {t(`hero.chip.${key}.tip` as any)}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className={styles.ctaGroup}>
            <Link href="/projects" className={styles.primaryBtn}>
              {t("hero.projects")} <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              {t("hero.contact")}
            </Link>
            <a
              href={isEn ? "/CV-Gerardo Arevalo-Developer.pdf" : "/CV-Gerardo Arévalo-Programador.pdf"}
              download={isEn ? "Gerar_Arevalo_Resume.pdf" : "Gerar_Arevalo_CV.pdf"}
              className={styles.cvBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} /> {t("hero.cv")}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column — Code Card */}
        <motion.div
          className={styles.codeCard}
          variants={cardVariant}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.codeCardHeader}>
            <div className={styles.codeCardDots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.codeCardTab}>
              {t("hero.code.filename")}
            </span>
          </div>
          <div className={styles.codeCardBody}>
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                className={styles.codeLine}
                variants={lineVariant}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                {line.content}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
