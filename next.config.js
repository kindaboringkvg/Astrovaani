/** @type {import('next').NextConfig} */
const nextConfig = {
  // DO NOT enable export if using API routes
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true, // ✅ For smooth Vercel builds even with lint issues
  },

  images: {
    unoptimized: true, // ✅ if you're not optimizing images through Next/Image
  },
}

module.exports = nextConfig
