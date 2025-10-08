import createMDX from '@next/mdx'

import type { NextConfig } from 'next'

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // Without options
      'remark-gfm',
    ],
    rehypePlugins: [],
  },
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', "md", 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },

  redirects: async function redirects() {
    return [
      {
        source: '/spec',
        destination: '/spec/introduction',
        // Use permanent: true for a 308 redirect, 
        // which tells browsers and search engines the move is permanent and cacheable.
        permanent: true,
      },
    ];
  },
}

export default withMDX(nextConfig)
