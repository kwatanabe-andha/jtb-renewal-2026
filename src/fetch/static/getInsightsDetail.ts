export default async function getInsightsDetail(slug: string) {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/7/insights/${slug}`,
  )
  const response = await fetch(url)
  return await response.json()
}