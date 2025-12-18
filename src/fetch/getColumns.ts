export default async function getColumns() {
  const url = new URL(
    // `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/3/columns/list`,
    `https://tourism.g.kuroco.app/rcms-api/3/columns/list`,
  )
  const response = await fetch(url)
  return await response.json()
}