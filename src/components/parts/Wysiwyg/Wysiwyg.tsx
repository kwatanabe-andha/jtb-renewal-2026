import './index.scss'
import { ReactNode } from 'react'
import { returnHtml } from '@/lib/returnHtml'

type Props = {
  html?: string
  dangerously?: boolean
  children?: ReactNode
}

export default function Wysiwyg({ html, dangerously = false, children }: Props) {
  if (!!html) {
    return (
      <>
      { dangerously && <div className='bl_wysiwyg' dangerouslySetInnerHTML={{ __html: html }}></div> }
      { !dangerously && <div className='bl_wysiwyg'>{ returnHtml(html) }</div> }
      </>
    )
  }
  if (!!children) {
    return (
      <div className='bl_wysiwyg'>{children}</div>
    )
  }
}