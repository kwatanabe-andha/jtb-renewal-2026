"use client";

import './index.scss'
import Image from 'next/image'
import Inner from "@/components/parts/Inner/Inner"
import Accordion from "@/components/parts/Accordion/Accordion"

export default function AuthorProfile() {
  return (
    <Inner className='un_authorProfile'>
      <div className='un_authorProfile_container'>
        <div className='un_authorProfile_head'>
          <p className='un_authorProfile_label'>著者プロフィール</p>
          <div className='un_authorProfile_img'>
            <Image src='/assets/dummy_yamashita.jpg' alt='' width={162} height={160} />
          </div>
        </div>
        <div className='un_authorProfile_body'>
          <div className='un_authorProfile_name'>
            山下 真輝<span>さん</span>
          </div>
          <p className='un_authorProfile_position'>JTB総合研究所 フェロー</p>

          <Accordion
            openedText='閉じる'
            closedText='もっと見る'
            targetClassName='un_authorProfile_text'
          >
            <p>観光による地域活性化のための計画・戦略の策定、人材育成、旅行商品開発を専門とする。近年はスポーツツーリズム、アドベンチャーツーリズム分野の調査研究も手掛ける。内閣府地域活性化伝道師として全国の観光振興政策を支援。観光による地域活性化のための計画・戦略の策定、人材育成、旅行商品開発を専門とする。近年はスポーツツーリズム、アドベンチャーツーリズム分野の調査研究も手掛ける。内閣府地域活性化伝道師として全国の観光振興政策を支援。</p>
          </Accordion>
        </div>
      </div>
    </Inner>
  )
}