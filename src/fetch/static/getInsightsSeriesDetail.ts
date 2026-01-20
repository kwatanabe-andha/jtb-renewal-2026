export default async function getInsightsSeriesDetail(slug: string) {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/7/insights/series/${slug}`,
  )
  const response = await fetch(url)
  return await response.json()
}