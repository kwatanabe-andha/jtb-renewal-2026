import { ImgType, selectType } from "@/types/common"
import { CardType, ContactType } from "./contentsType"
import { ConsultantType } from "./consultant"

export type ReportsSeriesSlide = {
  topics_id: number
  series_logo: ImgType
  catch_text: string
  slug: string
  heading_schedule: string
}

export type SeriesType = {
  topics_id: string
  ymd: string
  subject: string
  slug: string
  series_logo: ImgType
  catch_text: string
  heading_title: string
  heading_schedule: string
  img_main: ImgType
  background_img: ImgType
  heading_color: string
  background_color: string
  heading_bg_color: string
  heading_bg_opacity: number
  excerpt: string
  article: string
  overview_table: { '1': string, '2': string },
  status: selectType
}

export type ReportsType = CardType & ContactType & {
  img_main: ImgType
  reports_type: selectType[]
  result_title: string[]
  result_contents: string[]
  contents_default: string
  contents_login: string
  overview_contents: string
  overview_title: string[]
  overview_detail: string[]
  related_consultant: ConsultantType[]
}