/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures static image handling works correctly
  },
  basePath: '', // Adjust this if your GitHub Pages repo name is different
  assetPrefix: '', // Adjust this if necessary for GitHub Pages
  trailingSlash: true, // Ensures static export works correctly
  output: 'export', // Configures Next.js for static export
};

module.exports = nextConfig;
