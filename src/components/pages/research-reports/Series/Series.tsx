"use client";

import './index.scss'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import Slide from './_block/Slide';
import { useRef } from 'react'

const data = [
  {
    id: 1,
    logo: 'series_logo_01.jpg',
    title: '1988年以来発行、日本における海外旅行市場の実態と今後の展望を分析',
    date: '年1回'
  },
  {
    id: 2,
    logo: 'series_logo_02.jpg',
    title: '1981年から続く動向見通し、各種指標・JTBグループのアンケート等から需要予測',
    date: '年4回（年間・GW・夏休み・年末年始）'
  },
  {
    id: 3,
    logo: 'series_logo_03.jpg',
    title: 'スマホの利用実態を継続的に調べ、生活や旅行行動の変化の兆しをとらえる',
    date: '年1回（2013-2025年）'
  },
  {
    id: 4,
    logo: 'series_logo_01.jpg',
    title: '1988年以来発行、日本における海外旅行市場の実態と今後の展望を分析',
    date: '年1回'
  },
  {
    id: 5,
    logo: 'series_logo_02.jpg',
    title: '1981年から続く動向見通し、各種指標・JTBグループのアンケート等から需要予測',
    date: '年4回（年間・GW・夏休み・年末年始）'
  },
  {
    id: 6,
    logo: 'series_logo_03.jpg',
    title: 'スマホの利用実態を継続的に調べ、生活や旅行行動の変化の兆しをとらえる',
    date: '年1回（2013-2025年）'
  }
]

const isScrollXMax = (el: HTMLElement, threshold = 1): boolean => {
  return el.scrollLeft + el.clientWidth >= el.scrollWidth - threshold
}

// const isScrollXMin = (el: HTMLElement, threshold = 1): boolean => {
//   return el.scrollLeft <= threshold
// }

export default function Recently() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!containerRef.current) return

    if (isScrollXMax(containerRef.current)) {
      console.log('👉 右端までスクロール')
      document.querySelector('.un_series_wrap')?.classList.add('is_scrolled')
    }

    // if (isScrollXMin(containerRef.current)) {
    //   console.log('👈 左端（0）まで戻った')
    // }
  }

  return (
    <section className='un_series'>
      <Inner className='un_series_inner'>
        <div className='un_series_heading'><Level2>定点調査・シリーズ</Level2></div>

        <div className='un_series_wrap'>
          <div className='un_series_container' ref={containerRef} onScroll={handleScroll}>
            <Slide items={data} />
          </div>
        </div>
      </Inner>
    </section>
  )
}