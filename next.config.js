const { withContentlayer } = require('next-contentlayer')
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

// module.exports = nextConfig

module.exports = withContentlayer(nextConfig)
