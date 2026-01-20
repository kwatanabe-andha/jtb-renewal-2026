"use client"

import Link from 'next/link'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './index.scss'
import { SITE_URL } from '@/config/site'
import LockIcon from '@/icon/Lock/Lock'
import { Hash01 } from "@untitledui/icons"
import { KeywordType } from '@/types/detailPages'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export type DetailNavType = {
  sections : string[]
  keywords?: KeywordType[]
  className?: string
  numbering: boolean
}

export function DetailNav({ sections, keywords, className, numbering }: DetailNavType) {
  useGSAP(() => {
    // const mm = gsap.matchMedia()
    const wrap = document.querySelector('.bl_article_wrap') as HTMLElement
    // const nav = document.querySelector('.js_detailNav') as HTMLElement
    const h2List = document.querySelectorAll('.js_content h2')
    const anchorList = document.querySelectorAll('.bl_detailNav_list_item')
    const reset = () => {
      anchorList.forEach(item => {
        const target = item as HTMLLinkElement
        target.dataset.current = 'false'
      })
    }

    // mm.add('(min-width: 768px)', () => {
    //   ScrollTrigger.create({
    //     trigger: nav,
    //     start: 'top-=50 top',
    //     end: 'bottom bottom',
    //     pin: true,
    //     pinSpacing: false,
    //     // markers: true,
    //     onEnter: () => { console.log('onEnter') },
    //     onLeave: () => { console.log('onLeave') },
    //   })
    // })

    h2List.forEach((item, index: number) => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top top',
        onEnter: () => {
          reset()
          const target = anchorList[index] as HTMLLinkElement
          target.dataset.current = 'true'
        },
        onLeaveBack: () => {
          reset()
          const target = anchorList[index] as HTMLLinkElement
          target.dataset.current = 'true'
        }
      })
    })

    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })
    observer.observe(wrap)
  }, [])

  return (
    <aside className={clsx('bl_detailNav js_detailNav', className !== undefined && className)}>
      <div className='bl_detailNav_inner'>
        <div className='bl_detailNav_member'>
          <LockIcon />
          <p>この記事の全文を読むには<br /><Link href={SITE_URL.login}>ログイン</Link>が必要です</p>
        </div>
        
        <nav className='bl_detailNav_nav'>
          <h2 className='bl_detailNav_title'>目次</h2>
          <ul className='bl_detailNav_list'>
            {
              sections.map((section: string, index: number) => {
                let current = false
                return (
                  <li key={index}>
                    { index === 0 && (current = true) }
                    <Link href={`#section${index + 1}`} className='bl_detailNav_list_item' data-current={`${current}`}>
                      { numbering && <div className='bl_detailNav_list_number'>{index + 1}</div> }
                      <p className='bl_detailNav_list_text'>{section}</p>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <div className='bl_detailNav_rel'>
          <div className='bl_detailNav_keyword'>関連キーワード</div>
          <ul className='bl_detailNav_rel_list'>
            {
              keywords?.map((keyword: KeywordType, index: number) => {
                return (
                  <li key={index}>
                    <Link href={`/glossary/${keyword.slug}/`}>
                      <Hash01 width={10} height={10} />
                      {keyword.subject}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </aside>
  )
}