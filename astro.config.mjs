import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://vojtechdeconinck.me',
  output: 'static',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});