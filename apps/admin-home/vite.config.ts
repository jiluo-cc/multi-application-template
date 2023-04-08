import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteMicroApp from "@local/vite-micro-app";

export default defineConfig({
  base: `${
    process.env.NODE_ENV === "production" ? "http://localhost:4173" : ""
  }/home/`,
  plugins: [react(), viteMicroApp()],
  server: {
    port: 5000,
  },
});
