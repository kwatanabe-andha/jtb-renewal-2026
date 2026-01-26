import './index.scss'
import { Suspense } from 'react'
import Inner from "@/components/parts/Inner/Inner"
import CardList from '@/components/parts/Card/CardList'
import { PageInfoType } from '@/types/contentsType'
import { InsightsType } from '@/types/insights'

type Props = {
  data: {
    list: InsightsType[]
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