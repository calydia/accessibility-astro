import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind(), react()],
  redirects: {
    '/': {
      status: 302,
      destination: '/en/'
    }, 
    '/accessibility-fundamentals/the-basics/what-accessibility-is': {
      status: 302,
      destination: '/en/accessibility-fundamentals/the-basics/what-accessibility-is'
    },
    '/accessibility-fundamentals/the-basics/who-accessibility-is-for': {
      status: 302,
      destination: '/en/accessibility-fundamentals/the-basics/who-accessibility-is-for'
    },
    '/accessibility-fundamentals/the-basics/why-focus-on-accessibility': {
      status: 302,
      destination: '/en/accessibility-fundamentals/the-basics/why-focus-on-accessibility'
    },
    '/accessibility-fundamentals/the-basics/accessibility-statement': {
      status: 302,
      destination: '/en/accessibility-fundamentals/the-basics/accessibility-statement'
    },
    '/accessibility-fundamentals/the-basics/glossary': {
      status: 302,
      destination: '/en/accessibility-fundamentals/the-basics/glossary'
    },
    '/accessibility-fundamentals/types-of-disabilities/types-of-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/types-of-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/auditory-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/auditory-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/cognitive-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/cognitive-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/deaf-blindness': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/deaf-blindness'
    },
    '/accessibility-fundamentals/types-of-disabilities/mobility-flexibility-and-body-structure-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/mobility-flexibility-and-body-structure-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/multiple-compound-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/multiple-compound-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/psychological-psychiatric-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/psychological-psychiatric-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/seizure-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/seizure-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/speech-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/speech-disabilities'
    },
    '/accessibility-fundamentals/types-of-disabilities/visual-disabilities': {
      status: 302,
      destination: '/en/accessibility-fundamentals/types-of-disabilities/visual-disabilities'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/medical-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/medical-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/social-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/social-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/biopsychosocial-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/biopsychosocial-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/charity-or-tragedy-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/charity-or-tragedy-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/economical-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/economical-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/functional-solutions-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/functional-solutions-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/social-identity-or-cultural-affliation-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/social-identity-or-cultural-affliation-model'
    },
    '/accessibility-fundamentals/theoretical-models-of-disability/other-models': {
      status: 302,
      destination: '/en/accessibility-fundamentals/theoretical-models-of-disability/other-models'
    },
    '/accessibility-fundamentals/accessibility-and-universal-design/universal-design': {
      status: 302,
      destination: '/en/accessibility-fundamentals/accessibility-and-universal-design/universal-design'
    },
    '/accessibility-fundamentals/accessibility-and-universal-design/universal-design-for-learning': {
      status: 302,
      destination: '/en/accessibility-fundamentals/accessibility-and-universal-design/universal-design-for-learning'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/international-declarations-and-conventions-on-disability-rights': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/international-declarations-and-conventions-on-disability-rights'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/define-accessibility-maturity-with-the-capability-maturity-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/define-accessibility-maturity-with-the-capability-maturity-model'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessibility-maturity-model': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessibility-maturity-model'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessible-technology-charter': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/business-disability-forums-accessible-technology-charter'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-policy': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-policy'
    },
    '/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-requirements-in-finland': {
      status: 302,
      destination: '/en/accessibility-fundamentals/standards-laws-and-management-strategies/accessibility-requirements-in-finland'
    },
    '/accessibility-fundamentals/places-to-learn-about-accessibility/web-resources-on-accessibility': {
      status: 302,
      destination: '/en/accessibility-fundamentals/places-to-learn-about-accessibility/web-resources-on-accessibility'
    },
    '/accessibility-fundamentals/places-to-learn-about-accessibility/courses-on-accessibility': {
      status: 302,
      destination: '/en/accessibility-fundamentals/places-to-learn-about-accessibility/courses-on-accessibility'
    },
    '/accessibility-fundamentals/places-to-learn-about-accessibility/articles-and-books-on-accessibility': {
      status: 302,
      destination: '/en/accessibility-fundamentals/places-to-learn-about-accessibility/articles-and-books-on-accessibility'
    },
    '/accessibility-fundamentals/places-to-learn-about-accessibility/follow-accessibility-content-in-social-media': {
      status: 302,
      destination: '/en/accessibility-fundamentals/places-to-learn-about-accessibility/follow-accessibility-content-in-social-media'
    },
    '/testing-for-accessibility/accessibility-audit/what-is-an-accessibility-audit': {
      status: 302,
      destination: '/en/testing-for-accessibility/accessibility-audit/what-is-an-accessibility-audit'
    },
    '/testing-for-accessibility/accessibility-audit/how-to-do-accessibility-auditing': {
      status: 302,
      destination: '/en/testing-for-accessibility/accessibility-audit/how-to-do-accessibility-auditing'
    },
    '/testing-for-accessibility/accessibility-audit/fixing-audit-report-findings': {
      status: 302,
      destination: '/en/testing-for-accessibility/accessibility-audit/fixing-audit-report-findings'
    },
    '/testing-for-accessibility/accessibility-audit/tools-and-techniques-for-accessibility-testing': {
      status: 302,
      destination: '/en/testing-for-accessibility/accessibility-audit/tools-and-techniques-for-accessibility-testing'
    },
    '/testing-for-accessibility/using-assistive-technologies/what-are-assistive-technologies': {
      status: 302,
      destination: '/en/testing-for-accessibility/using-assistive-technologies/what-are-assistive-technologies'
    },
    '/testing-for-accessibility/using-assistive-technologies/what-screen-reader-to-use-for-testing': {
      status: 302,
      destination: '/en/testing-for-accessibility/using-assistive-technologies/what-screen-reader-to-use-for-testing'
    },
    '/testing-for-accessibility/using-assistive-technologies/using-nvda': {
      status: 302,
      destination: '/en/testing-for-accessibility/using-assistive-technologies/using-nvda'
    },
    '/testing-for-accessibility/using-assistive-technologies/using-voiceover': {
      status: 302,
      destination: '/en/testing-for-accessibility/using-assistive-technologies/using-voiceover'
    },
    '/ensuring-accessibility-compliance/wcag/what-is-wcag': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/what-is-wcag'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-terminology': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-terminology'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-tips-perceivable': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-tips-perceivable'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-tips-operable': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-tips-operable'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-tips-understandable': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-tips-understandable'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-tips-robust': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-tips-robust'
    },
    '/ensuring-accessibility-compliance/wcag/wcag-2-2': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wcag/wcag-2-2'
    },
    '/ensuring-accessibility-compliance/atag/what-is-atag': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/atag/what-is-atag'
    },
    '/ensuring-accessibility-compliance/atag/atag-terminology': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/atag/atag-terminology'
    },
    '/ensuring-accessibility-compliance/atag/atag-structure': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/atag/atag-structure'
    },
    '/ensuring-accessibility-compliance/atag/checking-for-atag-conformance': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/atag/checking-for-atag-conformance'
    },
    '/ensuring-accessibility-compliance/wai-aria/what-is-wai-aria': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wai-aria/what-is-wai-aria'
    },
    '/ensuring-accessibility-compliance/wai-aria/aria-roles': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wai-aria/aria-roles'
    },
    '/ensuring-accessibility-compliance/wai-aria/aria-properties': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wai-aria/aria-properties'
    },
    '/ensuring-accessibility-compliance/wai-aria/aria-live-regions': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wai-aria/aria-live-regions'
    },
    '/ensuring-accessibility-compliance/wai-aria/aria-states': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/wai-aria/aria-states'
    },
    '/ensuring-accessibility-compliance/for-designers/structure-and-functionality': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/structure-and-functionality'
    },
    '/ensuring-accessibility-compliance/for-designers/fonts': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/fonts'
    },
    '/ensuring-accessibility-compliance/for-designers/color-contrast-and-other-visual-cues': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/color-contrast-and-other-visual-cues'
    },
    '/ensuring-accessibility-compliance/for-designers/design-tips-for-text-content': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/design-tips-for-text-content'
    },
    '/ensuring-accessibility-compliance/for-designers/designing-forms': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/designing-forms'
    },
    '/ensuring-accessibility-compliance/for-designers/designing-animations-and-moving-content': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/designing-animations-and-moving-content'
    },
    '/ensuring-accessibility-compliance/for-designers/helpful-resources-for-designers': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-designers/helpful-resources-for-designers'
    },
    '/ensuring-accessibility-compliance/for-developers/page-structure-and-functionality': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/page-structure-and-functionality'
    },
    '/ensuring-accessibility-compliance/for-developers/language': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/language'
    },
    '/ensuring-accessibility-compliance/for-developers/forms': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/forms'
    },
    '/ensuring-accessibility-compliance/for-developers/iframes': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/iframes'
    },
    '/ensuring-accessibility-compliance/for-developers/developing-for-keyboard-and-screen-reader-users': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/developing-for-keyboard-and-screen-reader-users'
    },
    '/ensuring-accessibility-compliance/for-developers/website-styles': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/website-styles'
    },
    '/ensuring-accessibility-compliance/for-developers/helpful-resources-for-developers': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-developers/helpful-resources-for-developers'
    },
    '/ensuring-accessibility-compliance/for-content-creators/writing-website-text-content': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-content-creators/writing-website-text-content'
    },
    '/ensuring-accessibility-compliance/for-content-creators/creating-non-text-content': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-content-creators/creating-non-text-content'
    },
    '/ensuring-accessibility-compliance/for-content-creators/creating-documents': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-content-creators/creating-documents'
    },
    '/ensuring-accessibility-compliance/for-content-creators/social-media-and-accessibility': {
      status: 302,
      destination: '/en/ensuring-accessibility-compliance/for-content-creators/social-media-and-accessibility'
    },
    '/demo/perceivable/1-1-1-non-text-content-alt-attribute': {
      status: 302,
      destination: '/en/demo/perceivable/1-1-1-non-text-content-alt-attribute'
    },
    '/demo/perceivable/1-3-1-tables': {
      status: 302,
      destination: '/en/demo/perceivable/1-3-1-tables'
    },
    '/demo/perceivable/1-4-3-contrast': {
      status: 302,
      destination: '/en/demo/perceivable/1-4-3-contrast'
    },
    '/demo/operable/2-1-1-keyboard': {
      status: 302,
      destination: '/en/demo/operable/2-1-1-keyboard'
    },
    '/demo/operable/2-4-7-focus-visible': {
      status: 302,
      destination: '/en/demo/operable/2-4-7-focus-visible'
    },
    '/demo/operable/2-5-3-label-in-name': {
      status: 302,
      destination: '/en/demo/operable/2-5-3-label-in-name'
    },
    '/demo/understandable/3-1-2-language-of-parts': {
      status: 302,
      destination: '/en/demo/understandable/3-1-2-language-of-parts'
    },
    '/demo/robust/4-1-2-name-role-value': {
      status: 302,
      destination: '/en/demo/robust/4-1-2-name-role-value'
    },
    '/demo/other/form-field-instructions': {
      status: 302,
      destination: '/en/demo/other/form-field-instructions'
    },
    '/demo/other/hashtags-and-screen-readers': {
      status: 302,
      destination: '/en/demo/other/hashtags-and-screen-readers'
    },
    '/demo/other/pseudo-elements-before-and-after': {
      status: 302,
      destination: '/en/demo/other/pseudo-elements-before-and-after'
    },
    '/demo/other/removing-list-style-from-a-list-element': {
      status: 302,
      destination: '/en/demo/other/removing-list-style-from-a-list-element'
    },
    '/search': {
      status: 302,
      destination: '/en/search'
    },
    '/info/about-me': {
      status: 302,
      destination: '/en/info/about-me'
    },
    '/info/sitemap': {
      status: 302,
      destination: '/en/info/sitemap'
    },
    '/info/my-accessibility-statement': {
      status: 302,
      destination: '/en/info/my-accessibility-statement'
    },
  }
});