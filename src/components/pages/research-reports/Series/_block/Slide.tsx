import "swiper/css";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, CSSProperties } from 'react'
import SliderWrap from "@/components/parts/SliderWrap/SliderWrap";

type Item = {
  id: number
  logo: string
  title: string
  date: string
}

type Props = {
  items: Item[]
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
          items.map((item: Item) => {
            return (
              <li key={item.id}>
                <Link href="">
                  <div className="un_series_img"><Image src={item.logo} alt='' width={195} height={195} /></div>
                  <p className="un_series_title">{item.title}</p>
                  <div className="un_series_date">{item.date}</div>
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
            items.map((item: Item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Link href="" className="un_series_link">
                    <div className="un_series_img"><Image src={item.logo} alt='' width={195} height={195} /></div>
                    <p className="un_series_title">{item.title}</p>
                    <div className="un_series_date">{item.date}</div>
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