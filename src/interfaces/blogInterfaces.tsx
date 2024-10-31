export interface BlogData {
  data: [{ title: string, path: string, created: string, image?: string }]
}

export interface ExoveBlog {
  data: [{
    attributes: { title: string, postDate: string, postUrl: string, blogImage?: string }
  }]
}