import Script from 'next/script'
import SideNav from "@/components/parts/SideNav/SideNav"
import Contact from "@/components/parts/Contact/Contact"
import FootSlider from "@/components/parts/FootSlider/FootSlider"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import Content from '@/components/pages/researchSeries/Content'

const breadcrumb = [
  {
    title:  '調査・レポート',
    href: 'https://www.tourism.jp/research-reports/'
  },
  {
    title:  'スマートフォンの利用と旅行消費に関する調査'
  }
]

export async function generateMetadata() {
  const title = 'スマートフォンの利用と旅行消費に関する調査'
  const description = 'スマートフォンの利用と旅行消費に関する調査ページ。'

  return {
    title,
    description
  }
}

export default async function Page() {
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
        name: 'スマートフォンの利用と旅行消費に関する調査',
        item: 'https://www.tourism.jp/research-reports/series/'
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <SideNav offset={100}>
        <Content />
        <Contact />
        <FootSlider />
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