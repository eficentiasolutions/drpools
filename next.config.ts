import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects from old URLs to new service URLs
  async redirects() {
    return [
      {
        source: '/mantenimiento-piscinas-tenerife',
        destination: '/servicios/mantenimiento-piscinas-tenerife',
        permanent: true,
      },
      {
        source: '/limpieza-piscinas-tenerife',
        destination: '/servicios/limpieza-piscinas-tenerife',
        permanent: true,
      },
    ];
  },

  // Image optimization for better performance
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
