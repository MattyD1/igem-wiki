import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "dist",
  basePath: "/igem-wiki/dist",
  assetPrefix: "/igem-wiki/dist",
  experimental: {
    appDir: true,
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
