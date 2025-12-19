import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import CardList from '@/components/parts/Card/CardList'
import getColumns from '@/fetch/getColumns'

export default async function ColumnsList() {
  const { list, pageInfo } = await getColumns()

  return (
    <div className='un_columnsList'>
      <Inner className='un_columnsList_inner'>
        <div className='un_columnsList_head'>
          <h2 className='un_columnsList_heading'>最新の記事</h2>
          <div className='un_columnsList_state'>LATEST COLUMUN</div>
        </div>

        <div className='un_columnsList_list'>
          <CardList list={list} />
        </div>
      </Inner>
    </div>
  )
}