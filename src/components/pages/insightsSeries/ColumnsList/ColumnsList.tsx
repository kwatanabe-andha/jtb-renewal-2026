import './index.scss'
import { Suspense } from 'react'
import Inner from "@/components/parts/Inner/Inner"
import CardList from '@/components/parts/Card/CardList'
import { CardType, PageInfoType } from '@/types/contentsType'

type Props = {
  data: {
    list: CardType[]
    pageInfo: PageInfoType
  },
  pathname: string
}

export default async function ColumnsList({ data, pathname }: Props) {
  const { list, pageInfo } = data

  return (
    <section className='un_columnsList'>
      <Inner className='un_columnsList_inner'>
        <div className='un_columnsList_head'>
          <h2 className='un_columnsList_heading'>最新の記事</h2>
          <div className='un_columnsList_state'>LATEST COLUMUN</div>
        </div>

        <div className='un_columnsList_list'>
          <Suspense fallback={<p>Loading...</p>}>
            <CardList list={list} pageInfo={pageInfo} pathname={pathname} />
          </Suspense>
        </div>
      </Inner>
    </section>
  )
}