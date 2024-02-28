import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
	build: { chunkSizeWarningLimit: 1200 }
});
