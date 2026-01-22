import './index.scss'
import Image from 'next/image'
import Inner from '@/components/parts/Inner/Inner'
import { ArrowNarrowDown } from "@untitledui/icons"
import { SeriesType } from '@/types/reports'
import Wysiwyg from '@/components/parts/Wysiwyg/Wysiwyg'
import { CSSProperties } from 'react'

type Props = {
  data: SeriesType
}

export default function Article({ data }: Props) {
  const bgc = !!data.background_color ? data.background_color : 'transparent'

  return (
    <article className="un_series">
      <div className="un_series_bg" style={{ '--bg-color': bgc } as CSSProperties}>
        { data.background_img.url && <Image src={data.background_img.url} alt={data.background_img.desc || ''} width="1440" height="730" /> }
      </div>
      <Inner>
        { data.series_logo.url && <div className="un_series_icon"><Image src={data.series_logo.url} alt={data.series_logo.desc || ''} width="230" height="230" /></div> }
        {/* <p className="un_series_icon_text">スマートフォンの利用と<br />旅行消費に関する調査</p> */}
        <header className="un_series_title">
          <h1 className="title">{data.subject}</h1>
          <div className="year">{data.heading_schedule}</div>
          <div className="subTitle">{data.heading_title}</div>
        </header>
        {
          data.img_main.url && (
            <div className="un_series_mv">
              <Image src={data.img_main.url} alt={data.img_main.desc || ''} width="974" height="470" />
            </div>
          )
        }
        <section className="un_series_content">
          { !!data.excerpt && <h2 className="un_series_content_copy">{data.excerpt}</h2> }
          <Wysiwyg html={data.article} />
          <a className="un_series_content_btn" href='#series_survey'>
            <ArrowNarrowDown />
            <span>調査概要をみる</span>
          </a>
        </section>
      </Inner>
    </article>
  )
}