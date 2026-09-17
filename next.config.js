/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/website",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
