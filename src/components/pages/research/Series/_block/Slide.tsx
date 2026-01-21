import "swiper/css";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, CSSProperties } from 'react'
import SliderWrap from "@/components/parts/SliderWrap/SliderWrap"
import { ReportsSeriesSlide } from "@/types/reports"

type Props = {
  items: ReportsSeriesSlide[]
}

export default function Slide({ items }: Props) {
  const [isPc, setIsPc] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsPc(e.matches)
    }

    handler(mq)
    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])

  const slideLength = items.length

  if (!isPc) {
    return (
      <ul className="un_series_list" style={{ '--slide-length': `${Math.round(slideLength / 2)}` } as CSSProperties}>
        {
          items.map((item: ReportsSeriesSlide) => {
            return (
              <li key={item.topics_id}>
                <Link href={`/research-reports/series/${item.slug}/`}>
                  { item.series_logo.url && <div className="un_series_img"><Image src={item.series_logo.url} alt={item.series_logo.desc || ''} width={195} height={195} /></div> }
                  <p className="un_series_title">{item.catch_text}</p>
                  <div className="un_series_date">{item.heading_schedule}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }

  // PC：Swiper
  return (
    <>
      <SliderWrap className="un_series_slider">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={'auto'}
          onSlideChange={() => console.log("slide change")}
          navigation={{ nextEl: ".bl_sliderWrap_next", prevEl: ".bl_sliderWrap_prev" }}
        >
          {
            items.map((item: ReportsSeriesSlide) => {
              return (
                <SwiperSlide key={item.topics_id}>
                  <Link href={`/research-reports/series/${item.slug}/`} className="un_series_link">
                    { item.series_logo.url && <div className="un_series_img"><Image src={item.series_logo.url} alt={item.series_logo.desc || ''} width={195} height={195} /></div> }
                    <p className="un_series_title">{item.catch_text}</p>
                    <div className="un_series_date">{item.heading_schedule}</div>
                  </Link>
                </SwiperSlide>
                
              )
            })
          }
        </Swiper>
      </SliderWrap>
    </>
  )
}