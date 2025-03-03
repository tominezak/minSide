import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    // Copy the attachments folder to the dist/attachments folder during build
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
