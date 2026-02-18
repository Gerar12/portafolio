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
    "hero.greeting": "> hello world",
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
    "hero.chip.saas": "SaaS",
    "hero.chip.erp": "ERP",
    "hero.chip.mobile": "Mobile",
    "hero.chip.games": "Games",
    "hero.chip.desktop": "Desktop",
    "hero.chip.ai": "IA",
    "hero.chip.saas.tip": "Atto — 10K+ docs fiscales",
    "hero.chip.erp.tip": "1.5M registros migrados",
    "hero.chip.mobile.tip": "Juegos publicados en stores",
    "hero.chip.games.tip": "Juegos móviles en producción",
    "hero.chip.desktop.tip": "Apps nativas de escritorio",
    "hero.chip.ai.tip": "Chatbots con IA en producción",
    "hero.code.filename": "gerar.config.ts",
    "hero.code.experience": "3 años",
    "hero.code.status": "disponible",

    // Featured Projects
    "featured.heading": "Proyectos Destacados",
    "featured.viewAll": "Ver Todos",
    "featured.view": "Ver",

    // Stats
    "stats.projects": "Proyectos en Producción",
    "stats.clients": "Clientes Empresariales",
    "stats.lots": "Lotes Gestionados",
    "stats.optimization": "Más Rápido (SQL)",

    // About
    "about.title": "Sobre Mí",
    "about.bio": "Hola, soy Gerar. Tengo 3 años de carrera y 9 productos en producción. Creé Atto (10K+ documentos fiscales procesados), .nova (mi propio framework de routing) y un ERP que migró 1.5 millones de registros sin perder uno solo.",
    "about.tagline": "Si tiene pantalla, puedo construirlo.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.available": "🟢 Available for new projects",
    "hero.greeting": "> hello world",
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
    "hero.chip.saas": "SaaS",
    "hero.chip.erp": "ERP",
    "hero.chip.mobile": "Mobile",
    "hero.chip.games": "Games",
    "hero.chip.desktop": "Desktop",
    "hero.chip.ai": "AI",
    "hero.chip.saas.tip": "Atto — 10K+ tax docs processed",
    "hero.chip.erp.tip": "1.5M records migrated",
    "hero.chip.mobile.tip": "Games published in stores",
    "hero.chip.games.tip": "Mobile games in production",
    "hero.chip.desktop.tip": "Native desktop apps",
    "hero.chip.ai.tip": "AI chatbots in production",
    "hero.code.filename": "gerar.config.ts",
    "hero.code.experience": "3 years",
    "hero.code.status": "available",

    // Featured Projects
    "featured.heading": "Featured Projects",
    "featured.viewAll": "View All",
    "featured.view": "View",

    // Stats
    "stats.projects": "Projects in Production",
    "stats.clients": "Enterprise Clients",
    "stats.lots": "Lots Managed",
    "stats.optimization": "Faster (SQL)",

    // About
    "about.title": "About Me",
    "about.bio": "Hi, I'm Gerar. I have 3 years of experience and 9 products in production. I created Atto (10K+ tax documents processed), .nova (my own routing framework) and an ERP that migrated 1.5 million records without losing a single one.",
    "about.tagline": "If it has a screen, I can build it.",
  },
};

export type TranslationKey = keyof typeof translations.es;
