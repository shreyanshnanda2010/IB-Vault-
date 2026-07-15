import type { NextConfig } from "next";

const repoName = "IB-Vault-";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath,
  assetPrefix: isProd ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
