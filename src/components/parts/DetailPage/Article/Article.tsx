'use client'

import './index.scss'
import Image from 'next/image'
// import { returnHtml } from '@/lib/returnHtml'
import { useEffect, useRef } from 'react'
import { DetailHead, DetailHeadType } from '@/components/parts/DetailPage/DetailHead/DetailHead'
import { DetailNav, DetailNavType } from '@/components/parts/DetailPage/DetailNav/DetailNav'
import { ArticleHead, GuestType } from '@/types/detailPages'
import { ArticleType } from '@/types/contentsType'
import { selectType } from '@/types/common'
import AuthorProfile from "@/components/pages/insightsDetail/AuthorProfile/AuthorProfile"
import Accordion from "@/components/parts/Accordion/Accordion"

type Props = {
  head: DetailHeadType
  nav: DetailNavType
  articleHead?: ArticleHead
  article_type?: selectType
  article: ArticleType
}

export default function Article(
  { head, nav, articleHead, article, article_type }: Props
) {
  const contentRef = useRef<HTMLDivElement>(null)
  const articleType = article_type?.key ? article_type?.key : null
  const { contents_default, contents_login } = article ?? {}
  // const charaList = 

  // useEffect(() => {
  //   // if (!contentRef.current) return

  //   // const h2List = contentRef.current.querySelectorAll('h2')
  //   // h2List.forEach((h2, index) => {
  //   //   h2.id = `section${index + 1}`
  //   // })
  // }, [])

  return (
    <article className='bl_article'>
      <DetailHead
        subject={head.subject}
        release={head.release}
        update={head.update}
        download={head.download}
        login={head.login}
        author={head.author}
      />

      <div className='bl_article_wrap'>
        <div className='bl_article_container'>
          <DetailNav sections={nav.sections} keywords={nav.keywords} numbering={nav.numbering} isPc className='hp_hidden_down-sm' />
          <div className='bl_article_body'>
            <div className='bl_article_head'>
              {/* <p className='bl_article_lead'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p> */}
              { articleHead?.img_main.url && <div className='bl_article_thumb'><Image src={articleHead.img_main.url} alt={articleHead.img_main.desc || ''} width={974} height={593} /></div> }

              { articleHead?.excerpt && <p className='bl_article_abstract'>{articleHead.excerpt}</p> }
            </div>

            <DetailNav sections={nav.sections} keywords={nav.keywords} numbering={nav.numbering} className='hp_hidden_up-md' />

            {
              articleHead?.guest && articleHead.guest.length > 0 &&
              articleHead.guest.map((guest: GuestType) => {
                return (
                  <div className='bl_articleChara' key={guest.guest_name}>
                    <div className='bl_articleChara_title'>{guest.guest_heading || '本記事の登場人物'}</div>
                    <div className='bl_articleChara_head'>
                      {/* <div className='bl_articleChara_img'><Image src='/assets/dummy_article_chara.jpg' alt='' width={196} height={196} /></div> */}
                      <div className='bl_articleChara_profile'>
                        <div className='bl_articleChara_name'><span>{guest.guest_name}</span>{guest.guest_honorific}</div>
                        <div className='bl_articleChara_about'>{guest.guest_title}</div>
                      </div>
                    </div>

                    <Accordion
                      openedText='閉じる'
                      closedText='もっと見る'
                      targetClassName='bl_articleChara_text'
                    >
                      <p>{guest.guest_profile}</p>
                    </Accordion>
                  </div>
                )
              })
            }

            {
              contents_default && articleType === 'interview' && (
                <div className='bl_article_talk js_content' ref={contentRef} dangerouslySetInnerHTML={{ __html: contents_default }}></div>
              )
            }

            {
              contents_default && articleType !== 'interview' && (
                <div className='bl_article_content js_content' ref={contentRef} dangerouslySetInnerHTML={{ __html: contents_default }}></div>
              )
            }
          </div>
        </div>

        { head.author && <AuthorProfile author={head.author} /> }
      </div>
    </article>
  )
}