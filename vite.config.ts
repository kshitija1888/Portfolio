import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// base "./" lets the build work on Vercel and on GitHub Pages project sites.
export default defineConfig({ plugins: [react()], base: "./" });
