import { selectType, ImgType } from "@/types/common"
import { CardType, ContentsCommonType, ContactType, SidebarExternalType, SidebarExternalNoImgType, ArticleType } from "./contentsType"

export type SeriesType = ContentsCommonType & {
  shoulder_text: string
  lead_text: string
  series_logo: ImgType
  img_main: ImgType
  series_description_title: string
  series_description_text: string
  status: selectType
}

export type InsightsAuthorType = {
  author_consultant: { module_id?: number }
  author_external_name?: string
  author_external_title?: string
  author_external_profile?: string
}

export type GuestsType = {
  guest_heading: string
  guest_honorific: string
  guest_name: string
  guest_profile: string
  guest_title: string
}

export type InsightsType =
  CardType & ContactType &
{
  series_custom: string
  img_main: ImgType
  article_type: selectType[]
  author: InsightsAuthorType[]
  guests: GuestsType[]
  article: ArticleType
  related_promotion_display: boolean
  sidebar_external_contents: SidebarExternalType[]
  sidebar_external_contents_noimg: SidebarExternalNoImgType[]
  meta_description: string
}