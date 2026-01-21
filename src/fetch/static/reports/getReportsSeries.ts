export default async function getReportsSeries() {
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/2/reports/series`,
  )
  const response = await fetch(url)
  return await response.json()
}