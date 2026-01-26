"use client"

import { useRef } from 'react'
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
  isPc?: boolean
  scrollToDetail?: boolean
}

export function DetailNav({ sections, keywords, className, numbering, isPc = false, scrollToDetail = false }: DetailNavType) {
  const targetRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    const wrap = document.querySelector('.bl_article_container') as HTMLElement
    const nav = targetRef.current as HTMLElement
    const navInner = document.querySelector('.bl_detailNav_inner') as HTMLElement
    const h2List = scrollToDetail ? document.querySelectorAll('.js_content .bl_details') : document.querySelectorAll('.js_content h2')
    const anchorList = document.querySelectorAll('.bl_detailNav_list_item')

    if (h2List.length > 0) {
      const reset = () => {
        anchorList.forEach(item => {
          const target = item as HTMLLinkElement
          target.dataset.current = 'false'
        })
      }

      anchorList.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          const y = h2List[index].getBoundingClientRect().top + window.pageYOffset - 60 // 60は上部余白
          window.scrollTo({
            top: y,
            behavior: 'smooth',
          })
        })
      })

      h2List.forEach((item, index: number) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top top',
          end: 'bottom top',
          onEnter: () => {
            reset()
            const target = anchorList[index] as HTMLLinkElement
            target.dataset.current = 'true'
          },
          onEnterBack: () => {
            reset()
            const target = anchorList[index] as HTMLLinkElement
            target.dataset.current = 'true'
          }
        })
      })
    }

    mm.add('(min-width: 768px)', () => {
      ScrollTrigger.create({
        trigger: nav,
        start: 'top-=50 top',
        endTrigger: wrap,
        end: () => {
          return '+=' + String(wrap?.clientHeight - navInner.clientHeight)
        },
        pin: true,
      })
    })

    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh()
    })
    observer.observe(wrap)
  }, [])

  return (
    <aside ref={ isPc ? (el) => { targetRef.current = el } : null } className={clsx('bl_detailNav', className !== undefined && className)} >
      <div className='bl_detailNav_inner'>
        <div className='bl_detailNav_member'>
          <LockIcon />
          <p>この記事の全文を読むには<br /><Link href={SITE_URL.login}>ログイン</Link>が必要です</p>
        </div>

        {
          sections.length > 0 && (
            <nav className='bl_detailNav_nav'>
              <h2 className='bl_detailNav_title'>目次</h2>
              <ul className='bl_detailNav_list'>
                {
                  sections.map((section: string, index: number) => {
                    let current = false
                    return (
                      <li key={index}>
                        { index === 0 && (current = true) }
                        <Link href={''} className='bl_detailNav_list_item' data-current={`${current}`}>
                          { numbering && <div className='bl_detailNav_list_number'>{index + 1}</div> }
                          <p className='bl_detailNav_list_text'>{section}</p>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
          )
        }

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