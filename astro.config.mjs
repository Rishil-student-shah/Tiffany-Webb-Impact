// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'middleware'
  }),
  devToolbar: {
    enabled: false
  },
  redirects: {
    '/speaking': {
      status: 301,
      destination: '/services'
    },
    '/book': {
      status: 301,
      destination: '/work-with-tiffany'
    }
  }
});
