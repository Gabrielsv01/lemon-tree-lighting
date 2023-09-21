import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      public: "/public",
      atoms: "/src/atoms",
      components: "/src/components",
      pages: "/src/pages",
      hooks: "/src/hooks",
      utils: "/src/utils",
      assets: "/src/assets",
      services: "/src/services",
      interfaces: "/src/interfaces",
      theme: "/src/theme",
      layouts: "/src/layouts",
      types: "/src/types",
      hocs: "/src/hocs",
      lang: "/src/lang",
      contexts: "/src/contexts",
      libraries: "/src/libraries",
      context: "/src/context",
      constants: "/src/constants",
      "test-utils": "/src/test-utils",
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
});
