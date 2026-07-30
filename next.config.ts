import type { NextConfig } from "next";

// Static export for GitHub Pages: every page is prerendered to plain HTML
// in `out/`, which is published to the gh-pages branch.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
