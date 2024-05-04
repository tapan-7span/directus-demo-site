import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@root": path.resolve(__dirname, "./"),
    },
    extensions: [".mjs", ".js", ".jsx", ".json", ".vue", ".scss"],
  },
});
