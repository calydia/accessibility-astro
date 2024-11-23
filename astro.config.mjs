import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://a11y.ing/',
  trailingSlash: 'always',
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
    '/fi/perusteet/vammaisuuden-tyypit/psykologiset-psykiatriset-vammat': '/fi/perusteet/vammaisuuden-tyypit/psykologiset-psyykkiset-vammat/',
    '/en/fundamentals/accessibility-and-universal-design/universal-design': '/en/fundamentals/the-reach-of-accessibility/universal-design/',
    '/en/fundamentals/accessibility-and-universal-design/universal-design-for-learning': '/en/fundamentals/the-reach-of-accessibility/universal-design-for-learning/',
    '/fi/perusteet/saavutettavuus-ja-yleissuunnittelu/yleissuunnittelu': '/fi/perusteet/saavutettavuuden-vaikutukset/yleissuunnittelu/',
    '/fi/perusteet/saavutettavuus-ja-yleissuunnittelu/oppimisen-yleissuunnittelu': '/fi/perusteet/saavutettavuuden-vaikutukset/oppimisen-yleissuunnittelu/'
  }
});