import type { NextConfig } from "next";

const repoName = "/IB-Vault-";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
  images: {
    unoptimized: true,
  },
  basePath: repoName,
  assetPrefix: `${repoName}/`,
};

export default nextConfig;
