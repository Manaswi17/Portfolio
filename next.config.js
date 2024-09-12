/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio' : '',  // Adjust '/Portfolio' to your repository name
  assetPrefix: isProd ? '/Portfolio/' : '',
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
};

module.exports = nextConfig;
