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
  const { background_img, background_color } = data.background
  const { heading_color, heading_bg_color, heading_bg_opacity, heading_schedule, heading_title } = data.heading
  const fontc = heading_color ? heading_color : '#000'
  const bgc = background_color ? background_color : 'transparent'
  const headingBgc = heading_bg_color ? heading_bg_color : '#fff'
  const headingOpacity = heading_bg_opacity ? heading_bg_opacity : '0.9'

  return (
    <article className="un_series">
      <div className='un_series_head'>
        <Inner>
          { data.series_logo.url && <div className="un_series_icon"><Image src={data.series_logo.url} alt={data.series_logo.desc || ''} width="230" height="230" priority={true} /></div> }
          {/* <p className="un_series_icon_text">スマートフォンの利用と<br />旅行消費に関する調査</p> */}
          <header className="un_series_header" style={{ '--font-color': fontc, '--bg-color': headingBgc, '--bg-opacity': headingOpacity } as CSSProperties}>
            <div className='un_series_title'>
              <h1 className="title">{data.subject}</h1>
              { heading_schedule && <div className="year">{heading_schedule}</div> }
              { heading_title && <div className="subTitle">{heading_title}</div> }
            </div>
          </header>
        </Inner>
        <div className="un_series_bg" style={{ '--bg-color': bgc } as CSSProperties}>
          { background_img.url && <Image src={background_img.url} alt={background_img.desc || ''} width="1440" height="730" priority={true} /> }
        </div>
      </div>
      <Inner className='un_series_body'>
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