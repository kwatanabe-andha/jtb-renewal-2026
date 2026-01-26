import { ImgType, selectType } from "./common"

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
  slug?: string
  topics_group_id: number
  group_nm: string
  contents_type_nm?: string
  contents_type_slug?: string
  update_ymdhi: string
}

export type CardType = ContentsCommonType & {
  thumb: ImgType
  logo?: ImgType
  series_custom?: string
  numbering?: boolean
  excerpt?: string
  summary?: string
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
  contact_default: boolean
  contact_department: string
  contact_custom_office_address: string
  contact_custom_url: string
  related_contact_person: string
  contact_note: string
}
