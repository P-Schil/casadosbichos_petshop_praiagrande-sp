// @lovable.dev/vite-tanstack-config provides the TanStack Start plugins and project defaults.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "./",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
