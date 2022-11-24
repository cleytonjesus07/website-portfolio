/** @type {import('next').NextConfig} */

const securityHeaders =
  [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },

    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    }
  ]
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR'
  },
  images: {
    domains: ["img.freepik.com", "avatars.githubusercontent.com"]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  }
}

module.exports = nextConfig
