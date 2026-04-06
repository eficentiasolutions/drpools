import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Droplets, Shield, Clock, Users, Sparkles, Wrench, Sun, HelpCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mantenimiento de Piscinas en Tenerife | Servicio Profesional",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Limpieza semanal, balance químico, revisión de equipos y reparaciones. +500 clientes satisfechos. Primera revisión GRATIS. Llama al 624 187 418.",
  keywords: [
    "mantenimiento de piscinas en Tenerife",
    "mantenimiento piscinas Tenerife",
    "servicio mantenimiento piscina Tenerife",
    "limpieza piscinas Tenerife",
    "balance químico piscina",
    "mantenimiento piscina precio Tenerife",
    "empresa piscinas Tenerife",
    "tratamiento agua piscina Tenerife",
    "reparación piscinas Tenerife",
    "mantenimiento piscina comunitaria Tenerife",
  ],
  alternates: {
    canonical: "https://www.drpools.es/servicios/mantenimiento-piscinas-tenerife",
  },
  openGraph: {
    title: "Mantenimiento de Piscinas en Tenerife | DR Pools — +500 Clientes",
    description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Recupera tu tiempo libre. Primera revisión GRATIS. +500 clientes satisfechos.",
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

// Schema Markup con AggregateRating
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mantenimiento de Piscinas en Tenerife",
  description: "Servicio profesional de mantenimiento de piscinas en Tenerife. Incluye limpieza, balance químico, revisión de equipos y mantenimiento preventivo. Más de 500 familias satisfechas.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el mantenimiento de una piscina en Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio del mantenimiento de piscinas en Tenerife depende del tamaño de la piscina, el tipo de tratamiento (cloro o sal) y la frecuencia de las visitas. En DR Pools nuestros planes empiezan desde 60€ por visita individual. Ofrecemos una primera revisión de balance químico completamente gratuita para evaluar el estado de tu piscina y recomendarte el plan más adecuado sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué frecuencia hay que mantener una piscina en Tenerife?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Tenerife, gracias al clima subtropical, las piscinas se usan prácticamente todo el año. Recomendamos un mantenimiento semanal como mínimo para mantener el agua en condiciones óptimas de higiene y transparencia. En los meses de verano, con el calor y el uso intensivo, puede ser necesario un control más frecuente del nivel de cloro y pH. Un mantenimiento preventivo semanal evita problemas mayores como la aparición de algas o el deterioro de los equipos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el servicio de mantenimiento de piscinas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El servicio de mantenimiento de DR Pools incluye: limpieza completa de fondo y paredes con aspiradora profesional, vaciado y limpieza de skimmers y cestillos, balance químico completo (pH, cloro, alcalinidad total y dureza), limpieza de prefiltros y cestas del filtro, revisión del sistema de circulación y bomba, comprobación de presión del filtro, limpieza de bordes y línea de agua, y un informe digital tras cada visita con el estado detallado de tu piscina.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mantenéis piscinas de cloro y de sal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, en DR Pools mantenemos todo tipo de piscinas: de cloro tradicional, de electrolisis salina, con tratamiento con UV, ozono y sistemas combinados. Nuestros técnicos están formados en todos los sistemas de tratamiento de agua del mercado. Para piscinas de sal, realizamos el control de la cloradora salina, la limpieza del electrodo y el ajuste de la producción de cloro según la estación del año.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué zonas de Tenerife cubrís?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DR Pools ofrece servicio de mantenimiento de piscinas en toda la isla de Tenerife. Cubrimos Santa Cruz de Tenerife, San Cristóbal de La Laguna, Adeje, Arona, Costa Adeje, Granadilla de Abona, Puerto de la Cruz, La Orotava, Los Realejos, Candelaria, Güímar, San Miguel de Abona, Guía de Isora, Santiago del Teide, Icod de los Vinos, Tacoronte, El Sauzal, La Victoria, La Matanza y muchas más. Si tu municipio no aparece en la lista, consúltanos porque probablemente también lleguemos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacéis mantenimiento de piscinas comunitarias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, DR Pools ofrece servicio de mantenimiento para piscinas comunitarias en comunidades de vecinos y urbanizaciones de Tenerife. Incluimos el cumplimiento de la normativa vigente de la Comunidad Autónoma de Canarias respecto a parámetros de calidad del agua, dotación de material de salvamento y señalización. Emitimos certificados de calidad del agua y llevamos un libro de registro que puedes presentar en las juntas de la comunidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi piscina se pone verde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu piscina se ha puesto verde, significa que hay un desequilibrio en el balance químico y proliferación de algas. Es importante actuar rápido porque cuanto más tiempo pase, más difícil y costosa será la recuperación. En DR Pools ofrecemos un servicio de recuperación de agua verde con resultado garantizado. Aplicamos un tratamiento de choque profesional que elimina algas y bacterias, y devolvemos tu piscina a un estado cristalino. Si ya eres cliente de mantenimiento, este servicio está incluido en tu plan.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué es mejor contratar un profesional en lugar de hacerlo yo mismo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El mantenimiento de una piscina requiere conocimientos de química del agua, manejo de equipos especializados y dedicación regular. Un profesional garantiza un balance químico preciso (un pH incorrecto puede irritar la piel y los ojos, dañar los equipos y encarecer el consumo de productos), detecta problemas antes de que se conviertan en averías costosas, y te ahorra unas 80 horas al año de trabajo. Además, un mantenimiento profesional prolonga la vida útil de los equipos de filtración, bombas y revestimiento, lo que a largo plazo compensa la inversión.",
      },
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
              alt="Piscina cristalina con servicio de mantenimiento profesional en Tenerife"
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
                      Recupera 80 horas al año y disfruta de una piscina cristalina sin preocupaciones. Más de 500 familias ya confían en nosotros.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 font-semibold text-secondary-foreground shadow-lg hover:scale-105 transition-transform"
                  >
                    <Droplets className="w-5 h-5 mr-2" />
                    Primera Revisión GRATIS
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

          {/* Por qué elegirnos */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Por qué elegir DR Pools para el <span className="gradient-text">mantenimiento de tu piscina</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Más de 500 familias en Tenerife confían en nosotros para mantener sus piscinas en perfectas condiciones todo el año
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Visitas Puntuales</h3>
                  <p className="text-muted-foreground">
                    Llegamos el día acordado, a la hora pactada. Siempre el mismo técnico, que conoce tu piscina y sus necesidades específicas.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Agua Cristalina Garantizada</h3>
                  <p className="text-muted-foreground">
                    Balance químico perfecto con análisis profesional. Agua siempre transparente y segura para toda la familia. Si no estamos satisfechos, volvemos sin coste.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Garantía Total</h3>
                  <p className="text-muted-foreground">
                    Satisfacción garantizada. Si no estás contento con nuestro servicio, te devolvemos tu dinero. Sin letras pequeñas ni preguntas.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">+500 Clientes Satisfechos</h3>
                  <p className="text-muted-foreground">
                    Más de 500 familias en toda Tenerife confían en nuestro servicio. Valoración media de 5.0 estrellas en Google Reviews.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Productos Premium</h3>
                  <p className="text-muted-foreground">
                    Solo usamos productos certificados de máxima calidad. Seguros para niños, mascotas y el medio ambiente. Tratamiento profesional garantizado.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Droplets className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cobertura en Toda Tenerife</h3>
                  <p className="text-muted-foreground">
                    Damos servicio en toda la isla de Tenerife. Desde Santa Cruz hasta Los Cristianos, desde el norte hasta el sur.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tipos de piscinas que mantenemos */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tipos de piscinas que <span className="gradient-text">mantenemos</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Nuestros técnicos están formados para mantener cualquier tipo de piscina y sistema de tratamiento
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Piscinas privadas</h3>
                  <p className="text-muted-foreground mb-4">
                    Mantenemos piscinas de viviendas particulares, casas adosadas y villas en toda Tenerife. Adaptamos la frecuencia de visita y el tipo de tratamiento al uso que le des a tu piscina.
                  </p>
                  <ul className="space-y-2">
                    {["Piscinas de cloro tradicional", "Piscinas de electrolisis salina", "Piscinas con sistema UV u ozono", "Piscinas con calefacción o bomba de calor"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Piscinas comunitarias</h3>
                  <p className="text-muted-foreground mb-4">
                    Servicio para comunidades de vecinos y urbanizaciones. Incluimos el cumplimiento de la normativa canaria de piscinas públicas, certificados de calidad del agua y libro de registro.
                  </p>
                  <ul className="space-y-2">
                    {["Cumplimiento normativa Canarias", "Certificados de calidad del agua", "Libro de registro para juntas", "Mantenimiento de áreas infantiles y spa"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Qué incluye */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Qué incluye nuestro servicio de <span className="gradient-text">mantenimiento de piscinas</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Cada visita es completa. No dejamos nada al azar para que tu piscina esté siempre en perfectas condiciones
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="space-y-6">
                    {[
                      "Limpieza completa de fondo y paredes con aspiradora profesional",
                      "Vaciado y limpieza de skimmers y cestillos",
                      "Balance químico completo (pH, cloro, alcalinidad total y dureza)",
                      "Limpieza de prefiltros, cestas del filtro y backwash cuando sea necesario",
                      "Revisión del sistema de circulación y bomba de filtración",
                      "Comprobación de presión del filtro y estado de la arena",
                      "Limpieza de bordes, escaleras y línea de agua",
                      "Control de nivel de agua y aportación si es necesario",
                      "Revisión de cloradora salina y limpieza de electrodos (piscinas de sal)",
                      "Informe digital tras cada visita con el estado completo de tu piscina",
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

          {/* Cómo funciona */}
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Cómo funciona nuestro <span className="gradient-text">servicio de mantenimiento</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Un proceso sencillo para que empieces a disfrutar de tu piscina sin preocupaciones
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      icon: Sun,
                      title: "Primera Revisión Gratuita",
                      desc: "Acudimos a tu domicilio sin compromiso para evaluar el estado de tu piscina: tipo de tratamiento, estado de los equipos, dimensión y ubicación. Te entregamos un informe detallado y un presupuesto personalizado.",
                    },
                    {
                      step: "2",
                      icon: Wrench,
                      title: "Plan de Mantenimiento Personalizado",
                      desc: "Elaboramos un plan adaptado a tu piscina: frecuencia de visitas (semanal o quincenal), tipo de productos, atención a equipos específicos como cloradoras salinas, bombas de calor o sistemas de automatización.",
                    },
                    {
                      step: "3",
                      icon: Droplets,
                      title: "Visita Profesional Periódica",
                      desc: "Nuestro técnico acude el día y hora pactados. Realiza la limpieza completa, el balance químico, la revisión de equipos y te envía un informe digital con todos los parámetros y observaciones.",
                    },
                    {
                      step: "4",
                      icon: Shield,
                      title: "Mantenimiento Preventivo Continuo",
                      desc: "Vigilamos el desgaste de componentes, la presión del filtro, el estado de la arena y el correcto funcionamiento de bombas y skimmers. Detectamos y solucionamos pequeños problemas antes de que se conviertan en averías costosas.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-6 items-start bg-card p-6 rounded-2xl shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-secondary-foreground" />
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

          {/* Mantenimiento por seasons */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Mantenimiento de piscinas en Tenerife: <span className="gradient-text">por temporadas</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  El clima subtropical de Tenerife permite usar la piscina casi todo el año, pero cada estación requiere cuidados específicos
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Primavera y Verano</h3>
                  <p className="text-muted-foreground mb-3">
                    Con las temperaturas altas y el uso intensivo, el agua es más propensa a desarrollar algas y bacterias. Aumentamos el control de desinfectante y verificamos que el sistema de filtración trabaje al máximo rendimiento.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Control reforzado de cloro y pH</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Limpieza más frecuente de filtros</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Prevención de algas con tratamiento preventivo</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Revisión de bomba de calor si la tienes</li>
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Otoño e Invierno</h3>
                  <p className="text-muted-foreground mb-3">
                    Aunque en Tenerife las temperaturas son suaves, las lluvias y el viento pueden arrastrar residuos y alterar el balance del agua. En invierno reducimos la frecuencia pero no descuidamos tu piscina.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Protección contra hojas y residuos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Ajuste del tratamiento a menor temperatura</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Revisión de cubiertas y accesorios</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />Preparación para la puesta en marcha</li>
                  </ul>
                </div>
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
                  Preguntas frecuentes sobre el <span className="gradient-text">mantenimiento de piscinas</span>
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    q: "¿Cuánto cuesta el mantenimiento de una piscina en Tenerife?",
                    a: "El precio del mantenimiento de piscinas en Tenerife depende del tamaño de la piscina, el tipo de tratamiento (cloro o sal) y la frecuencia de las visitas. En DR Pools nuestros planes empiezan desde 60€ por visita individual. Ofrecemos una primera revisión de balance químico completamente gratuita para evaluar el estado de tu piscina y recomendarte el plan más adecuado sin compromiso.",
                  },
                  {
                    q: "¿Con qué frecuencia hay que mantener una piscina en Tenerife?",
                    a: "En Tenerife, gracias al clima subtropical, las piscinas se usan prácticamente todo el año. Recomendamos un mantenimiento semanal como mínimo para mantener el agua en condiciones óptimas de higiene y transparencia. En los meses de verano, con el calor y el uso intensivo, puede ser necesario un control más frecuente del nivel de cloro y pH.",
                  },
                  {
                    q: "¿Qué incluye el servicio de mantenimiento de piscinas?",
                    a: "El servicio incluye: limpieza completa de fondo y paredes con aspiradora profesional, vaciado y limpieza de skimmers, balance químico completo (pH, cloro, alcalinidad total y dureza), limpieza de prefiltros y filtros, revisión del sistema de circulación y bomba, limpieza de bordes y línea de agua, e informe digital tras cada visita con el estado detallado de tu piscina.",
                  },
                  {
                    q: "¿Mantenéis piscinas de cloro y de sal?",
                    a: "Sí, mantenemos todo tipo de piscinas: de cloro tradicional, de electrolisis salina, con tratamiento con UV, ozono y sistemas combinados. Para piscinas de sal, realizamos el control de la cloradora salina, la limpieza del electrodo y el ajuste de la producción de cloro según la estación del año.",
                  },
                  {
                    q: "¿Qué zonas de Tenerife cubrís?",
                    a: "DR Pools ofrece servicio de mantenimiento de piscinas en toda la isla de Tenerife. Cubrimos Santa Cruz, La Laguna, Adeje, Arona, Costa Adeje, Puerto de la Cruz, La Orotava, Los Realejos, Guía de Isora, Santiago del Teide, Granadilla, Icod de los Vinos, Tacoronte y muchas más localidades. Si tu municipio no aparece, consúltanos.",
                  },
                  {
                    q: "¿Hacéis mantenimiento de piscinas comunitarias?",
                    a: "Sí, ofrecemos servicio para comunidades de vecinos y urbanizaciones. Incluimos el cumplimiento de la normativa vigente de la Comunidad Autónoma de Canarias, certificados de calidad del agua y libro de registro para presentar en juntas de la comunidad.",
                  },
                  {
                    q: "¿Qué pasa si mi piscina se pone verde?",
                    a: "Significa que hay un desequilibrio químico y proliferación de algas. Es importante actuar rápido. En DR Pools ofrecemos un servicio de recuperación de agua verde con resultado garantizado. Aplicamos un tratamiento de choque profesional que elimina algas y bacterias. Si ya eres cliente de mantenimiento, este servicio está incluido.",
                  },
                  {
                    q: "¿Por qué es mejor contratar un profesional en lugar de hacerlo yo mismo?",
                    a: "Un profesional garantiza un balance químico preciso (un pH incorrecto puede irritar la piel, dañar equipos y encarecer el consumo de productos), detecta problemas antes de que se conviertan en averías costosas, y te ahorra unas 80 horas al año. Además, el mantenimiento profesional prolonga la vida útil de los equipos de filtración y revestimiento.",
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
                  Mantenimiento de piscinas en <span className="gradient-text">toda Tenerife</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ofrecemos servicio profesional de mantenimiento de piscinas en todos los municipios de la isla
                </p>
              </div>

              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                {[
                  "Santa Cruz de Tenerife",
                  "San Cristóbal de La Laguna",
                  "Adeje",
                  "Arona",
                  "Costa Adeje",
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
                  "Guía de Isora",
                  "Santiago del Teide",
                  "Icod de los Vinos",
                  "Tacoronte",
                  "El Sauzal",
                  "La Victoria de Acentejo",
                  "La Matanza de Acentejo",
                  "Los Silos",
                  "Buenavista del Norte",
                  "Garachico",
                  "La Guancha",
                  "San Juan de la Rambla",
                  "El Tanque",
                  "Tegueste",
                  "Anaga",
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

          {/* Cross-link a limpieza */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-7 h-7 text-blue-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold mb-1">¿Tu piscina necesita una limpieza a fondo?</h3>
                  <p className="text-muted-foreground text-sm">
                    Si tu piscina lleva tiempo sin mantenimiento o el agua está verde o turbia, nuestro servicio de limpieza profesional devolverá el brillo cristalino a tu piscina.
                  </p>
                </div>
                <Link
                  href="/servicios/limpieza-piscinas-tenerife"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all flex-shrink-0"
                >
                  Ver limpieza profesional
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
                Solicita tu presupuesto gratuito sin compromiso. Primera visita de balance químico GRATIS en tu domicilio.
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
