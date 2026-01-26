export default async function getReportsDetail(slug: string) {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/2/reports/${slug}`,
  )
  const response = await fetch(url)
  return await response.json()
}