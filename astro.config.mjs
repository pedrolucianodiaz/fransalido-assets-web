// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Config para GitHub Pages (project site): https://<user>.github.io/<repo>/
  site: 'https://pedrolucianodiaz.github.io',
  base: '/fransalido-assets-web',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
