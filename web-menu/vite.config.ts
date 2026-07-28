import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const mainSite = path.resolve(__dirname, '..');

// This site is standalone, but it reads the menu (and the dish photos) from the
// main site's src/data/menu.ts so a correction only has to be made in one place.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tomine': path.resolve(mainSite, 'src'),
    },
  },
  server: {
    fs: { allow: [mainSite] },
  },
});
