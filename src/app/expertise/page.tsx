import Script from 'next/script'
import RegionTop from "@/components/parts/PageHead/RegionTop"
import Theme from "@/components/pages/expertise/Theme/Theme"
import Specialty from '@/components/pages/expertise/Specialty/Specialty'
import Method from '@/components/pages/expertise/Method/Method'
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [
  {
    title:  '専門領域'
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
        name: '専門領域',
        item: 'https://www.tourism.jp/expertise/'
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <section>
        <RegionTop en='Expertise' jp='専門領域' page="expertise">
          {'JTB総合研究所が専門とする観光分野をご紹介します。'}
        </RegionTop>

        <SideNav offset={50}>
          <Theme />
          <Specialty />
          <Method />
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
