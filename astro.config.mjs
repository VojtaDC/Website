import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://JouwGitHubUsername.github.io',
  base: '/repository-naam',
  output: 'static',
});