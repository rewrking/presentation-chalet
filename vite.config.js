import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
	base: "/presentation-chalet/",
	build: { chunkSizeWarningLimit: 1200, minify: true }
});
