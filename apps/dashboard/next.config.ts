import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't get confused by lockfiles
  // higher up the tree (this app lives inside the starters monorepo).
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
};

export default nextConfig;
