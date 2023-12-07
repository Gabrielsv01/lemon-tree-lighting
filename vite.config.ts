import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://gabrielsv01.github.io/lemon-tree-lighting.github.io/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@public": "/public",
      "@atoms": "/src/atoms",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@services": "/src/services",
      "@interfaces": "/src/interfaces",
      "@theme": "/src/theme",
      "@layouts": "/src/layouts",
      "@types": "/src/types",
      "@hocs": "/src/hocs",
      "@lang": "/src/lang",
      "@contexts": "/src/contexts",
      "@libraries": "/src/libraries",
      "@context": "/src/context",
      "@constants": "/src/constants",
      "test-utils": "/src/test-utils",
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build: {
    outDir: "lemon-tree-lighting.github.io",
  },
});
