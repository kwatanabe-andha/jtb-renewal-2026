import { ImgType } from "./common"

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
  ymd?: string
  subject: string
  topics_group_id: number
  slug?: string
  thumb: ImgType
  logo?: ImgType
  group_nm?: string
  contents_type_nm?: string
  contents_type_slug?: string
  series_custom?: string
  organization?: string
  article_type: { key?: string, label?: string }
  numbering?: boolean
  excerpt?: string
  summary?: string
  // author?: string
  author_external_name?: string[]
  author_external_title?: string[]
  tag?: [ { name: string, slag: string } ]
  download?: { url?: string }
}

export type FootCardType = {
  topics_id: number
  thumb: ImgType
  logo?: ImgType
  group_nm?: string
  subject: string
  excerpt?: string
  summary?: string
}
