"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { getTechIcon } from "@/data/techIcons";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import styles from "./ProjectDetail.module.css";

function TechTag({ tech }: { tech: string }) {
  const icon = getTechIcon(tech);
  return (
    <span className={styles.techTag}>
      <span className={styles.techTagIconWrap}>
        {icon && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt="" width={20} height={20} className={styles.techTagIcon} />
        )}
      </span>
      {tech}
    </span>
  );
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}) {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  return (
    <article className={styles.container}>
      {/* Back */}
      <Link href="/projects" className={styles.backLink}>
        <ArrowLeft size={18} />
        {isEn ? "Back to Projects" : "Volver a Proyectos"}
      </Link>

      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className={styles.meta}>
          <span className={styles.category}>{project.category.toUpperCase()}</span>
          <span className={styles.statusBadge}>
            <span className={styles.statusDot} />
            {isEn ? "Production" : "En Producción"}
          </span>
          <span className={styles.period}>{project.period}</span>
        </div>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.clientRow}>
          <span className={styles.label}>{isEn ? "Client:" : "Cliente:"}</span>
          <span className={styles.client}>{project.client}</span>
        </div>

        {project.externalUrl && (
          <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
            {isEn ? "Live Demo" : "Ver Demo"} <ExternalLink size={16} />
          </a>
        )}
      </motion.header>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <motion.section
          className={styles.metrics}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {project.metrics.map((metric, idx) => (
            <div key={idx} className={styles.metricItem}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </motion.section>
      )}

      {/* Content */}
      <div className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          {/* Description */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className={styles.sectionTitle}>
              {isEn ? "Description" : "Descripción"}
            </h2>
            <p className={styles.description}>
              {isEn ? project.descriptionEn : project.description}
            </p>
          </motion.section>

          {/* Features */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className={styles.sectionTitle}>
              {isEn ? "Key Features" : "Características Clave"}
            </h2>
            <ul className={styles.featureList}>
              {(isEn && project.featuresEn ? project.featuresEn : project.features).map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>

        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.techStackBox}>
            <h3 className={styles.sidebarTitle}>Tech Stack</h3>
            <div className={styles.techTags}>
              {project.stack.map((tech) => (
                <TechTag key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Navigation */}
      <nav className={styles.projectNav}>
        <Link href={`/projects/${prevProject.slug}`} className={styles.navLink}>
          <span className={styles.navLabel}>{isEn ? "Previous Project" : "Proyecto Anterior"}</span>
          <span className={styles.navProjectName}>
            <ArrowLeft size={20} className={styles.navArrow} />
            {prevProject.title}
          </span>
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className={`${styles.navLink} ${styles.navLinkNext}`}>
          <span className={styles.navLabel}>{isEn ? "Next Project" : "Siguiente Proyecto"}</span>
          <span className={styles.navProjectName}>
            {nextProject.title}
            <ArrowRight size={20} className={styles.navArrow} />
          </span>
        </Link>
      </nav>
    </article>
  );
}
