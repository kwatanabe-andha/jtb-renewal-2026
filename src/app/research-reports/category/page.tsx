import CategoryTop from "@/components/parts/PageHead/CategoryTop"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import ReportList from "@/components/pages/researchCategory/ReportList/ReportList"
import FootSlider from "@/components/parts/FootSlider/FootSlider"

const breadcrumb = [
  {
    title:  '調査・レポート',
    href: '/research-reports/'
  },
  {
    title: 'インバウンドの調査・レポート'
  }
]

export default async function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />
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