import Image from 'next/image'
import Link from "next/link"
import './index.scss'
import Download from '../Download/Download'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { CardType } from '@/types/contentsType'
import { TOPICS_GROUP_ID } from '@/config/site'

type Props = {
  card: CardType & {
    contents_name?: string
    show_series?: boolean
    series_title?: string
  }
}

export default function Card( { card }: Props ) {
  const groupID = card.topics_group_id.toString()
  const pathname = TOPICS_GROUP_ID[groupID]
  const logo = card.category_details?.series_logo
  const seriesTitle = card.series_title ? card.series_title : card.contents_type_nm

  return (
    <article className='bl_card'>
      <Link href={`/${pathname}/${card.slug || card.topics_id}/`} className='bl_card_container'>
        <div className='bl_card_img'>
          { card.thumb && <div className='bl_card_thumb'><Image src={`${card.thumb.url}`} alt={ card.thumb.desc || '' } width={300} height={200} /></div> }
          { logo?.url && <div className='bl_card_logo'><Image src={ logo.url } alt={ logo.desc || '' } width={100} height={100} /></div> }
        </div>
        <div className='bl_card_content'>
          { card.contents_name && <div className='bl_card_contentType'>{ card.contents_name }</div> }
          {
            (card.show_series || card.series_title) && (
              <div className='bl_card_series'>
                <div className='bl_card_series_title'>
                  {
                    card.contents_type_slug === "xtourism" ? '✘ Tourism' : seriesTitle
                  }
                </div>
                {
                  card.series_custom && (
                    <div className='bl_card_series_custom'>{ card.series_custom }</div>
                  )
                }
              </div>
            )
          }
          <h3 className='bl_card_title'>{ card.subject }</h3>
          { card.excerpt && <p className='bl_card_excerpt'>{ card.excerpt }</p> }
          { card.summary && <p className='bl_card_summary'>{ card.summary }</p> }
          {
            card.author && card.author.length > 0 && (
              <div className='bl_card_author'>
                <p className='bl_card_author_name'>{ card.author[0].author_external_name }</p>
                { card.author[0].author_external_title && <p className='bl_card_author_pos'>{ card.author[0].author_external_title }</p>}
              </div>
            )
          }

          {
            card.tag && (
              <ul className='bl_card_tags'>
                {
                  card.tag.map(item => {
                    return (
                      <li key={item.name}>
                        <Link href={item.slag}>{ item.name }</Link>
                      </li>
                    )
                  })
                }
              </ul>
            )
          }

          {
            card.download?.url || card.ymd && (
              <div className='bl_card_btm'>
                {
                  card.download?.url && (
                    <Download url={card.download.url} />
                  )
                }

                { card.ymd && <time dateTime={card.ymd} className='bl_card_time'>{ toDateTimeFormat(card.ymd) }</time> }
              </div>
            )
          }
        </div>
      </Link>
    </article>
  )
}