export interface glossaryData {
  data: {
    glossaryTerms: {
      attributes: {
        termName: string,
        termDescription: string
      }
    }
  }
}

export interface glossaryItem {
  attributes: {
    termName: string,
    termDescription: string
  }
}
