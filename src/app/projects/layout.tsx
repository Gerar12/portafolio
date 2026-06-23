import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Aplicaciones en producción de Gerar Arévalo: plataformas SaaS, sistemas ERP, POS y apps móviles/escritorio construidas para empresas reales con Next.js, NestJS, React Native y Tauri.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Proyectos | Gerar Arévalo",
    description:
      "9 productos en producción: SaaS, ERP, POS y apps móviles/escritorio para empresas reales.",
    type: "website",
    url: "https://gcoder.dev/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
