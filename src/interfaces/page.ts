export default interface Page {
  id: number;
  attributes: {
    title: string;
    metaDescription: string;
    content: string;
    slug: string;
    pageUrl: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    sourceMaterial: string;
    localizations: {
      data: [{
        attributes: {
          pageUrl: string
        }
      }]
    }
  };
}