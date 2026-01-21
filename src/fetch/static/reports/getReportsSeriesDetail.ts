export default async function getReportsSeriesDetail(slug: string) {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/2/reports/series/${slug}`,
  )
  const response = await fetch(url)
  return await response.json()
}