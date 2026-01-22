import './index.scss'
import Link from 'next/link'
import Image from 'next/image'
import { ReportsCardType } from '@/types/reports'
import { joinLabels } from '@/lib/joinLabels'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import CardList from '@/components/parts/Card/CardList'

type Props = {
  data: ReportsCardType[]
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
          {/* {
            data.map(item => {
              return (
                <article key={item.topics_id}>
                  <Link href={`/research-reports/`} className="un_recentlyCard">
                    {
                      item.thumb.url && (
                        <div className="un_recentlyCard_img">
                          <div className="un_recentlyCard_thumb">
                            <Image src={item.thumb.url} alt={item.thumb.desc || ''} width="360" height="240" />
                          </div>
                        </div>
                      )
                    }
                    <div className="un_recentlyCard_body">
                      <div className="un_recentlyCard_content">
                        { item.reports_type?.length > 0 && (
                          <div className='un_recentlyCard_category'>
                            { joinLabels(item.reports_type) }
                          </div>
                        )}
                        <p className="un_recentlyCard_title">{item.subject}</p>
                        <p className="un_recentlyCard_summary">{item.subject}</p>
                      </div>
                      <div className="un_recentlyCard_btm">
                        <div className="un_recentlyCard_download">CSVダウンロード</div>
                        <time dateTime={item.ymd} className='un_recentlyCard_time'>{ toDateTimeFormat(item.ymd) }</time>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })
          } */}
        </div>
      </div>
    </section>
  )
}