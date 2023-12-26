/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const nextConfig = {
    images: {
        domains: ['ucarecdn.com','cdn3d.iconscout.com'],
    },
}

module.exports = withNextIntl(nextConfig)
