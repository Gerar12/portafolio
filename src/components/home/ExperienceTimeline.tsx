"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ExperienceTimeline.module.css";

interface TimelineEntry {
  period: string;
  periodEn: string;
  company: string;
  project: string;
  description: string;
  descriptionEn: string;
  tags: string[];
}

const timeline: TimelineEntry[] = [
  {
    period: "Ene – Feb 2026",
    periodEn: "Jan – Feb 2026",
    company: "Restaurante",
    project: "Proyecto Café",
    description:
      "Sistema POS de escritorio para restaurante: app nativa (Tauri/Rust + React 19) con gestión de mesas, órdenes con cuentas divididas, menú con imágenes, promociones y facturación DTE vía Atto. Backend con NestJS 11, WebSockets en tiempo real. Actualmente en producción.",
    descriptionEn:
      "Desktop POS system for restaurant: native app (Tauri/Rust + React 19) with table management, split check orders, menu with images, promotions and DTE invoicing via Atto. Backend with NestJS 11, real-time WebSockets. Currently in production.",
    tags: ["Tauri 2", "Rust", "React 19", "NestJS 11", "PostgreSQL"],
  },
  {
    period: "Sep – Dic 2025",
    periodEn: "Sep – Dec 2025",
    company: "Importadoras Don Julio S.A. de C.V.",
    project: "Gestión",
    description:
      "ERP completo para importadora multi-sucursal: portal web, backend y app de escritorio nativa (Tauri/Rust) con framework de routing propio. Migración de +9,800 productos y 1.5M+ unidades. Integrado con Atto para facturación DTE, +10,000 documentos emitidos en 3 semanas.",
    descriptionEn:
      "Full ERP for multi-branch importer: web portal, backend and native desktop app (Tauri/Rust) with custom routing framework. 9,800+ products and 1.5M+ units migrated. Integrated with Atto for DTE invoicing, 10,000+ documents issued in 3 weeks.",
    tags: ["Next.js 15", "NestJS 11", "Tauri 2", "Rust", "PostgreSQL"],
  },
  {
    period: "Sep – Oct 2025",
    periodEn: "Sep – Oct 2025",
    company: "Salex Corp",
    project: "Atenea",
    description:
      "Micrositio fullstack para lotificación real de Salex Corp, integrado con UrbaNext como tenant. Sistema de gestión de invitados con códigos QR únicos para control de acceso a eventos, editor rich text (Tiptap), envío de invitaciones por email, panel admin y exportación Excel.",
    descriptionEn:
      "Fullstack microsite for a real Salex Corp lot subdivision, integrated with UrbaNext as a tenant. Guest management system with unique QR codes for event access control, rich text editor (Tiptap), email invitations, admin panel and Excel export.",
    tags: ["Next.js 15", "NextAuth v5", "Prisma 6", "Tiptap", "Tailwind CSS 4"],
  },
  {
    period: "Sep 2025",
    periodEn: "Sep 2025",
    company: "World Vision El Salvador",
    project: "Micro Web Institucional",
    description:
      "Micrositio fullstack con landing pública, reproductor de video (Plyr), carruseles animados, dashboard admin con drag & drop para gestionar contenido y sistema de autenticación.",
    descriptionEn:
      "Fullstack microsite with public landing page, video player (Plyr), animated carousels, admin dashboard with drag & drop content management and authentication system.",
    tags: ["Next.js 15", "NextAuth v5", "Prisma 6", "Cloudinary", "Motion"],
  },
  {
    period: "Jun – Ago 2025",
    periodEn: "Jun – Aug 2025",
    company: "Salex Corp",
    project: "Atto",
    description:
      "SaaS de facturación electrónica DTE para El Salvador, en producción y utilizada por múltiples empresas y restaurantes. API con NestJS 11 que soporta los 11 tipos de DTE oficiales, firma digital X.509, integración con Ministerio de Hacienda, generación automática de PDF y autenticación híbrida (JWT/API Keys/Cookies).",
    descriptionEn:
      "DTE electronic invoicing SaaS for El Salvador, in production and used by multiple companies and restaurants. NestJS 11 API supporting all 11 official DTE types, X.509 digital signatures, tax authority integration, automatic PDF generation and hybrid authentication (JWT/API Keys/Cookies).",
    tags: ["NestJS 11", "Next.js 15", "PostgreSQL", "RSA-SHA256", "X.509"],
  },
  {
    period: "May – Oct 2025",
    periodEn: "May – Oct 2025",
    company: "Salex Corp",
    project: "Ecosistema Salex",
    description:
      "Plataforma inmobiliaria completa (salex.sv): sitio web público con mapas de lotes en tiempo real, dashboard admin con auth enterprise, backend multi-tenant con chatbot WhatsApp Business, asistente IA (GPT-4/Gemini), facturación DTE vía Atto. En producción atrayendo clientes reales.",
    descriptionEn:
      "Full real estate platform (salex.sv): public website with real-time lot maps, admin dashboard with enterprise auth, multi-tenant backend with WhatsApp Business chatbot, AI assistant (GPT-4/Gemini), DTE invoicing via Atto. In production attracting real clients.",
    tags: ["Next.js 15", "NestJS", "WhatsApp API", "OpenAI", "Gemini"],
  },
  {
    period: "Mar – Jun 2025",
    periodEn: "Mar – Jun 2025",
    company: "Salex Corp",
    project: "UrbaNext",
    description:
      "SaaS de gestión inmobiliaria en producción, utilizada por múltiples empresas de bienes raíces. Frontend con Next.js 15/React 19 y mapas interactivos Mapbox. Backend con NestJS/Prisma/PostgreSQL, WebSockets, JWT con 2FA y 15+ módulos. Testing con Jest, CI con Husky y deploy en Vercel/Docker.",
    descriptionEn:
      "Real estate management SaaS in production, used by multiple real estate companies. Frontend with Next.js 15/React 19 and interactive Mapbox maps. Backend with NestJS/Prisma/PostgreSQL, WebSockets, JWT with 2FA and 15+ modules. Testing with Jest, CI with Husky and deploy on Vercel/Docker.",
    tags: ["Next.js 15", "NestJS", "Mapbox", "PostgreSQL", "Prisma"],
  },
  {
    period: "Dic 2024 – Feb 2025",
    periodEn: "Dec 2024 – Feb 2025",
    company: "World Vision El Salvador — Consultoría",
    project: "Ecosistema Tuchan",
    description:
      "Actualización y ampliación del ecosistema: reescritura de app móvil Android (React Native/Expo), desarrollo de portal web administrativo (Next.js/shadcn/ui) y migración del backend a NestJS/Prisma/SQL Server. Vinculación integral con APIs REST y JWT.",
    descriptionEn:
      "Ecosystem update and expansion: Android mobile app rewrite (React Native/Expo), admin web portal development (Next.js/shadcn/ui) and backend migration to NestJS/Prisma/SQL Server. Full integration with REST APIs and JWT.",
    tags: ["React Native", "Next.js 14", "NestJS", "SQL Server"],
  },
  {
    period: "Jun – Nov 2024",
    periodEn: "Jun – Nov 2024",
    company: "World Vision El Salvador — Consultoría",
    project: "Tuchan Play",
    description:
      "Desarrollo full-stack de videojuego móvil multijugador (lotería tradicional salvadoreña) para niños, jóvenes y adultos. Multijugador en tiempo real con WebSockets, modo historia interactivo con minijuegos educativos y sistema de audio inmersivo. Proyecto contratado como herramienta educativa y cultural.",
    descriptionEn:
      "Full-stack development of multiplayer mobile game (traditional Salvadoran lottery) for children, youth and adults. Real-time multiplayer with WebSockets, interactive story mode with educational mini-games and immersive audio system. Contracted as an educational and cultural tool.",
    tags: ["React Native", "Expo", "Node.js", "Express", "Socket.IO"],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const isEn = language === "en";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <span className={styles.label}>
            {isEn ? "Career Path" : "Trayectoria"}
          </span>
          <h2 className={styles.heading}>
            {isEn ? "Work Experience" : "Experiencia Laboral"}
          </h2>
        </motion.div>

        <div className={styles.timeline} ref={containerRef}>
          {/* Track line */}
          <div className={styles.trackLine} />
          {/* Glow line (scroll-linked) */}
          <motion.div className={styles.glowLine} style={{ height: lineHeight }} />

          {timeline.map((entry, idx) => (
            <motion.div
              key={idx}
              className={styles.entry}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Numbered Dot */}
              <motion.div
                className={styles.dot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 + 0.2 }}
              >
                {idx + 1}
              </motion.div>

              {/* Content */}
              <div className={styles.card}>
                <span className={styles.period}>
                  {isEn ? entry.periodEn : entry.period}
                </span>
                <span className={styles.company}>{entry.company}</span>
                <h3 className={styles.project}>{entry.project}</h3>
                <p className={styles.description}>
                  {isEn ? entry.descriptionEn : entry.description}
                </p>
                <div className={styles.tags}>
                  {entry.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
