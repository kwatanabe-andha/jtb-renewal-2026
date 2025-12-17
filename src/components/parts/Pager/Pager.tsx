import './index.scss'
import Image from 'next/image'

export default function Pager() {
  return (
    <ul className='bl_pager'>
      <li className='bl_pager_prev'>
        <button type='button'>
          <Image src='/icon/icon_pager_prev.svg' alt='prev' width={18} height={18} />
        </button>
      </li>
      <li className='bl_pager_item is_current'><button type='button'>1</button></li>
      <li className='bl_pager_item'><button type='button'>2</button></li>
      <li className='bl_pager_item hp_hidden_down-sm'><button type='button'>3</button></li>
      <li className='bl_pager_dash'>…</li>
      <li className='bl_pager_item hp_hidden_down-sm'><button type='button'>67</button></li>
      <li className='bl_pager_item'><button type='button'>68</button></li>
      <li className='bl_pager_next'>
        <button type='button'>
          <Image src='/icon/icon_pager_next.svg' alt='prev' width={18} height={18} />
        </button>
      </li>
    </ul>
  )
}