"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import FloatingParticles from "@/components/ui/FloatingParticles";
import styles from "./HeroSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
        <FloatingParticles />
      </div>

      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={heroVariants} className={styles.title}>
          Gerar Arévalo
          <span className={styles.subtitle}>{t("hero.role")}</span>
        </motion.h1>

        <motion.p variants={heroVariants} className={styles.description}>
          {t("hero.description")}{" "}
          <span className={styles.highlight}>{t("hero.description.saas")}</span>,{" "}
          <span className={styles.highlight}>{t("hero.description.erp")}</span>,{" "}
          <span className={styles.highlight}>{t("hero.description.mobile")}</span> {t("hero.description.connector")}{" "}
          <span className={styles.highlight}>{t("hero.description.games")}</span>.
        </motion.p>

        <motion.div variants={heroVariants} className={styles.ctaGroup}>
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
            <Download size={20} /> {t("hero.cv")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
