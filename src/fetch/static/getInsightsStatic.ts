type PropsType = {
  pageID?: string
  category?: string
  year?: string | null
  all?: boolean
  cnt?: number
}

const getLastDayOfYear = (year: number): string => {
  const lastDay = new Date(year, 11, 31); // 月は0始まりなので12月は11

  // YYYY-MM-DD形式に整形
  const yyyy = lastDay.getFullYear();
  const mm = String(lastDay.getMonth() + 1).padStart(2, '0'); // 月は0始まりなので+1
  const dd = String(lastDay.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

export default async function getInsightsStatic(params?: PropsType) {
  const { pageID = '1', category = null, year = null, all = false, cnt = null } = params || {}

  // const url = new URL(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/7/insights/list`,
  // )
  // url.searchParams.append('pageID', String(pageID))
  
  // const response = await fetch(url,
  //   {
  //     headers: {
  //       'X-RCMS-API-ACCESS-TOKEN': process.env.INSIGHTS_ACCESS_TOKEN!,
  //     }
  //   }
  // )
  const url = new URL(
    `https://tourism.g.kuroco.app/rcms-api/7/insights/list`,
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
  if (!all && cnt) {
    url.searchParams.append('cnt', cnt.toString())
  } else if (!all) {
    url.searchParams.append('cnt', '3')
  }

  const response = await fetch(url)
  return await response.json()
}