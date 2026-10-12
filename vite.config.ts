import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Library build: ESM entry points, React and Heroicons stay external, CSS goes to dist/styles.css.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        icon: resolve(__dirname, 'src/icon/index.ts'),
        tokens: resolve(__dirname, 'src/tokens/index.ts'),
      },
      formats: ['es'],
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: (id) => /^(react|react-dom)(\/|$)/.test(id) || id.startsWith('@heroicons/react'),
      output: { banner: (chunk) => (chunk.name === 'tokens' ? '' : "'use client';") },
    },
  },
});
