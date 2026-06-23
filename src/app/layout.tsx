import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import ChatWidget from "@/components/ui/ChatWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gcoder.dev"),
  title: {
    default: "Gerar Arévalo | Full-Stack Developer",
    template: "%s | Gerar Arévalo",
  },
  description:
    "Gerar Arévalo, Full-Stack Developer (Next.js, React, NestJS, React Native, Tauri/Rust). 9 productos SaaS, ERP y apps móviles en producción para empresas reales. Disponible para oportunidades remotas y full-time.",
  applicationName: "Gerar Arévalo — Portfolio",
  authors: [{ name: "Gerar Arévalo", url: "https://gcoder.dev" }],
  creator: "Gerar Arévalo",
  publisher: "Gerar Arévalo",
  category: "technology",
  keywords: [
    "Gerar Arévalo",
    "Gerardo Arévalo",
    "Full-Stack Developer",
    "Desarrollador Full-Stack",
    "Software Engineer",
    "Next.js developer",
    "React developer",
    "NestJS",
    "React Native",
    "Tauri",
    "Rust",
    "TypeScript",
    "SaaS developer",
    "ERP developer",
    "Desarrollador El Salvador",
    "Remote developer",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Gerar Arévalo | Full-Stack Developer",
    description: "SaaS, ERP y apps móviles/escritorio — 9 productos en producción para empresas reales.",
    type: "website",
    url: "https://gcoder.dev",
    siteName: "Gerar Arévalo — Portfolio",
    locale: "es_SV",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerar Arévalo | Full-Stack Developer",
    description: "SaaS, ERP y apps móviles/escritorio — 9 productos en producción para empresas reales.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://gcoder.dev/#person",
    name: "Gerar Arévalo",
    alternateName: "Gerardo Arévalo",
    url: "https://gcoder.dev",
    image: "https://gcoder.dev/yo.webp",
    jobTitle: "Full-Stack Developer",
    email: "mailto:me@gcoder.dev",
    description:
      "Full-Stack Developer especializado en SaaS, ERP, apps móviles y de escritorio. 9 productos en producción para empresas reales.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SV",
    },
    nationality: {
      "@type": "Country",
      name: "El Salvador",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "El Salvador",
      },
      skills:
        "Next.js, React, TypeScript, NestJS, Node.js, React Native, Tauri, Rust, PostgreSQL, Prisma",
    },
    knowsAbout: [
      "Next.js", "React", "TypeScript", "NestJS", "Node.js",
      "React Native", "Tauri", "Rust", "PostgreSQL", "Prisma",
    ],
    sameAs: [
      "https://github.com/Gerar12",
      "https://www.linkedin.com/in/gerar-arevalo-b5758a177/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gcoder.dev/#website",
    url: "https://gcoder.dev",
    name: "Gerar Arévalo — Portfolio",
    inLanguage: "es",
    author: { "@id": "https://gcoder.dev/#person" },
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Providers>
          <Navbar />
          <main style={{ flex: 1, paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
