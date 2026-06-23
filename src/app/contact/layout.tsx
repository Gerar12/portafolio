import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Gerar Arévalo, Full-Stack Developer. Disponible para colaboraciones, consultoría y oportunidades full-time remotas. Email, GitHub y LinkedIn.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacto | Gerar Arévalo",
    description:
      "Disponible para colaboraciones, consultoría y oportunidades full-time. Hablemos.",
    type: "website",
    url: "https://gcoder.dev/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
