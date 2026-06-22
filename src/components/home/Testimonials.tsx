"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  // Sin testimonios reales => no renderizar nada (cero contenido falso).
  if (testimonials.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t("testimonials.heading")}</h2>

        <div className={styles.grid}>
          {testimonials.map((item, idx) => (
            <motion.figure
              key={item.author}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <Quote className={styles.quoteIcon} size={28} aria-hidden="true" />
              <blockquote className={styles.quote}>
                {isEn && item.quoteEn ? item.quoteEn : item.quote}
              </blockquote>
              <figcaption className={styles.author}>
                {item.avatar && (
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={44}
                    height={44}
                    className={styles.avatar}
                  />
                )}
                <span className={styles.authorInfo}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
