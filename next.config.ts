import type { NextConfig } from "next";

const repoName = process.env.NODE_ENV === "production" ? "/IB-Vault-" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  images: {
    unoptimized: true,
  },
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : undefined,
};

export default nextConfig;
