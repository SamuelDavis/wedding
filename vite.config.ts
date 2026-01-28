import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  plugins: [webfontDownload(), solid()],
});
