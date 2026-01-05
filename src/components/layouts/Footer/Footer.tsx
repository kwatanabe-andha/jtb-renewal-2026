"use client";

import './index.scss'
import Link from "next/link"
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { SITE_URL } from '@/config/site'

const toggle = (button: HTMLButtonElement) => {
  const expanded = button.getAttribute('aria-expanded')
  const menu = button.parentElement?.nextSibling as HTMLDivElement
  
  if (expanded === 'false') {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
  }
}

export default function Footer() {
  const [isPc, setIsPc] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsPc(e.matches)
    }

    handler(mq)
    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [])

  const closing = (content: HTMLElement) => gsap.to(content, {
    height: 0,
    opacity: 0,
    duration: 0.54,
    ease: 'power3.out',
    overwrite: true,
  })

  const opening = (content: HTMLElement) => gsap.fromTo(
    content,
    {
      height: 0,
      opacity: 0
    },
    {
      height: 'auto',
      opacity: 1,
      duration: 0.78,
      ease: 'power3.out',
      overwrite: true,
    }
  )

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    const list = target.parentElement?.nextSibling as HTMLUListElement

    if (target.getAttribute('aria-expanded') === 'true') {
      closing(list).restart()
    } else {
      opening(list).restart()
    }

    toggle(target)
  }

  return (
    <footer className='ly_ft'>
      <div className='bl_ftNav'>
        <nav className='bl_ftNav_container' aria-label="フッターナビゲーション">
          <ul className='bl_ftNav_top'>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/">調査・レポート</Link></li>
            <li><Link href="/">コラム</Link></li>
            <li><Link href="/">観光統計</Link></li>
            <li><Link href="/">用語集</Link></li>
          </ul>
          
          <div className='bl_ftNav_body'>
            <section className='bl_ftNav_body_col'>
              { isPc && (
                  <>
                    <h2 className='bl_ftNav_title'>専門領域</h2>
                    <div className='bl_ftNav_listWrap'>
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">専門分野</Link></li>
                        <li><Link href="/">コンサルタント</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              { !isPc && (
                  <>
                    <h2 className='bl_ftNav_title'><button type='button' onClick={handleClick} aria-expanded="false" aria-controls='ft_nav_expertise'>専門領域</button></h2>
                    <div className='bl_ftNav_listWrap is_sp' id='ft_nav_expertise' aria-hidden="true">
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">専門分野</Link></li>
                        <li><Link href="/">コンサルタント</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              { isPc && (
                  <>
                    <h2 className='bl_ftNav_title'>実績・事例</h2>
                    <div className='bl_ftNav_listWrap'>
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">実績一覧</Link></li>
                        <li><Link href="/">事例</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              { !isPc && (
                  <>
                    <h2 className='bl_ftNav_title'><button type='button' onClick={handleClick} aria-expanded="false" aria-controls='ft_nav_achievements'>実績・事例</button></h2>
                    <div className='bl_ftNav_listWrap is_sp' id='ft_nav_achievements' aria-hidden="true">
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">実績一覧</Link></li>
                        <li><Link href="/">事例</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
            </section>
            <section className='bl_ftNav_body_col'>
              { isPc && (
                  <>
                    <h2 className='bl_ftNav_title'>JTB総研について</h2>
                    <div className='bl_ftNav_listWrap'>
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">会社概要</Link></li>
                        <li><Link href="/">社長メッセージ</Link></li>
                        <li><Link href="/">アクセス</Link></li>
                        <li><Link href="/">ニュースルーム</Link></li>
                        <li><Link href="/">採用情報</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              { !isPc && (
                  <>
                    <h2 className='bl_ftNav_title'><button type='button' onClick={handleClick} aria-expanded="false" aria-controls='ft_nav_about'>JTB総研について</button></h2>
                    <div className='bl_ftNav_listWrap is_sp' id='ft_nav_about' aria-hidden="true">
                      <ul className='bl_ftNav_list'>
                        <li><Link href="/">会社概要</Link></li>
                        <li><Link href="/">社長メッセージ</Link></li>
                        <li><Link href="/">アクセス</Link></li>
                        <li><Link href="/">ニュースルーム</Link></li>
                        <li><Link href="/">採用情報</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
            </section>
            <section className='bl_ftNav_body_col'>
              { isPc && (
                  <>
                    <h2 className='bl_ftNav_title'>JTB総研メンバー</h2>
                    <div className='bl_ftNav_listWrap'>
                      <ul className='bl_ftNav_list'>
                        <li><Link href={SITE_URL.login}>ログイン</Link></li>
                        <li><Link href={SITE_URL.signup}>新規登録</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              { !isPc && (
                  <>
                    <h2 className='bl_ftNav_title'><button type='button' onClick={handleClick} aria-expanded="false" aria-controls='ft_nav_member'>JTB総研メンバー</button></h2>
                    <div className='bl_ftNav_listWrap is_sp' id='ft_nav_member' aria-hidden="true">
                      <ul className='bl_ftNav_list'>
                        <li><Link href={SITE_URL.login}>ログイン</Link></li>
                        <li><Link href={SITE_URL.signup}>新規登録</Link></li>
                      </ul>
                    </div>
                  </>
                )
              }
              <h2 className='bl_ftNav_title'><Link href="/">お問い合わせ</Link></h2>
            </section>
          </div>
        </nav>
      </div>
      <div className='bl_ftBtm'>
        <ul className='bl_ftBtm_list'>
          <li><Link href="">サイト利用について</Link></li>
          <li><Link href="">個人情報保護方針</Link></li>
          <li><Link href="">特定商取引法に基づく表示</Link></li>
        </ul>
        <p className='bl_ftBtm_copy'>&copy; 2025 JTB Tourism Research & Consulting Co.</p>
      </div>
    </footer>
  )
}