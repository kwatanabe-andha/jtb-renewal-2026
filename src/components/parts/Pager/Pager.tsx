import './index.scss'
import Link from 'next/link'
import { ArrowNarrowRight, ArrowNarrowLeft } from "@untitledui/icons"

export default function Pager() {
  return (
    <ul className='bl_pager'>
      <li className='bl_pager_prev'>
        <Link href="">
          <ArrowNarrowLeft width={18} height={18} />
        </Link>
      </li>
      <li className='bl_pager_item is_current'><Link href="" aria-current="page">1</Link></li>
      <li className='bl_pager_item'><Link href="">2</Link></li>
      <li className='bl_pager_item hp_hidden_down-sm'><Link href="">3</Link></li>
      <li className='bl_pager_dash'>…</li>
      <li className='bl_pager_item hp_hidden_down-sm'><Link href="">67</Link></li>
      <li className='bl_pager_item'><Link href="">68</Link></li>
      <li className='bl_pager_next'>
        <Link href="">
          <ArrowNarrowRight width={18} height={18} />
        </Link>
      </li>
    </ul>
  )
}