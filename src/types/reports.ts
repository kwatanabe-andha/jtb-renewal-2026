import { ImgType, selectType } from "@/types/common"
import { CardType } from "./contentsType"

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
  background_color: string
  excerpt: string
  article: string
  overview_table: { '1': string, '2': string },
  status: selectType
}

export type ReportsCardType = CardType & {
  reports_type: selectType[]
}