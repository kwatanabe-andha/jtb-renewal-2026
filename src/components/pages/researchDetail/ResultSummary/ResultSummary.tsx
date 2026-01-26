import './index.scss'
import { returnHtml } from '@/lib/returnHtml'

type Props = {
  title: string[]
  contents: string[]
}

export default function ResultSummary({ title, contents }: Props) {
  if (!title[0]) return

  return (
    <section className='un_resultSummary'>
      <div className='un_resultSummary_head'>
        <h2>結果概要</h2>
      </div>
      <div className='un_resultSummary_body'>
        <ul className='un_resultSummary_list'>
        {
          title.map((item, index: number) => {
            return (
              <li key={index}>
                { returnHtml(title[index]) }                                                                               
                { returnHtml(contents[index]) }
              </li>
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}