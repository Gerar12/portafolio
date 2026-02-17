"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/context/LanguageContext";


export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="about">
      

      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            {t("about.title")}
          </h2>
          
          <div className={styles.description}>
            <p className={styles.text}>
              {t("about.bio1")}
            </p>
            <p className={styles.text}>
              {t("about.bio2")}
            </p>
            <p className={styles.text}>
              {t("about.bio3")}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image 
            src="/yo.jpeg" 
            alt="Gerar Arévalo" 
            width={500} 
            height={500} 
            className={styles.image}
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
