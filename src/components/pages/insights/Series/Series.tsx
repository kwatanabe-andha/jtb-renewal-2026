"use client";

import './index.scss'
import Link from "next/link"
import Image from 'next/image'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import { useState } from 'react'

const data = [
  {
    id: 1,
    logo: 'series_logo_01.jpg',
    title: 'ツーリズム×○。観光に様々な概念をクロスさせ、新しい価値や仕組みを考えます',
    date: '2025.01.10'
  },
  {
    id: 2,
    logo: 'series_logo_02.jpg',
    title: '旅行者の日常と非日常の間にある "線" に着目し、"旅" への捉え方や視点を考えます',
    date: '2025.01.11'
  },
  {
    id: 3,
    logo: 'series_logo_03.jpg',
    title: '"5年先の旅のカタチ" を探るために、異業種の第一人者へ取材、変化の"芽" を捉えます',
    date: '2025.01.10'
  },
  {
    id: 4,
    logo: 'series_logo_01.jpg',
    title: 'JTB総研に在籍する各観光分野のエキスパートによるインサイト＆コラム',
    date: '2025.01.10'
  },
  {
    id: 5,
    logo: 'series_logo_02.jpg',
    title: 'JTB総研の研究員が、日々のリサーチや現場での気づき、小さな "観光のヒント" をラフに綴ります',
    date: '2025.01.10'
  },
]

export default function Series() {
  const [viewMore, setViewMore] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement
    setViewMore(!viewMore)
    button.dataset.open = `${!viewMore}`
    console.log(viewMore)
  }

  return (
    <div className='un_series'>
      <Inner className='un_series_inner'>
        <section className='un_series_sec'>
          <div className='un_series_heading'><Level2>現在連載中のシリーズ</Level2></div>
          <ul className='un_series_list'>
            {
              data.map(item => {
                return (
                  <li key={item.id}>
                    <Link href=''>
                      <div className="un_series_img"><Image src={item.logo} alt='' width={195} height={195} /></div>
                      <p className='un_series_title'>{item.title}</p>
                      <div className='un_series_date'>{item.date}</div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </section>

        {
          viewMore && (
            <section className='un_series_sec'>
              <div className='un_series_heading'><Level2>連載が終了したシリーズ</Level2></div>
              <ul className='un_series_list'>
                {
                  data.map(item => {
                    return (
                      <li key={item.id}>
                        <Link href=''>
                          <div className="un_series_img"><Image src={item.logo} alt='' width={195} height={195} /></div>
                          <p className='un_series_title'>{item.title}</p>
                          <div className='un_series_date'>{item.date}</div>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          )
        }

        <div className='bl_viewMore un_series_btn'>
          <button type='button' data-open="false" onClick={handleClick}>
            { viewMore && '連載が終了したシリーズを閉じる' }
            { !viewMore && '連載が終了したシリーズをみる' }
          </button>
        </div>
      </Inner>
    </div>
  )
}