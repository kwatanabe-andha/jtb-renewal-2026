import RegionTop from "@/components/parts/PageHead/RegionTop"
// import Series from "@/components/pages/research-reports/Series/Series"
import ColumnsList from "@/components/pages/insights/ColumnsList/ColumnsList"
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"

const breadcrumb = [
  {
    title:  'コラム'
  }
]

export default async function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <RegionTop en='COLUMNS' jp='コラム' page="columns">
        {'旬な話題をコラムとしてお届けします'}
      </RegionTop>

      <SideNav>
        <ColumnsList />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}
