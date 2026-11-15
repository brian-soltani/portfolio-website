import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the site is fully static, so it can deploy to Vercel,
  // Netlify, GitHub Pages, or any static host from the `out/` directory.
  output: "export",
  // Static export has no image optimization server, so images are served
  // as authored. Keep the source files reasonably sized.
  images: { unoptimized: true },
};

export default nextConfig;
