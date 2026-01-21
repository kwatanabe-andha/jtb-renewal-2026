import './index.scss'
// import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Inner from '@/components/parts/Inner/Inner'
import Level2 from '@/components/parts/Heading/Level2'
import CardList from '@/components/parts/Card/CardList'

type Item = {
  topics_id: number
  slug: string
  subject: string
  desc?: string
}

const list = [
  { topics_id: 1, slug: '#', subject: '旅行者・消費者行動' },
  { topics_id: 2, slug: '#', subject: 'インバウンド', desc: '訪日旅行' },
  { topics_id: 3, slug: '#', subject: 'アウトバウンド', desc: '日本人の海外旅行' },
  { topics_id: 4, slug: '#', subject: '観光まちづくり・地域経営（DMO）・交通' },
  { topics_id: 5, slug: '#', subject: 'グローバルツーリズム' },
  { topics_id: 6, slug: '#', subject: '観光DX' },
  { topics_id: 7, slug: '#', subject: '宿泊施設・集客観光施設' },
  { topics_id: 8, slug: '#', subject: 'MICE', desc: '国際会議・展示会・研修など' },
  { topics_id: 9, slug: '#', subject: '持続可能な観光' },
  { topics_id: 10, slug: '#', subject: 'ユニバーサルツーリズム' },
  { topics_id: 11, slug: '#', subject: 'ウェルネス・ヘルスツーリズム' },
  { topics_id: 12, slug: '#', subject: 'アドベンチャーツーリズム' },
  { topics_id: 13, slug: '#', subject: '文化財・産業観光' },
  { topics_id: 14, slug: '#', subject: '観光教育' },
  { topics_id: 15, slug: '#', subject: '観光危機管理' },
] as Item[]

export default function Specialty() {
  return (
    <section className='un_specialty'>
      <Inner className='un_specialty_inner'>
        <Level2>専門領域</Level2>

        <div className='un_specialty_list'>
          <ul>
            {
              list.map((item: Item) => {
                return (
                  <li key={item.topics_id} className='un_specialty_item'>
                    <article className='un_specialty_article'>
                      <Link href={`/expertise/${item.slug}`}>
                        <div className='un_specialty_img'>
                          <Image src={'https://placehold.jp/314x120.png'} alt={''} width={314} height={120} />
                        </div>
                        <h3 className='un_specialty_title'>{item.subject}</h3>
                        { item.desc && <div className='un_specialty_desc'>{item.desc}</div> }
                      </Link>
                    </article>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Inner>
    </section>
  )
}