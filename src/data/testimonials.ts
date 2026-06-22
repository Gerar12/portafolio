export interface Testimonial {
  /** Quote in Spanish */
  quote: string;
  /** Quote in English (optional — falls back to Spanish) */
  quoteEn?: string;
  /** Person who said it */
  author: string;
  /** Role + company, e.g. "CTO, Salex Corp" */
  role: string;
  /** Optional avatar path under /public */
  avatar?: string;
}

/**
 * Testimonios reales de clientes / colegas.
 *
 * Para activar la sección en la home, agrega entradas aquí.
 * Mientras el array esté vacío, la sección NO se muestra (cero contenido falso).
 *
 * Ejemplo:
 * {
 *   quote: "Gerar entregó nuestro ERP a tiempo y migró 1.5M de registros sin un solo error.",
 *   quoteEn: "Gerar delivered our ERP on time and migrated 1.5M records flawlessly.",
 *   author: "Nombre Apellido",
 *   role: "CTO, Empresa",
 *   avatar: "/testimonials/persona.webp",
 * },
 */
export const testimonials: Testimonial[] = [];
