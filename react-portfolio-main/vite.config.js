import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/react-portfolio-main/react-portfolio-main/",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
