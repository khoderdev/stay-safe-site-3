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
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectScript: `
            <script>
              // Inline critical JS here
              window.performance.mark('app-loaded');
            </script>
          `,
        },
      },
    }),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
          utils: ["./src/utils/Animations.jsx", "./src/utils/helpers.js"],
          components: [
            "./src/components/bacteria/Bacteria.tsx",
            "./src/components/HandMonster.jsx",
            "./src/components/Balloon/Balloon.jsx",
          ],
        },
      },
    },
    cssCodeSplit: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true,
    proxy: {
      "/upload": {
        target: "http://localhost:8800",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, "/upload"),
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
    exclude: ["@vitejs/plugin-react", "date-fns"],
  },
  resolve: {
    alias: {
      path: 'path-browserify', // Use browser-compatible path module
    },
  },
});
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       // Proxy any requests to '/upload' to 'http://localhost:8800'
//       '/upload': {
//         target: 'http://localhost:8800',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/upload/, '/upload'),
//       },
//     },
//   },
// });