"use client";

import './index.scss'
import Link from "next/link"
import Image from 'next/image'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import ViewMore from "@/components/parts/ViewMore/ViewMore"
import { useState, useRef } from 'react'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { opening, closing } from '@/lib/heightAnim'
import { SeriesType } from '@/types/insights';

export default function Series({data} : {data: SeriesType[]}) {
  const [isOpen, setIsOpen] = useState(false)
  const hiddenRef = useRef<HTMLElement>(null)

  const handleClick = () => {
    const hiddenDom = hiddenRef.current as HTMLElement
    if (isOpen) { closing(hiddenDom) } else { opening(hiddenDom) }
  }

  const openSeries = data.filter(item => item.status.key === 'open' )
  const closeSeries = data.filter(item => item.status.key === 'close' )

  return (
    <div className='un_series'>
      <Inner className='un_series_inner'>
        {
          openSeries.length > 0 && (
            <section className='un_series_sec'>
              <div className='un_series_heading'><Level2>現在連載中のシリーズ</Level2></div>
              <ul className='un_series_list'>
                {
                  data.map(item => {
                    return (
                      <li key={item.topics_id}>
                        <Link href={`/insights/series/${item.slug}/`}>
                          { item.series_logo.url && <div className="un_series_img"><Image src={item.series_logo.url} alt={item.series_logo.desc || ''} width={195} height={195} /></div> }
                          <p className='un_series_title'>{item.subject}</p>
                          <div className='un_series_date'><time dateTime={item.ymd}>{ toDateTimeFormat(item.ymd) }</time></div>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          )
        }

        {
          closeSeries.length > 0 && (
            <>
              <section className='un_series_sec' ref={hiddenRef} aria-hidden='true'>
                <div className='un_series_heading'><Level2>連載が終了したシリーズ</Level2></div>
                <ul className='un_series_list'>
                  {
                    data.map(item => {
                      return (
                        <li key={item.topics_id}>
                          <Link href={`/insights/series/${item.slug}/`}>
                            { item.series_logo.url && <div className="un_series_img"><Image src={item.series_logo.url} alt={item.series_logo.desc || ''} width={195} height={195} /></div> }
                            <p className='un_series_title'>{item.subject}</p>
                            <div className='un_series_date'><time dateTime={item.ymd}>{ toDateTimeFormat(item.ymd) }</time></div>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </section>

              <ViewMore
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openedText='連載が終了したシリーズを閉じる'
                closedText='連載が終了したシリーズをみる'
                className='un_series_btn'
                callback={handleClick}
              />
            </>
          )
        }
      </Inner>
    </div>
  )
}