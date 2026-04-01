import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Droplets, Sparkles, Phone } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios de Piscinas en Tenerife | DR Pools",
  description: "Descubre todos los servicios de piscinas de DR Pools en Tenerife. Mantenimiento profesional, limpieza integral y más. +500 familias satisfechas. ¡Llama ya!",
  keywords: [
    "servicios de piscinas en Tenerife",
    "mantenimiento de piscinas en Tenerife",
    "limpieza de piscinas en Tenerife",
    "servicio piscinas Tenerife",
    "empresa piscinas Tenerife",
  ],
  alternates: {
    canonical: "https://www.drpools.es/servicios",
  },
  openGraph: {
    title: "Servicios de Piscinas en Tenerife | DR Pools",
    description: "Mantenimiento, limpieza y más. Todos los servicios profesionales de piscinas en Tenerife. +500 familias satisfechas.",
    url: "https://www.drpools.es/servicios",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de Piscinas en Tenerife | DR Pools",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios de Piscinas en Tenerife",
  description: "Servicios profesionales de mantenimiento y limpieza de piscinas en Tenerife. Más de 500 familias satisfechas en toda la isla.",
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
    name: "Servicios de Piscinas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento de Piscinas",
          url: "https://www.drpools.es/servicios/mantenimiento-piscinas-tenerife",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpieza de Piscinas",
          url: "https://www.drpools.es/servicios/limpieza-piscinas-tenerife",
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
  ],
};

const services = [
  {
    badge: "Servicio recurrente · Limpieza · Balance químico",
    title: "Mantenimiento de Piscinas en Tenerife",
    description:
      "Servicio profesional de mantenimiento periódico de piscinas en Tenerife. Incluye limpieza, análisis del agua, ajuste químico y revisión de equipos. Más de 500 familias ya confían en nosotros.",
    bullets: [
      "Limpieza de fondo y paredes",
      "Análisis del agua in situ",
      "Balance químico completo",
      "Revisión de equipos de depuración",
      "Informe digital tras cada visita",
      "Primera revisión GRATIS",
    ],
    cta: "Ver servicio completo",
    href: "/servicios/mantenimiento-piscinas-tenerife",
    icon: Droplets,
    popular: true,
  },
  {
    badge: "Limpieza profunda · Fondo · Paredes · Filtros",
    title: "Limpieza de Piscinas en Tenerife",
    description:
      "Servicio profesional de limpieza integral de piscinas. Devolvemos el brillo cristalino a tu piscina con limpieza de fondo, paredes, filtros y sistema completo. Resultado garantizado.",
    bullets: [
      "Limpieza de fondo y paredes",
      "Limpieza de filtros y skimmers",
      "Limpieza de línea de agua",
      "Puesta en marcha post-invierno",
      "Productos profesionales certificados",
      "Resultado garantizado",
    ],
    cta: "Ver servicio completo",
    href: "/servicios/limpieza-piscinas-tenerife",
    icon: Sparkles,
    popular: false,
  },
];

export default function ServiciosPage() {
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
          {/* Hero Section */}
          <section className="relative min-h-[80vh] md:min-h-[70vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50" />
            <Image
              src="/hero-pool-maintenance-v2.png"
              alt="Servicios profesionales de piscinas en Tenerife"
              fill
              priority
              className="object-cover object-bottom md:object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-cyan-50/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

            <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/20 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl mix-blend-multiply" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[80vh] md:min-h-[70vh] py-20">
              <div className="w-full max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 leading-[1.1] mb-6 md:mb-8 tracking-tight">
                  Servicios de Piscinas en{" "}
                  <span className="font-extrabold text-secondary">Tenerife</span>
                </h1>

                <div className="mb-8 md:mb-12">
                  <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 md:px-8 md:py-6 border border-brand-primary/10 shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-brand-dark leading-tight">
                      Empresa especializada en piscinas privadas y de comunidades en toda la isla de Tenerife.
                    </p>
                    <p className="text-brand-primary/80 text-sm mt-2 font-medium">
                      Más de 500 familias ya disfrutan de su piscina sin preocupaciones.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+34624187418"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-lg hover:scale-105 transition-transform"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Revisión Gratuita
                  </a>
                  <a
                    href="https://wa.me/34624187418?text=Hola,%20me%20interesa%20información%20sobre%20los%20servicios%20de%20piscinas%20en%20Tenerife"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-white bg-white/90 px-8 py-4 font-semibold text-secondary hover:bg-white transition-colors"
                  >
                    WhatsApp Directo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Cards */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Todos nuestros servicios de{" "}
                  <span className="gradient-text">piscinas en Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Elige el servicio que mejor se adapta a las necesidades de tu piscina
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={service.href}
                      className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50 relative"
                    >
                      {service.popular && (
                        <span className="absolute -top-3 left-6 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          Más solicitado
                        </span>
                      )}

                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-secondary" />
                        </div>

                        <div className="flex-1">
                          <span className="text-xs font-medium text-muted-foreground">
                            {service.badge}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {service.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                          >
                            {service.cta}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿No sabes qué servicio necesitas?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Cuéntanos el estado de tu piscina y te recomendamos la solución más adecuada sin compromiso. Te asesoramos gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34624187418?text=Hola,%20necesito%20asesoramiento%20sobre%20mi%20piscina%20en%20Tenerife"
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
