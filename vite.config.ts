import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
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
