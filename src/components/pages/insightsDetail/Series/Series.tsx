"use client";

import './index.scss'
import Image from 'next/image'
import Link from 'next/link'
import Inner from "@/components/parts/Inner/Inner"
import LinkButton from '@/components/parts/LinkButton/LinkButton'
import toDateTimeFormat from '@/lib/toDateTimeFormat'

type Item = {
  title: string
  ymd: string
  url: string
}

const dummy = [
  { ymd: '2025-05-15', url: '/', title: '【第15回】環境コンサルタント佐川鉄平さんに聞く、5年先の旅のカタチ' },
  { ymd: '2025-04-15', url: '/', title: '【第14回】ジオラマ作家・MAJIRIさんに聞く、5年先の旅のカタチ' },
  { ymd: '2025-03-15', url: '/', title: '【第13回】ファッションデザイナー・永井純さんに聞く、5年先の旅のカタチ' },
  { ymd: '2025-02-15', url: '/', title: '【第12回】エジプト考古学者・大城道則さんに聞く、5年先の旅のカタチ' },
  { ymd: '2024-12-15', url: '/', title: '【第11回】ハイヒールを履く僧侶・西村宏堂さんに聞く、5年先の旅のカタチ' }
]

export default function Series() {
  return (
    <div className='un_series'>
      <Inner className='un_series_inner'>
        <div className='un_series_container'>
          <div className='un_series_top'>
            <div className='un_series_top_img'><Image src='/series_logo_04.jpg' alt='' width={195} height={195} /></div>
            <div className='un_series_top_content'>
              <p className='un_series_top_title'>新しい観光の芽 探検隊🔍～5年先の旅のカタチを探る～</p>
              <p className='un_series_top_text'>これからの観光や旅行がどうなっていくのか・・・今後のトレンドの把握と変化の兆しをとらえることを目的に、「新しい観光の芽 探検隊」を結成しました。旅行分野にとどまらない様々な分野における第一人者への「探検（＝インタビュー）」を通して、それぞれの方が考える「5年先の旅」とはどのようなものかを考えます。本コラムでは、探検隊による探検記（＝インタビューの様子）をお届けします。</p>
            </div>
          </div>

          <div className='un_series_back'>
            <p className='un_series_back_title'>バックナンバー</p>
            <ul className='un_series_list'>
              {
                dummy.map((item: Item, index: number) => {
                  return (
                    <li className='un_series_item' key={index}>
                      <div className='un_series_item_date'><time dateTime={item.ymd}>{ toDateTimeFormat(item.ymd) }</time></div>
                      <p className='un_series_item_title'><Link href={item.url}>{item.title}</Link></p>
                    </li>
                  )
                })
              }
            </ul>

            <div className='un_series_back_btn'>
              <LinkButton title='すべてみる' href='/' />
            </div>
          </div>
        </div>
      </Inner>
    </div>
  )
}