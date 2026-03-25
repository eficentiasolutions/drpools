// Reviews de Google Business Profile
// Actualiza estos datos con tus reviews reales de Google

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  date?: string; // Formato: "2024-03-15"
  profileUrl?: string; // URL al perfil de Google del reviewer
}

export interface GoogleReviewsConfig {
  businessName: string;
  businessUrl: string; // URL completa de tu Google Business Profile
  rating: number; // Rating actual (ej: 4.8)
  totalReviews: number; // Número total de reviews
  reviews: GoogleReview[];
}

// ========================================================================
// ⚠️ ACTUALIZA ESTOS DATOS CON TUS REVIEWS REALES DE GOOGLE
// ========================================================================

export const googleReviewsConfig: GoogleReviewsConfig = {
  businessName: "DRpools",
  // PEGA AQUÍ LA URL DE TU GOOGLE BUSINESS PROFILE
  // Ejemplo: "https://www.google.com/maps/place/DR+Pools/@28.2916,-16.6291,17z"
  businessUrl: "https://www.google.com/maps/search/?api=1&query=DRpools&query_place_id=ChIJ5y8Xg1PIRGMRXtzZcEEx0mA",

  // TU RATING ACTUAL EN GOOGLE (ej: 4.8, 5.0)
  rating: 5.0,

  // NÚMERO TOTAL DE REVIEWS EN GOOGLE
  totalReviews: 10,

  // AÑADE AQUÍ TUS REVIEWS REALES DE GOOGLE
  // Puedes copiarlas directamente desde tu Google Business Profile
  reviews: [
    {
      author: "Jaile Sax",
      rating: 5,
      text: "Estoy muy agradecido con el servicio de mantenimiento que realizan. Desde que comenzaron a llevar mi piscina, el agua se mantiene siempre limpia, equilibrada y cristalina. Se nota el control técnico en los niveles, la filtración y el cuidado general del sistema. Son profesionales, constantes y cumplen con lo que prometen. Me dan mucha tranquilidad porque sé que la piscina está en buenas manos. Sin duda, los recomiendo a cualquier persona que busque un servicio serio y de calidad. Buenos precios y comunicación rápida y efectiva 👌",
      date: "2025-02-15",
    },
    {
      author: "Wilfredo Llado",
      rating: 5,
      text: "Tenía el foco de mi piscina fundido y contacté con ellos para solucionarlo. Vinieron rápido, realizaron el cambio correctamente y dejaron todo funcionando a la perfección. Trabajo bien hecho y sin complicaciones. Los recomiendo totalmente.",
      date: "2025-02-10",
    },
    {
      author: "Sonia M Mendez Nuñez",
      rating: 5,
      text: "Mi piscina estaba completamente turbia y no conseguía que el agua mejorara. El técnico realizó una revisión completa y diagnosticó que el problema era la arena del filtro, que ya había perdido su capacidad de filtración. Tras sustituirla, el cambio fue inmediato: el agua volvió a estar cristalina. Muy satisfecho con el servicio y la eficacia del trabajo.",
      date: "2025-02-05",
    },
    {
      author: "Osmani Torres Brito",
      rating: 5,
      text: "Muy buena experiencia con esta empresa. Mi piscina estaba perdiendo agua y no conseguía localizar el problema. Vinieron, hicieron una revisión completa y detectaron la fuga con rapidez. El trabajo fue limpio, bien ejecutado y muy eficiente. Desde la reparación no he vuelto a tener pérdidas y todo funciona perfectamente. Se nota que son profesionales y que saben lo que hacen. Los recomiendo sin duda.",
      date: "2025-01-28",
    },
    {
      author: "Diley Gonzalez",
      rating: 5,
      text: "Llevo un tiempo trabajando con esta empresa para el mantenimiento de mi piscina y la experiencia está siendo excelente. El trato es siempre cercano y profesional, responden rápido ante cualquier duda y el servicio es muy constante. Desde que gestionan el mantenimiento, el agua se mantiene cristalina y perfectamente equilibrada. Se nota que conocen bien su trabajo y cuidan los detalles. Totalmente recomendables.",
      date: "2025-01-20",
    },
    {
      author: "Natali Gonzales Lopez",
      rating: 5,
      text: "Empresa totalmente recomendable. Destaco sobre todo su puntualidad y la tranquilidad que transmiten. Siempre que los he necesitado, incluso en situaciones urgentes, han estado disponibles y han respondido con rapidez. Son profesionales, cumplidores y muy responsables con su trabajo. Da gusto contar con un servicio así para el mantenimiento de la piscina.",
      date: "2025-01-12",
    },
    {
      author: "Anibal Ojeda Bernal",
      rating: 5,
      text: "Muy buen servicio. Contacté con la empresa para la limpieza y puesta a punto de mi piscina y la experiencia ha sido totalmente satisfactoria. Fue puntual, trabajó con orden y explicó claramente el estado del agua y del sistema de filtración. Dejó la piscina cristalina, equilibró los niveles químicos y además revisó el motor y los skimmers. Se nota que sabe lo que hace y utiliza productos adecuados, sin olores fuertes ni residuos. Relación calidad-precio correcta y trato muy profesional. Repetiré sin duda y la recomiendo a quien quiera olvidarse de problemas de mantenimiento.",
      date: "2025-01-05",
    },
    {
      author: "Eduardo Valladares",
      rating: 5,
      text: "Excelente profesional, tenia las bombillas rota, llame y me lo solucionaron en muy poco tiempo la verdad muy recomendable.",
      date: "2024-12-20",
    },
    {
      author: "Maite Abrante González",
      rating: 5,
      text: "Excelente trabajo, seriedad y profesionalidad. Los vuelvo a llamar seguro 👍",
      date: "2024-12-12",
    },
    {
      author: "Luis Alberto Hernandez Rodriguez",
      rating: 5,
      text: "Muy profesionales totalmente recomendado",
      date: "2024-12-05",
    },
  ],
};

// ========================================================================
// FIN DE CONFIGURACIÓN
// ========================================================================

// Función para generar el schema markup válido para Google
export function generateReviewSchema(config: GoogleReviewsConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "LocalBusiness",
      name: config.businessName,
      image: "https://drpools.es/og-image.jpg",
      telephone: "+34624187418",
      email: "info@drpools.es",
      url: "https://drpools.es",
      sameAs: config.businessUrl, // Enlace a Google Business Profile
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tenerife",
        addressCountry: "ES",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: config.rating.toString(),
        reviewCount: config.totalReviews.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      review: config.reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author,
          url: review.profileUrl,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating.toString(),
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: review.text,
        datePublished: review.date,
      })),
    },
  };
}

// Función para formatear la fecha relativa (ej: "hace 2 semanas")
export function formatRelativeDate(dateString?: string): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "hace 1 semana" : `hace ${weeks} semanas`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "hace 1 mes" : `hace ${months} meses`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? "hace 1 año" : `hace ${years} años`;
  }
}
