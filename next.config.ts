import type { NextConfig } from "next";

const repoName = "/IB-Vault-";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  basePath: repoName,
  assetPrefix: `${repoName}/`,
};

export default nextConfig;
