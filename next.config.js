/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
      {
        protocol: "http",
        hostname: "*",
        port: "8001",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/:locale',
        destination: '/:locale/main/home',
      },
      {
        source: `/api/:path*`,
        destination: `/api/:path*`,
      },
      {
        source: '/:locale/home',
        destination: '/:locale/main/home',
      },
      {
        source: '/:locale/:path((?!admin|register|login|verify-login|courier).*)',
        destination: '/:locale/main/:path*',
      },
      {
        source: '/:locale/courier',
        destination: '/:locale/courier/dashboard'
      }
    ]
  },
}

module.exports = nextConfig
