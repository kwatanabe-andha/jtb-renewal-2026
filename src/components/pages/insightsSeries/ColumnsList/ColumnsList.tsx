import './index.scss'
import Script from 'next/script'
import Inner from "@/components/parts/Inner/Inner"
import CardList from '@/components/parts/Card/CardList'
import getColumns from '@/fetch/getColumns'
import { CardType } from '@/components/parts/Card/Card'

export default async function ColumnsList() {
  const { list, pageInfo } = await getColumns()
  const pageList = list.map((item: CardType, index: number) => {
    return (
      {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: item.subject,
          url: `https://www.tourism.jp/insights/${item.topics_id}/`,
          datePublished: item.ymd,
          author: { "@type": "Person", "name": `${item.author}` },
          image: item.thumb.url
        }
      }
    )
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "コラム",
    description: "旬な話題をコラムとしてお届けします",
    url: "https://www.tourism.jp/insights/",
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: pageInfo.totalCnt,
      itemListElement: pageList
    }
  }

  return (
    <>
      <section className='un_columnsList'>
        <Inner className='un_columnsList_inner'>
          <div className='un_columnsList_head'>
            <h2 className='un_columnsList_heading'>最新の記事</h2>
            <div className='un_columnsList_state'>LATEST COLUMUN</div>
          </div>

          <div className='un_columnsList_list'>
            <CardList list={list} />
          </div>
        </Inner>
      </section>

      <Script
          id="jsonld-collectionPage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
    </>
  )
}