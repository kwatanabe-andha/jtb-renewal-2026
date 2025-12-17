import './list.scss'
import Card from './Card'
import { CardType } from './Card'
import Pager from '../Pager/Pager'

type Props = {
  list: CardType[]
}

export default function CardList({ list }: Props) {
  return (
    <>
      <ul className='bl_cardList'>
        {
          list.map((card: CardType) => {
            return (
              <li key={card.id}>
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