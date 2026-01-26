import './index.scss'
import { returnHtml } from '@/lib/returnHtml'
import { ResultType } from '@/types/reports'

type Props = {
  list: ResultType[]
}

export default function ResultSummary({ list }: Props) {
  if (list.length === 0) return

  return (
    <section className='un_resultSummary'>
      <div className='un_resultSummary_head'>
        <h2>結果概要</h2>
      </div>
      <div className='un_resultSummary_body'>
        <ul className='un_resultSummary_list'>
        {
          list.map((item, index: number) => {
            return (
              <li key={index}>
                { returnHtml(item.result_title) }                                                                               
                { returnHtml(item.result_contents) }
              </li>
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}