import { ImgType, selectType } from "./common"
import { InsightsAuthorType } from "./insights"

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

export type ContentsCommonType = {
  topics_id: number
  ymd: string
  subject: string
  slug: string
  topics_group_id: number
  group_nm?: string
  contents_type_nm?: string
  contents_type_slug?: string
  update_ymdhi: string
  thumb?: ImgType
  excerpt?: string
  summary?: string
}

export type CardType = ContentsCommonType & {
  download?: { url?: string }
  tag?: { name: string, slag: string }[]
  category_details?: { subject: string, series_logo: ImgType }
  series_custom?: string
  reports_type?: selectType[]
  author: InsightsAuthorType[]
  show_series?: boolean
  contents_name?: string
  series_title?: string
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

export type ContactType = {
  contact: {
    contact_default: boolean
    contact_department: string
    contact_custom_office_address: string
    contact_custom_url: string
    related_contact_person: string
    contact_note: string
  }
}

export type ArticleType = {
  numbering: boolean
  contents_default: string
  contents_login: string
}

export type SidebarExternalType = {
  sidebar_external_image: ImgType
  sidebar_external_title: string
  sidebar_external_url: string
}

export type SidebarExternalNoImgType = {
  sidebar_external_title_noimg: string
  sidebar_external_url_noimg: string
}