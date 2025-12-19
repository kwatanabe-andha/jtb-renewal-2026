// import RegionTop from "@/components/parts/PageHead/RegionTop"
// import ColumnsList from "@/components/pages/insights/ColumnsList/ColumnsList"
// import Series from "@/components/pages/insights/Series/Series"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [
  {
    title:  'コラム',
    href: '/insights/'
  },
  {
    title:  '「選」と出会う旅への視点'
  }
]

export default async function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav>
        <div>
        </div>
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}