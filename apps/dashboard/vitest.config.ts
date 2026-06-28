import path from "node:path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Next 16 has no native Vite, so Vitest gets its own standalone config.
// Test files import { describe, it, expect, vi } from "vitest" explicitly
// (globals are off) to avoid touching Next's tsconfig types.
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Mirror the "@/*" -> "./*" alias from tsconfig.json.
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    exclude: ["e2e/**", "node_modules/**", ".next/**"],
    css: false,
  },
});
