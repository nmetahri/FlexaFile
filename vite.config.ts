/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [!process.env.VITEST && reactRouter(), tsconfigPaths()],
  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      "@rr": "/.react-router",
      "@theme": "/app/theme",
      "@pages": "/app/theme/pages",
      "@assets": "/app/theme/assets",
      "@components": "/app/theme/components",
      "@hooks": "/app/theme/hooks",
      "@utils": "/app/theme/utils",
      "@providers": "/app/theme/providers"
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["app/__tests__/setup.ts"]
  }
});
