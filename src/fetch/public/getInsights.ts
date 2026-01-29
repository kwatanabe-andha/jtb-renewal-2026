type PropsType = {
  pageID?: string
  category?: string
  year?: string | null
  cnt?: string | null
}

const getLastDayOfYear = (year: number): string => {
  const lastDay = new Date(year, 11, 31); // 月は0始まりなので12月は11

  // YYYY-MM-DD形式に整形
  const yyyy = lastDay.getFullYear();
  const mm = String(lastDay.getMonth() + 1).padStart(2, '0'); // 月は0始まりなので+1
  const dd = String(lastDay.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

export default async function getInsights(params?: PropsType) {
  const { pageID = '1', category = null, year = null, cnt = null } = params || {}

  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/3/insights/list`,
  )
  url.searchParams.append('pageID', String(pageID))
  const slug = category || ''
  if (slug) url.searchParams.append('contents_type', slug)
  if (year) {
    const start = `${year}-01-01`
    const end = getLastDayOfYear(parseInt(year))
    const query = `ymd > "${start}" AND ymd < "${end}"`
    url.searchParams.append('filter', query)
  }
  if (cnt) url.searchParams.append('cnt', cnt)

  const response = await fetch(url)
  return await response.json()
}