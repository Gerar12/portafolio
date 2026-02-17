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
    <main className={styles.container}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.label}>
          {isEn ? "Get in Touch" : "Contacto"}
        </span>
        <h1 className={styles.title}>
          {isEn
            ? "Let's build something together"
            : "Construyamos algo juntos"}
        </h1>
        <p className={styles.subtitle}>
          {isEn
            ? "Have a project in mind or need to scale your development? I'm available for collaborations, consulting and full-time opportunities."
            : "¿Tienes un proyecto en mente o necesitas escalar tu desarrollo? Estoy disponible para colaboraciones, consultoría y oportunidades full-time."}
        </p>
      </motion.div>

      {/* Email card */}
      <motion.div
        className={styles.emailCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className={styles.emailIcon}>
          <Mail size={24} />
        </div>
        <div className={styles.emailInfo}>
          <span className={styles.emailLabel}>Email</span>
          <a href={`mailto:${EMAIL}`} className={styles.emailAddress}>
            {EMAIL}
          </a>
        </div>
        <div className={styles.emailActions}>
          <button
            onClick={copyEmail}
            className={styles.copyBtn}
            aria-label={isEn ? "Copy email" : "Copiar email"}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? (isEn ? "Copied" : "Copiado") : (isEn ? "Copy" : "Copiar")}
          </button>
          <a
            href={`mailto:${EMAIL}`}
            className={styles.sendBtn}
          >
            {isEn ? "Send Email" : "Enviar Correo"}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Socials */}
      <div className={styles.socialsGrid}>
        {socials.map((social, idx) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
          >
            <div className={styles.socialIconWrap}>
              <social.icon size={22} />
            </div>
            <div className={styles.socialInfo}>
              <span className={styles.socialName}>{social.name}</span>
              <span className={styles.socialHandle}>{social.handle}</span>
            </div>
            <ArrowUpRight size={18} className={styles.socialArrow} />
          </motion.a>
        ))}
      </div>

      {/* Availability */}
      <motion.div
        className={styles.availability}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className={styles.availDot} />
        <span className={styles.availText}>
          {isEn
            ? "Currently available for new projects"
            : "Actualmente disponible para nuevos proyectos"}
        </span>
      </motion.div>
    </main>
  );
}
