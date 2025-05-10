/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/caracola',
  assetPrefix: '/caracola/',
}

module.exports = nextConfig