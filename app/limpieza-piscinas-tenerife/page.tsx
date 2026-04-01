import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, Droplets, Shield, Star, Wrench } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Limpieza de Piscinas en Tenerife | Servicio Profesional",
  description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza de fondo, paredes, filtros y sistema completo. Presupuesto GRATIS. ¡Llama ya!",
  keywords: [
    "limpieza de piscinas en Tenerife",
    "limpieza piscinas Tenerife",
    "limpieza fondo piscina",
    "limpieza piscina precio",
    "servicio limpieza piscina",
    "empresa limpieza piscinas Tenerife",
    "mantenimiento piscinas Tenerife",
  ],
  alternates: {
    canonical: "https://www.drpools.es/limpieza-piscinas-tenerife",
  },
  openGraph: {
    title: "Limpieza de Piscinas en Tenerife | DR Pools",
    description: "Servicio profesional de limpieza de piscinas en Tenerife. Resultado impecable garantizado.",
    url: "https://www.drpools.es/limpieza-piscinas-tenerife",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Limpieza de Piscinas en Tenerife | DR Pools",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Limpieza de Piscinas en Tenerife",
  description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza completa de fondo, paredes, filtros y sistema de circulación.",
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
      name: "Limpieza de Piscinas en Tenerife",
      item: "https://www.drpools.es/limpieza-piscinas-tenerife",
    },
  ],
};

export default function LimpiezaPiscinasTenerife() {
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
              alt="Piscina cristalina con servicio de limpieza profesional en Tenerife"
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
                  Limpieza de Piscinas en{" "}
                  <span className="font-extrabold text-secondary">
                    Tenerife
                  </span>
                </h1>

                <div className="mb-8 md:mb-12">
                  <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 md:px-8 md:py-6 border border-brand-primary/10 shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-brand-dark leading-tight">
                      Servicio profesional de limpieza de piscinas.
                    </p>
                    <p className="text-brand-primary/80 text-sm mt-2 font-medium">
                      Recupera el brillo de tu piscina con nuestro servicio integral de limpieza.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-lg hover:scale-105 transition-transform"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
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

          {/* Servicios de limpieza */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nuestros servicios de <span className="gradient-text">limpieza de piscinas</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Limpieza profesional integral para que tu piscina brille como nueva
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Fondo</h3>
                  <p className="text-muted-foreground">
                    Limpieza profunda del fondo de la piscina eliminando algas, sedimentos y residuos acumulados.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Paredes</h3>
                  <p className="text-muted-foreground">
                    Cepillado y limpieza de paredes y esquinas para eliminar incrustaciones y manchas.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Wrench className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Filtros</h3>
                  <p className="text-muted-foreground">
                    Limpieza y mantenimiento del sistema de filtrado para un rendimiento óptimo.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Skimmers</h3>
                  <p className="text-muted-foreground">
                    Vaciado y limpieza de skimmers y cestas para mantener la circulación perfecta.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Star className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Línea de Agua</h3>
                  <p className="text-muted-foreground">
                    Limpieza especializada de la línea de agua para eliminar manchas y bacterias.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Puesta en Marcha</h3>
                  <p className="text-muted-foreground">
                    Limpieza completa para la puesta en marcha después del invierno o períodos sin uso.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Proceso */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nuestro proceso de <span className="gradient-text">limpieza profesional</span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Inspección Inicial",
                      desc: "Evaluamos el estado de la piscina y determinamos el tipo de limpieza necesaria.",
                    },
                    {
                      step: "2",
                      title: "Vaciado Parcial o Total",
                      desc: "Según el caso, realizamos el vaciado necesario para acceder a todas las superficies.",
                    },
                    {
                      step: "3",
                      title: "Limpieza Profunda",
                      desc: "Cepillado y limpieza de fondo, paredes, esquinas y línea de agua con productos especializados.",
                    },
                    {
                      step: "4",
                      title: "Limpieza de Sistema",
                      desc: "Limpiamos filtros, skimmers, bombas y todo el sistema de circulación.",
                    },
                    {
                      step: "5",
                      title: "Relleno y Balance",
                      desc: "Rellenamos la piscina y realizamos el balance químico completo del agua.",
                    },
                    {
                      step: "6",
                      title: "Verificación Final",
                      desc: "Comprobamos que todo esté perfecto y te entregamos un informe detallado.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-6 items-start bg-card p-6 rounded-2xl shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary-foreground font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cuándo necesitas limpieza */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Cuándo necesitas una <span className="gradient-text">limpieza profesional</span>?
                </h2>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  "El agua está verde o turbia",
                  "Fondos o paredes con algas",
                  "Manchas en la línea de agua",
                  "Piscina sin usar durante meses",
                  "Puesta en marcha después del invierno",
                  "Antes de vender o alquilar tu propiedad",
                  "Olor fuerte a cloro o químicos",
                  "Sistema de filtrado no funciona bien",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tu piscina necesita una limpieza profesional?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Solicita tu presupuesto gratuito sin compromiso. Llegamos a toda Tenerife.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/34624187418?text=Hola,%20me%20interesa%20el%20servicio%20de%20limpieza%20de%20piscinas%20en%20Tenerife"
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
