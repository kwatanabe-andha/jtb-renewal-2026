"use client";

import './index.scss'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react'
import HeaderNav from './_block/HeaderNav';

export default  function Header() {
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

  // sp
  if (!isPc) {
    return (
      <header className='ly_hd'>
        <div className='bl_hd_inner'>
          <div className='bl_hdHead'>
            <h1 className='bl_hdHead_logo'>
              <Link href='/'><Image src='/common/logo.svg'alt='株式会社JTB総合研究所' width={293} height={27} /></Link>
            </h1>

            <div className='bl_hdHead_nav'>
              <div className='bl_hdHead_member'>
                <Image src='/icon/icon_member.svg' alt='メンバー限定' width={24} height={24} />
              </div>
              <button type='button' className='bl_hdHead_hamburger'>
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }

  // pc
  return (
    <header className='ly_hd'>
      <div className='bl_hd_inner'>
        <div className='bl_hdHead'>
          <h1 className='bl_hdHead_logo'>
            <Link href='/'><Image src='/common/logo.svg' alt='株式会社JTB総合研究所' width={293} height={27} /></Link>
          </h1>

          <div className='bl_hdHead_nav'>
            <ul className='bl_hdHead_list'>
              <li><Link href='/'>ニュースルーム</Link></li>
              <li><Link href='/'>会社概要</Link></li>
              <li><Link href='/'>採用情報</Link></li>
            </ul>
            <div className='bl_hdHead_icons'>
              <button type='button' className='bl_hdHead_search'><Image src='/icon/icon_search.svg' alt='サイト内検索' width={24} height={24} /></button>
              <button type='button' className='bl_hdHead_lang'><Image src='/icon/icon_lang.svg' alt='言語選択' width={20} height={24} /></button>
            </div>
            <div className='bl_hdHead_user'>
              <div className='bl_hdHead_login'><Link href='/'>ログイン</Link></div>
              <div className='bl_hdHead_register'>
                <Link href="">
                  <div className='bl_hdHead_member'>
                    <Image src='/icon/icon_member.svg' alt='メンバー限定' width={24} height={24} />
                  </div>
                  <span className='bl_hdHead_register_title'>新規メンバー登録</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <HeaderNav />
      </div>
    </header>
  )
}