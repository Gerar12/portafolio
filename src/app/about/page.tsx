"use client";

import { skills } from "@/data/skills";
import { getTechIcon } from "@/data/techIcons";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import styles from "./page.module.css";

const categoryTitlesEn: Record<string, string> = {
  Frontend: "Frontend",
  Backend: "Backend",
  "Mobile & Desktop": "Mobile & Desktop",
  Database: "Database",
  "DevOps & Cloud": "DevOps & Cloud",
  "Tools & Others": "Tools & Others",
};

function SkillBadge({ skill }: { skill: string }) {
  const icon = getTechIcon(skill);
  return (
    <span className={styles.skillBadge}>
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" width={16} height={16} className={styles.skillIcon} />
      )}
      {skill}
    </span>
  );
}

export default function AboutPage() {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <main className={styles.container}>
      {/* Hero */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.label}>
          {isEn ? "About Me" : "Sobre Mí"}
        </span>
        <h1 className={styles.title}>
          <span className={styles.titleGradient}>Gerardo</span> Arévalo
        </h1>
        <p className={styles.subtitle}>Full-Stack Developer</p>
        <p className={styles.bio}>
          {isEn
            ? "Full-stack developer with 3+ years of experience across a wide range of frontend and backend technologies. I've shipped 9+ products to production — from complex ERPs and SaaS platforms to multiplayer mobile games — demonstrating adaptable skills across diverse domains."
            : "Desarrollador full-stack con más de 3 años de experiencia en diversas tecnologías tanto para frontend como backend. He llevado más de 9 productos a producción — desde ERPs complejos y plataformas SaaS hasta videojuegos móviles multijugador — demostrando habilidades adaptables en diversos rubros."}
        </p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>+3</span>
            <span className={styles.statLabel}>
              {isEn ? "Years of experience" : "Años de experiencia"}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>9</span>
            <span className={styles.statLabel}>
              {isEn ? "Products in Production" : "Productos en Producción"}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>3</span>
            <span className={styles.statLabel}>
              {isEn ? "Companies served" : "Empresas atendidas"}
            </span>
          </div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.sectionLabel}>
          {isEn ? "Tech Stack" : "Stack Técnico"}
        </span>
        <h2 className={styles.sectionTitle}>
          {isEn ? "Technical Skills" : "Habilidades Técnicas"}
        </h2>
        <div className={styles.skillsGrid}>
          {skills.map((category, idx) => (
            <motion.div
              key={category.title}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <h3 className={styles.categoryTitle}>
                {isEn
                  ? categoryTitlesEn[category.title] || category.title
                  : category.title}
              </h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.sectionLabel}>
          {isEn ? "Education" : "Formación"}
        </span>
        <h2 className={styles.sectionTitle}>
          {isEn ? "Academic Background" : "Formación Académica"}
        </h2>
        <div className={styles.educationCard}>
          <div className={styles.eduIcon}>🎓</div>
          <span className={styles.eduPeriod}>2020 – 2025</span>
          <h3 className={styles.eduTitle}>
            {isEn
              ? "B.S. Computer Science Engineering"
              : "Ingeniería en Ciencias de la Computación"}
          </h3>
          <span className={styles.eduSchool}>Universidad Don Bosco</span>
        </div>
      </motion.section>

      {/* Timeline */}
      <ExperienceTimeline />
    </main>
  );
}
