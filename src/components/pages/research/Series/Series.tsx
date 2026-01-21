"use client";

import './index.scss'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import Slide from './_block/Slide';
import { useRef } from 'react'
import { ReportsSeriesSlide } from "@/types/reports"

type Props = {
  data: ReportsSeriesSlide[]
}

const isScrollXMax = (el: HTMLElement, threshold = 1): boolean => {
  return el.scrollLeft + el.clientWidth >= el.scrollWidth - threshold
}

// const isScrollXMin = (el: HTMLElement, threshold = 1): boolean => {
//   return el.scrollLeft <= threshold
// }

export default function Series({ data }: Props) {
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