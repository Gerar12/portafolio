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
    shortDescription: "Videojuego móvil educativo (lotería salvadoreña) con partidas multijugador en tiempo real, varios minijuegos y tienda de cosméticos.",
    shortDescriptionEn: "Educational mobile game (Salvadoran lottery) with real-time multiplayer matches, several mini-games and a cosmetics shop.",
    description: "Videojuego móvil (React Native + Expo) que reinventa la lotería tradicional salvadoreña como herramienta educativa para World Vision El Salvador. Ofrece partidas multijugador en tiempo real con Socket.IO y sistema de salas, cuatro modos de juego (Lotería, Sudoku, Desafío de Matemáticas y Sopa de Letras), progresión por capítulos, sistema de créditos y recompensas, y una tienda de cosméticos con tableros y skins personalizables. Backend en Express + PostgreSQL/Prisma con autenticación JWT y Google OAuth, narración y efectos de audio, y animaciones fluidas con Reanimated.",
    descriptionEn: "Mobile game (React Native + Expo) that reinvents the traditional Salvadoran lottery as an educational tool for World Vision El Salvador. It offers real-time multiplayer matches over Socket.IO with a lobby system, four game modes (Lottery, Sudoku, Math Challenge and Word Search), chapter-based progression, a credits and rewards system, and a cosmetics shop with customizable boards and skins. Express + PostgreSQL/Prisma backend with JWT and Google OAuth auth, voice narration and audio, and smooth animations with Reanimated.",
    status: "production",
    stack: ["React Native", "Expo", "Node.js", "Express", "Socket.IO", "PostgreSQL", "Prisma"],
    features: [
      "Multijugador en tiempo real con Socket.IO y salas de juego",
      "4 modos: Lotería, Sudoku, Matemáticas y Sopa de Letras",
      "Progresión por capítulos, créditos y tienda de skins/tableros",
      "Auth JWT + Google OAuth, narración y audio con expo-av"
    ],
    metrics: [
      { label: "Modos de juego", value: "4" },
      { label: "Plataforma", value: "Android" },
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
    shortDescription: "Evolución del ecosistema Tuchan: reescritura de la app móvil, portal web administrativo y migración del backend a NestJS/SQL Server.",
    shortDescriptionEn: "Evolution of the Tuchan ecosystem: mobile app rewrite, admin web portal and backend migration to NestJS/SQL Server.",
    description: "Actualización y ampliación del ecosistema digital Tuchan para World Vision El Salvador. Comprendió la reescritura de la app móvil (React Native/Expo), el desarrollo de un portal web administrativo (Next.js) para gestionar contenido y usuarios, y la migración completa del backend a NestJS con SQL Server y TypeORM. Toda la plataforma quedó integrada mediante APIs REST y autenticación JWT, dando continuidad y escalabilidad al proyecto original.",
    descriptionEn: "Update and expansion of World Vision El Salvador's Tuchan digital ecosystem. It involved rewriting the mobile app (React Native/Expo), building an admin web portal (Next.js) to manage content and users, and a full backend migration to NestJS with SQL Server and TypeORM. The whole platform was integrated through REST APIs and JWT authentication, giving continuity and scalability to the original project.",
    status: "production",
    stack: ["React Native", "Expo", "Next.js 14", "NestJS", "SQL Server", "TypeORM"],
    features: [
      "Reescritura de la app móvil (React Native/Expo)",
      "Portal web administrativo (Next.js)",
      "Migración del backend a NestJS + SQL Server (TypeORM)",
      "Integración vía APIs REST y autenticación JWT"
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
    shortDescription: "SaaS inmobiliario multi-tenant para gestión de lotificaciones: mapas Mapbox con lotes por estado, transacciones con comisiones y notificaciones en tiempo real.",
    shortDescriptionEn: "Multi-tenant real estate SaaS for lot subdivisions: Mapbox maps with status-coded lots, transactions with commissions and real-time notifications.",
    description: "Plataforma SaaS inmobiliaria multi-tenant para gestionar lotificaciones de principio a fin, donde cada organización opera de forma aislada con su propio equipo, clientes y configuración. Incluye mapas interactivos con Mapbox que muestran cada lote codificado por color según su estado (disponible, vendido, reservado, bloqueado) y la gestión completa de transacciones de compra-venta con cálculo automático de comisiones, anticipos y planes de pago. El backend (NestJS 11 + Prisma/PostgreSQL) reúne 23 módulos: autenticación JWT con códigos de recuperación, organizaciones y equipos, metas de ventas, calendario de eventos, tickets de soporte, reportes exportables a Excel y notificaciones en tiempo real vía Socket.IO. Frontend en Next.js 15 con TanStack Query y carga de archivos en Cloudinary.",
    descriptionEn: "Multi-tenant real estate SaaS to manage lot subdivisions end-to-end, where each organization operates in isolation with its own team, clients and configuration. It includes interactive Mapbox maps that show every lot color-coded by status (available, sold, reserved, blocked) and full buy-sell transaction management with automatic commission, down-payment and payment-plan calculation. The backend (NestJS 11 + Prisma/PostgreSQL) bundles 23 modules: JWT auth with recovery codes, organizations and teams, sales goals, event calendar, support tickets, Excel-exportable reports and real-time notifications over Socket.IO. Next.js 15 frontend with TanStack Query and Cloudinary file uploads.",
    status: "production",
    stack: ["Next.js 15", "NestJS", "PostgreSQL", "Prisma", "Mapbox", "WebSockets", "Cloudinary"],
    features: [
      "Mapas interactivos Mapbox con lotes codificados por color según estado",
      "Arquitectura multi-tenant con aislamiento completo por organización",
      "Transacciones de compra-venta con comisiones, anticipos y planes de pago",
      "Notificaciones en tiempo real vía Socket.IO",
      "23 módulos: metas de ventas, calendario, tickets de soporte y más",
      "Auth JWT con códigos de recuperación y control de roles",
      "Reportes exportables a Excel y carga de archivos en Cloudinary"
    ],
    featuresEn: [
      "Interactive Mapbox maps with lots color-coded by status",
      "Multi-tenant architecture with full organization isolation",
      "Buy-sell transactions with commissions, down payments and payment plans",
      "Real-time notifications via Socket.IO",
      "23 modules: sales goals, calendar, support tickets and more",
      "JWT auth with recovery codes and role-based access",
      "Excel-exportable reports and Cloudinary file uploads"
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
    shortDescription: "Ecosistema inmobiliario: sitio público, dashboard admin y backend multi-tenant con chatbot de WhatsApp y asistente con IA.",
    shortDescriptionEn: "Real estate ecosystem: public site, admin dashboard and multi-tenant backend with a WhatsApp chatbot and AI assistant.",
    description: "Ecosistema digital inmobiliario completo (salex.sv) con tres aplicaciones: un sitio web público (Next.js 15, Tailwind, Framer Motion) para explorar propiedades y lotificaciones, un dashboard administrativo para gestionar agentes, propiedades y campañas, y un backend multi-tenant (NestJS 11) que integra la API de WhatsApp Business para un chatbot de atención automatizada y un asistente con IA (OpenAI GPT-4o-mini con function calling) para búsqueda inteligente, análisis y recomendaciones de propiedades. Incluye mapas interactivos de lotes con MapLibre GL, integración multi-tenant con UrbaNext, autenticación JWT con roles, campañas de email con seguimiento (aperturas, clics) y optimización de imágenes con Cloudinary.",
    descriptionEn: "Complete real estate digital ecosystem (salex.sv) with three apps: a public website (Next.js 15, Tailwind, Framer Motion) to explore properties and subdivisions, an admin dashboard to manage agents, properties and campaigns, and a multi-tenant backend (NestJS 11) integrating the WhatsApp Business API for an automated support chatbot and an AI assistant (OpenAI GPT-4o-mini with function calling) for smart search, analysis and property recommendations. It features interactive lot maps with MapLibre GL, multi-tenant integration with UrbaNext, JWT auth with roles, email campaigns with tracking (opens, clicks) and Cloudinary image optimization.",
    status: "production",
    externalUrl: "https://salex.sv",
    stack: ["Next.js 15", "NestJS 11", "PostgreSQL", "Prisma", "Meta WhatsApp API", "OpenAI GPT-4o-mini", "MapLibre GL", "Cloudinary", "Framer Motion"],
    features: [
      "Chatbot de WhatsApp Business para atención automatizada",
      "Asistente con IA (GPT-4o-mini + function calling): búsqueda y recomendaciones",
      "Backend multi-tenant integrado con UrbaNext (mapas de lotes)",
      "Mapas interactivos de propiedades y lotificaciones (MapLibre GL)",
      "Campañas de email con seguimiento de aperturas y clics",
      "Auth JWT con 5 roles (Admin, Ventas, Construcción, etc.)"
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
    shortDescription: "Motor SaaS de facturación electrónica (DTE) para El Salvador: 11 tipos de documento, firma digital y envío directo a Hacienda.",
    shortDescriptionEn: "SaaS engine for El Salvador's electronic invoicing (DTE): 11 document types, digital signing and direct submission to the tax authority.",
    description: "API REST modular (NestJS) que automatiza por completo la emisión, firma y envío de Documentos Tributarios Electrónicos (DTE) al Ministerio de Hacienda de El Salvador. Soporta los 11 tipos de DTE y firma cada documento con certificados X.509 en formato JWS (RS512) mediante node-jose, almacenándolos de forma segura en Cloudflare R2. Incluye autenticación híbrida (JWT, API keys sk_test/sk_live y cookies HttpOnly), gestión automática de correlativos, generación de PDF con Puppeteer, envío por email, cálculos precisos con Decimal.js y rate limiting por plan (FREE/PRO/MAX). Es el motor de facturación que usan otros de mis productos (Gestión, Proyecto Café, Salex).",
    descriptionEn: "Modular REST API (NestJS) that fully automates the issuance, signing and submission of Electronic Tax Documents (DTE) to El Salvador's Ministry of Finance. It supports all 11 DTE types and signs each document with X.509 certificates in JWS format (RS512) via node-jose, storing them securely in Cloudflare R2. It includes hybrid authentication (JWT, sk_test/sk_live API keys and HttpOnly cookies), automatic correlative management, PDF generation with Puppeteer, email delivery, precise calculations with Decimal.js and per-plan rate limiting (FREE/PRO/MAX). It is the invoicing engine powering other products of mine (Gestión, Proyecto Café, Salex).",
    status: "production",
    stack: ["NestJS 11", "Next.js 15", "PostgreSQL", "Prisma", "JWS / X.509", "Cloudflare R2", "Puppeteer"],
    features: [
      "Los 11 tipos de DTE de El Salvador",
      "Firma digital X.509 en JWS (RS512) con node-jose",
      "Integración directa con la API del Ministerio de Hacienda",
      "Auth híbrida: JWT, API keys (sk_test/sk_live) y cookies",
      "PDF con Puppeteer, email automático y cálculos con Decimal.js",
      "Motor de facturación consumido por Gestión, Café y Salex"
    ],
    metrics: [
      { label: "DTEs procesados", value: "+18,000" },
      { label: "Tipos de DTE", value: "11" },
      { label: "Integraciones (empresas)", value: "26" }
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
    shortDescription: "Micrositio institucional fullstack con gestión de contenido multimedia, panel admin multipaís y control de acceso por país.",
    shortDescriptionEn: "Institutional fullstack microsite with multimedia content management, multi-country admin panel and per-country access control.",
    description: "Plataforma fullstack (Next.js 15) que funciona como micrositio institucional y portal administrativo para World Vision El Salvador. Gestiona varios tipos de contenido (noticias, podcasts, audiolibros, webinarios y tarjetas inspiracionales) con reproductor de video Plyr embebido y carruseles animados con Embla. El panel admin (NextAuth v5) ofrece administración de usuarios por país, control de acceso a contenido granular y ordenamiento de frases patrocinantes mediante drag & drop con @dnd-kit. Soporta varios países de Centroamérica y roles diferenciados (USER, MINI_ADMIN, ADMIN), sobre PostgreSQL con Prisma.",
    descriptionEn: "Fullstack platform (Next.js 15) serving as both institutional microsite and admin portal for World Vision El Salvador. It manages several content types (news, podcasts, audiobooks, webinars and inspirational cards) with an embedded Plyr video player and animated Embla carousels. The admin panel (NextAuth v5) provides per-country user management, granular content access control and drag & drop ordering of sponsor phrases with @dnd-kit. It supports multiple Central American countries and differentiated roles (USER, MINI_ADMIN, ADMIN), on PostgreSQL with Prisma.",
    status: "production",
    stack: ["Next.js 15", "React 19", "NextAuth v5", "Prisma 6", "PostgreSQL", "Cloudinary", "Plyr", "@dnd-kit"],
    features: [
      "Varios tipos de contenido (noticias, podcasts, audiolibros, webinarios)",
      "Reproductor de video Plyr y carruseles animados (Embla)",
      "Panel admin multipaís con control de acceso por país",
      "Ordenamiento drag & drop de frases patrocinantes (@dnd-kit)",
      "Roles diferenciados (USER, MINI_ADMIN, ADMIN) con NextAuth v5"
    ],
    metrics: [
      { label: "Cliente", value: "World Vision" },
      { label: "Cobertura", value: "Multipaís" },
      { label: "Roles", value: "3" }
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
    description: "ERP empresarial completo para importadora con múltiples sucursales (bodegas y tiendas), compuesto por 4 aplicaciones: portal web administrativo (Next.js 15, ~30 páginas), backend (NestJS 11, 22 módulos), app de escritorio nativa para punto de venta (Tauri 2/Rust) con framework propio de routing (.nova), y sitio corporativo. Gestiona inventario con distribución FIFO, ciclo de vida de contenedores de importación con detección de discrepancias, reservas de stock entre sucursales, productos dañados con generación automática de CCF, facturación electrónica DTE (7 tipos de documento) vía Atto con conciliación automática ante timeouts de Hacienda, cotizaciones con expiración automática, cierres de caja diarios/mensuales/anuales con envío por email, reportes contables en Excel multi-hoja, dashboards en tiempo real para 8 roles con permisos por sucursal, auditoría con geolocalización e impresión térmica nativa (TCP/IP y USB) desde Rust. Se migró +1.5M de registros de producción. Optimizado con caché multinivel y consultas SQL raw que redujeron tiempos de 71s a 0.25s.",
    descriptionEn: "Complete enterprise ERP for an importer with multiple branches (warehouses and stores), made up of 4 applications: an admin web portal (Next.js 15, ~30 pages), a backend (NestJS 11, 22 modules), a native desktop point-of-sale app (Tauri 2/Rust) with a custom routing framework (.nova), and a corporate website. It manages inventory with FIFO distribution, import-container lifecycle with discrepancy detection, cross-branch stock reservations, damaged products with automatic CCF generation, DTE electronic invoicing (7 document types) via Atto with automatic reconciliation on tax-authority timeouts, quotes with automatic expiration, daily/monthly/yearly cash closures with email delivery, multi-sheet Excel accounting reports, real-time dashboards for 8 roles with per-branch permissions, audit logging with geolocation, and native thermal printing (TCP/IP and USB) from Rust. 1.5M+ production records were migrated. Optimized with multi-level caching and raw SQL queries that reduced response times from 71s to 0.25s.",
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
