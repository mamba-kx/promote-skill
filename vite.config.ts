import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteImagemin from "vite-plugin-imagemin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    viteImagemin({
      mozjpeg: {
        quality: 20
      }
    })
  ],
  server: {
    hmr: true,
    port: 7001,
    host: "0.0.0.0"
  }
});
