import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgitationBanner from "@/components/landing/AgitationBanner";
import SolutionSection from "@/components/landing/SolutionSection";
import DataVizSection from "@/components/landing/DataVizSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas Tenerife | Inspección GRATIS",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera 80h/año de tiempo libre. Primera inspección de balance químico GRATIS. +500 familias satisfechas.",
  keywords: [
    "mantenimiento piscinas Tenerife",
    "limpieza piscinas Tenerife",
    "servicio piscina",
    "balance químico piscina",
    "mantenimiento piscina precio",
  ],
  alternates: {
    canonical: "https://drpools.es",
  },
  openGraph: {
    title: "DR Pools | Mantenimiento de Piscinas Tenerife",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera 80h/año. Primera inspección GRATIS.",
    url: "https://drpools.es",
  },
};

// Schema Markup JSON-LD para LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DR Pools",
  image: "https://drpools.es/og-image.jpg",
  "@id": "https://drpools.es",
  url: "https://drpools.es",
  telephone: "+34624187418",
  email: "info@drpools.es",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tenerife",
    addressCountry: "ES",
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
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.2916,
      longitude: -16.6291,
    },
    geoRadius: "50000",
  },
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
