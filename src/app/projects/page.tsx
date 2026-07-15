"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectGrid from "@/components/projects/ProjectGrid";
import styles from "./page.module.css";

const FEATURED_SLUG = "gestion";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const featured = projects.find((p) => p.slug === FEATURED_SLUG) ?? projects[projects.length - 1];
  const totalProjects = projects.length;
  const inProduction = projects.filter((p) => p.status === "production").length;
  const uniqueClients = new Set(projects.map((p) => p.client)).size;

  return (
    <main className={styles.main}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.label}>
          {isEn ? "Portfolio" : "Portafolio"}
        </span>
        <h1 className={styles.title}>
          {isEn ? "Projects" : "Proyectos"}
        </h1>
        <p className={styles.subtitle}>
          {isEn
            ? "Real products in production — SaaS, ERP, mobile and desktop systems shipped for companies."
            : "Productos reales en producción — SaaS, ERP, apps móviles y de escritorio entregados a empresas."}
        </p>

        <div className={styles.statsRow} aria-label={isEn ? "Portfolio stats" : "Estadísticas"}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalProjects}</span>
            <span className={styles.statLabel}>{isEn ? "projects" : "proyectos"}</span>
          </div>
          <span className={styles.statSep} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>{inProduction}</span>
            <span className={styles.statLabel}>{isEn ? "in production" : "en producción"}</span>
          </div>
          <span className={styles.statSep} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statValue}>{uniqueClients}</span>
            <span className={styles.statLabel}>{isEn ? "companies" : "empresas"}</span>
          </div>
        </div>
      </motion.header>

      {featured && <FeaturedProject project={featured} />}

      <ProjectGrid excludeSlug={FEATURED_SLUG} />
    </main>
  );
}
