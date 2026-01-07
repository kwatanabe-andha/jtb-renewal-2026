import CategoryTop from "@/components/parts/PageHead/CategoryTop"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import ReportList from "@/components/pages/researchCategory/ReportList/ReportList"
import FootSlider from "@/components/parts/FootSlider/FootSlider"

const breadcrumb = [
  { title:  '調査・レポート', href: '/research-reports/' },
  { title: 'インバウンドの調査・レポート' }
]

export async function generateMetadata() {
  const title = 'インバウンドの調査・レポート'
  const description = 'インバウンドの調査・レポートページ。'

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
          name: '調査・レポート',
          item: 'https://www.tourism.jp/research-reports/'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'インバウンドの調査・レポート',
          item: 'https://www.tourism.jp/research-reports/category/'
        }
      ]
    }

  return (
    <>
      <Breadcrumb data={breadcrumb} jsonLd={jsonLd} />
      <section>
        <CategoryTop
          title="インバウンドの調査・レポート"
          text="日本を訪れる外国人に関するインバウンド統計データ・グラフを掲載しています。"
          slug="Reports"
        />

        <SideNav>
          <ReportList />
          <FootSlider />
        </SideNav>
      </section>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}