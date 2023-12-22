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
        source: '/:locale/:path((?!admin|login|verify-login|courier|agent/register).*)',
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
