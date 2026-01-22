import './list.scss'
import { Suspense } from 'react'
import Card from './Card'
import { CardType } from '@/types/contentsType'
import { PagerType } from '@/types/pager' 
import PagerRouter from '../Pager/PagerRouter'
import Pager from '../Pager/Pager'

export type CardListType = {
  list: CardType[]
  pageInfo?: PagerType
  pathname?: string
  router?: boolean
  noPager?: boolean
  parallel?: boolean
}

export default function CardList({ list, pageInfo, pathname, router = false, noPager = false, parallel = false }: CardListType) {
  return (
    <>
      {
        !parallel && (
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
            {
              !noPager && pageInfo !== undefined && pathname !== undefined && (
                <Suspense>
                  { router && <PagerRouter pageInfo={pageInfo} pathname={pathname} /> }
                  { !router && <Pager pageInfo={pageInfo} pathname={pathname} /> }
                </Suspense>
              )
            }
          </>
        )
      }
      {
        parallel && (
          <ul className='bl_cardList bl_cardList_parallel'>
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
        )
      }
    </>
  )
}