export interface Project {
  slug: string;
  title: string;
  client: string;
  period: string;
  category: "saas" | "erp" | "pos" | "mobile" | "desktop" | "web" | "game";
  description: string;
  descriptionEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  status: "production" | "completed";
  metrics?: { label: string; value: string }[];
  stack: string[];
  features: string[];
  featuresEn?: string[];
  logo?: string;
  logoInvertOnDark?: boolean;
  externalUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "tuchan-play",
    title: "Tuchan Play",
    client: "World Vision El Salvador",
    period: "Jun – Nov 2024",
    category: "game",
    shortDescription: "Videojuego móvil multijugador educativo para ONG internacional.",
    shortDescriptionEn: "Educational multiplayer mobile game for an international NGO.",
    description: "Videojuego móvil multijugador educativo con partidas en tiempo real, sistema de logros, rankings y salas de juego. Desarrollado para World Vision El Salvador como herramienta educativa interactiva.",
    descriptionEn: "Educational multiplayer mobile game with real-time matches, achievement system, rankings and game rooms. Developed for World Vision El Salvador as an interactive educational tool.",
    status: "production",
    stack: ["React Native", "Expo", "Node.js", "Express", "Socket.IO", "MongoDB"],
    features: [
      "Multijugador en tiempo real con WebSockets",
      "Sistema de logros y rankings",
      "Salas de juego dinámicas",
      "Publicado en stores"
    ],
    images: []
  },
  {
    slug: "ecosistema-tuchan",
    title: "Ecosistema Tuchan",
    client: "World Vision El Salvador",
    period: "Dic 2024 – Feb 2025",
    category: "mobile",
    shortDescription: "App móvil + portal web + backend para gestión de programas de ONG.",
    shortDescriptionEn: "Mobile app + web portal + backend for NGO program management.",
    description: "Ecosistema completo con app móvil, portal web administrativo y backend para la gestión de programas, beneficiarios y métricas de World Vision El Salvador.",
    descriptionEn: "Complete ecosystem with mobile app, admin web portal and backend for managing programs, beneficiaries and metrics for World Vision El Salvador.",
    status: "production",
    stack: ["React Native", "Expo", "Next.js 14", "NestJS", "SQL Server", "TypeORM"],
    features: [
      "App móvil multiplataforma",
      "Portal web administrativo",
      "Dashboard con reportes y métricas",
      "Gestión de beneficiarios"
    ],
    images: []
  },
  {
    slug: "urbanext",
    title: "UrbaNext",
    logo: "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/icon-u",
    client: "Salex Corp",
    period: "Mar – Jun 2025",
    category: "saas",
    externalUrl: "https://gescosal.urbanext.io",
    shortDescription: "SaaS inmobiliaria multi-tenant con mapas interactivos Mapbox, planos 3D de lotes en tiempo real, sistema de pagos, notificaciones push vía WebSockets y gestión completa de clientes.",
    shortDescriptionEn: "Multi-tenant real estate SaaS with interactive Mapbox maps, real-time 3D lot blueprints, payment system, push notifications via WebSockets and full client management.",
    description: "Plataforma SaaS inmobiliaria multi-tenant diseñada para gestionar lotificaciones completas de principio a fin. Cada organización (tenant) administra sus proyectos de forma aislada con su propio equipo, clientes y configuración. El sistema incluye mapas interactivos con Mapbox que renderizan planos de lotes con codificación por colores según su estado (disponible, vendido, reservado, bloqueado), permitiendo interactuar con cada lote para ver detalles de precio, área y transacciones. Integra un dashboard con métricas en tiempo real, rendimiento del equipo de ventas, sistema de pagos con seguimiento de transacciones, notificaciones push vía WebSockets y gestión de clientes. Toda la carga de archivos e imágenes pasa por Cloudinary.",
    descriptionEn: "Multi-tenant real estate SaaS platform designed to manage full lot subdivisions end-to-end. Each organization (tenant) manages its projects in isolation with its own team, clients and configuration. The system includes interactive Mapbox maps that render lot blueprints with color-coding by status (available, sold, reserved, blocked), allowing interaction with each lot to view price, area and transaction details. It integrates a dashboard with real-time metrics, sales team performance tracking, a payment system with transaction tracking, push notifications via WebSockets and client management. All file and image uploads go through Cloudinary.",
    status: "production",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Mapbox", "WebSockets", "Cloudinary"],
    features: [
      "Mapas interactivos Mapbox con planos de lotes codificados por color",
      "Visualización 3D de lotificaciones con estado en tiempo real",
      "Arquitectura multi-tenant con aislamiento completo por organización",
      "Dashboard con métricas de ventas y rendimiento del equipo",
      "Notificaciones push en tiempo real vía WebSockets",
      "Sistema de pagos y seguimiento de transacciones",
      "Gestión de clientes y asignación de lotes",
      "Generación de reportes y exportación de datos",
      "Carga de archivos e imágenes con Cloudinary"
    ],
    featuresEn: [
      "Interactive Mapbox maps with color-coded lot blueprints",
      "3D lot subdivision visualization with real-time status",
      "Multi-tenant architecture with full organization isolation",
      "Dashboard with sales metrics and team performance tracking",
      "Real-time push notifications via WebSockets",
      "Payment system and transaction tracking",
      "Client management and lot assignment",
      "Report generation and data export",
      "File and image uploads with Cloudinary"
    ],
    metrics: [
      { label: "Lotificaciones activas", value: "+15" },
      { label: "Lotes gestionados", value: "+5,000" },
      { label: "Transacciones", value: "+2,400" },
      { label: "Empresas (tenants)", value: "5" },
      { label: "Módulos backend", value: "18" },
      { label: "Mapas renderizados", value: "+50" }
    ],
    images: [
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/logo",
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/dashboard",
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/lotificaciones-mapa",
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/plano-lotes-3d",
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/detalle-lote",
      "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/notificaciones-realtime"
    ]
  },
  {
    slug: "ecosistema-salex",
    title: "Ecosistema Digital Salex Corp",
    client: "Salex Corp",
    period: "May – Oct 2025",
    category: "web",
    shortDescription: "Ecosistema digital completo: sitio web, dashboard admin y backend con IA y WhatsApp Bot.",
    shortDescriptionEn: "Complete digital ecosystem: website, admin dashboard and backend with AI and WhatsApp Bot.",
    description: "Ecosistema digital completo para empresa inmobiliaria: sitio web corporativo (salex.sv), dashboard con auth enterprise, y backend multi-tenant con chatbot WhatsApp Business, asistente IA (GPT-4 + Gemini) y facturación DTE.",
    descriptionEn: "Complete digital ecosystem for a real estate company: corporate website (salex.sv), dashboard with enterprise auth, and multi-tenant backend with WhatsApp Business chatbot, AI assistant (GPT-4 + Gemini) and DTE invoicing.",
    status: "production",
    externalUrl: "https://salex.sv",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Meta WhatsApp API", "OpenAI GPT-4", "Google Gemini", "Cloudinary", "Framer Motion"],
    features: [
      "Chatbot WhatsApp Business 24/7",
      "Asistente IA con GPT-4 + Gemini",
      "Auth enterprise (JWT dual, HTTP-only cookies)",
      "Mapas de lotes en tiempo real (integrado con UrbaNext)",
      "Facturación DTE vía Atto",
      "5 roles de usuario"
    ],
    metrics: [
      { label: "Dominio", value: "salex.sv" }
    ],
    images: []
  },
  {
    slug: "atto",
    title: "Atto",
    client: "Salex Corp (Producto propio)",
    period: "Jun – Ago 2025",
    category: "saas",
    shortDescription: "SaaS de facturación electrónica DTE con firma digital X.509.",
    shortDescriptionEn: "Electronic invoicing DTE SaaS with X.509 digital signature.",
    description: "SaaS de facturación electrónica para El Salvador. Soporte para 11 tipos de DTEs, firma digital con certificados X.509, integración directa con el Ministerio de Hacienda. Producto propio usado como motor de facturación por otros proyectos.",
    descriptionEn: "Electronic invoicing SaaS for El Salvador. Support for 11 DTE types, digital signature with X.509 certificates, direct integration with the Ministry of Finance. Own product used as invoicing engine by other projects.",
    status: "production",
    stack: ["NestJS 11", "Next.js 15", "PostgreSQL", "Prisma", "RSA-SHA256", "X.509"],
    features: [
      "11 tipos de documentos tributarios",
      "Firma digital X.509 (RSA-SHA256)",
      "Integración directa con Ministerio de Hacienda",
      "Generación de JSON/PDF",
      "Control de correlativos",
      "API consumida por otros productos"
    ],
    metrics: [
      { label: "DTEs procesados", value: "+10,000" },
      { label: "Tipos de DTE", value: "11" }
    ],
    images: []
  },
  {
    slug: "microweb-worldvision",
    title: "Micro Web World Vision",
    client: "World Vision El Salvador",
    period: "Sep 2025",
    category: "web",
    shortDescription: "Micrositio fullstack institucional con dashboard admin y video player.",
    shortDescriptionEn: "Institutional fullstack microsite with admin dashboard and video player.",
    description: "Micrositio fullstack institucional con landing pública, reproductor de video, carruseles animados, dashboard admin con drag & drop para gestión de contenido.",
    descriptionEn: "Institutional fullstack microsite with public landing page, video player, animated carousels, admin dashboard with drag & drop for content management.",
    status: "production",
    stack: ["Next.js 15", "React 19", "NextAuth v5", "Prisma 6", "Cloudinary", "Plyr", "Motion", "@dnd-kit"],
    features: [
      "Landing pública con video player",
      "Dashboard admin con drag & drop",
      "Carruseles animados",
      "Autenticación con NextAuth v5"
    ],
    images: []
  },
  {
    slug: "atenea",
    title: "Atenea",
    client: "Salex Corp",
    period: "Sep – Dic 2025",
    category: "web",
    shortDescription: "Micrositio de lotificación con gestión de invitados y QR de acceso.",
    shortDescriptionEn: "Lot subdivision microsite with guest management and QR access codes.",
    description: "Micrositio fullstack para proyecto de lotificación real, integrado con UrbaNext. Sistema de gestión de invitados con códigos QR únicos para control de acceso a eventos, editor rich text y envío de invitaciones.",
    descriptionEn: "Fullstack microsite for a real lot subdivision project, integrated with UrbaNext. Guest management system with unique QR codes for event access control, rich text editor and invitation sending.",
    status: "production",
    externalUrl: "https://atenea.sv",
    stack: ["Next.js 15", "React 19", "NextAuth v5", "Prisma 6", "Tiptap", "Tailwind CSS 4"],
    features: [
      "Códigos QR únicos por invitado",
      "Editor rich text (Tiptap)",
      "Integrado con UrbaNext como tenant",
      "Envío de invitaciones por email",
      "Panel admin + exportación Excel"
    ],
    metrics: [
      { label: "Dominio", value: "atenea.sv" }
    ],
    images: []
  },
  {
    slug: "gestion",
    title: "Gestión",
    logo: "https://res.cloudinary.com/dewy8qqaf/image/upload/f_auto,q_auto/portfolio/gestion/gestion-g-logo",
    logoInvertOnDark: true,
    client: "Importadoras Don Julio S.A. de C.V.",
    period: "Sep 2025 – Feb 2026",
    category: "erp",
    externalUrl: "http://gestion-frontend-zhxd5s-a77690-46-202-176-34.traefik.me/",
    shortDescription: "ERP empresarial con portal web, backend, app de escritorio nativa y facturación DTE para importadora multi-sucursal con +1.5M de registros migrados.",
    shortDescriptionEn: "Enterprise ERP with web portal, backend, native desktop app and DTE invoicing for a multi-branch importer with 1.5M+ migrated records.",
    description: "ERP empresarial completo para importadora con múltiples sucursales (bodegas y tiendas). Incluye portal web administrativo (Next.js 15), backend robusto (NestJS 11) y app de escritorio nativa (Tauri 2/Rust) con framework propio de routing (.nova). El sistema gestiona inventario con distribución FIFO, ciclo de vida de contenedores con detección de discrepancias, reservas de stock entre sucursales, productos dañados con generación automática de CCF, facturación electrónica DTE (7 tipos de documento) vía Atto, cierres de caja diarios/mensuales/anuales, reportes contables avanzados en Excel, dashboards en tiempo real por rol (8 roles), auditoría completa con geolocalización, e impresión nativa en impresoras térmicas vía Rust. Se migró +1.5M de registros de producción con 12 scripts SQL idempotentes. Optimizado con caché multinivel y consultas SQL raw que redujeron tiempos de 71s a 0.25s.",
    descriptionEn: "Complete enterprise ERP for an importer with multiple branches (warehouses and stores). Includes an admin web portal (Next.js 15), a robust backend (NestJS 11) and a native desktop app (Tauri 2/Rust) with a custom routing framework (.nova). The system manages inventory with FIFO distribution, container lifecycle with discrepancy detection, cross-branch stock reservations, damaged products with automatic CCF generation, DTE electronic invoicing (7 document types) via Atto, daily/monthly/yearly cash closures, advanced Excel accounting reports, real-time role-based dashboards (8 roles), comprehensive auditing with geolocation, and native thermal printer support via Rust. 1.5M+ production records were migrated using 12 idempotent SQL scripts. Optimized with multi-level caching and raw SQL queries that reduced response times from 71s to 0.25s.",
    status: "production",
    stack: ["Next.js 15", "NestJS 11", "Tauri 2", "Rust", "React 19", "PostgreSQL", "Prisma", "WebSockets", "Atto", "Socket.IO", "ExcelJS", "Tailwind CSS"],
    features: [
      "App de escritorio nativa con Tauri 2 y Rust (impresión térmica, auto-updates)",
      "Framework propio de routing file-based (.nova) para Tauri",
      "Facturación DTE con 7 tipos de documento (CCF, FCF, NC, ND, Ticket, Remisión, Sujeto Excluido) vía Atto",
      "Inventario con distribución FIFO, reservas de stock y detección de discrepancias",
      "Ciclo de vida de contenedores (Registrado → En Bodega → Pendiente → Descargado)",
      "Migración de +1.5M registros con 12 scripts SQL idempotentes",
      "8 roles con permisos granulares y control de acceso por sucursal",
      "Dashboards en tiempo real diferenciados por rol (Admin, Bodeguero, Tienda, Facturador, Contador, Auditor)",
      "WebSockets con Socket.IO para notificaciones push en tiempo real",
      "Cierres de caja diarios/mensuales/anuales con envío automático por email",
      "Reportes Excel avanzados multi-hoja (ventas, IVA, cierres, percepciones)",
      "Auditoría completa con geolocalización, IP y user-agent",
      "Modo contingencia offline para facturación cuando la API de Hacienda no responde",
      "Optimización SQL: tiempos de respuesta de 71s → 0.25s con caché multinivel"
    ],
    featuresEn: [
      "Native desktop app with Tauri 2 and Rust (thermal printing, auto-updates)",
      "Custom file-based routing framework (.nova) for Tauri",
      "DTE invoicing with 7 document types (CCF, FCF, CN, DN, Ticket, Remission, Excluded Subject) via Atto",
      "Inventory with FIFO distribution, stock reservations and discrepancy detection",
      "Container lifecycle (Registered → In Warehouse → Pending → Unloaded)",
      "1.5M+ record migration with 12 idempotent SQL scripts",
      "8 roles with granular permissions and branch-level access control",
      "Real-time role-based dashboards (Admin, Warehouse, Store, Invoicer, Accountant, Auditor)",
      "WebSockets with Socket.IO for real-time push notifications",
      "Daily/monthly/yearly cash closures with automatic email delivery",
      "Advanced multi-sheet Excel reports (sales, VAT, closures, withholdings)",
      "Comprehensive audit logging with geolocation, IP and user-agent",
      "Offline contingency mode for invoicing when the tax authority API is down",
      "SQL optimization: response times from 71s → 0.25s with multi-level caching"
    ],
    metrics: [
      { label: "DTEs tramitados", value: "+10,000" },
      { label: "Registros migrados", value: "+1.5M" },
      { label: "Modelos en BD", value: "48" },
      { label: "Módulos backend", value: "22" },
      { label: "Páginas web", value: "30" },
      { label: "Roles de usuario", value: "8" }
    ],
    images: [
      "https://res.cloudinary.com/dewy8qqaf/image/upload/f_auto,q_auto/portfolio/gestion/gestion-g-logo"
    ]
  },
  {
    slug: "proyecto-cafe",
    title: "Proyecto Café",
    client: "Restaurante",
    period: "Ene – Feb 2026",
    category: "pos",
    shortDescription: "POS de escritorio nativo con gestión de mesas, cuentas divididas y facturación DTE.",
    shortDescriptionEn: "Native desktop POS with table management, split checks and DTE invoicing.",
    description: "Sistema POS de escritorio nativo para restaurante con gestión visual de mesas, órdenes con sistema de cuentas divididas, menú con imágenes, promociones y facturación DTE. En producción facturando diariamente.",
    descriptionEn: "Native desktop POS system for a restaurant with visual table management, orders with split check system, menu with images, promotions and DTE invoicing. In production invoicing daily.",
    status: "production",
    stack: ["Tauri 2", "Rust", "React 19", "NestJS 11", "PostgreSQL", "Prisma", "WebSockets", "Cloudinary", "Atto"],
    features: [
      "Gestión visual de mesas (zonas/pisos)",
      "Sistema de cuentas divididas (OrderSplit)",
      "Facturación DTE individual por comensal",
      "WebSockets en tiempo real",
      "Promociones configurables",
      "3 roles (Admin/Cajero/Mesero)"
    ],
    images: []
  }
];
