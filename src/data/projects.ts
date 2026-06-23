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
  cover?: string;
  externalUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "tuchan-play",
    title: "Tuchan Play",
    logo: "/logos/tuchan-play.png",
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
    metrics: [
      { label: "Plataformas", value: "iOS + Android" },
      { label: "Modo de juego", value: "Multijugador" },
      { label: "Cliente", value: "World Vision" }
    ],
    images: []
  },
  {
    slug: "ecosistema-tuchan",
    title: "Ecosistema Tuchan",
    logo: "/logos/tuchan-ecosistema.png",
    client: "World Vision El Salvador",
    period: "Dic 2024 – Feb 2025",
    category: "mobile",
    externalUrl: "https://www.tuchanla.com/portal",
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
    metrics: [
      { label: "Componentes", value: "App + Portal + API" },
      { label: "Cliente", value: "World Vision" }
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
      { label: "Lotes gestionados", value: "+3,400" },
      { label: "Transacciones", value: "+1,600" },
      { label: "Lotificaciones", value: "9" },
      { label: "Proyectos en producción", value: "5" }
    ],
    images: [
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
    logo: "/logos/salex.png",
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
    logo: "/logos/atto.svg",
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
    logo: "/logos/worldvision.png",
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
    metrics: [
      { label: "Cliente", value: "World Vision" },
      { label: "Admin", value: "Drag & drop" }
    ],
    images: []
  },
  {
    slug: "atenea",
    title: "Atenea",
    logo: "/logos/atenea.svg",
    client: "Salex Corp",
    period: "Sep – Dic 2025",
    category: "web",
    shortDescription: "Micrositio inmobiliario con captura de leads, registro de invitados con QR y panel admin con email marketing.",
    shortDescriptionEn: "Real estate microsite with lead capture, QR guest registration and an admin panel with email marketing.",
    description: "Micrositio fullstack para Residencial Atenea, lotificación premium real en Costa del Sol, integrado con UrbaNext (plano de lotes interactivo en línea). Landing de marketing con video hero, galería con lightbox, recorridos virtuales en video y carruseles de modelos de casas; captura de leads y suscriptores con validación de DUI y teléfono; registro de invitados a eventos con código QR; y panel administrativo (NextAuth v5) con búsqueda, exportación a Excel y envío de emails masivos o personalizados mediante editor rich text (Tiptap).",
    descriptionEn: "Fullstack microsite for Residencial Atenea, a real premium lot subdivision in Costa del Sol, integrated with UrbaNext (interactive online lot map). Marketing landing with video hero, lightbox gallery, virtual tour videos and house model carousels; lead and subscriber capture with DUI and phone validation; event guest registration with QR code; and an admin panel (NextAuth v5) with search, Excel export and bulk or custom email sending via a rich text editor (Tiptap).",
    status: "production",
    externalUrl: "https://atenea.sv",
    stack: ["Next.js 15", "React 19", "NextAuth v5", "Prisma 6", "PostgreSQL", "Tiptap", "Nodemailer", "Tailwind CSS 4"],
    features: [
      "Captura de leads y suscriptores con validación de DUI y teléfono",
      "Registro de invitados a eventos con código QR descargable",
      "Panel admin (NextAuth v5) con búsqueda y exportación a Excel",
      "Email marketing: bienvenida, confirmación y envíos masivos con editor rich text (Tiptap)",
      "Galería con lightbox, recorridos virtuales en video y carruseles de modelos de casas",
      "Integrado con UrbaNext: plano de lotes interactivo en línea",
      "SEO completo: JSON-LD, Open Graph y metadata por mercado"
    ],
    featuresEn: [
      "Lead and subscriber capture with DUI and phone validation",
      "Event guest registration with a downloadable QR code",
      "Admin panel (NextAuth v5) with search and Excel export",
      "Email marketing: welcome, confirmation and bulk sends with a rich text editor (Tiptap)",
      "Lightbox gallery, virtual tour videos and house model carousels",
      "Integrated with UrbaNext: interactive online lot map",
      "Full SEO: JSON-LD, Open Graph and per-market metadata"
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
    shortDescription: "ERP empresarial con portal web, backend, app de escritorio nativa y facturación DTE para importadora multi-sucursal con +1.5M de registros migrados.",
    shortDescriptionEn: "Enterprise ERP with web portal, backend, native desktop app and DTE invoicing for a multi-branch importer with 1.5M+ migrated records.",
    description: "ERP empresarial completo para importadora con múltiples sucursales (bodegas y tiendas), compuesto por 4 aplicaciones: portal web administrativo (Next.js 15, ~30 páginas), backend (NestJS 11, 23 módulos), app de escritorio nativa para punto de venta (Tauri 2/Rust) con framework propio de routing (.nova), y sitio corporativo. Gestiona inventario con distribución FIFO, ciclo de vida de contenedores de importación con detección de discrepancias, reservas de stock entre sucursales, productos dañados con generación automática de CCF, facturación electrónica DTE (7 tipos de documento) vía Atto con conciliación automática ante timeouts de Hacienda, cotizaciones con expiración automática, cierres de caja diarios/mensuales/anuales con envío por email, reportes contables en Excel multi-hoja, dashboards en tiempo real para 8 roles con permisos por sucursal, auditoría con geolocalización e impresión térmica nativa (TCP/IP y USB) desde Rust. Se migró +1.5M de registros de producción. Optimizado con caché multinivel y consultas SQL raw que redujeron tiempos de 71s a 0.25s.",
    descriptionEn: "Complete enterprise ERP for an importer with multiple branches (warehouses and stores), made up of 4 applications: an admin web portal (Next.js 15, ~30 pages), a backend (NestJS 11, 23 modules), a native desktop point-of-sale app (Tauri 2/Rust) with a custom routing framework (.nova), and a corporate website. It manages inventory with FIFO distribution, import-container lifecycle with discrepancy detection, cross-branch stock reservations, damaged products with automatic CCF generation, DTE electronic invoicing (7 document types) via Atto with automatic reconciliation on tax-authority timeouts, quotes with automatic expiration, daily/monthly/yearly cash closures with email delivery, multi-sheet Excel accounting reports, real-time dashboards for 8 roles with per-branch permissions, audit logging with geolocation, and native thermal printing (TCP/IP and USB) from Rust. 1.5M+ production records were migrated. Optimized with multi-level caching and raw SQL queries that reduced response times from 71s to 0.25s.",
    status: "production",
    stack: ["Next.js 15", "NestJS 11", "Tauri 2", "Rust", "React 19", "PostgreSQL", "Prisma", "WebSockets", "Atto", "Socket.IO", "ExcelJS", "Tailwind CSS"],
    features: [
      "App de escritorio nativa con Tauri 2 y Rust (impresión térmica TCP/IP y USB, auto-updates)",
      "Framework propio de routing file-based (.nova) para Tauri",
      "Facturación DTE con 7 tipos de documento (CCF, FCF, NC, ND, Ticket, Remisión, Sujeto Excluido) vía Atto",
      "Conciliación automática de DTEs ante timeouts de Hacienda (verifica si el documento fue sellado realmente)",
      "Inventario con distribución FIFO, reservas de stock entre sucursales y detección de discrepancias",
      "Ciclo de vida de contenedores de importación (Registrado → En Bodega → Pendiente → Aprobado)",
      "Productos dañados con generación automática de CCF",
      "Cotizaciones con expiración automática (CRON) e importación masiva de productos desde Excel",
      "8 roles con permisos granulares por sucursal y PIN de autorización para acciones sensibles",
      "Dashboards en tiempo real por rol con WebSockets (Socket.IO)",
      "Cierres de caja diarios/mensuales/anuales con envío automático por email",
      "Reportes Excel avanzados multi-hoja (ventas, IVA, cierres, percepciones)",
      "Auditoría completa con geolocalización, IP y user-agent, con limpieza automática programada",
      "Migración de +1.5M registros de producción",
      "Optimización SQL: tiempos de respuesta de 71s → 0.25s con caché multinivel"
    ],
    featuresEn: [
      "Native desktop app with Tauri 2 and Rust (TCP/IP and USB thermal printing, auto-updates)",
      "Custom file-based routing framework (.nova) for Tauri",
      "DTE invoicing with 7 document types (CCF, FCF, CN, DN, Ticket, Remission, Excluded Subject) via Atto",
      "Automatic DTE reconciliation on tax-authority timeouts (verifies whether the document was actually sealed)",
      "Inventory with FIFO distribution, cross-branch stock reservations and discrepancy detection",
      "Import-container lifecycle (Registered → In Warehouse → Pending → Approved)",
      "Damaged products with automatic CCF generation",
      "Quotes with automatic expiration (CRON) and bulk product import from Excel",
      "8 roles with granular per-branch permissions and an authorization PIN for sensitive actions",
      "Real-time role-based dashboards with WebSockets (Socket.IO)",
      "Daily/monthly/yearly cash closures with automatic email delivery",
      "Advanced multi-sheet Excel reports (sales, VAT, closures, withholdings)",
      "Comprehensive audit logging with geolocation, IP and user-agent, plus scheduled automatic cleanup",
      "1.5M+ production records migrated",
      "SQL optimization: response times from 71s → 0.25s with multi-level caching"
    ],
    metrics: [
      { label: "DTEs tramitados", value: "+10,000" },
      { label: "Registros migrados", value: "+1.5M" },
      { label: "Optimización SQL", value: "71s → 0.25s" },
      { label: "Roles de usuario", value: "8" }
    ],
    images: [
      "/projects/gestion/dashboard.webp",
      "/projects/gestion/facturas.webp",
      "/projects/gestion/inventario.webp"
    ]
  },
  {
    slug: "proyecto-cafe",
    title: "Proyecto Café",
    logo: "/logos/cafe.png",
    logoInvertOnDark: true,
    client: "Restaurante",
    period: "Ene – Feb 2026",
    category: "pos",
    shortDescription: "POS de escritorio nativo con gestión de mesas, cuentas divididas por comensal, facturación DTE e impresión térmica.",
    shortDescriptionEn: "Native desktop POS with table management, per-diner split checks, DTE invoicing and thermal printing.",
    description: "Sistema POS de escritorio nativo (Tauri 2 + Rust) para restaurante, en producción facturando a diario. Cubre el flujo completo del local: gestión visual de mesas por zonas y pisos, órdenes con cuentas divididas por comensal, facturación electrónica de 4 tipos de DTE integrada con Atto y el Ministerio de Hacienda, impresión térmica de tickets por red, dashboard de ventas con gráficos en tiempo real, corte de caja, libro de compras con importación de DTEs de proveedores y reportes fiscales en Excel (Libro de Ventas CF y CCF).",
    descriptionEn: "Native desktop POS system (Tauri 2 + Rust) for a restaurant, in production invoicing daily. Covers the full restaurant flow: visual table management by zones and floors, orders with per-diner split checks, electronic invoicing of 4 DTE types integrated with Atto and the Ministry of Finance, networked thermal ticket printing, real-time sales dashboard with charts, cash closures, a purchase ledger with supplier DTE imports, and fiscal Excel reports (CF and CCF sales books).",
    status: "production",
    stack: ["Tauri 2", "Rust", "React 19", "NestJS 11", "PostgreSQL", "Prisma", "WebSockets", "Cloudinary", "Atto"],
    features: [
      "Gestión visual de mesas por zonas y pisos (5 estados)",
      "Cuentas divididas por comensal (OrderSplit) con DTE individual",
      "4 tipos de DTE vía Atto: Factura, Crédito Fiscal, Notas de Crédito y Débito",
      "Impresión térmica ESC/POS por red, con QR y sello de Hacienda",
      "WebSockets: mesas, órdenes y facturas se actualizan al instante",
      "Dashboard de ventas con gráficos y corte de caja imprimible",
      "Libro de compras con importación de DTEs JSON de proveedores",
      "Reportes fiscales en Excel: Libro de Ventas CF y CCF",
      "Promociones por producto, categoría o globales y 3 roles de usuario",
      "Routing file-based con framework propio (.nova) y auto-updates"
    ],
    metrics: [
      { label: "Tipos de DTE", value: "4" },
      { label: "Estado", value: "Facturando a diario" },
      { label: "App", value: "Escritorio nativo" }
    ],
    featuresEn: [
      "Visual table management by zones and floors (5 states)",
      "Per-diner split checks (OrderSplit) with individual DTE invoicing",
      "4 DTE types via Atto: Invoice, Tax Credit, Credit and Debit Notes",
      "Networked ESC/POS thermal printing with QR and tax authority seal",
      "WebSockets: tables, orders and invoices update instantly",
      "Sales dashboard with charts and printable cash closure",
      "Purchase ledger with supplier DTE JSON imports",
      "Fiscal Excel reports: CF and CCF sales books",
      "Promotions by product, category or global, and 3 user roles",
      "File-based routing with a custom framework (.nova) and auto-updates"
    ],
    images: [
      "/projects/cafe/dashboard.webp",
      "/projects/cafe/orden.webp",
      "/projects/cafe/nueva-orden.webp"
    ]
  }
];
