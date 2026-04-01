import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Droplets, Shield, Clock, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Tenerife | Servicio Profesional",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Mantenimiento semanal, limpieza, balance químico y reparaciones. +500 clientes satisfechos en toda la isla. ¡Llama ahora!",
  keywords: [
    "mantenimiento de piscinas en Tenerife",
    "mantenimiento piscinas Tenerife",
    "servicio mantenimiento piscina Tenerife",
    "limpieza piscinas Tenerife",
    "balance químico piscina",
    "mantenimiento piscina precio",
    "empresa piscinas Tenerife",
  ],
  alternates: {
    canonical: "https://www.drpools.es/servicios/mantenimiento-piscinas-tenerife",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas en Tenerife | DR Pools",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera tu tiempo libre. +500 clientes satisfechos.",
    url: "https://www.drpools.es/servicios/mantenimiento-piscinas-tenerife",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mantenimiento de Piscinas en Tenerife | DR Pools",
      },
    ],
  },
};

// Schema Markup para página de servicio
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mantenimiento de Piscinas en Tenerife",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Incluye limpieza, balance químico, revisión de equipos y mantenimiento preventivo.",
  provider: {
    "@type": "LocalBusiness",
    name: "DR Pools",
    telephone: "+34624187418",
    email: "info@drpools.es",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.2916,
      longitude: -16.6291,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de Mantenimiento",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento Semanal",
          description: "Visita semanal completa con limpieza, balance químico y revisión de equipos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento Premium",
          description: "Mantenimiento semanal + reparaciones incluidas + atención prioritaria",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.drpools.es",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: "https://www.drpools.es/servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mantenimiento de Piscinas en Tenerife",
      item: "https://www.drpools.es/servicios/mantenimiento-piscinas-tenerife",
    },
  ],
};

export default function MantenimientoPiscinasTenerife() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          {/* Hero Section con imagen de fondo */}
          <section className="relative min-h-[80vh] md:min-h-[70vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50" />
            <Image
              src="/hero-pool-maintenance-v2.png"
              alt="Piscina cristalina mantenida profesionalmente en Tenerife"
              fill
              priority
              className="object-cover object-bottom md:object-center"
              sizes="100vw"
            />

            {/* Light/Blue Filter Effect */}
            <div className="absolute inset-0 bg-cyan-50/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[80vh] md:min-h-[70vh] py-20">
              <div className="w-full max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6 md:mb-8 tracking-tight">
                  Mantenimiento de Piscinas en{" "}
                  <span className="font-extrabold text-secondary">
                    Tenerife
                  </span>
                </h1>

                <div className="mb-8 md:mb-12">
                  <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 md:px-8 md:py-6 border border-brand-primary/10 shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-brand-dark leading-tight">
                      Servicio profesional de mantenimiento de piscinas en Tenerife.
                    </p>
                    <p className="text-brand-primary/80 text-sm mt-2 font-medium">
                      Recupera 80 horas al año y disfruta de una piscina cristalina sin preocupaciones.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-lg hover:scale-105 transition-transform"
                  >
                    <Droplets className="w-5 h-5 mr-2" />
                    Pedir Presupuesto GRATIS
                  </Link>
                  <a
                    href="tel:+34624187418"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white/90 px-8 py-4 font-semibold text-secondary hover:bg-white transition-colors"
                  >
                    📞 Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Por qué elegirnos */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Por qué elegir DR Pools para el <span className="gradient-text">mantenimiento de tu piscina</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Más de 500 familias en Tenerife confían en nosotros para mantener sus piscinas en perfectas condiciones
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Visitas Puntuales</h3>
                  <p className="text-muted-foreground">
                    Llegamos el día acordado, a la hora pactada. Siempre el mismo técnico, que conoce tu piscina.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Agua Cristalina</h3>
                  <p className="text-muted-foreground">
                    Balance químico perfecto, agua siempre transparente y segura para bañarse. Garantizado.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Garantía Total</h3>
                  <p className="text-muted-foreground">
                    Satisfacción garantizada. Si no estás contento, te devolvemos tu dinero. Sin preguntas.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">+500 Clientes</h3>
                  <p className="text-muted-foreground">
                    Más de 500 familias satisfechas en toda Tenerife confían en nuestro servicio.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Productos Premium</h3>
                  <p className="text-muted-foreground">
                    Solo usamos productos certificados de calidad, seguros para niños y mascotas.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cobertura Total</h3>
                  <p className="text-muted-foreground">
                    Damos servicio en toda la isla de Tenerife. Desde Santa Cruz hasta Los Cristianos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Qué incluye */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Qué incluye nuestro servicio de <span className="gradient-text">mantenimiento de piscinas</span>?
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="space-y-6">
                    {[
                      "Limpieza completa de fondo y paredes",
                      "Vaciado y limpieza de skimmers y cestillos",
                      "Balance químico completo (pH, cloro, alcalinidad, dureza)",
                      "Limpieza de prefiltros y cestas del filtro",
                      "Revisión del sistema de circulación",
                      "Comprobación de presión del filtro",
                      "Limpieza de bordes y línea de agua",
                      "Informe post-visita con estado de la piscina",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Zonas que cubrimos */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zonas de servicio en <span className="gradient-text">Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ofrecemos servicio de mantenimiento de piscinas en toda la isla
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  "Santa Cruz de Tenerife",
                  "San Cristóbal de La Laguna",
                  "Adeje",
                  "Arona",
                  "Granadilla de Abona",
                  "Puerto de la Cruz",
                  "La Orotava",
                  "Los Realejos",
                  "Candelaria",
                  "Güímar",
                  "San Miguel de Abona",
                  "Arico",
                  "Fasnia",
                  "Arafo",
                ].map((zona) => (
                  <div
                    key={zona}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                    <span className="font-medium">Mantenimiento de piscinas en {zona}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Lista para disfrutar de una piscina perfecta?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Solicita tu presupuesto gratuito sin compromiso. Primera visita de balance químico GRATIS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34624187418?text=Hola,%20me%20interesa%20el%20servicio%20de%20mantenimiento%20de%20piscinas%20en%20Tenerife"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-8 py-4 font-semibold text-white shadow-lg hover:scale-105 hover:bg-[#128C7E] transition-all"
                >
                  💬 WhatsApp Directo
                </a>
                <a
                  href="tel:+34624187418"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  📞 624 187 418
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
