import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Required for GitHub Pages project site: https://pythonidaer.github.io/design-system/
  base: '/design-system/',
  plugins: [react()],
});
