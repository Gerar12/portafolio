"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.option} ${language === "es" ? styles.active : ""}`}
        onClick={() => setLanguage("es")}
        aria-label="Español"
      >
        ES
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.option} ${language === "en" ? styles.active : ""}`}
        onClick={() => setLanguage("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
