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
    // Shared modules under @tomine sit outside this app, so a React import in
    // one of them would otherwise resolve to the main site's own copy. Two
    // Reacts means hooks blow up, so pin everything to this app's copy.
    dedupe: ['react', 'react-dom'],
  },
  server: {
    fs: { allow: [mainSite] },
  },
});
