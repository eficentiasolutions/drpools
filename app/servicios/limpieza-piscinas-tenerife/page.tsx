import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, Droplets, Shield, Star, Wrench, HelpCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Limpieza de Piscinas en Tenerife | Servicio Profesional",
  description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza de fondo, paredes, filtros y sistema completo. Resultado garantizado. Presupuesto GRATIS. Llama al 624 187 418.",
  keywords: [
    "limpieza de piscinas en Tenerife",
    "limpieza piscinas Tenerife",
    "limpieza fondo piscina",
    "limpieza piscina precio Tenerife",
    "servicio limpieza piscina profesional",
    "empresa limpieza piscinas Tenerife",
    "limpieza piscina verde Tenerife",
    "puesta en marcha piscina Tenerife",
  ],
  alternates: {
    canonical: "https://www.drpools.es/servicios/limpieza-piscinas-tenerife",
  },
  openGraph: {
    title: "Limpieza de Piscinas en Tenerife | DR Pools — Resultado Garantizado",
    description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza integral de fondo, paredes, filtros. Presupuesto GRATIS.",
    url: "https://www.drpools.es/servicios/limpieza-piscinas-tenerife",
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
  description: "Servicio profesional de limpieza de piscinas en Tenerife. Limpieza completa de fondo, paredes, filtros y sistema de circulación. Resultado garantizado.",
  provider: {
    "@type": "LocalBusiness",
    name: "DR Pools",
    telephone: "+34624187418",
    email: "info@drpools.es",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 28.416,
      longitude: -16.5425,
    },
    geoRadius: "20000",
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
      name: "Limpieza de Piscinas en Tenerife",
      item: "https://www.drpools.es/servicios/limpieza-piscinas-tenerife",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta limpiar una piscina en Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de la limpieza de una piscina en Tenerife depende del tamaño, el estado actual del agua y las superficies a tratar. Una limpieza puntual estándar tiene un precio accesible, mientras que una recuperación de agua verde o una limpieza profunda tras meses sin uso requiere un tratamiento más intensivo. En DR Pools ofrecemos presupuesto gratuito y sin compromiso. Venimos a evaluar tu piscina y te damos un precio cerrado antes de empezar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda una limpieza profesional de piscina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una limpieza estándar de mantenimiento rutinario suele tardar entre 45 minutos y 1 hora. Una limpieza profunda (fondo, paredes, filtros, línea de agua) puede tardar entre 2 y 3 horas. Si la piscina está verde o necesita tratamiento de choque, el proceso completo incluyendo la recuperación del agua puede requerir entre 24 y 48 horas para ver el resultado final, aunque la mayor parte del trabajo se realiza en la primera visita.",
      },
    },
    {
      "@type": "Question",
      name: "¿Podéis recuperar una piscina que se ha puesto verde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, es uno de nuestros servicios más solicitados. Aplicamos un tratamiento de choque profesional que incluye floculantes, alguicidas y un ajuste completo del balance químico. En la mayoría de los casos, el agua recupera su transparencia en 24-48 horas. El resultado está garantizado. Si además contratas nuestro servicio de mantenimiento, la recuperación está incluida en tu plan sin coste adicional.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo es necesario hacer una limpieza profunda de la piscina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos una limpieza profunda al menos una vez al año, idealmente en primavera antes de la temporada de uso intensivo. También es necesaria después de meses sin usarla, si el agua se ha puesto verde o turbia, si hay manchas persistentes en las paredes o línea de agua, si observas mal olor, o si vas a vender o alquilar tu propiedad y quieres presentar la piscina en perfectas condiciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre limpieza y mantenimiento de piscinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La limpieza es un servicio puntual enfocado en devolver la piscina a un estado óptimo: limpieza profunda de fondo, paredes, filtros, línea de agua y balance químico. El mantenimiento es un servicio periódico (semanal o quincenal) que mantiene la piscina en esas condiciones a lo largo del tiempo, incluyendo revisiones de equipos y prevención de problemas. En DR Pools ofrecemos ambos servicios, y si contratas mantenimiento, las limpiezas puntuales están incluidas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué productos utilizáis para la limpieza de piscinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Utilizamos exclusivamente productos profesionales certificados de máxima calidad. Nuestros alguicidas, floculantes, desinfectantes y productos de limpieza de superficies son seguros para la salud de bañistas, niños y mascotas. Trabajamos con las mejores marcas del mercado y seleccionamos los productos más adecuados para cada tipo de piscina y cada situación concreta.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas del norte de Tenerife limpiáis piscinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DR Pools ofrece servicio de limpieza de piscinas en el norte de Tenerife. Cubrimos Puerto de la Cruz, La Orotava, Los Realejos, San Cristóbal de La Laguna, Tacoronte, El Sauzal, Santa Úrsula, La Victoria de Acentejo, La Matanza de Acentejo, San Juan de la Rambla, La Esperanza, Icod de los Vinos y muchas zonas estratégicas como La Paz, Martiánez, El Mayorazgo, La Perdoma, Aguamansa, La Longuera, Cruz Santa, Mesa del Mar, Agua García y San Marcos. Si tu zona no aparece, consúltanos.",
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              alt="Piscina cristalina tras limpieza profesional en Tenerife"
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
                  Limpieza de Piscinas en{" "}
                  <span className="font-extrabold text-secondary">
                    Tenerife
                  </span>
                </h1>

                <div className="mb-8 md:mb-12">
                  <div className="inline-block bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 md:px-8 md:py-6 border border-brand-primary/10 shadow-2xl">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-brand-dark leading-tight">
                      Servicio profesional de limpieza de piscinas en Tenerife.
                    </p>
                    <p className="text-brand-primary/80 text-sm mt-2 font-medium">
                      Recupera el brillo cristalino de tu piscina con nuestro servicio integral. Resultado garantizado.
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
                    📞 624 187 418
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
                  Limpieza profesional integral para que tu piscina brille como nueva. Trabajamos con todo tipo de piscinas en Tenerife.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Fondo</h3>
                  <p className="text-muted-foreground">
                    Limpieza profunda del fondo de la piscina con aspiradora profesional, eliminando algas, sedimentos y residuos acumulados que el filtro no alcanza.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Paredes</h3>
                  <p className="text-muted-foreground">
                    Cepillado y limpieza de paredes, esquinas y escaleras para eliminar incrustaciones de cal, manchas y biofilm bacteriano.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Wrench className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Filtros</h3>
                  <p className="text-muted-foreground">
                    Limpieza y mantenimiento del sistema de filtrado: backwash, cambio de arena si es necesario, limpieza de cestas y prefiltros.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Limpieza de Skimmers</h3>
                  <p className="text-muted-foreground">
                    Vaciado y limpieza de skimmers y cestas para mantener la circulación de agua perfecta y evitar obstrucciones.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Star className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Línea de Agua</h3>
                  <p className="text-muted-foreground">
                    Limpieza especializada de la línea de agua con productos profesionales que eliminan manchas de grasa, calcio y bacterias.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Puesta en Marcha</h3>
                  <p className="text-muted-foreground">
                    Limpieza completa para la puesta en marcha después del invierno o periodos sin uso. Incluye balance químico y revisión de equipos.
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
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Un método probado que garantiza resultados impecables en cada limpieza
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Inspección Inicial",
                      desc: "Evaluamos el estado de la piscina: color del agua, estado de las paredes y fondo, funcionamiento del sistema de filtración y nivel de productos. Determinamos el tipo de limpieza necesaria y te damos un presupuesto cerrado.",
                    },
                    {
                      step: "2",
                      title: "Vaciado Parcial o Total",
                      desc: "Según el caso, realizamos el vaciado necesario para acceder a todas las superficies. En limpiezas de mantenimiento, el agua se mantiene y tratamos in situ para mayor eficiencia.",
                    },
                    {
                      step: "3",
                      title: "Limpieza Profunda",
                      desc: "Cepillado a fondo de paredes, esquinas, escaleras y línea de agua con productos desincrustantes profesionales. Aspirado del fondo con equipo industrial para eliminar todo tipo de residuos.",
                    },
                    {
                      step: "4",
                      title: "Limpieza del Sistema",
                      desc: "Limpiamos filtros (arena o cartucho), skimmers, bombas y todo el sistema de circulación. Verificamos la presión y el correcto funcionamiento de cada componente.",
                    },
                    {
                      step: "5",
                      title: "Tratamiento y Balance Químico",
                      desc: "Rellenamos la piscina al nivel correcto y realizamos el balance químico completo: pH, cloro, alcalinidad y dureza. Si el agua estaba verde, aplicamos tratamiento de choque con floculante y alguicida.",
                    },
                    {
                      step: "6",
                      title: "Verificación Final e Informe",
                      desc: "Comprobamos que todos los parámetros son correctos, que el agua está transparente y que los equipos funcionan perfectamente. Te entregamos un informe detallado con el estado de la piscina.",
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
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  No esperes a que el problema sea mayor. Estos son los signos de que tu piscina necesita atención profesional
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  "El agua está verde o turbia",
                  "Fondos o paredes con algas visibles",
                  "Manchas persistentes en la línea de agua",
                  "Piscina sin usar durante meses",
                  "Puesta en marcha después del invierno",
                  "Antes de vender o alquilar tu propiedad",
                  "Olor fuerte a cloro o químicos",
                  "Sistema de filtrado no funciona correctamente",
                  "Niños o personas mayores van a usar la piscina",
                  "La piscina da picor o irrita los ojos",
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

          {/* FAQ */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-secondary font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
                  <HelpCircle className="w-4 h-4" />
                  Resolvemos tus dudas
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Preguntas frecuentes sobre la <span className="gradient-text">limpieza de piscinas</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "¿Cuánto cuesta limpiar una piscina en Tenerife?",
                    a: "El precio depende del tamaño de la piscina, el estado actual del agua y las superficies a tratar. Una limpieza puntual estándar tiene un precio accesible, mientras que una recuperación de agua verde requiere un tratamiento más intensivo. Ofrecemos presupuesto gratuito y sin compromiso.",
                  },
                  {
                    q: "¿Cuánto tarda una limpieza profesional de piscina?",
                    a: "Una limpieza estándar de mantenimiento rutinario tarda entre 45 minutos y 1 hora. Una limpieza profunda completa (fondo, paredes, filtros, línea de agua) puede tardar entre 2 y 3 horas. Si la piscina está verde y necesita tratamiento de choque, el proceso completo puede requerir 24-48 horas para ver el resultado final.",
                  },
                  {
                    q: "¿Podéis recuperar una piscina que se ha puesto verde?",
                    a: "Sí, es uno de nuestros servicios más solicitados. Aplicamos un tratamiento de choque profesional con floculantes, alguicidas y ajuste completo del balance químico. En la mayoría de los casos, el agua recupera su transparencia en 24-48 horas. Resultado garantizado.",
                  },
                  {
                    q: "¿Cuándo es necesario hacer una limpieza profunda?",
                    a: "Recomendamos una limpieza profunda al menos una vez al año, idealmente en primavera. También es necesaria después de meses sin uso, si el agua está verde o turbia, si hay manchas persistentes, si notas mal olor, o si vas a vender o alquilar tu propiedad.",
                  },
                  {
                    q: "¿Qué diferencia hay entre limpieza y mantenimiento?",
                    a: "La limpieza es un servicio puntual que devuelve la piscina a un estado óptimo. El mantenimiento es un servicio periódico (semanal) que mantiene la piscina en esas condiciones a lo largo del tiempo, incluyendo revisiones de equipos y prevención de problemas. En DR Pools ofrecemos ambos servicios.",
                  },
                  {
                    q: "¿Qué productos utilizáis para la limpieza?",
                    a: "Utilizamos exclusivamente productos profesionales certificados de máxima calidad. Nuestros alguicidas, floculantes, desinfectantes y productos de limpieza de superficies son seguros para la salud de bañistas, niños y mascotas. Trabajamos con las mejores marcas del mercado.",
                  },
                  {
                    q: "¿En qué zonas del norte de Tenerife limpiáis piscinas?",
                    a: "DR Pools ofrece servicio de limpieza de piscinas en el norte de Tenerife. Cubrimos Puerto de la Cruz, La Orotava, Los Realejos, San Cristóbal de La Laguna, Tacoronte, El Sauzal, Santa Úrsula, La Victoria de Acentejo, La Matanza de Acentejo, San Juan de la Rambla, La Esperanza, Icod de los Vinos y muchas más zonas del norte. Si tu zona no aparece, consúltanos.",
                  },
                ].map((faq) => (
                  <details key={faq.q} className="group bg-card rounded-2xl shadow-sm">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-foreground hover:text-secondary transition-colors">
                      <span className="pr-4">{faq.q}</span>
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Zonas que cubrimos */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Limpieza de piscinas en el <span className="gradient-text">Norte de Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Servicio profesional de limpieza de piscinas en los municipios y zonas del norte de Tenerife
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  "Puerto de la Cruz",
                  "La Orotava",
                  "Los Realejos",
                  "San Cristóbal de La Laguna",
                  "Tacoronte",
                  "El Sauzal",
                  "Santa Úrsula",
                  "La Victoria de Acentejo",
                  "La Matanza de Acentejo",
                  "San Juan de la Rambla",
                  "La Esperanza",
                  "Icod de los Vinos",
                  "La Paz",
                  "Martiánez",
                  "El Mayorazgo",
                  "La Perdoma",
                  "Aguamansa",
                  "La Longuera",
                  "Cruz Santa",
                  "Mesa del Mar",
                  "Agua García",
                  "San Marcos",
                ].map((zona) => (
                  <div
                    key={zona}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="font-medium">Limpieza de piscinas en {zona}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
                ¿No ves tu zona? Trabajamos en todo el norte de Tenerife. <a href="#contacto" className="text-secondary font-semibold hover:underline">Consúltanos</a> para confirmar disponibilidad en tu ubicación.
              </p>
            </div>
          </section>

          {/* Cross-link a mantenimiento */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold mb-1">¿Quieres que tu piscina esté siempre perfecta?</h3>
                  <p className="text-muted-foreground text-sm">
                    Nuestro servicio de mantenimiento semanal incluye la limpieza y el balance químico para que no tengas que preocuparte de nada.
                  </p>
                </div>
                <Link
                  href="/servicios/mantenimiento-piscinas-tenerife"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all flex-shrink-0"
                >
                  Ver servicio de mantenimiento
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section id="contacto" className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tu piscina necesita una limpieza profesional?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Solicita tu presupuesto gratuito sin compromiso. Llegamos al norte de Tenerife. Resultado garantizado.
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
