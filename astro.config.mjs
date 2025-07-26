import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://vojtadc.github.io',
  base: '/Website',
  output: 'static',
  build: {
    format: 'directory'
  },
  trailingSlash: 'always'
});