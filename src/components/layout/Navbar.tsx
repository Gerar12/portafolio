"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Navbar.module.css";

import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "../ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0, opacity: 0 });
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open (iOS Safari compatible)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [isOpen]);

  const updateUnderline = useCallback(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLAnchorElement>(`a[href="${pathname}"]`);
    if (activeLink) {
      setUnderlineProps({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        opacity: 1,
      });
    } else {
      setUnderlineProps((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>
          <span className={styles.logoLetter}>G</span>
          <span className={styles.logoAccent}>/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} ref={navRef}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <motion.span
            className={styles.activeLine}
            animate={{
              left: underlineProps.left,
              width: underlineProps.width,
              opacity: underlineProps.opacity,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
          <div className={styles.desktopActions}>
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`${styles.mobileToggle} ${isOpen ? styles.mobileToggleOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </span>
        </button>

        {/* Mobile Nav - Fullscreen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className={styles.mobileNav}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`${styles.mobileLink} ${pathname === link.href ? styles.activeMobile : ""}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className={styles.mobileDivider}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                />

                <motion.div
                  className={styles.mobileFooter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <LanguageToggle />
                  <div className={styles.socials}>
                    <a href="https://github.com/gerar-arevalo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/gerar-arevalo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:gerar@example.com" aria-label="Email">
                      <Mail size={20} />
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
