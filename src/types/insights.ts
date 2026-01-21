import { z } from "zod"

const SeriesSchema = z.object({
  topics_id: z.number(),
  subject: z.string(),
  ymd: z.string(),
  slug: z.string(),
  shoulder_text: z.string(),
  lead_text: z.string(),
  series_logo: z.object({
    url: z.string(),
    desc: z.string()
  }),
  img_main: z.object({
    url: z.string(),
    desc: z.string()
  }),
  series_description_title: z.string(),
  series_description_text: z.string(),
  status: z.object({
    key: z.string(),
  })
})
export type SeriesType = z.infer<typeof SeriesSchema>