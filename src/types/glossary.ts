import { ContentsCommonType } from "./contentsType"

export type GlossaryType = ContentsCommonType & {
  term_kana: string
  term_en: string
  synonym_name: string[]
  synonym_kana: string[]
  synonym_en: string[]
  definition_html: string
  meta_description: string
  meta_keywords: string
}