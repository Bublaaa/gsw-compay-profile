import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // default, but make it explicit
  },
  // server: {
  //   historyApiFallback: true, // for dev server routing
  // },
});
