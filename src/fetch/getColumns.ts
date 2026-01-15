type PropsType = {
  pageID?: string
}

export default async function getColumns(params?: PropsType) {
  const { pageID = '1' } = params || {}

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
  
  const response = await fetch(url)
  return await response.json()
}