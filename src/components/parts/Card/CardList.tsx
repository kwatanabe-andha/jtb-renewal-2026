import './list.scss'
import { Suspense } from 'react'
import Card from './Card'
import { CardType } from '@/types/contentsType'
import { PagerType } from '@/types/pager' 
import PagerRouter from '../Pager/PagerRouter'
// import Pager from '../Pager/Pager'

export type CardListType = {
  list: CardType[]
  pageInfo: PagerType
  pathname: string
}

export default function CardList({ list, pageInfo, pathname }: CardListType) {
  return (
    <>
      <ul className='bl_cardList'>
        {
          list.map((card: CardType) => {
            return (
              <li key={card.topics_id}>
                <Card
                  card={card}
                />
              </li>
            )
          })
        }
      </ul>
      <Suspense>
        <PagerRouter pageInfo={pageInfo} pathname={pathname} />
      </Suspense>
    </>
  )
}