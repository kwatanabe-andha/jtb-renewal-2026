"use client";

import "swiper/css";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from 'react'
import './index.scss'
import Inner from '@components/parts/Inner/Inner'
import LinkButton from '@components/parts/LinkButton/LinkButton'
import ScrollBar from '@components/parts/ScrollBar/ScrollBar'
import FootCard, { FootCardType } from '@components/parts/Card/FootCard'
import SliderWrap from "@/components/parts/SliderWrap/SliderWrap";

const dummy = [
  { topics_id: 1, thumb: { url: '/thumb.jpg', desc: '' }, logo: { url: '/series_logo_01.jpg', desc: '' }, category: 'コラム', title: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る', auxiliary: '2024年度/東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務' },
  { topics_id: 2, thumb: { url: '/thumb.jpg', desc: '' }, logo: { url: '/series_logo_02.jpg', desc: '' }, category: 'コラム', title: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る', auxiliary: '2024年度/東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務' },
  { topics_id: 3, thumb: { url: '/thumb.jpg', desc: '' }, logo: { url: '/series_logo_03.jpg', desc: '' }, category: 'コラム', title: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る', auxiliary: '2024年度/東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務' },
  { topics_id: 4, thumb: { url: '/thumb.jpg', desc: '' }, logo: { url: '/series_logo_01.jpg', desc: '' }, category: 'コラム', title: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る', auxiliary: '2024年度/東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務' },
  { topics_id: 5, thumb: { url: '/thumb.jpg', desc: '' }, logo: { url: '/series_logo_02.jpg', desc: '' }, category: 'コラム', title: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る', auxiliary: '2024年度/東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務' },
]

export default function DetailFoot() {
  const [isPc, setIsPc] = useState(false)
  // const prevRef = useRef<HTMLButtonElement>(null)
  // const nextRef = useRef<HTMLButtonElement>(null)
  // const swiper = useSwiper()

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
    <div className='bl_detailFoot'>
      <Inner className='bl_detailFoot_inner'>
        <div className='bl_detailFoot_head'>
          <p className='bl_detailFoot_title'>調査・レポート<span>Reports</span></p>
          <div className='bl_detailFoot_more'><LinkButton title='すべてみる' href='/' /></div>
        </div>

        <div className='bl_detailFoot_body'>
          {
            !isPc && (
              <ul className='bl_detailFoot_list'>
                <ScrollBar>
                  {
                    dummy.map((card: FootCardType) => {
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
                  onReachEnd={() => { console.log('end') }}
                  onSlideChange={(self) => console.log(self.activeIndex)}
                  navigation={{ nextEl: ".bl_sliderWrap_next", prevEl: ".bl_sliderWrap_prev" }}
                >
                  {
                    dummy.map((card: FootCardType) => {
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
        </div>
      </Inner>
    </div>
  )
}