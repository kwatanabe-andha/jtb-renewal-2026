export default async function getInsightsSeries() {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/7/insights/series`,
  )
  const response = await fetch(url)
  return await response.json()
}