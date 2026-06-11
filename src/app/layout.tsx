import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/providers/Providers";
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gerar.dev"), // TODO: dominio real
  title: "Gerar Arévalo | Full-Stack Developer",
  description: "Portfolio of Gerar Arévalo - Full-Stack Developer specializing in ERP, SaaS, and High-Performance Web Applications.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gerar Arévalo | Full-Stack Developer",
    description: "SaaS, ERP y apps móviles/escritorio — 9 productos en producción para empresas reales.",
    type: "website",
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
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} flex flex-col min-h-screen`}>
        <Providers>
          <Navbar />
          <main style={{ flex: 1, paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
          <ThemeToggle />
        </Providers>
      </body>
    </html>
  );
}
