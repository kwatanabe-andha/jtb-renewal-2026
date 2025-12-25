import './index.scss'
import Link from 'next/link'
import ArrowIcon from '@/icon/Arrow/Arrow'

type Props = {
  title: string
  href: string
}

export default function LinkButton({ title, href }: Props) {
  return (
    <Link href={href} className='bl_linkBtn'>
      <ArrowIcon />
      <span className='bl_linkBtn_title'>{title}</span>
    </Link>
  )
}