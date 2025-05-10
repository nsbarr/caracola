/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/caracola',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/caracola'
  }
}

module.exports = nextConfig