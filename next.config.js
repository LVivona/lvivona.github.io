/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    unoptimized: true, // Ensures static image handling works correctly
  },
  basePath: '', // Adjust this if your GitHub Pages repo name is different
  assetPrefix: '', // Adjust this if necessary for GitHub Pages
  trailingSlash: true, // Ensures static export works correctly
  output: 'export', // Configures Next.js for static export
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)

