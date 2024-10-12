import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://a11y.ing',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fi: 'fi'
      }
    }
  }), tailwind(), react(), icon()],
  redirects: {
    '/fi/perusteet/vammaisuuden-tyypit/psykologiset-psykiatriset-vammat': '/fi/perusteet/vammaisuuden-tyypit/psykologiset-psyykkiset-vammat'
  }
});