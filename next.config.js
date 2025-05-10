/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: '/caracola',
  assetPrefix: '/caracola/',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/caracola'
  }
}

module.exports = nextConfig