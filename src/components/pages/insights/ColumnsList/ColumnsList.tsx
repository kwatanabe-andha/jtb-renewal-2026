'use client'

import './index.scss'
import { useEffect, useState, Suspense } from 'react'
import Script from 'next/script'
import { useSearchParams } from 'next/navigation'
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
import { PageInfoType } from '@/types/contentsType'
import { InsightsCardType } from '@/types/insights'
import { JsonLdCardType, jsonLdCollectionPageType } from '@/types/jsonLd'
import getInsights from '@/fetch/public/getInsights'

const keywords = [{ name: 'すべて', slug: 'all' },{ name: 'インバウンド', slug: 'xxx' },{ name: '消費者行動', slug: 'yyy' },{ name: '日本人海外旅行', slug: 'zzzz' },{ name: 'xxx', slug: 'xxxxx' },{ name: 'xxxxx', slug: 'xx' }]

type Props = {
  pathname: string
}

const jsonLD = (list: InsightsCardType[], pageInfo: PageInfoType) => {
  const pageList = list.map((item: InsightsCardType, index: number) => {
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
    name: "コラム",
    description: "最新の記事",
    url: "https://www.tourism.jp/insights/",
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: pageInfo.totalCnt,
      itemListElement: pageList
    }
  }

  return jsonLdCards
}

export default function ColumnsList({ pathname }: Props) {
  const [data, setData] = useState<InsightsCardType[]>([])
  const [info, setInfo] = useState<PageInfoType | null>(null)
  const [jsonLdCards, setJsonLdCards] = useState<jsonLdCollectionPageType>()
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const page = searchParams.get('pageID')
  const year = searchParams.get('year')

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(window.location.search)
      const query = { pageID: queryParams.get('pageID') || '1', year: queryParams.get('year') || null }
      const { list, pageInfo } = await getInsights(query)
      if (list) {
        setLoading(true)
        setData(list)
        setInfo(pageInfo)
        setJsonLdCards(jsonLD(list, pageInfo))
      }
    }
    fetchData()
  }, [page, year])

  return (
    <>
      <section className='un_columnsList'>
        <h2 className='el_hidden'>コラム一覧</h2>
        <Inner className='un_columnsList_inner'>
          <div className='un_columnsList_nd'>
            <Suspense>
              <NarrowDown title='注目キーワードで絞り込み' list={keywords} />
            </Suspense>
          </div>

          <Suspense fallback={<p>Loading...</p>}>
            {
              data.length > 0 && info && (
                <div className='un_columnsList_list'>
                  <CardList list={data} pageInfo={info} pathname={pathname} router />
                </div>
              )
            }
          </Suspense>

        </Inner>
      </section>

      {
        loading && (
          <Script
              id="jsonld-collectionPage"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLdCards).replace(/</g, '\\u003c'),
              }}
            />
        )
      }

    </>
  )
}