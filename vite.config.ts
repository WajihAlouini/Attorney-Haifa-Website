import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    compression({
      algorithms: ["brotliCompress"],
      exclude: /\.(png|jpg|jpeg|webp|avif|gif|svg|ico)$/i,
    }),
    compression({
      algorithms: ["gzip"],
      exclude: /\.(png|jpg|jpeg|webp|avif|gif|svg|ico)$/i,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // Handle client-side routing for SPA
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "react-vendor";
            }
            return "vendor";
          }
          // Feature-based chunks
          if (id.includes("/features/")) {
            const feature = id.split("/features/")[1]?.split("/")[0];
            if (feature) {
              return `feature-${feature}`;
            }
          }
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".");
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || "")) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|otf|eot/i.test(ext || "")) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Use esbuild for faster minification
    minify: "esbuild",
    target: "es2020",
    sourcemap: false,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
