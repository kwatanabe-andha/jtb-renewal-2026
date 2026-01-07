'use client'

import './index.scss'
import Image from 'next/image'
// import Link from 'next/link'
import { DetailHead, DetailHeadType } from '@/components/parts/DetailPage/DetailHead/DetailHead'
import { DetailNav, DetailNavType } from '@/components/parts/DetailPage/DetailNav/DetailNav'
// import Accordion from "@/components/parts/Accordion/Accordion"
import Content from '../Content/Content'

type Props = {
  head: DetailHeadType
  nav: DetailNavType
}

export default function Article(
  { head, nav }: Props
) {

  return (
    <article className='bl_article'>
      <DetailHead
        title={head.title}
        text={head.text}
        release={head.release}
        update={head.update}
        download={head.download}
        member={head.member}
        author={head.author}
      />

      <div className='bl_article_wrap'>
        <div className='bl_article_container'>
          <DetailNav sections={nav.sections} keywords={nav.keywords} className='hp_hidden_down-sm' />
          <div className='bl_article_body'>
            <div className='bl_article_head'>
              <p className='bl_article_lead'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
              <div className='bl_article_thumb'><Image src='/assets/dummy_thumb_01.jpg' alt='' width={974} height={593} /></div>
              <p className='bl_article_abstract'>
                「旅の魅力とは何ですか？」という問いを投げかけると、多くの人は、リフレッシュや楽しみ、といったことと合わせて、「非日常」という言葉を口にします。しかしながら、気軽に旅行ができなかった時代から、旅はより身近な存在となりました。インターネットを介せば、世界中の情景が目に入る現代において、旅先で体験する「非日常」の意味合いが、徐々に変化してきているようにも感じます。では、今の旅行者は、旅にどのようなことを求めているのでしょうか？<br />株式会社JTB総合研究所（東京都品川区 代表取締役社長執行役員　風間 欣人）は、アンケート調査とインタビュー調査を交え、「旅に求めることについての調査」をまとめました。
              </p>
            </div>
            <DetailNav sections={nav.sections} keywords={nav.keywords} className='hp_hidden_up-md' />

            <Content />
          </div>
        </div>
      </div>

    </article>
  )
}