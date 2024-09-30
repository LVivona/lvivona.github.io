/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm';


const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental : {
    appDir : true,
    mdxRS : true
  }
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/* module.exports = nextConfig*/
export default withMDX(nextConfig);
