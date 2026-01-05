import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import Card, { CardType } from '@/components/parts/Card/Card'
import ScrollBar from '@/components/parts/ScrollBar/ScrollBar'
import LinkButton from '@/components/parts/LinkButton/LinkButton'

type Props = {
  list: CardType[]
}

export default function RelArticles({ list }: Props) {
  return (
    <section className='bl_relArticles'>
      <Inner className='bl_relArticles_inner'>
        <div className='bl_relArticles_container'>
          <h2 className='bl_relArticles_heading'>関連記事</h2>

          <div className='bl_relArticles_body' data-type="relArticles">
            <ScrollBar>
              {
                list.map((card: CardType) => {
                  return (
                    <li key={card.topics_id}>
                      <article>
                        <Card
                          card={card}
                        />
                      </article>
                    </li>
                  )
                })
              }
            </ScrollBar>
          </div>

          <div className='bl_relArticles_btn'>
            <LinkButton title='すべてみる' href='/' />
          </div>
        </div>
      </Inner>
    </section>
  )
}