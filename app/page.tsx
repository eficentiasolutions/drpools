import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgitationBanner from "@/components/landing/AgitationBanner";
import SolutionSection from "@/components/landing/SolutionSection";
import Footer from "@/components/landing/Footer";

// Dynamic imports for heavy components to improve initial page load
// DataVizSection uses chart.js which is a large library
const DataVizSection = dynamic(
  () => import("@/components/landing/DataVizSection"),
  {
    loading: () => (
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse inline-block h-8 w-48 bg-muted-foreground/20 rounded mb-4"></div>
            <div className="animate-pulse inline-block h-12 w-64 bg-muted-foreground/10 rounded"></div>
          </div>
        </div>
      </section>
    )
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/landing/TestimonialsSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-64 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const PricingSection = dynamic(
  () => import("@/components/landing/PricingSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-96 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const FAQSection = dynamic(
  () => import("@/components/landing/FAQSection"),
  {
    loading: () => (
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-64 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

const ContactSection = dynamic(
  () => import("@/components/landing/ContactSection"),
  {
    loading: () => (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse h-96 bg-muted/50 rounded-2xl"></div>
        </div>
      </section>
    )
  }
);

export const metadata: Metadata = {
  title: "DR Pools | Mantenimiento Profesional de Piscinas en Tenerife",
  description: "Mantenimiento, limpieza y reparación de piscinas en el norte de Tenerife. Recupera 80h/año de tiempo libre. Primera inspección de balance químico GRATIS. +500 familias satisfechas.",
  keywords: [
    "mantenimiento de piscinas en Tenerife",
    "mantenimiento piscinas Tenerife",
    "limpieza piscinas Tenerife",
    "servicio piscina Tenerife",
    "balance químico piscina",
    "mantenimiento piscina precio",
  ],
  alternates: {
    canonical: "https://www.drpools.es",
  },
  openGraph: {
    title: "DR Pools | Mantenimiento de Piscinas en Tenerife",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera 80h/año. Primera inspección GRATIS.",
    url: "https://www.drpools.es",
  },
};

// Schema Markup JSON-LD para LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DR Pools",
  image: "https://www.drpools.es/og-image.jpg",
  "@id": "https://www.drpools.es",
  url: "https://www.drpools.es",
  telephone: "+34624187418",
  email: "info@drpools.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puerto de la Cruz",
    addressRegion: "Tenerife",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.416,
    longitude: -16.5425,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "16:00",
      closes: "19:00",
    },
  ],
  priceRange: "€€",
  // Municipios específicos del norte de Tenerife donde opera DR Pools
  areaServed: [
    { "@type": "City", name: "Puerto de la Cruz" },
    { "@type": "City", name: "La Orotava" },
    { "@type": "City", name: "Los Realejos" },
    { "@type": "City", name: "San Cristóbal de La Laguna" },
    { "@type": "City", name: "Tacoronte" },
    { "@type": "City", name: "El Sauzal" },
    { "@type": "City", name: "Santa Úrsula" },
    { "@type": "City", name: "La Victoria de Acentejo" },
    { "@type": "City", name: "La Matanza de Acentejo" },
    { "@type": "City", name: "San Juan de la Rambla" },
    { "@type": "City", name: "Icod de los Vinos" },
    { "@type": "City", name: "La Esperanza" },
  ],
  sameAs: [
    "https://www.facebook.com/share/1CMksZtzTW/",
    "https://www.instagram.com/drpools.es",
    "https://www.tiktok.com/@drpoolss",
    "https://www.google.com/maps/search/?api=1&query=DRpools&query_place_id=ChIJ5y8Xg1PIRGMRXtzZcEEx0mA",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          <HeroSection />
          <PainSection />
          <AgitationBanner />
          <section id="servicios">
            <SolutionSection />
          </section>
          <section id="resultados">
            <DataVizSection />
          </section>
          <TestimonialsSection />
          <PricingSection />
          <section id="faq">
            <FAQSection />
          </section>
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
