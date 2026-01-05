import './list.scss'
import Card from './Card'
import { CardType } from './Card'
import Pager from '../Pager/Pager'

export type CardListType = {
  list: CardType[]
}

export default function CardList({ list }: CardListType) {
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
      <Pager />
    </>
  )
}