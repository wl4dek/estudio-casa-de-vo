import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
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
        manualChunks: {
          vendor: ["react", "react-dom"],
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
