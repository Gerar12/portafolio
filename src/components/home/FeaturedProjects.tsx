"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getTechIcon } from "@/data/techIcons";
import { motion } from "framer-motion";
import styles from "./FeaturedProjects.module.css";
import { useLanguage } from "@/context/LanguageContext";

const FEATURED_SLUGS = ["urbanext", "gestion"];
const featuredProjects = FEATURED_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!
);

function TechBadge({ tech }: { tech: string }) {
  const icon = getTechIcon(tech);
  return (
    <span className={styles.techBadge}>
      {icon && (
        <Image
          src={icon}
          alt=""
          width={14}
          height={14}
          className={styles.techIcon}
          unoptimized
        />
      )}
      {tech}
    </span>
  );
}

export default function FeaturedProjects() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{t("featured.heading")}</h2>
          <Link href="/projects" className={styles.viewAll}>
            {t("featured.viewAll")} <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.heroGrid}>
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              className={styles.heroCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className={styles.heroContent}>
                <div className={styles.heroBadges}>
                  <span className={styles.category}>
                    {project.category.toUpperCase()}
                  </span>
                  <span className={styles.statusBadge}>
                    <span className={styles.statusDot} />
                    {isEn ? "Production" : "En Producción"}
                  </span>
                </div>

                <h3 className={styles.heroTitle}>{project.title}</h3>

                {project.logo && (
                  <div className={styles.heroLogoCorner}>
                    <Image
                      src={project.logo}
                      alt=""
                      width={44}
                      height={44}
                      className={`${styles.heroLogo} ${project.logoInvertOnDark ? styles.heroLogoDark : ""}`}
                    />
                  </div>
                )}

                <p className={styles.heroDesc}>
                  {isEn
                    ? project.shortDescriptionEn
                    : project.shortDescription}
                </p>

                {project.metrics && (
                  <div className={styles.heroMetrics}>
                    {project.metrics.map((m, i) => (
                      <div key={i} className={styles.heroMetric}>
                        <span className={styles.heroMetricValue}>
                          {m.value}
                        </span>
                        <span className={styles.heroMetricLabel}>
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={styles.heroFooter}>
                  <div className={styles.techStack}>
                    {project.stack.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                    {project.stack.length > 4 && (
                      <span className={styles.techBadge}>
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                  <span className={styles.ctaArrow}>
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className={styles.cardLink}
                aria-label={`${t("featured.view")} ${project.title}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
