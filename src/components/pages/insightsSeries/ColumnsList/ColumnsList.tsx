import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import CardList from '@/components/parts/Card/CardList'
import { CardType, PageInfoType } from '@/types/contentsType'

type Props = {
  data: {
    list: CardType[]
    pageInfo: PageInfoType
  }
}

export default async function ColumnsList({ data }: Props) {
  const { list, pageInfo } = data

  return (
    <section className='un_columnsList'>
      <Inner className='un_columnsList_inner'>
        <div className='un_columnsList_head'>
          <h2 className='un_columnsList_heading'>最新の記事</h2>
          <div className='un_columnsList_state'>LATEST COLUMUN</div>
        </div>

        <div className='un_columnsList_list'>
          <CardList list={list} pageInfo={pageInfo} pathname='/insights/series/' />
        </div>
      </Inner>
    </section>
  )
}