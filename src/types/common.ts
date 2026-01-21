import { z } from "zod";

const APIErrorsSchema = z.object({
  message: z.string(),
  field: z.string().optional()
})
export type APIErrorsType = z.infer<typeof APIErrorsSchema>

export type ImgType = { desc?: string, url?: string }
export type selectType = { key: string, label: string }