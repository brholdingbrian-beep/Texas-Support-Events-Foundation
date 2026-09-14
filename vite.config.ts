import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pagesBase = "/Texas-Support-Events-Foundation/";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site needs the repo base. Vercel / local stay at "/".
  base: process.env.GITHUB_PAGES === "true" ? pagesBase : "/",
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
