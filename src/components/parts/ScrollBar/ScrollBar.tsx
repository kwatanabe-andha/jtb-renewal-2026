"use client";

import './index.scss'
import { ReactNode, useRef, useEffect } from 'react'

type Props = {
  children: ReactNode;
};

export default function ScrollBar({ children }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const wrap = bodyRef.current as HTMLDivElement
    const scrollWrap = lineRef.current as HTMLDivElement
    const scrollBar = currentRef.current as HTMLDivElement
    const firstWidth = wrap.children[0].clientWidth
    const scrollArea = wrap.scrollWidth - firstWidth
    const scrollDiff = ((scrollArea - wrap.scrollLeft)/scrollArea) * 100
    const barScrollArea = scrollWrap.clientWidth - scrollBar.clientWidth
    scrollBar.style.left = String(barScrollArea * (100 - scrollDiff)/100) + 'px'
  }

  return (
    <div className='bl_scrollBar_wrap'>
      <div className='bl_scrollBar_body' ref={bodyRef} onScroll={handleScroll}>
        <ul className='bl_scrollBar_content'>
          {children}
        </ul>
      </div>

      <div className='bl_scrollBar'>
        <div className='bl_scrollBar_line' ref={lineRef}>
          <div className='bl_scrollBar_current' ref={currentRef}></div>
        </div>
      </div>
    </div>
  )
}