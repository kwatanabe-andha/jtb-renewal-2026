import Script from 'next/script'
import RegionTop from "@/components/parts/PageHead/RegionTop"
import Content from '@/components/pages/consultants/Content/Content'
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [
  {
    title:  'コンサルタント'
  }
]

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
        name: 'コンサルタント',
        item: 'https://www.tourism.jp/consultants/'
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <section>
        <RegionTop en='Experts' jp='コンサルタント' page="consultants">
          {'オリジナルの調査・研究結果を公開し各分野に精通した知識と経験豊かなコンサルタントが、鋭い分析力と実行力で着実に課題解決をお手伝いします。'}
        </RegionTop>

        <SideNav offset={50}>
          <Content />
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
