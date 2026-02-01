import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import webfont from "vite-plugin-webfont-dl";
import tailwind from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [imagetools(), tailwind(), webfont(), solid()],
});
