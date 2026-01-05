"use client";

import './index.scss'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react'
import HeaderNav from './_block/HeaderNav';
import { SearchSm, Globe01 } from "@untitledui/icons"
import UserIcon from '@/icon/User/User'

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
            <p className='bl_hdHead_logo'>
              <Link href='/'><Image src='/common/logo.svg'alt='株式会社JTB総合研究所' width={293} height={27} /></Link>
            </p>

            <div className='bl_hdHead_nav'>
              <div className='bl_hdHead_member'>
                <UserIcon />
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
          <p className='bl_hdHead_logo'>
            <Link href='/'><Image src='/common/logo.svg' alt='株式会社JTB総合研究所' width={293} height={27} /></Link>
          </p>

          <div className='bl_hdHead_nav'>
            <ul className='bl_hdHead_list'>
              <li><Link href='/'>ニュースルーム</Link></li>
              <li><Link href='/'>会社概要</Link></li>
              <li><Link href='/'>採用情報</Link></li>
            </ul>
            <div className='bl_hdHead_icons'>
              <button type='button' className='bl_hdHead_search'><SearchSm aria-label='サイト内検索' /></button>
              <button type='button' className='bl_hdHead_lang'><Globe01 aria-label='言語選択' /></button>
            </div>
            <div className='bl_hdHead_user'>
              <div className='bl_hdHead_login'><Link href='/'>ログイン</Link></div>
              <div className='bl_hdHead_register'>
                <Link href="">
                  <div className='bl_hdHead_member'>
                    <UserIcon />
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