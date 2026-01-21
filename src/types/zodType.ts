import { z } from "zod"

const GlossarySchema = z.object({
  topics_id: z.number(),
  subject: z.string(),
  ymd: z.string(),
  slug: z.string(),
  term_kana: z.string(),
  term_en: z.string(),
  synonym_name: z.array(z.string()),
  synonym_kana: z.array(z.string()),
  synonym_en: z.array(z.string()),
  definition_html: z.string(),
  meta_description: z.string(),
  meta_keywords: z.string()
})
export type GlossaryType = z.infer<typeof GlossarySchema>