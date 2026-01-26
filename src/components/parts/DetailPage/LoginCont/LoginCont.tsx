import './index.scss'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function LoginCont({children}: Props) {
  return (
    <div className='bl_login_wrap'>
      <div className='bl_login_content'>{ children }</div>
      <div className="bl_login">
        <div className="bl_login_icon"></div>
        <div className="bl_login_text">続きを読むには<a href="#" target="_blank">ログイン</a>が必要です</div>
        <div className="bl_login_link">
          <a className="bl_login_link_btn bl_login_link_login" href="#" target="_blank"><svg width="24"
              height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11985 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H15M10 7L15 12M15 12L10 17M15 12L3 12"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg><span>ログイン</span></a>
          <a className="bl_login_link_btn bl_login_link_new" href="#" target="_blank"><span
              className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg></span><span>無料メンバー登録</span>
          </a>
        </div>
      </div>
    </div>
  )
}