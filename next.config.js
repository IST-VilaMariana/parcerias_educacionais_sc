/** @type {import('next').NextConfig} */

const nextConfig = {
  output:'export',
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "style-src 'unsafe-inline' 'self'; frame-ancestors 'self' https://www.youtube.com https://forms.office.com"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Permissions-Policy',
            value: 'ch-ua-form-factor'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig;