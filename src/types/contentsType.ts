export type PageInfoType = {
  totalCnt: number
  perPage: number
  totalPageCnt: number
  pageNo: number
  firstIndex: number
  lastIndex: number
  path: string
  param: string
  startPageNo: number
  endPageNo: number
}

export type CardType = {
  topics_id: number
  thumb: { desc: string, url: string }
  logo?: { desc: string, url: string }
  contribution?: boolean
  category?: string
  shoulderSeries?: string
  shoulderAnd?: string
  shoulder?: string
  subject: string
  auxiliary?: string
  summary?: string
  author?: string
  authorTitle?: string
  tag?: [ { name: string, slag: string } ]
  download?: { url?: string }
  ymd: string
}

export type FootCardType = {
  topics_id: number
  thumb: { desc: string, url: string }
  logo?: { desc: string, url: string }
  category?: string
  subject: string
  auxiliary?: string
  summary?: string
}