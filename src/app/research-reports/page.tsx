import Script from 'next/script'
import RegionTop from "@/components/parts/PageHead/RegionTop"
import Recently from "@/components/pages/research/Recently/Recently"
import Series from "@/components/pages/research/Series/Series"
import ReportList from "@/components/pages/research/ReportList/ReportList"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import getReportsSeries from '@/fetch/static/reports/getReportsSeries'
import getReportsStatic from '@/fetch/static/reports/getReportsStatic'

const breadcrumb = [
  {
    title:  '調査・レポート'
  }
]

export const metadata = {
  title:  '調査レポート',
  description: '調査レポートページ。',
}

export default async function Page() {
  const series = await getReportsSeries()
  const { list, pageInfo } = await getReportsStatic()

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
      }
    ]
  }

  const newReport = list[0]
  const recentlyData = {
    thumb: newReport.thumb,
    series_logo: newReport.category_details.series_logo,
    subject: newReport.subject,
    ymd: newReport.ymd,
    reports_type: newReport.reports_type,
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <section>
        <RegionTop en='Reports' jp='調査・レポート' page="reports">
          {'オリジナルの調査・研究結果を公開しています。'}
        </RegionTop>

        <SideNav offset={80}>
          <Recently data={recentlyData} />
          <Series data={series.list} />
          <ReportList data={list} pageInfo={pageInfo} />
        </SideNav>
      </section>
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
