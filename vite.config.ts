import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are loaded correctly if deployed to a sub-path (e.g. GitHub Pages)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});