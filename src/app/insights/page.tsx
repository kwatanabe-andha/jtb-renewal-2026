import RegionTop from "@/components/parts/PageHead/RegionTop"
import ColumnsList from "@/components/pages/insights/ColumnsList/ColumnsList"
import Series from "@/components/pages/insights/Series/Series"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [ { title:  'コラム' } ]

export async function generateMetadata() {
  const title = 'コラム'
  const description = 'コラムページ。'

  return {
    title,
    description
  }
}

export default async function Page() {
  const jsonLd = {
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
      <Breadcrumb data={breadcrumb} jsonLd={jsonLd} />
      <section>
        <RegionTop en='COLUMNS' jp='コラム' page="columns">
          {'旬な話題をコラムとしてお届けします'}
        </RegionTop>

        <SideNav>
          <ColumnsList />
          <Series />
        </SideNav>
      </section>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}
