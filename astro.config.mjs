import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://a11y.sanna.ninja',
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
    '/fi/saavutettavuuden-varmistaminen/wcag/mika-on-wcag': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/mika-on-wcag'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/yleista-tietoa-wcagn-termistosta': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/yleista-tietoa-wcagn-termistosta'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/wcag-vinkkeja-havaittava': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/wcag-vinkkeja-havaittava'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/wcag-vinkkeja-hallittava': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/wcag-vinkkeja-hallittava'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/wcag-vinkkeja-ymmarrettava': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/wcag-vinkkeja-ymmarrettava'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/wcag-vinkkeja-toimintavarma': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/wcag-vinkkeja-toimintavarma'
    },
    '/fi/saavutettavuuden-varmistaminen/wcag/wcag-2-2-sisalto': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wcag/wcag-2-2-sisalto'
    },
    '/fi/saavutettavuuden-varmistaminen/atag/mika-on-atag': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/atag/mika-on-atag'
    },
    '/fi/saavutettavuuden-varmistaminen/atag/atag-termistoa': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/atag/atag-termistoa'
    },
    '/fi/saavutettavuuden-varmistaminen/atag/atagin-rakenne': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/atag/atagin-rakenne'
    },
    '/fi/saavutettavuuden-varmistaminen/atag/miten-tarkistaa-atagin-vaatimustenmukaisuus': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/atag/miten-tarkistaa-atagin-vaatimustenmukaisuus'
    },
    '/fi/saavutettavuuden-varmistaminen/wai-aria/mika-on-wai-aria': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wai-aria/mika-on-wai-aria'
    },
    '/fi/saavutettavuuden-varmistaminen/wai-aria/aria-roolit': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wai-aria/aria-roolit'
    },
    '/fi/saavutettavuuden-varmistaminen/wai-aria/aria-ominaisuudet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wai-aria/aria-ominaisuudet'
    },
    '/fi/saavutettavuuden-varmistaminen/wai-aria/aria-tilat': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wai-aria/aria-tilat'
    },
    '/fi/saavutettavuuden-varmistaminen/wai-aria/aria-live-alueet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/wai-aria/aria-live-alueet'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/rakenne-ja-toiminnallisuudet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/rakenne-ja-toiminnallisuudet'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/fontit': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/fontit'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/vari-kontrasti-ja-muut-visuaaliset-vihjeet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/vari-kontrasti-ja-muut-visuaaliset-vihjeet'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/vinkkeja-tekstisisallon-suunnitteluun': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/vinkkeja-tekstisisallon-suunnitteluun'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/lomakkeiden-suunnittelu': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/lomakkeiden-suunnittelu'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/animaatioiden-ja-liikkuvan-sisallon-suunnittelu': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/animaatioiden-ja-liikkuvan-sisallon-suunnittelu'
    },
    '/fi/saavutettavuuden-varmistaminen/suunnittelijoille/materiaalia-ja-tyokaluja-suunnittelijoille': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/suunnittelijoille/materiaalia-ja-tyokaluja-suunnittelijoille'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/rakenne-ja-toiminnallisuus': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/rakenne-ja-toiminnallisuus'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/kieli': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/kieli'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/lomakkeet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/lomakkeet'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/iframet': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/iframet'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/nappaimistoa-ja-ruudunlukijaa-kayttavien-huomioiminen': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/nappaimistoa-ja-ruudunlukijaa-kayttavien-huomioiminen'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/sivuston-tyylit': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/sivuston-tyylit'
    },
    '/fi/saavutettavuuden-varmistaminen/kehittajille/hyodyllista-materiaalia-kehittajille': {
      status: 302,
      destination: '/fi/tekninen-saavutettavuus/kehittajille/hyodyllista-materiaalia-kehittajille'
    },
    '/en/ensuring-accessibility-compliance/wcag/what-is-wcag': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/what-is-wcag'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-terminology': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-terminology'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-tips-perceivable': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-tips-perceivable'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-tips-operable': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-tips-operable'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-tips-understandable': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-tips-understandable'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-tips-robust': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-tips-robust'
    },
    '/en/ensuring-accessibility-compliance/wcag/wcag-2-2': {
      status: 302,
      destination: '/en/technical-accessibility/wcag/wcag-2-2'
    },
    '/en/ensuring-accessibility-compliance/atag/what-is-atag': {
      status: 302,
      destination: '/en/technical-accessibility/atag/what-is-atag'
    },
    '/en/ensuring-accessibility-compliance/atag/atag-terminology': {
      status: 302,
      destination: '/en/technical-accessibility/atag/atag-terminology'
    },
    '/en/ensuring-accessibility-compliance/atag/atag-structure': {
      status: 302,
      destination: '/en/technical-accessibility/atag/atag-structure'
    },
    '/en/ensuring-accessibility-compliance/atag/checking-for-atag-conformance': {
      status: 302,
      destination: '/en/technical-accessibility/atag/checking-for-atag-conformance'
    },
    '/en/ensuring-accessibility-compliance/wai-aria/what-is-wai-aria': {
      status: 302,
      destination: '/en/technical-accessibility/wai-aria/what-is-wai-aria'
    },
    '/en/ensuring-accessibility-compliance/wai-aria/aria-roles': {
      status: 302,
      destination: '/en/technical-accessibility/wai-aria/aria-roles'
    },
    '/en/ensuring-accessibility-compliance/wai-aria/aria-properties': {
      status: 302,
      destination: '/en/technical-accessibility/wai-aria/aria-properties'
    },
    '/en/ensuring-accessibility-compliance/wai-aria/aria-live-regions': {
      status: 302,
      destination: '/en/technical-accessibility/wai-aria/aria-live-regions'
    },
    '/en/ensuring-accessibility-compliance/wai-aria/aria-states': {
      status: 302,
      destination: '/en/technical-accessibility/wai-aria/aria-states'
    },
    '/en/ensuring-accessibility-compliance/for-designers/structure-and-functionality': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/structure-and-functionality'
    },
    '/en/ensuring-accessibility-compliance/for-designers/fonts': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/fonts'
    },
    '/en/ensuring-accessibility-compliance/for-designers/design-tips-for-text-content': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/design-tips-for-text-content'
    },
    '/en/ensuring-accessibility-compliance/for-designers/designing-forms': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/designing-forms'
    },
    '/en/ensuring-accessibility-compliance/for-designers/designing-animations-and-moving-content': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/designing-animations-and-moving-content'
    },
    '/en/ensuring-accessibility-compliance/for-designers/helpful-resources-for-designers': {
      status: 302,
      destination: '/en/technical-accessibility/for-designers/helpful-resources-for-designers'
    },
    '/en/ensuring-accessibility-compliance/for-developers/page-structure-and-functionality': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/page-structure-and-functionality'
    },
    '/en/ensuring-accessibility-compliance/for-developers/language': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/language'
    },
    '/en/ensuring-accessibility-compliance/for-developers/forms': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/forms'
    },
    '/en/ensuring-accessibility-compliance/for-developers/iframes': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/iframes'
    },
    '/en/ensuring-accessibility-compliance/for-developers/developing-for-keyboard-and-screen-reader-users': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/developing-for-keyboard-and-screen-reader-users'
    },
    '/en/ensuring-accessibility-compliance/for-developers/website-styles': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/website-styles'
    },
    '/en/ensuring-accessibility-compliance/for-developers/helpful-resources-for-developers': {
      status: 302,
      destination: '/en/technical-accessibility/for-developers/helpful-resources-for-developers'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/international-declarations-and-conventions-on-disability-rights': {
      status: 302,
      destination: '/en/fundamentals/standards-and-laws/international-declarations-and-conventions-on-disability-rights'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/define-accessibility-maturity-with-the-capability-maturity-model': {
      status: 302,
      destination: '/en/fundamentals/accessibility-management-strategies/define-accessibility-maturity-with-the-capability-maturity-model'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessibility-maturity-model': {
      status: 302,
      destination: '/en/fundamentals/accessibility-management-strategies/business-disability-forums-accessibility-maturity-model'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessible-technology-charter': {
      status: 302,
      destination: '/en/fundamentals/accessibility-management-strategies/business-disability-forums-accessible-technology-charter'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-policy': {
      status: 302,
      destination: '/en/fundamentals/accessibility-management-strategies/accessibility-policy'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/vammaisten-oikeuksia-koskevat-kansainvaliset-julistukset-ja-yleissopimukset': {
      status: 302,
      destination: '/fi/perusteet/lait-ja-standardit/vammaisten-oikeuksia-koskevat-kansainvaliset-julistukset-ja-yleissopimukset'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/maarittele-saavutettavuden-kypsyysaste-kypsyyskyvykkyysmallin-avulla': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuuden-hallintastrategiat/maarittele-saavutettavuden-kypsyysaste-kypsyyskyvykkyysmallin-avulla'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/business-disability-forumin-esteettomyyden-kypsyysmalli': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuuden-hallintastrategiat/business-disability-forumin-esteettomyyden-kypsyysmalli'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/business-disability-forumin-esteettoman-teknologian-peruskirja': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuuden-hallintastrategiat/business-disability-forumin-esteettoman-teknologian-peruskirja'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/saavutettavuuskaytannot': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuuden-hallintastrategiat/saavutettavuuskaytannot'
    },
    '/fi/saavutettavuuden-varmistaminen/sisallontuottajille/saavutettavan-tekstisisallon-kirjoittaminen': {
      status: 302,
      destination: '/fi/sisallon-saavutettavuus/tekstin-saavutettavuus/saavutettavan-tekstisisallon-kirjoittaminen'
    },
    '/fi/saavutettavuuden-varmistaminen/sisallontuottajille/ei-tekstuaalisen-sisallon-tuottaminen': {
      status: 302,
      destination: '/fi/sisallon-saavutettavuus/mediasisallon-saavutettavuus/kuvien-saavutettavuus'
    },
    '/fi/saavutettavuuden-varmistaminen/sisallontuottajille/saavutettavat-tiedostot': {
      status: 302,
      destination: '/fi/sisallon-saavutettavuus/muun-sisallon-saavutettavuus/saavutettavat-tiedostot'
    },
    '/fi/saavutettavuuden-varmistaminen/sisallontuottajille/sosiaalinen-media-ja-saavutettavuus': {
      status: 302,
      destination: '/fi/sisallon-saavutettavuus/muun-sisallon-saavutettavuus/sosiaalinen-media-ja-saavutettavuus'
    },
    '/en/ensuring-accessibility-compliance/for-content-creators/writing-accessible-text-content': {
      status: 302,
      destination: '/en/content-accessibility/text-content/writing-accessible-text-content'
    },
    '/en/ensuring-accessibility-compliance/for-content-creators/creating-non-text-content': {
      status: 302,
      destination: '/en/content-accessibility/media-content/image-accessibility'
    },
    '/en/ensuring-accessibility-compliance/for-content-creators/creating-documents': {
      status: 302,
      destination: '/en/content-accessibility/other-content/creating-documents'
    },
    '/en/ensuring-accessibility-compliance/for-content-creators/social-media-and-accessibility': {
      status: 302,
      destination: '/en/content-accessibility/other-content/social-media-and-accessibility'
    },
    '/en/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-requirements-in-finland': {
      status: 302,
      destination: '/en/fundamentals/standards-and-laws/accessibility-requirements-in-finland'
    },
    '/fi/saavutettavuuden-perusteet/standardit-lait-ja-hallintastrategiat/saavutettavuusvaatimuksia-suomessa': {
      status: 302,
      destination: '/fi/perusteet/standardit-ja-lait/saavutettavuusvaatimuksia-suomessa'
    },
    '/fi/saavutettavuuden-perusteet/perusjutut/mita-saavutettavuus-on': {
      status: 302,
      destination: '/fi/perusteet/perusjutut/mita-saavutettavuus-on'
    },
    '/fi/saavutettavuuden-perusteet/perusjutut/kenelle-saavutettavuus-on': {
      status: 302,
      destination: '/fi/perusteet/perusjutut/kenelle-saavutettavuus-on'
    },
    '/fi/saavutettavuuden-perusteet/perusjutut/miksi-panostaa-saavutettavuuteen': {
      status: 302,
      destination: '/fi/perusteet/perusjutut/miksi-panostaa-saavutettavuuteen'
    },
    '/fi/saavutettavuuden-perusteet/perusjutut/sanasto': {
      status: 302,
      destination: '/fi/perusteet/perusjutut/sanasto'
    },
    '/fi/saavutettavuuden-perusteet/perusjutut/saavutettavuusseloste': {
      status: 302,
      destination: '/fi/perusteet/perusjutut/saavutettavuusseloste'
    },
    '/en/accessibility-fundamentals/the-basics/what-accessibility-is': {
      status: 302,
      destination: '/en/fundamentals/the-basics/what-accessibility-is'
    },
    '/en/accessibility-fundamentals/the-basics/who-accessibility-is-for': {
      status: 302,
      destination: '/en/fundamentals/the-basics/who-accessibility-is-for'
    },
    '/en/accessibility-fundamentals/the-basics/why-focus-on-accessibility': {
      status: 302,
      destination: '/en/fundamentals/the-basics/why-focus-on-accessibility'
    },
    '/en/accessibility-fundamentals/the-basics/glossary': {
      status: 302,
      destination: '/en/fundamentals/the-basics/glossary'
    },
    '/en/accessibility-fundamentals/the-basics/accessibility-statement': {
      status: 302,
      destination: '/en/fundamentals/the-basics/accessibility-statement'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/types-of-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/types-of-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/auditory-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/auditory-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/cognitive-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/cognitive-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/deaf-blindness': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/deaf-blindness'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/mobility-flexibility-and-body-structure-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/mobility-flexibility-and-body-structure-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/multiple-compound-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/multiple-compound-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/psychological-psychiatric-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/psychological-psychiatric-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/seizure-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/seizure-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/speech-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/speech-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disabilities/visual-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disabilities/visual-disabilities'
    },
    '/en/accessibility-fundamentals/types-of-disability/speech-disabilities': {
      status: 302,
      destination: '/en/fundamentals/types-of-disability/speech-disabilities'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/vammaisuuden-tyypit': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/vammaisuuden-tyypit'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/kuulohairiot': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/kuulohairiot'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/kognitiiviset-hairiot': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/kognitiiviset-hairiot'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/kuurosokeus': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/kuurosokeus'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/liikkuvuus-joustavuus-ja-ruumiinrakenteeseen-liittyvat-vammat': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/liikkuvuus-joustavuus-ja-ruumiinrakenteeseen-liittyvat-vammat'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/monivammaisuus-yhdistelmavammaisuus': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/monivammaisuus-yhdistelmavammaisuus'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/psykologiset-psykiatriset-vammat': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/psykologiset-psykiatriset-vammat'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/kohtausvammaisuus': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/kohtausvammaisuus'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/puhevammaisuus': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/puhevammaisuus'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-tyypit/nakovammaisuus': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-tyypit/nakovammaisuus'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/laaketieteellinen-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/laaketieteellinen-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/sosiaalinen-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/sosiaalinen-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/biopsykososiaalinen-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/biopsykososiaalinen-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/hyvantekevaisyys-tai-tragediamalli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/hyvantekevaisyys-tai-tragediamalli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/taloudellinen-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/taloudellinen-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/toiminnallisten-ratkaisujen-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/toiminnallisten-ratkaisujen-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/sosiaalisen-identiteetin-tai-kulttuurisidonnaisuuden-malli': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/sosiaalisen-identiteetin-tai-kulttuurisidonnaisuuden-malli'
    },
    '/fi/saavutettavuuden-perusteet/vammaisuuden-teoreettiset-mallit/muita-malleja': {
      status: 302,
      destination: '/fi/perusteet/vammaisuuden-teoreettiset-mallit/muita-malleja'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/medical-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/medical-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/social-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/social-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/biopsychosocial-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/biopsychosocial-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/charity-or-tragedy-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/charity-or-tragedy-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/economical-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/economical-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/functional-solutions-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/functional-solutions-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/social-identity-or-cultural-affliation-model': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/social-identity-or-cultural-affliation-model'
    },
    '/en/accessibility-fundamentals/theoretical-models-of-disability/other-models': {
      status: 302,
      destination: '/en/fundamentals/theoretical-models-of-disability/other-models'
    },
    '/fi/saavutettavuuden-perusteet/saavutettavuus-ja-yleissuunnittelu/yleissuunnittelu': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuus-ja-yleissuunnittelu/yleissuunnittelu'
    },
    '/fi/saavutettavuuden-perusteet/saavutettavuus-ja-yleissuunnittelu/oppimisen-yleissuunnittelu': {
      status: 302,
      destination: '/fi/perusteet/saavutettavuus-ja-yleissuunnittelu/oppimisen-yleissuunnittelu'
    },
    '/en/accessibility-fundamentals/accessibility-and-universal-design/universal-design': {
      status: 302,
      destination: '/en/fundamentals/accessibility-and-universal-design/universal-design'
    },
    '/en/accessibility-fundamentals/accessibility-and-universal-design/universal-design-for-learning': {
      status: 302,
      destination: '/en/fundamentals/accessibility-and-universal-design/universal-design-for-learning'
    },
    '/en/testing-for-accessibility/accessibility-audit/what-is-an-accessibility-audit': {
      status: 302,
      destination: '/en/testing/accessibility-audit/what-is-an-accessibility-audit'
    },
    '/en/testing-for-accessibility/accessibility-audit/how-to-do-accessibility-auditing': {
      status: 302,
      destination: '/en/testing/accessibility-audit/how-to-do-accessibility-auditing'
    },
    '/en/testing-for-accessibility/accessibility-audit/fixing-audit-report-findings': {
      status: 302,
      destination: '/en/testing/accessibility-audit/fixing-audit-report-findings'
    },
    '/en/testing-for-accessibility/accessibility-audit/tools-and-techniques-for-accessibility-testing': {
      status: 302,
      destination: '/en/testing/accessibility-audit/tools-and-techniques-for-accessibility-testing'
    },
    '/fi/saavutettavuuden-testaaminen/saavutettavuusauditointi/mika-on-saavutettavuusauditointi': {
      status: 302,
      destination: '/fi/testaaminen/saavutettavuusauditointi/mika-on-saavutettavuusauditointi'
    },
    '/fi/saavutettavuuden-testaaminen/saavutettavuusauditointi/miten-tehda-saavutettavuusauditointi': {
      status: 302,
      destination: '/fi/testaaminen/saavutettavuusauditointi/miten-tehda-saavutettavuusauditointi'
    },
    '/fi/saavutettavuuden-testaaminen/saavutettavuusauditointi/auditointiraportissa-listattujen-ongelmien-korjaus': {
      status: 302,
      destination: '/fi/testaaminen/saavutettavuusauditointi/auditointiraportissa-listattujen-ongelmien-korjaus'
    },
    '/fi/saavutettavuuden-testaaminen/saavutettavuusauditointi/tyokaluja-ja-tekniikoita-saavutettavuuden-testaamiseen': {
      status: 302,
      destination: '/fi/testaaminen/saavutettavuusauditointi/tyokaluja-ja-tekniikoita-saavutettavuuden-testaamiseen'
    },
    '/fi/saavutettavuuden-testaaminen/avustavien-teknologioiden-kayttaminen/mita-ovat-avustavat-teknologiat': {
      status: 302,
      destination: '/fi/testaaminen/avustavien-teknologioiden-kayttaminen/mita-ovat-avustavat-teknologiat'
    },
    '/fi/saavutettavuuden-testaaminen/avustavien-teknologioiden-kayttaminen/mita-ruudunlukijaa-kayttaa-testaamiseen': {
      status: 302,
      destination: '/fi/testaaminen/avustavien-teknologioiden-kayttaminen/mita-ruudunlukijaa-kayttaa-testaamiseen'
    },
    '/fi/saavutettavuuden-testaaminen/avustavien-teknologioiden-kayttaminen/nvdan-kayttaminen': {
      status: 302,
      destination: '/fi/testaaminen/avustavien-teknologioiden-kayttaminen/nvdan-kayttaminen'
    },
    '/fi/saavutettavuuden-testaaminen/avustavien-teknologioiden-kayttaminen/voiceoverin-kayttaminen': {
      status: 302,
      destination: '/fi/testaaminen/avustavien-teknologioiden-kayttaminen/voiceoverin-kayttaminen'
    },
    '/en/testing-for-accessibility/using-assistive-technologies/what-are-assistive-technologies': {
      status: 302,
      destination: '/en/testing/using-assistive-technologies/what-are-assistive-technologies'
    },
    '/en/testing-for-accessibility/using-assistive-technologies/what-screen-reader-to-use-for-testing': {
      status: 302,
      destination: '/en/testing/using-assistive-technologies/what-screen-reader-to-use-for-testing'
    },
    '/en/testing-for-accessibility/using-assistive-technologies/using-nvda': {
      status: 302,
      destination: '/en/testing/using-assistive-technologies/using-nvda'
    },
    '/en/testing-for-accessibility/using-assistive-technologies/using-voiceover': {
      status: 302,
      destination: '/en/testing/using-assistive-technologies/using-voiceover'
    },
    '/fi/saavutettavuuden-perusteet/missa-oppia-saavutettavuudesta/artikkeleita-ja-kirjoja-saavutettavuudesta': {
      status: 302,
      destination: '/fi/'
    },
    '/fi/saavutettavuuden-perusteet/missa-oppia-saavutettavuudesta/kursseja-saavutettavuudesta': {
      status: 302,
      destination: '/fi/'
    },
    '/fi/saavutettavuuden-perusteet/missa-oppia-saavutettavuudesta/saavutettavuudesta-sosiaalisessa-mediassa': {
      status: 302,
      destination: '/fi/'
    },
    '/fi/saavutettavuuden-perusteet/missa-oppia-saavutettavuudesta/saavutettavuusmateriaalia-netissa': {
      status: 302,
      destination: '/fi/'
    },
    '/en/accessibility-fundamentals/places-to-learn-about-accessibility/web-resources-on-accessibility': {
      status: 302,
      destination: '/en/'
    },
    '/en/accessibility-fundamentals/places-to-learn-about-accessibility/courses-on-accessibility': {
      status: 302,
      destination: '/en/'
    },
    '/en/accessibility-fundamentals/places-to-learn-about-accessibility/articles-and-books-on-accessibility': {
      status: 302,
      destination: '/en/'
    },
    '/en/accessibility-fundamentals/places-to-learn-about-accessibility/follow-accessibility-content-in-social-media': {
      status: 302,
      destination: '/en/'
    },
  }
});