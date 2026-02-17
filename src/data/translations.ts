export type Language = "es" | "en";

export const translations = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.available": "🟢 Disponible para nuevos proyectos",
    "hero.role": "Full-Stack Developer",
    "hero.description": "Construyendo experiencias digitales de alto impacto. Especializado en",
    "hero.description.saas": "SaaS",
    "hero.description.erp": "ERP",
    "hero.description.mobile": "Mobile",
    "hero.description.games": "Videojuegos",
    "hero.description.connector": "y",
    "hero.projects": "Ver Proyectos",
    "hero.contact": "Contáctame",
    "hero.cv": "CV",

    // Featured Projects
    "featured.heading": "Proyectos Destacados",
    "featured.viewAll": "Ver Todos",
    "featured.view": "Ver",

    // Stats
    "stats.projects": "Proyectos en Prod.",
    "stats.dtes": "DTEs Facturados",
    "stats.records": "Registros Migrados",
    "stats.products": "Productos Propios",

    // About
    "about.title": "Sobre Mí",
    "about.bio1": "Hola, soy Gerar. Tengo 3 años de carrera y 9 productos en producción. Hago de todo: juegos móviles, ERPs, apps de escritorio nativas, SaaS, POS para restaurantes y chatbots con IA. Si tiene pantalla, probablemente puedo construirlo.",
    "about.bio2": "Creé mi propio motor de facturación electrónica (Atto) que ya procesó +10K documentos fiscales, un framework de routing propio (.nova) porque quise entender cómo funcionan por dentro, y un ERP que migró 1.5 millones de registros sin perder uno solo.",
    "about.bio3": "Mi código no vive en tutoriales — vive en empresas que lo usan todos los días para vender, facturar y operar.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.available": "🟢 Available for new projects",
    "hero.role": "Full-Stack Developer",
    "hero.description": "Building high-impact digital experiences. Specialized in",
    "hero.description.saas": "SaaS",
    "hero.description.erp": "ERP",
    "hero.description.mobile": "Mobile",
    "hero.description.games": "Video Games",
    "hero.description.connector": "and",
    "hero.projects": "View Projects",
    "hero.contact": "Contact Me",
    "hero.cv": "Resume",

    // Featured Projects
    "featured.heading": "Featured Projects",
    "featured.viewAll": "View All",
    "featured.view": "View",

    // Stats
    "stats.projects": "Projects in Prod.",
    "stats.dtes": "DTEs Invoiced",
    "stats.records": "Records Migrated",
    "stats.products": "Own Products",

    // About
    "about.title": "About Me",
    "about.bio1": "Hi, I'm Gerar. I have 3 years of career experience and 9 products in production. I do everything: mobile games, ERPs, native desktop apps, SaaS, POS for restaurants, and AI chatbots. If it has a screen, I can probably build it.",
    "about.bio2": "I created my own electronic invoicing engine (Atto) that has already processed +10K tax documents, a custom routing framework (.nova) because I wanted to understand how they work under the hood, and an ERP that migrated 1.5 million records without losing a single one.",
    "about.bio3": "My code doesn't live in tutorials — it lives in companies that use it every day to sell, invoice, and operate.",
  },
};

export type TranslationKey = keyof typeof translations.es;
