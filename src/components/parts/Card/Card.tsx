import Image from 'next/image'
import Link from "next/link"
import './index.scss'
import Download from '../Download/Download'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { CardType } from '@/types/contentsType'
import { TOPICS_GROUP_ID } from '@/config/site'

type Props = {
  card: CardType
}

export default function Card( { card }: Props ) {
  const groupID = card.topics_group_id.toString()
  const pathname = TOPICS_GROUP_ID[groupID]

  return (
    <article className='bl_card'>
      <Link href={`/${pathname}/${card.slug}/`} className='bl_card_container'>
        <div className='bl_card_img'>
          <div className='bl_card_thumb'>
            <Image src={`${card.thumb.url}`} alt={ card.thumb.desc || '' } width={300} height={200} />
          </div>
          { card.logo?.url && <div className='bl_card_logo'><Image src={ card.logo.url } alt={ card.logo.desc } width={100} height={100} /></div> }
        </div>
        <div className='bl_card_content'>
          { card.group_nm && <div className='bl_card_contentType'>{ card.group_nm }</div> }
          {
            card.contents_type_nm && (
              <div className='bl_card_series'>
                <div className='bl_card_series_title'>
                  {
                    card.contents_type_slug === "xtourism" ? '✘ Tourism' : card.contents_type_nm
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
            card.author_external_name && card.author_external_name.length > 0 && (
              <div className='bl_card_author'>
                <p className='bl_card_author_name'>{ card.author_external_name[0] }</p>
                { card.author_external_title && card.author_external_title.length > 0 && <p className='bl_card_author_pos'>{ card.author_external_title[0] }</p>}
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