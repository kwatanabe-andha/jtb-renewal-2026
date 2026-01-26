import './index.scss'
import React from 'react'
import Wysiwyg from '@/components/parts/Wysiwyg/Wysiwyg'

type Props = {
  contents: string
  title: string[]
  detail: string[]
}

export default function Survey({ contents, title, detail }: Props) {
  if (!contents && !title[0]) return

  return (
    <>
      <section id='series_survey' className="bl_seriesSurvey">
        <div className="bl_inner">
          <div className="bl_seriesSurvey_container">
            <h2 className="bl_seriesSurvey_title">調査概要</h2>
            { !!contents && <Wysiwyg html={contents} /> }
            {
              title.length > 0 && (
                <dl className="bl_seriesSurvey_contents">
                  {
                    title.map((item, index: number) => {
                      return (
                        <React.Fragment key={index}>
                          <dt>{title[index]}</dt>
                          <dd>{detail[index]}</dd>
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