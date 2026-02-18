"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t("about.title")}
        </motion.h2>

        <motion.div
          className={styles.bioRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div className={styles.avatarWrapper} variants={fadeUp}>
            <Image
              src="/yo.webp"
              alt="Gerar Arévalo"
              width={120}
              height={120}
              className={styles.avatar}
            />
          </motion.div>
          <div className={styles.bioText}>
            <motion.p className={styles.bio} variants={fadeUp}>
              {t("about.bio" as any)}
            </motion.p>
            <motion.p className={styles.tagline} variants={fadeUp}>
              {t("about.tagline" as any)}
            </motion.p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
