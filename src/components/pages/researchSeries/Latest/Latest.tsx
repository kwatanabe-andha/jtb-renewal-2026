import './index.scss'
import { ReportsType } from '@/types/reports'
import CardList from '@/components/parts/Card/CardList'

type Props = {
  data: ReportsType[]
}

export default function Latest({ data }: Props) {
  return (
    <section className="un_seriesLatest">
      <div className="bl_inner un_seriesLatest_inner">
        <div className="un_seriesLatest_title">
          <h2 className="un_seriesLatest_title_jp">最新のレポート</h2>
          <span className="un_seriesLatest_title_en">LATEST REPORTS</span>
        </div>
        <div className="un_seriesLatest__list">
          <CardList list={data} parallel />
        </div>
      </div>
    </section>
  )
}