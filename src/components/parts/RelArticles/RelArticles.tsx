import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import Card from '@/components/parts/Card/Card'
import { CardType } from '@/types/contentsType'
import ScrollBar from '@/components/parts/ScrollBar/ScrollBar'
import LinkButton from '@/components/parts/LinkButton/LinkButton'

type Props = {
  list: CardType[]
}

export default function RelArticles({ list }: Props) {
  const data = list.map((item: CardType) => {
    const card = {
      topics_id: item.topics_id,
      subject: item.subject,
      thumb: item.thumb,
      ymd: item.ymd,
      slug: item.slug,
      update_ymdhi: item.update_ymdhi,
      topics_group_id: item.topics_group_id,
      contents_name: item.contents_type_nm
    } as CardType
    return card
  })

  return (
    <section className='bl_relArticles'>
      <Inner className='bl_relArticles_inner'>
        <div className='bl_relArticles_container'>
          <h2 className='bl_relArticles_heading'>関連記事</h2>

          <div className='bl_relArticles_body' data-type="relArticles">
            <ScrollBar>
              {
                data.map((card: CardType) => {
                  return (
                    <li key={card.topics_id}>
                      <Card
                        card={card}
                      />
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