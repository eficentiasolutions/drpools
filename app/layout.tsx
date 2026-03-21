import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

// Defer CookieBanner loading to improve LCP
const CookieBanner = dynamic(() => import("@/components/CookieBanner"));

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drpools.es"),
  title: {
    default: "DR Pools | Mantenimiento Profesional de Piscinas",
    template: "%s | DR Pools",
  },
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera tu tiempo libre con DR Pools. Primera inspección de balance químico GRATIS. +500 familias satisfechas.",
  keywords: [
    "mantenimiento piscinas",
    "limpieza piscinas",
    "balance químico piscina",
    "servicio piscinas Tenerife",
    "mantenimiento piscinas",
  ],
  authors: [{ name: "DR Pools" }],
  creator: "DR Pools",
  publisher: "DR Pools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://drpools.es",
    title: "DR Pools | Mantenimiento Profesional de Piscinas",
    description: "¿Tu piscina es un placer o una carga? Recupera 80h/año con nuestro servicio profesional. Inspección GRATIS.",
    siteName: "DR Pools",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DR Pools - Mantenimiento Profesional de Piscinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR Pools | Mantenimiento de Piscinas",
    description: "Servicio profesional de mantenimiento de piscinas. Primera inspección GRATIS.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: ["/favicon.svg", "/favicon.png"],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster />
        <SonnerToaster />
        <CookieBanner />
      </body>
    </html>
  );
}
