"use client";

import { CONTENT_MAP } from '@/config/site'
import "swiper/css";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react'
import './index.scss'
import Inner from '@components/parts/Inner/Inner'
import LinkButton from '@components/parts/LinkButton/LinkButton'
import ScrollBar from '@components/parts/ScrollBar/ScrollBar'
import FootCard from '@components/parts/Card/FootCard'
import { CardType } from '@/types/contentsType'
import SliderWrap from "@/components/parts/SliderWrap/SliderWrap";

type Props = {
  list: CardType[]
  content?: string
}

export default function FootSlider({ list, content }: Props) {
  const [isPc, setIsPc] = useState(false)
  const meta = content ? CONTENT_MAP[content] : { jp: '調査・レポート', en: 'Reports', url: '/research-reports/' }

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsPc(e.matches)
    }

    handler(mq)
    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])
  
  return (
    <section className='bl_detailFoot'>
      <Inner className='bl_detailFoot_inner'>
        <div className='bl_detailFoot_head'>
          <div className='bl_detailFoot_title'>
            <h2>{meta.jp}</h2>
            <span>{meta.en}</span>
          </div>
          <div className='bl_detailFoot_more'><LinkButton title='すべてみる' href={meta.url} /></div>
        </div>

        <section className='bl_detailFoot_body'>
          {
            !isPc && (
              <ul className='bl_detailFoot_list'>
                <ScrollBar>
                  {
                    list.map((card: CardType) => {
                      return (
                        <li key={card.topics_id}>
                          <FootCard
                            card={card}
                          />
                        </li>
                      )
                    })
                  }
                </ScrollBar>
              </ul>
            )
          }

          {
            isPc && (
              <SliderWrap className="un_series_slider">
                <Swiper
                  modules={[Navigation, A11y]}
                  spaceBetween={40}
                  slidesPerView={'auto'}
                  // onReachEnd={() => { console.log('end') }}
                  // onSlideChange={(self) => console.log(self.activeIndex)}
                  navigation={{ nextEl: ".bl_sliderWrap_next", prevEl: ".bl_sliderWrap_prev" }}
                >
                  {
                    list.map((card: CardType) => {
                      return (
                        <SwiperSlide key={card.topics_id}>
                          <FootCard
                              card={card}
                            />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </SliderWrap>
            )
          }
        </section>
      </Inner>
    </section>
  )
}