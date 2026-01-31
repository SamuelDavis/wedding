import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import webfont from "vite-plugin-webfont-dl";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwind(), webfont(), solid()],
});
