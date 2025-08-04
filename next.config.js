/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    i18n: {
        locales: ['en', 'es', 'fr'],
        defaultLocale: 'en',
    },
}

module.exports = nextConfig 