/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    minimumCacheTTL: 60, 
    localPatterns: [
      {
        pathname: 'images/**',
        search: '',
      }
    ]
  },
};

module.exports = nextConfig;
