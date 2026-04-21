import { MetadataRoute } from 'next'

// Solo incluir páginas indexables (sin noindex).
// Las páginas legales (aviso-legal, privacidad, cookies) están marcadas con
// robots: { index: false } y NO deben aparecer en el sitemap — Google las
// descartaría y contaminaría el presupuesto de rastreo.
//
// lastModified con fecha estática: evita que Google crea que toda la web
// se actualiza a diario, lo que distorsiona la prioridad de rastreo.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drpools.es'

  return [
    // Homepage - Página principal
    {
      url: baseUrl,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Página overview de servicios
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Página principal de mantenimiento - keyword principal
    {
      url: `${baseUrl}/servicios/mantenimiento-piscinas-tenerife`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Página de limpieza - segunda keyword importante
    {
      url: `${baseUrl}/servicios/limpieza-piscinas-tenerife`,
      lastModified: new Date('2026-04-14'),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Páginas geográficas - keywords locales de media prioridad
    {
      url: `${baseUrl}/servicios/mantenimiento-piscinas-norte-tenerife`,
      lastModified: new Date('2026-04-22'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/servicios/mantenimiento-piscinas-puerto-de-la-cruz`,
      lastModified: new Date('2026-04-22'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]
}
