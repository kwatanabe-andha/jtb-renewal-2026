import { ImgType, selectType } from "@/types/common"
import { CardType, ContactType, ContentsCommonType, SidebarExternalType, SidebarExternalNoImgType, ArticleType } from "./contentsType"
import { ConsultantType } from "./consultant"

export type ResultType = {
  result_title: string
  result_contents: string
}

export type OverviewType = {
  overview_title: string
  overview_detail: string
}

export type BackgroundType = {
  background_img: ImgType
  background_color: string
}

export type HeadingType = {
  heading_bg_color: string
  heading_bg_opacity?: number
  heading_color: string
  heading_schedule: string
  heading_title: string
}

export type ReportsSeriesSlide = {
  topics_id: number
  series_logo: ImgType
  catch_text: string
  slug: string
  heading: HeadingType
}

export type SeriesType = ContentsCommonType & ContactType & {
  series_logo: ImgType
  catch_text: string
  img_main: ImgType
  background: BackgroundType
  heading: HeadingType
  article: string
  overview_contents: string
  overview_table: OverviewType[],
  status: selectType
  meta_description: string
}

export type ReportsType = CardType & ContactType & {
  img_main: ImgType
  reports_type: selectType[]
  contents_default: string
  contents_login: string
  result: ResultType[]
  overview_contents: string
  overview_table: OverviewType[],
  related_consultant: ConsultantType[]
  article: ArticleType
  related_promotion_display: boolean
  sidebar_external_contents: SidebarExternalType[]
  sidebar_external_contents_noimg: SidebarExternalNoImgType[]
  meta_description: string
}