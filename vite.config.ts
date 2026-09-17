import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // PHP endpoints (contact form, vehicle feed) are served by XAMPP's Apache in dev.
    proxy: {
      "/php": {
        target: "http://localhost/markaj/public",
        changeOrigin: true,
      },
    },
  },
});
