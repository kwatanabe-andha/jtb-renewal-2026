'use client'

import './index.scss'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
import { PageInfoType } from '@/types/contentsType'
import { JsonLdCardType, jsonLdCollectionPageType } from '@/types/jsonLd'
import { ReportsType } from '@/types/reports'
import getReports from '@/fetch/public/getReports'

const keywords = [{ name: 'すべて', slug: 'all' },{ name: 'インバウンド', slug: 'xxx' },{ name: '消費者行動', slug: 'yyy' },{ name: '日本人海外旅行', slug: 'zzzz' },{ name: 'xxx', slug: 'xxxxx' },{ name: 'xxxxx', slug: 'xx' }]

const jsonLD = (list: ReportsType[], pageInfo: PageInfoType) => {
  const pageList = list.map((item: ReportsType, index: number) => {
    const obj: JsonLdCardType = {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: item.subject,
          url: `https://www.tourism.jp//research-reports//${item.slug}/`,
          datePublished: item.ymd,
          image: item.thumb?.url
        }
      }
    if (item.related_consultant.length > 0) {
      obj.item.author = { "@type": "Person", "name": `${item.related_consultant[0].subject}` }
    }
    return obj
  })

  const jsonLdCards = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "調査・レポート",
    description: "最新の記事",
    url: "https://www.tourism.jp//research-reports//",
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: pageInfo.totalCnt,
      itemListElement: pageList
    }
  }

  return jsonLdCards
}

export default function ReportList() {
  const [data, setData] = useState<ReportsType[]>([])
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
      const { list, pageInfo } = await getReports(query)
      if (list) {
        setLoading(true)
        setData(list.map((item: ReportsType) => {
          if (item.reports_type.length > 0) {
            item.contents_name = item.reports_type[0].label
          }
          item.summary = '静的テキスト静的テキスト静的テキスト静的テキスト静的テキスト静的テキスト'
          return item
        }))
        setInfo(pageInfo)
        setJsonLdCards(jsonLD(list, pageInfo))
      }
    }
    fetchData()
  }, [page, year])
  
  return (
    <>
      <section className='un_reportList'>
        <Inner className='un_reportList_inner'>
          <Level2>すべての調査</Level2>

          <div className='un_reportList_nd'>
            <Suspense>
              <NarrowDown title='注目キーワードで絞り込み' list={keywords} />
            </Suspense>
          </div>

          <div className='un_reportList_list'>
            <Suspense fallback={<p>Loading...</p>}>
              {
                data.length > 0 && info && (
                  <div className='un_columnsList_list'>
                    <CardList list={data} pageInfo={info} pathname={'/research-reports/'} router />
                  </div>
                )
              }
            </Suspense>
          </div>
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