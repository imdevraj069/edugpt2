/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  // Transpile packages that need it
  transpilePackages: ['@radix-ui'],
};

module.exports = nextConfig;
