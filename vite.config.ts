import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    analyzer(),
  ],
  base: "/",
  build: {
    rollupOptions: {
      external: [
        /^\/backend\/.*/,
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'react';
            if (id.includes('@mui') || id.includes('@emotion')) return 'mui';
            return 'vendor';
          }
        },
      },
    }
  }
});

