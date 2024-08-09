/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.discordapp.net',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
            },
        ],
    },
    env: {
        CUSTOM_KEY: process.env.CUSTOM_KEY,
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false,
            };
        }
        return config;
    },
};

module.exports = nextConfig;
