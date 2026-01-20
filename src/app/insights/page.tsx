import { Suspense } from 'react'
import Script from 'next/script'
import RegionTop from "@/components/parts/PageHead/RegionTop"
import ColumnsList from "@/components/pages/insights/ColumnsList/ColumnsList"
import Series from "@/components/pages/insights/Series/Series"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import getInsightsSeries from '@/fetch/static/getInsightsSeries'

const breadcrumb = [ { title: 'コラム' } ]

export const metadata = {
  title:  'コラム',
  description: 'コラムページ。',
}

export default async function Page() {
  const SeriesData = await getInsightsSeries()

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
      }
    ]
  }

  return (
    <>
      <Suspense>
        <Breadcrumb data={breadcrumb} />
        <section>
          <RegionTop en='COLUMNS' jp='コラム' page="columns">
            {'旬な話題をコラムとしてお届けします'}
          </RegionTop>

          <SideNav>
            <ColumnsList pathname='/insights/' />
            <Series data={SeriesData.list} />
          </SideNav>
        </section>
        <Breadcrumb data={breadcrumb} footer />
      </Suspense>

      <Script
          id="jsonld-breadcrumbList"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, '\\u003c'),
          }}
        />
      
    </>
  )
}
