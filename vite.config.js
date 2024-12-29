import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Stay Safe",
        short_name: "Stay Safe",
        description: "Stay Safe Health Application",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
    visualizer(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    proxy: {
      '/upload': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '/upload'),
      },
    },
  },
});
