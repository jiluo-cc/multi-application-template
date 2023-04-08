import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteMicroApp from "@local/vite-micro-app";

export default defineConfig({
  base: `${
    process.env.NODE_ENV === "production" ? "http://localhost:4173" : ""
  }/login/`,
  plugins: [vue(), viteMicroApp()],
  server: {
    port: 7000,
  },
});
