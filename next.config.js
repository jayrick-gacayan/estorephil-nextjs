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
        hostname: "192.168.0.106",
        port: "8001",
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
        source: '/:locale/home',
        destination: '/:locale/main/home',
      },
      {
        source: '/:locale/:path((?![admin|register|login]).*)',
        destination: '/:locale/main/:path*',
      },
    ]
  },
}

module.exports = nextConfig
