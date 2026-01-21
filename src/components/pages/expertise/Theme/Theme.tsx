import './index.scss'
// import { Suspense } from 'react'
import Inner from '@/components/parts/Inner/Inner'
import Level2 from '@/components/parts/Heading/Level2'
import CardList from '@/components/parts/Card/CardList'
import { CardType } from '@/types/contentsType'

const list = [
  {
    topics_id: 1,
    subject: '地域活性化',
    summary: '災害発生時の地域や観光事業者の対応を予め計画し、現場が動ける仕組みにより、リスク低減はもちろん復興を早めることができます。',
    topics_group_id: 15,
    thumb: { url: 'https://placehold.jp/314x210.png', desc: '' }
  },
  {
    topics_id: 2,
    subject: '地域活性化',
    summary: '災害発生時の地域や観光事業者の対応を予め計画し、現場が動ける仕組みにより、リスク低減はもちろん復興を早めることができます。',
    topics_group_id: 15,
    thumb: { url: 'https://placehold.jp/314x210.png', desc: '' }
  },
  {
    topics_id: 3,
    subject: 'アドベンチャーツーリズム',
    summary: '災害発生時の地域や観光事業者の対応を予め計画し、現場が動ける仕組みにより、リスク低減はもちろん復興を早めることができます。',
    topics_group_id: 15,
    thumb: { url: 'https://placehold.jp/314x210.png', desc: '' }
  }
] as CardType[]

export default function Theme() {
  return (
    <section className='un_theme'>
      <Inner className='un_theme_inner'>
        <Level2>いま注目のテーマ</Level2>

        <div className='un_theme_list'>
          <CardList list={list} />
        </div>
      </Inner>
    </section>
  )
}