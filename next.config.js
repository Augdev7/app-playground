/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    swcMinify: true,
    experimental: {
        // Required:
        appDir: true,
        output: 'export',
    },
    compiler: {
        styledComponents: true,
        removeConsole: {
            exclude: ['error'],
        },
    },
    modularizeImports: {
        '@acme/ui': {
            transform: '@acme/ui/dist/{{member}}',
        },
    },
};

module.exports = nextConfig;
