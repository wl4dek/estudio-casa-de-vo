import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      includePublic: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    target: "es2018",
    outDir: "dist",
    emptyOutDir: true,

    minify: "esbuild",
    sourcemap: false,

    cssCodeSplit: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },

    chunkSizeWarningLimit: 500,
  },

  esbuild: {
    drop: ["console", "debugger"], // remove logs em produção
  },

  base: "/estudio-casa-de-vo/",
});
