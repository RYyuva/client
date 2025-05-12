import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai_map",  // Set this to your GitHub repo name
  assetPrefix: "/ai_map/"
};

export default nextConfig;
