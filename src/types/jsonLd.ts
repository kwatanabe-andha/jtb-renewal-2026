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