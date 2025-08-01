import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://vojtechdeconinck.me',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  trailingSlash: 'always',
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl', 'cs', 'da'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});