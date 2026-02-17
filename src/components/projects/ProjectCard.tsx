"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { getTechIcon } from "@/data/techIcons";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={styles.card}
    >
      {/* Visual area */}
      <div
        className={`${styles.visual} ${styles[`visual_${project.category}`]}`}
      >
        {project.externalUrl && (
          <span className={styles.liveBadge}>
            <span className={styles.liveDot} />
            Live
          </span>
        )}

        {project.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.logo}
            alt=""
            width={56}
            height={56}
            className={`${styles.cardLogo} ${project.logoInvertOnDark ? styles.logoDark : ""}`}
          />
        ) : (
          <span className={styles.categoryWatermark}>
            {project.category}
          </span>
        )}

        <div className={styles.arrowCircle}>
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.cardHeader}>
          <span
            className={`${styles.categoryBadge} ${styles[`cat_${project.category}`]}`}
          >
            {project.category.toUpperCase()}
          </span>
          {project.status === "production" && (
            <span className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>
                {isEn ? "Production" : "Producción"}
              </span>
            </span>
          )}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardMeta}>{project.client}</p>

        <p className={styles.cardDesc}>
          {isEn ? project.shortDescriptionEn : project.shortDescription}
        </p>

        <div className={styles.cardStack}>
          {project.stack.slice(0, 4).map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <span key={tech} className={styles.techBadge}>
                {icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={icon}
                    alt=""
                    width={14}
                    height={14}
                    className={styles.techIcon}
                  />
                )}
                {tech}
              </span>
            );
          })}
          {project.stack.length > 4 && (
            <span className={styles.techMore}>
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className={styles.cardMetrics}>
            {project.metrics.slice(0, 3).map((m) => (
              <div key={m.label} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Link overlay */}
      <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
        <span className="sr-only">
          {isEn ? "View" : "Ver"} {project.title}
        </span>
      </Link>
    </motion.div>
  );
}
