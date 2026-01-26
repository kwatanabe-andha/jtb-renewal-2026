import { ContentsCommonType } from "./contentsType"
import { ImgType } from "./common"

export type ConsultantType = ContentsCommonType & {
  profile_kana: string
  profile_en: string
  profile_position: string
  profile_img: ImgType
  excerpt: string
  history: string
  public_position: string[]
  public_term: string[]
  // expertise_sector: string[]
  expertise_extra_sector: string[]
  book_title: string[]
  book_publisher: string[]
  book_date: string[]
  book_image: ImgType[]
  book_text: string[]
  amazon: string[]
  kindle: string[]
  rakuten: string[]
  kobo: string[]
  publicity_type: string[]
  publicity_title: string[]
  publicity_description: string[]
  publicity_date: string[]
  meta_description: string
}