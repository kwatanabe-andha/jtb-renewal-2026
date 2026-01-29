import { STATIC_API_CNT } from "@/config/site"

type PropsType = {
  pageID?: string
  category?: string
  all?: boolean
  cnt?: number
}

export default async function getInsightsStatic(params?: PropsType) {
  const { pageID = '1', category = null, all = false, cnt = null } = params || {}

  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/7/insights/list`,
  )
  url.searchParams.append('pageID', String(pageID))
  const slug = category || ''
  if (slug) url.searchParams.append('contents_type', slug)
  if (!all && cnt) {
    url.searchParams.append('cnt', cnt.toString())
  } else if (!all) {
    url.searchParams.append('cnt', STATIC_API_CNT)
  }

  const response = await fetch(url)
  return await response.json()
}