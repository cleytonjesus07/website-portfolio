/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales:['pt-BR'],
    defaultLocale:'pt-BR'
  },
  images:{
    domains:["img.freepik.com"]
  }
}

module.exports = nextConfig
