import './index.scss'
import { returnHtml } from '@/lib/returnHtml'

type Props = {
  html: string
  dangerously?: boolean
}

export default function Wysiwyg({ html, dangerously = false }: Props) {
  return (
    <>
    { dangerously && <div className='bl_wysiwyg' dangerouslySetInnerHTML={{ __html: html }}></div> }
    { !dangerously && <div className='bl_wysiwyg'>{ returnHtml(html) }</div> }
    </>
  )
}