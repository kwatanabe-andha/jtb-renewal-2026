import { z } from "zod"

export type KeywordType = {
  subject: string,
  slug: string
}

export type GuestType = {
  guest_heading?: string
  guest_name?: string
  guest_honorific?: string
  guest_title?: string
  guest_profile?: string
}

export type ArticleHead = {
  img_main: {
    url?: string
    desc?: string
  },
  excerpt?: string
  guest?: GuestType[]
}

const AuthorProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  profile: z.string(),
})
export type AuthorProfileType = z.infer<typeof AuthorProfileSchema>