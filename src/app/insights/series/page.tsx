import Summary from "@/components/pages/insightsSeries/Summary/Summary"
import ColumnsList from "@/components/pages/insightsSeries/ColumnsList/ColumnsList"
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
        <Summary />
        <ColumnsList />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}