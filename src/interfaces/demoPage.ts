export default interface DemoPage {
  id: number;
  attributes: {
    title: string,
    slug: string,
    metaDescription: string,
    locale: string,
    introduction: string,
    problematicExample: string,
    betterExample: string,
    finalComments: string,
    pageUrl: string,
    localizations: {
      data: [{
        attributes: {
          pageUrl: string
        }
      }]
    }
  };
}