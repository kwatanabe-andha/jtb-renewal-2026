export type JsonLdCardType = {
  "@type": string
  position: number
  item: {
    "@type": string
    headline: string
    url: string
    author?: {
        "@type": string
        name: string
    }
    datePublished: string
    image?: string
  }
}

export type jsonLdCollectionPageType = {
  "@context": string
  "@type": string
  name: string
  description: string
  url: string
  mainEntity: {
      "@type": string
      itemListOrder: string
      numberOfItems: number
      itemListElement: JsonLdCardType[]
  }
}