"use client";

import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

const EMAIL = "me@gcoder.dev";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Gerar12",
    icon: Github,
    handle: "@Gerar12",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gerar-arevalo-b5758a177/",
    icon: Linkedin,
    handle: "Gerardo Arévalo",
  },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.shell}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      <motion.div
        className={styles.panel}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className={styles.availability}>
          <span className={styles.availDot} />
          <span className={styles.availText}>
            {isEn
              ? "Available for full-time & contract"
              : "Disponible full-time y contrato"}
          </span>
        </div>

        <span className={styles.label}>
          {isEn ? "Contact" : "Contacto"}
        </span>

        <h1 className={styles.title}>
          {isEn ? (
            <>
              Let&apos;s talk about your{" "}
              <span className={styles.titleGradient}>next hire</span>
            </>
          ) : (
            <>
              Hablemos de tu{" "}
              <span className={styles.titleGradient}>próxima contratación</span>
            </>
          )}
        </h1>

        <p className={styles.subtitle}>
          {isEn
            ? "Full-stack · remote LATAM · reply within 24h."
            : "Full-stack · remoto LATAM · respondo en menos de 24h."}
        </p>

        <div className={styles.emailCard}>
          <div className={styles.emailIcon}>
            <Mail size={20} />
          </div>
          <div className={styles.emailInfo}>
            <span className={styles.emailLabel}>Email</span>
            <a href={`mailto:${EMAIL}`} className={styles.emailAddress}>
              {EMAIL}
            </a>
          </div>
          <div className={styles.emailActions}>
            <button
              type="button"
              onClick={copyEmail}
              className={styles.copyBtn}
              aria-label={isEn ? "Copy email" : "Copiar email"}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? (isEn ? "Copied" : "Copiado") : (isEn ? "Copy" : "Copiar")}
            </button>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                isEn ? "Job opportunity for Gerar" : "Oportunidad laboral para Gerar",
              )}`}
              className={styles.sendBtn}
            >
              {isEn ? "Email me" : "Escríbeme"}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className={styles.socialsGrid}>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialIconWrap}>
                <social.icon size={18} />
              </div>
              <div className={styles.socialInfo}>
                <span className={styles.socialName}>{social.name}</span>
                <span className={styles.socialHandle}>{social.handle}</span>
              </div>
              <ArrowUpRight size={16} className={styles.socialArrow} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
