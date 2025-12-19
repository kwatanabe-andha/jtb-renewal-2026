import './index.scss'
import Link from "next/link"
// import Image from "next/image"
import { useRef } from 'react'
import HeaderHomeIcon from '@/icon/HeaderHome/HeaderHome'
import ToggleIcon from "@/icon/Toggle/Toggle"

const toggle = (button: HTMLButtonElement) => {
  const expanded = button.getAttribute('aria-expanded')
  const menu = button.nextSibling as HTMLDivElement
  
  if (expanded === 'false') {
    button.setAttribute('aria-expanded', 'true')
    menu.setAttribute('aria-hidden', 'false')
  } else {
    button.setAttribute('aria-expanded', 'false')
    menu.setAttribute('aria-hidden', 'true')
  }
}

export default function HeaderNav() {
  const menu01Ref = useRef<HTMLButtonElement>(null)
  const menu02Ref = useRef<HTMLButtonElement>(null)

  const handleClick01 = () => {
    const button = menu01Ref.current as HTMLButtonElement
    toggle(button)
  }

  const handleClick02 = () => {
    const button = menu02Ref.current as HTMLButtonElement
    toggle(button)
  }

  return (
    <div className='bl_hdNav'>
      <div className='bl_hdNav_body'>
        <ul className='bl_hdNav_list'>
          <li><Link href='' className='bl_hdNav_home'><HeaderHomeIcon /></Link></li>
          <li>
            <div className='bl_hdNav_item'>
              <Link href='' className='is_current'>調査・レポート</Link>
              <Link href=''>コラム</Link>
            </div>
          </li>
          <li>
            <div className='bl_hdNav_item'>
              <Link href=''>観光統計</Link>
              <Link href=''>用語集</Link>
            </div>
          </li>
          <li>
            <button ref={menu01Ref} onClick={handleClick01} type='button' className='bl_hdNav_toggle' aria-expanded="false" aria-controls='nav_menu_01'>
              専門領域
              <ToggleIcon />
            </button>
            <div className='bl_hdNav_menu menu_01' id='nav_menu_01' aria-hidden="true">
              <Link href=''>専門分野</Link>
              <Link href=''>コンサルタント</Link>
            </div>
          </li>
          <li>
            <button ref={menu02Ref} onClick={handleClick02} type='button' className='bl_hdNav_toggle' aria-expanded="false" aria-controls='nav_menu_01'>
              実績・事例
              <ToggleIcon />
            </button>
            <div className='bl_hdNav_menu menu_02' id='nav_menu_02' aria-hidden="true">
              <Link href=''>実績一覧</Link>
              <Link href=''>事例</Link>
            </div>
          </li>
        </ul>
      </div>

      <div className='bl_hdNav_contact'>
        <Link href=''>お問い合わせ</Link>
      </div>
    </div>
  )
}