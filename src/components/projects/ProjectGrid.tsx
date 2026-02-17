"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectGrid.module.css";

const CATEGORIES = [
  { key: "all", es: "Todos", en: "All" },
  { key: "saas", es: "SaaS", en: "SaaS" },
  { key: "erp", es: "ERP", en: "ERP" },
  { key: "pos", es: "POS", en: "POS" },
  { key: "mobile", es: "Móvil", en: "Mobile" },
  { key: "web", es: "Web", en: "Web" },
  { key: "game", es: "Juegos", en: "Games" },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("all");
  const { language } = useLanguage();
  const isEn = language === "en";

  const allProjects = useMemo(() => [...projects].reverse(), []);

  const filteredProjects = allProjects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`${styles.filterBtn} ${filter === cat.key ? styles.active : ""}`}
          >
            {isEn ? cat.en : cat.es}
            <span className={styles.filterCount}>
              {categoryCounts[cat.key] || 0}
            </span>
            {filter === cat.key && (
              <motion.div
                layoutId="activeFilter"
                className={styles.activeBackground}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
