"use client";

import './index.scss'
import { ReactNode, useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  children: ReactNode;
};

export default function SideNav({ children }: Props) {
  const pickupRef = useRef<HTMLUListElement>(null)
  const scrollWrapRef = useRef<HTMLDivElement | null>(null)
  const scrollBarRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    const wrap = pickupRef.current as HTMLUListElement
    const scrollWrap = scrollWrapRef.current as HTMLDivElement
    const scrollBar = scrollBarRef.current as HTMLDivElement
    const firstWidth = wrap.children[0].clientWidth + 30
    const scrollArea = wrap.scrollWidth - firstWidth
    const scrollDiff = ((scrollArea - wrap.scrollLeft)/scrollArea) * 100
    const barScrollArea = scrollWrap.clientWidth - scrollBar.clientWidth
    scrollBar.style.left = String(barScrollArea * (100 - scrollDiff)/100) + 'px'
  }

  useGSAP(() => {
    const mm = gsap.matchMedia()
    const nav = document.querySelector('.bl_sideNav_content') as HTMLElement
    const endTrigger = document.querySelector('.bl_sideNav_wrap') as HTMLElement

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: nav,
        // start: 'top-=' + String(header?.clientHeight) + 'px top',
        start: 'top-=50px top',
        endTrigger,
        end: () => {
          // return '+=' + String(endTrigger?.clientHeight - nav?.clientHeight - 50)
          return '+=' + String(endTrigger?.clientHeight - nav?.clientHeight - 100)
        },
        pin: true
      })
    })

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh()
    })
  }, [])

  return (
    <div className='bl_sideNav_wrap'>
      <div className='bl_sideNav_body'>{children}</div>
      <div className='bl_sideNav_content'>
        <nav className='bl_sideNav_nav'>
          {/* sec */}
          <div className='bl_sideNav_sec'>
            <div className='bl_sideNav_title'>関連情報</div>
            <a href="" className='bl_sideNav_relCard'>
              <div className='bl_sideNav_relCard_img'><Image src='thumb.jpg' alt='' width={197} height={120} /></div>
              <p className='bl_sideNav_relCard_text'>テキストテキストテキスト</p>
            </a>
            <div className='bl_sideNav_relInfo_container'>
              <a href="" className='bl_sideNav_relInfo'>
                <p className='bl_sideNav_relInfo_title'>消費者行動</p>
                <div className='bl_sideNav_relInfo_cat'>消費者行動</div>
              </a>
              <a href="" className='bl_sideNav_relInfo'>
                <p className='bl_sideNav_relInfo_title'>人流分析サービス 「Japan <br />Travel Bridge」の提供を開始</p>
                <div className='bl_sideNav_relInfo_cat'>ニュース</div>
              </a>
            </div>
          </div>

          {/* sec */}
          <div className='bl_sideNav_sec'>
            <div className='bl_sideNav_title'>最新調査・レポート</div>
            <ul className='bl_sideNav_report'>
              <li>
                <a href="">
                  <p className='bl_sideNav_report_text'>インバウンド訪日外国人の動向</p>
                  <div className='bl_sideNav_report_elapsed'>14時間前</div>
                </a>
              </li>
              <li>
                <a href="">
                  <p className='bl_sideNav_report_text'>インバウンド訪日外国人の動向</p>
                  <div className='bl_sideNav_report_elapsed'>1日前</div>
                </a>
              </li>
            </ul>
          </div>

          {/* sec */}
          <div className='bl_sideNav_sec'>
            <div className='bl_sideNav_title'>ピックアップ</div>
            <div className='bl_sideNav_pickup_wrap'>
              <ul className='bl_sideNav_pickup' ref={pickupRef} onScroll={handleScroll}>
                <li>
                  <a href="">
                    <div className='bl_sideNav_pickup_img'>
                      <Image src='pickup_01.jpg' alt='' width={300} height={168} />
                    </div>
                    <p className='bl_sideNav_pickup_text'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
                    <div className='bl_sideNav_pickup_cat'>調査・レポート</div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className='bl_sideNav_pickup_img'>
                      <Image src='pickup_01.jpg' alt='' width={300} height={168} />
                    </div>
                    <p className='bl_sideNav_pickup_text'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
                    <div className='bl_sideNav_pickup_cat'>調査・レポート</div>
                  </a>
                </li>
              </ul>

              <div className='bl_sideNav_pickupScroll_wrap'>
                <div className='bl_sideNav_pickupScroll' ref={scrollWrapRef}>
                  <div className='bl_sideNav_pickupScroll_bar' ref={scrollBarRef}></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}