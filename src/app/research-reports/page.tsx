import RegionTop from "@/components/parts/PageHead/RegionTop"
import Recently from "@/components/pages/research/Recently/Recently"
import Series from "@/components/pages/research/Series/Series"
import ReportList from "@/components/pages/research/ReportList/ReportList"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [
  {
    title:  '調査・レポート'
  }
]

export default async function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <section>
        <RegionTop en='Reports' jp='調査・レポート' page="reports">
          {'オリジナルの調査・研究結果を公開しています。'}
        </RegionTop>

        <SideNav>
          <Recently />
          <Series />
          <ReportList />
        </SideNav>
      </section>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}
