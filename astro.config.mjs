import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wiseleadersacademy.com',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/about_us') &&
        !page.includes('/new-page'),
    }),
  ],
});
