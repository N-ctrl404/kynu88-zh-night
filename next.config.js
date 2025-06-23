/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['kynu88.com'],
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['zh', 'vi'],
    defaultLocale: 'zh',
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig; 