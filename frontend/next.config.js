/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mahidol.ac.th',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
