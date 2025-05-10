/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  basePath: '/caracola',
  trailingSlash: true,
}

module.exports = nextConfig