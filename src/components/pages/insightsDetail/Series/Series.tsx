"use client";

import './index.scss'
import Image from 'next/image'
import Link from 'next/link'
import Inner from "@/components/parts/Inner/Inner"
import LinkButton from '@/components/parts/LinkButton/LinkButton'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { InsightsType } from '@/types/insights'
import { SeriesType } from '@/types/insights'

type Props = {
  list: InsightsType[]
  series: SeriesType
}

export default function Series({ list, series }: Props) {
  return (
    <section className='un_series'>
      <Inner className='un_series_inner'>
        <div className='un_series_container'>
          <div className='un_series_top'>
            <div className='un_series_top_img'><Image src={series.series_logo.url} alt={series.series_logo.desc} width={195} height={195} /></div>
            <div className='un_series_top_content'>
              <h3 className='un_series_top_title'>{ series.subject }</h3>
              { series.lead_text && <p className='un_series_top_text'>{ series.lead_text }</p> }
            </div>
          </div>

          <div className='un_series_back'>
            <h3 className='un_series_back_title'>バックナンバー</h3>
            <ul className='un_series_list'>
              {
                list.map((item: InsightsType, index: number) => {
                  return (
                    <li className='un_series_item' key={index}>
                      <div className='un_series_item_date'><time dateTime={item.ymd}>{ toDateTimeFormat(item.ymd) }</time></div>
                      <p className='un_series_item_title'><Link href={`/insights/${item.slug}/`}>{item.subject}</Link></p>
                    </li>
                  )
                })
              }
            </ul>

            <div className='un_series_back_btn'>
              <LinkButton title='すべてみる' href={`/insights/series/${series.slug}/`} />
            </div>
          </div>
        </div>
      </Inner>
    </section>
  )
}