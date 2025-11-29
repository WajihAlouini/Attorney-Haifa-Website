/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
    // Use esbuild for faster minification
    minify: "esbuild",
  },
  // Performance optimizations
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
