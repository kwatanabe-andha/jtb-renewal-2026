import Script from 'next/script'
import RegionTop from "@/components/parts/PageHead/RegionTop"
import Content from '@/components/pages/consultantsDetail/Content/Content'
import Foot from '@/components/pages/consultantsDetail/Foot/Foot'
import Contact from "@/components/parts/Contact/Contact"
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
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '河野 まゆ子',
        item: 'https://www.tourism.jp/insights/detail/'
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <section>
        <SideNav offset={60}>
          <div className='un_consulDetail'>
            <Content />
            <Contact />
            <Foot />
          </div>
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
