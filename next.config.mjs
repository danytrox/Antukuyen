/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Habilitar compresión
  compress: true,
  // Optimizar el bundle
  swcMinify: true,
  // Optimizar fuentes
  optimizeFonts: true,
  // Habilitar React Strict Mode para mejor performance
  reactStrictMode: true,
}

export default nextConfig
