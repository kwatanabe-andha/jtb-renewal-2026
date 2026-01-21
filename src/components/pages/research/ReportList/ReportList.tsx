import './index.scss'
import { Suspense } from 'react'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
import { CardType, PageInfoType } from '@/types/contentsType'

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

type Props = {
  data: CardType[]
  pageInfo: PageInfoType
}

export default async function ReportList({ data, pageInfo }: Props) {

  return (
    <section className='un_reportList'>
      <Inner className='un_reportList_inner'>
        <Level2>すべての調査</Level2>

        <div className='un_reportList_nd'>
          <Suspense>
            <NarrowDown title='注目キーワードで絞り込み' list={keywords} />
          </Suspense>
        </div>

        <div className='un_reportList_list'>
          <Suspense fallback={<p>Loading...</p>}>
            <CardList list={data} pageInfo={pageInfo} pathname={'/research-reports/'} router />
          </Suspense>
        </div>
      </Inner>
    </section>
  )
}