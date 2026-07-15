"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./FeaturedProject.module.css";

export default function FeaturedProject({ project }: { project: Project }) {
  const { language } = useLanguage();
  const isEn = language === "en";
  const cover = project.cover || project.images?.[0];
  const metrics = project.metrics?.slice(0, 3) ?? [];

  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      aria-labelledby="featured-project-title"
    >
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        {isEn ? "Featured case study" : "Caso destacado"}
      </div>

      <div className={styles.panel}>
        <div className={`${styles.media} ${styles[`media_${project.category}`]}`}>
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={`${project.title} — ${isEn ? "screenshot" : "captura"}`}
              className={styles.cover}
              loading="eager"
            />
          ) : project.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo}
              alt=""
              className={`${styles.logoFallback} ${project.logoInvertOnDark ? styles.logoDark : ""}`}
            />
          ) : null}
          <div className={styles.mediaShade} />
        </div>

        <div className={styles.body}>
          <div className={styles.metaRow}>
            <span className={styles.category}>{project.category.toUpperCase()}</span>
            {project.status === "production" && (
              <span className={styles.status}>
                <span className={styles.statusDot} />
                {isEn ? "Production" : "Producción"}
              </span>
            )}
          </div>

          <h2 id="featured-project-title" className={styles.title}>
            {project.title}
          </h2>

          <p className={styles.meta}>
            {project.client}
            <span className={styles.dotSep}>·</span>
            {project.period}
          </p>

          <p className={styles.desc}>
            {isEn ? project.shortDescriptionEn : project.shortDescription}
          </p>

          {metrics.length > 0 && (
            <div className={styles.metrics}>
              {metrics.map((m) => (
                <div key={m.label} className={styles.metric}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <Link href={`/projects/${project.slug}`} className={styles.cta}>
            {isEn ? "View case study" : "Ver caso de estudio"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
