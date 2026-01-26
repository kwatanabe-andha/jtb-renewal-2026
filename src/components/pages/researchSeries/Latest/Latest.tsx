import './index.scss'
import { ReportsType } from '@/types/reports'
import CardList from '@/components/parts/Card/CardList'
import { multipleText } from '@/lib/multipleText'

type Props = {
  data: ReportsType[]
}

export default function Latest({ data }: Props) {
  const cardList = data.map(item => {
    if (item.reports_type.length > 0) item.contents_name = multipleText(item.reports_type)
    if (item.category_details) item.series_title = item.category_details.subject
    return item
  })

  return (
    <section className="un_seriesLatest">
      <div className="bl_inner un_seriesLatest_inner">
        <div className="un_seriesLatest_title">
          <h2 className="un_seriesLatest_title_jp">最新のレポート</h2>
          <span className="un_seriesLatest_title_en">LATEST REPORTS</span>
        </div>
        <div className="un_seriesLatest__list">
          <CardList list={cardList} parallel />
        </div>
      </div>
    </section>
  )
}