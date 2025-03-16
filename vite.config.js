import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//?
export default defineConfig({
  plugins: [react()],
  base: "/aviaSales/",
  build: {
    outDir: "dist", // Убедись, что билд идёт в dist
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
  },
});
