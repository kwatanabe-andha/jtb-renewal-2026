import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
import getInsightsStatic from '@/fetch/static/getInsightsStatic'

const keywords = [
  {
    name: 'すべて',
    slug: 'all'
  },
  {
    name: 'インバウンド',
    slug: 'xxx'
  },
  {
    name: '消費者行動',
    slug: 'yyy'
  },
  {
    name: '日本人海外旅行',
    slug: 'zzzz'
  },
  {
    name: 'wwww',
    slug: 'www'
  },
  {
    name: 'jjjj',
    slug: 'jjj'
  },
]


export default async function ReportList() {
  const columnsData = await getInsightsStatic()
  const { list, pageInfo } = columnsData

  return (
    <section className='un_reportList'>
      <h2 className='el_hidden'>調査・レポート一覧</h2>
      <Inner className='un_reportList_inner'>

        <div className='un_reportList_nd'>
          <NarrowDown title='注目キーワードで絞り込み' list={keywords} />
        </div>

        <div className='un_reportList_list'>
          <CardList list={list} pageInfo={pageInfo} pathname={'/research-reports/category/'} />
        </div>
      </Inner>
    </section>
  )
}