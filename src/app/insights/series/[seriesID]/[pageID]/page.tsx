import Script from 'next/script'
import Summary from "@/components/pages/insightsSeries/Summary/Summary"
import ColumnsList from "@/components/pages/insightsSeries/ColumnsList/ColumnsList"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import getInsightsSeries from '@/fetch/static/insights/getInsightsSeries'
import getInsightsSeriesDetail from '@/fetch/static/insights/getInsightsSeriesDetail'
import getInsightsStatic from '@/fetch/static/insights/getInsightsStatic'
import { InsightsType } from '@/types/insights'
import { JsonLdCardType } from '@/types/jsonLd'
import { SeriesType } from '@/types/insights'
type paramsType = {
  seriesID: string
  pageID: string
}

export async function generateStaticParams() {
  const { list } = await getInsightsSeries()
  const params = [] as paramsType[]
  await Promise.all(
    list.map(async (item: SeriesType) => {
      const columnsData = await getInsightsStatic({ category: item.slug })
      for (let i: number = 0; i < columnsData.pageInfo.totalPageCnt; i++) {
        params.push({ seriesID: `${item.slug}`, pageID: String(i + 1) })
      }
    })
  )
  return params
}

export async function generateMetadata({ params }: { params: { seriesID: string }}) {
  const { seriesID } = await params
  const { details } = await getInsightsSeriesDetail(seriesID)

  return {
    title: `${details.subject}`,
    description: `${details.lead_text}`,
  }
}

export default async function Page({ params }: { params: { seriesID: string, pageID: string }}) {
  const { seriesID, pageID } = await params
  const { details } = await getInsightsSeriesDetail(seriesID)
  const columnsData = await getInsightsStatic({ category: details.slug, pageID: pageID })
  const { list, pageInfo } = columnsData

  const breadcrumb = [
    {
      title:  'コラム',
      href: '/insights/'
    },
    {
      title: details.subject
    }
  ]

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://www.tourism.jp/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'コラム',
        item: 'https://www.tourism.jp/insights/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: details.subject,
        item: 'https://www.tourism.jp/insights/series/'
      }
    ]
  }

  const pageList = list.map((item: InsightsType, index: number) => {
      const obj: JsonLdCardType = {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: item.subject,
            url: `https://www.tourism.jp/insights/${item.topics_id}/`,
            datePublished: item.ymd,
            image: item.thumb?.url
          }
        }
      if (item.author && item.author.length > 0) {
        obj.item.author = { "@type": "Person", "name": `${item.author[0].author_external_name}` }
      }
      return obj
    })

  const jsonLdCards = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: details.subject,
    description: details.lead_text,
    url: `https://www.tourism.jp/insights/series/${details.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: pageInfo.totalCnt,
      itemListElement: pageList
    }
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <SideNav>
        <Summary series={details} />
        <ColumnsList data={columnsData} pathname={`/insights/series/${details.slug}/`} />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />

      <Script
          id="jsonld-breadcrumbList"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, '\\u003c'),
          }}
        />
      <Script
        id="jsonld-collectionPage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdCards).replace(/</g, '\\u003c'),
        }}
      />
    </>
  )
}