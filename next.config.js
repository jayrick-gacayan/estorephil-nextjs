/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/en',
        destination: '/en/home',
      },
    ]
  },
}

module.exports = nextConfig
