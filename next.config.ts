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
  output:"export",
  basePath:"website",
  pageExtensions: ['js', 'jsx', 'mdx', "md", 'ts', 'tsx'],
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // needed for soem reason
  images: {
    unoptimized: true,
  }
  
}

export default withMDX(nextConfig)
