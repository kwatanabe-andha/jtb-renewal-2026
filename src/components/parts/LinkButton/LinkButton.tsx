import './index.scss'
import Link from 'next/link'
import { ArrowNarrowRight } from "@untitledui/icons"

type Props = {
  title: string
  href: string
}

export default function LinkButton({ title, href }: Props) {
  return (
    <Link href={href} className='bl_linkBtn'>
      <ArrowNarrowRight width={18} height={18} />
      <span className='bl_linkBtn_title'>{title}</span>
    </Link>
  )
}