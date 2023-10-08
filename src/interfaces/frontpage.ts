export default interface FrontPage {
  id: number;
  attributes: {
    title: string;
    metaDescription: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}