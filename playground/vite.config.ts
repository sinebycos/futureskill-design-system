import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// The component gallery. Imports the package source directly, so edits show up live.
export default defineConfig({
  root: resolve(__dirname),
  base: './',
  plugins: [react()],
  resolve: { alias: [{ find: /^@futureskill\/design-system$/, replacement: resolve(__dirname, '../src/index.ts') }, { find: /^@futureskill\/design-system\/(.*)$/, replacement: resolve(__dirname, '../src/$1') }] },
  build: { outDir: resolve(__dirname, '../dist-playground'), emptyOutDir: true },
});
