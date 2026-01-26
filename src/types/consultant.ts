import { ContentsCommonType } from "./contentsType"
import { ImgType } from "./common"

type ProfileType = {
  profile_kana: string
  profile_en: string
  profile_position: string
  profile_img: ImgType
}

type PublicType = {
  public_position: string
  public_term: string
}

type BookType = {
  book_title: string
  book_publisher: string
  book_date: string
  book_image: ImgType
  book_text: string
  amazon: string
  kindle: string
  rakuten: string
  kobo: string
}

type PublicityType = {
  publicity_type: string
  publicity_title: string
  publicity_description: string
  publicity_date: string
}

export type ConsultantType = ContentsCommonType & {
  profile: ProfileType
  excerpt: string
  history: string
  public: PublicType[]
  expertise_extra_sector: string[]
  book: BookType[]
  publicity: PublicityType[]
  meta_description: string
}