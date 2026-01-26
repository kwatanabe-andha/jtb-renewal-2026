import Script from 'next/script'
import SideNav from "@/components/parts/SideNav/SideNav"
import FootSlider from "@/components/parts/FootSlider/FootSlider"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import Contact from '@/components/parts/Contact/Contact'
import Article from '@/components/pages/researchSeries/Article/Article'
import Latest from '@/components/pages/researchSeries/Latest/Latest'
import Survey from '@/components/parts/Survey/Survey'
import getReportsStatic from '@/fetch/static/reports/getReportsStatic'
import getReportsSeries from '@/fetch/static/reports/getReportsSeries'
import getReportsSeriesDetail from '@/fetch/static/reports/getReportsSeriesDetail'
import { SeriesType } from '@/types/reports'

export async function generateStaticParams() {
  const { list } = await getReportsSeries()
  const params = list.map((item: SeriesType) => {
    return { seriesID: `${item.slug}` }
  })
  return params
}

export async function generateMetadata({ params }: { params: { seriesID: string }}) {
  const { seriesID } = await params
  const { details } = await getReportsSeriesDetail(seriesID)

  return {
    title: details.subject,
    description: `${details.subject}のページ。`
  }
}

export default async function Page({ params }: { params: { seriesID: string }}) {
  const { seriesID } = await params
  const { details } = await getReportsSeriesDetail(seriesID)
  const { list } = await getReportsStatic({ cnt: 5 })

  const breadcrumb = [
    {
      title:  '調査・レポート',
      href: '/research-reports/'
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
        name: '調査・レポート',
        item: 'https://www.tourism.jp/research-reports/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: details.subject,
        item: `https://www.tourism.jp/research-reports/series/${details.slug}`
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <SideNav offset={100}>
        <Article data={details} />
        <Latest data={list} />
        <Survey contents={details.overview_contents} list={details.overview_table} />
        <Contact contact={details.contact} />
        <FootSlider list={list} content="reports" />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />

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