/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`
const securityHeaders =
  [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
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
    domains: ["img.freepik.com"]
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
