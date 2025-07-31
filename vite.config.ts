/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@theme": "/src/theme",
      "@pages": "/src/theme/pages",
      "@assets": "/src/theme/assets",
      "@components": "/src/theme/components",
      "@hooks": "/src/theme/hooks",
      "@utils": "/src/theme/utils",
      "@providers": "/src/theme/providers"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/__tests__/setup.ts"]
  }
});
