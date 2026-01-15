import Script from 'next/script'
import Summary from "@/components/pages/insightsSeries/Summary/Summary"
import ColumnsList from "@/components/pages/insightsSeries/ColumnsList/ColumnsList"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import getColumns from '@/fetch/getColumns'
import { CardType } from '@/types/contentsType'
import { JsonLdCardType } from '@/types/jsonLd'

const breadcrumb = [
  {
    title:  'コラム',
    href: '/insights/'
  },
  {
    title:  '「選」と出会う旅への視点'
  }
]

export default async function Page() {
  const columnsData = await getColumns()
  const { list, pageInfo } = columnsData

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
        name: '「選」と出会う旅への視点',
        item: 'https://www.tourism.jp/insights/series/'
      }
    ]
  }

  const pageList = list.map((item: CardType, index: number) => {
      const obj: JsonLdCardType = {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "BlogPosting",
            headline: item.subject,
            url: `https://www.tourism.jp/insights/${item.topics_id}/`,
            datePublished: item.ymd,
            image: item.thumb.url
          }
        }
      if (item.author_external_name && item.author_external_name.length > 0) {
        obj.item.author = { "@type": "Person", "name": `${item.author_external_name[0]}` }
      }
      return obj
    })

  const jsonLdCards = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "「選」と出会う旅への視点のコラム",
    description: "最新の記事",
    url: "https://www.tourism.jp/insights/series/",
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
        <Summary />
        <ColumnsList data={columnsData} />
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