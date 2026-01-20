"use client"

import './index.scss'
import { ReactNode, useRef, CSSProperties } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ScrollBar from '@components/parts/ScrollBar/ScrollBar'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type Props = {
  children: ReactNode;
  offset?: number
};

export default function SideNav({ children, offset = 0 }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    const nav = document.querySelector('.bl_sideNav_content') as HTMLElement
    const endTrigger = document.querySelector('.bl_sideNav_wrap') as HTMLElement

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: nav,
        // start: 'top-=' + String(header?.clientHeight) + 'px top',
        start: 'top-=50 top',
        endTrigger,
        end: () => {
          // return '+=' + String(endTrigger?.clientHeight - nav?.clientHeight - 50)
          return '+=' + String(endTrigger?.clientHeight - nav?.clientHeight - 100)
        },
        pin: true
      })
    })
    
    if (!wrapRef.current) return
    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })
    observer.observe(wrapRef.current)
  }, [])

  return (
    <div className='bl_sideNav_wrap' ref={wrapRef}>
      <div className='bl_sideNav_body'>{children}</div>
      <div className='bl_sideNav_content'  style={{ '--sidenav-offset': `${offset}px` } as CSSProperties}>
        <aside className='bl_sideNav_nav'>
          {/* sec */}
          <h2 className='el_hidden'>サイドバー</h2>
          <section className='bl_sideNav_sec'>
            <h3 className='bl_sideNav_title'>関連情報</h3>
            <a href="" className='bl_sideNav_relCard'>
              <div className='bl_sideNav_relCard_img'><Image src='/assets/thumb.jpg' alt='' width={197} height={120} /></div>
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
          </section>

          {/* sec */}
          <section className='bl_sideNav_sec'>
            <h3 className='bl_sideNav_title'>最新調査・レポート</h3>
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
          </section>

          {/* sec */}
          <section className='bl_sideNav_sec'>
            <h3 className='bl_sideNav_title'>ピックアップ</h3>
            <div className='bl_sideNav_pickup'>
              <ScrollBar>
                <li className='bl_sideNav_pickup_item'>
                  <a href="">
                    <div className='bl_sideNav_pickup_img'>
                      <div className='bl_sideNav_pickup_thumb'>
                        <Image src='/assets/pickup_01.jpg' alt='' width={300} height={168} />
                      </div>
                      <div className='bl_sideNav_pickup_featured'>featured</div>
                    </div>
                    <p className='bl_sideNav_pickup_text'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
                    <div className='bl_sideNav_pickup_cat'>調査・レポート</div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className='bl_sideNav_pickup_img'>
                      <div className='bl_sideNav_pickup_thumb'>
                        <Image src='/assets/pickup_01.jpg' alt='' width={300} height={168} />
                      </div>
                      <div className='bl_sideNav_pickup_featured'>featured</div>
                    </div>
                    <p className='bl_sideNav_pickup_text'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
                    <div className='bl_sideNav_pickup_cat'>調査・レポート</div>
                  </a>
                </li>
              </ScrollBar>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}