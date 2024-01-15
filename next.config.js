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
        hostname: "127.0.0.1",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'estorephil.dev2.koda.ws',
        port: '',
        pathname: '/rails/active_storage/blobs/redirect/**',
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
      {
        protocol: "http",
        hostname: "*",
        port: "3000",
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL
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
        source: '/:locale/:path((?!admin|login|verify-login|courier|agent/register|register).*)',
        destination: '/:locale/main/:path*',
      },
      {
        source: '/:locale/courier',
        destination: '/:locale/courier/dashboard'
      },
      {
        source: '/:locale/admin',
        destination: '/:locale/admin/dashboard'
      }
    ]
  },
}

module.exports = nextConfig
