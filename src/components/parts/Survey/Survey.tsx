import './index.scss'
import React from 'react'
import Wysiwyg from '@/components/parts/Wysiwyg/Wysiwyg'
import { OverviewType } from '@/types/reports'

type Props = {
  contents: string
  list: OverviewType[]
}

export default function Survey({ contents, list }: Props) {
  if (!contents && list.length === 0) return

  return (
    <>
      <section id='series_survey' className="bl_seriesSurvey">
        <div className="bl_inner">
          <div className="bl_seriesSurvey_container">
            <h2 className="bl_seriesSurvey_title">調査概要</h2>
            { !!contents && <Wysiwyg html={contents} /> }
            {
              list.length > 0 && (
                <dl className="bl_seriesSurvey_contents">
                  {
                    list.map((item, index: number) => {
                      return (
                        <React.Fragment key={index}>
                          <dt>{item.overview_title}</dt>
                          <dd>{item.overview_detail}</dd>
                        </React.Fragment>
                      )
                    })
                  }
                </dl>
              )
            }
          </div>
        </div>
      </section>
    </>
  )
}