import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/TEST1234/",
  server: {
    port: 5173,
  },
});
