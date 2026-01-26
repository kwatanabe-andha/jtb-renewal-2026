"use client";

import './index.scss'
import Image from 'next/image'
import Accordion from "@/components/parts/Accordion/Accordion"
import { SeriesType } from '@/types/insights';

export default function Summary({series} : {series: SeriesType}) {
  const seriesTitle = series.slug === "xtourism" ? '✘ Tourism' : series.subject

  return (
    <section className='un_summary'>
      <div className='un_summary_inner'>
        <div className='un_summaryHead'>
          { series.series_logo.url && <div className='un_summaryHead_logo'><Image src={series.series_logo.url} alt={series.series_logo.desc || ''} width={195} height={195} /></div> }
          <div className='un_summaryHead_shoulder'>
            <div className='un_summaryHead_shoulder_series'>{seriesTitle}</div>
            <div className='un_summaryHead_shoulder_and'>{series.shoulder_text}</div>
          </div>

        </div>
        <h1 className='un_summary_heading'>{series.subject}</h1>
        <p className='un_summary_text'>{series.lead_text}</p>
        { series.img_main.url && <div className='un_summary_img'><Image src={series.img_main.url} alt={series.img_main.desc || ''} width={974} height={593} /></div> }

        <Accordion
          openedText='閉じる'
          closedText='もっと見る'
          className='un_summary_btn'
          targetClassName='un_summary_content'
          section
        >
          <h2>{series.series_description_title}</h2>
          <p>{series.series_description_text}</p>
        </Accordion>
      </div>
    </section>
  )
}