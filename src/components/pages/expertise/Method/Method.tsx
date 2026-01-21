import './index.scss'
// import { Suspense } from 'react'
import Link from 'next/link'
import Inner from '@/components/parts/Inner/Inner'
import Level2 from '@/components/parts/Heading/Level2'

type Item = {
  topics_id: number
  slug: string
  subject: string
  desc?: string
}

export default function Method() {
  return (
    <section className='un_method'>
      <Inner className='un_method_inner'>
        <Level2>手法・アプローチ</Level2>

        <div className='un_method_list'>
          <ul>
            <li className='un_method_item'>
              <Link href='#'>
                <div className='un_method_icon'></div>
                <h3 className='un_method_title'></h3>
              </Link>
            </li>
          </ul>
        </div>
      </Inner>
    </section>
  )
}