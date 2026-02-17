"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import ProjectGrid from "@/components/projects/ProjectGrid";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const totalProjects = projects.length;
  const inProduction = projects.filter((p) => p.status === "production").length;
  const uniqueClients = new Set(projects.map((p) => p.client)).size;

  return (
    <main>
      <motion.div
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
            ? "A collection of applications in production, SaaS platforms, and products I've built for real companies."
            : "Una colección de aplicaciones en producción, plataformas SaaS y productos que he construido para empresas reales."}
        </p>

        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalProjects}</span>
            <span className={styles.statLabel}>
              {isEn ? "Projects" : "Proyectos"}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{inProduction}</span>
            <span className={styles.statLabel}>
              {isEn ? "In Production" : "En Producción"}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{uniqueClients}</span>
            <span className={styles.statLabel}>
              {isEn ? "Companies" : "Empresas"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Under development banner */}
      <motion.div
        className={styles.devBanner}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Code size={16} className={styles.devIcon} />
        <span>
          {isEn
            ? "This page is under development — more details coming soon."
            : "Esta página está en desarrollo — más detalles próximamente."}
        </span>
      </motion.div>

      <ProjectGrid />
    </main>
  );
}
