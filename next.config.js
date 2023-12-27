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
        has: [{ type: 'host', value: '(agent.*)\\..*' }],
        destination: '/:locale/main/home',
      },
      {
        source: '/:locale/home',
        has: [{ type: 'host', value: '(agent.*)\\..*' }],
        destination: '/:locale/main/home',
      },
      {
        source: '/:locale/:path((?!admin|login|verify-login|courier|agent/register).*)',
        has: [{ type: 'host', value: '(agent.*)\\..*' }],
        destination: '/:locale/main/:path*',
      },
      {
        source: '/:locale/login',
        has: [{ type: 'host', value: '(courier|admin|agent.*)\\..*' }],
        destination: '/:locale/login'
      },
      {
        source: '/:locale/courier',
        has: [{ type: 'host', value: '(courier.*)\\..*' }],
        destination: '/:locale/courier/dashboard'
      },
      {
        source: '/:locale/admin',
        has: [{ type: 'host', value: '(admin.*)\\..*' }],
        destination: '/:locale/admin/dashboard'
      }
    ]
  },
}

module.exports = nextConfig
