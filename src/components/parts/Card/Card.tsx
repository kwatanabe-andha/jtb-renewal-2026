import Image from 'next/image'
import Link from "next/link"
import './index.scss'
import Download from '../Download/Download'
import toDateTimeFormat from '@/lib/toDateTimeFormat'

type Tag = {
  name: string
  slag: string
}

type Img = {
  desc: string
  url: string
}

type Download = {
  url?: string
}

export type CardType = {
  topics_id: number
  thumb: Img
  logo?: Img
  contribution?: boolean
  category?: string
  shoulderSeries?: string
  shoulderAnd?: string
  shoulder?: string
  subject: string
  auxiliary?: string
  summary?: string
  author?: string
  authorTitle?: string
  tag?: Array<Tag>
  download?: Download
  ymd: string
};

type Props = {
  card: CardType
}

export default function Card( { card }: Props ) {
  return (
    <article className='bl_card'>
      <Link href={'/'} className='bl_card_container'>
        <div className='bl_card_img'>
          <div className='bl_card_thumb'>
            <Image src={`${card.thumb.url}`} alt={ card.thumb.desc } width={300} height={200} />
            { card.contribution && <span className='bl_card_contribution'>寄稿</span> }
          </div>
          { card.logo?.url && <div className='bl_card_logo'><Image src={ card.logo.url } alt={ card.logo.desc } width={100} height={100} /></div> }
        </div>
        <div className='bl_card_content'>
          { card.category && <div className='bl_card_category'>{ card.category }</div> }
          {
            card.shoulderSeries && (
              <div className='bl_card_shoulderSeries'>
                <div className='bl_card_shoulderTitle'>{ card.shoulderSeries }</div>
                {
                  card.shoulderAnd && (
                    <div className='bl_card_shoulderAnd'>× { card.shoulderAnd }</div>
                  )
                }
              </div>
            )
          }
          { card.shoulder && <div className='bl_card_shoulder'>{ card.shoulder }</div> }
          <h3 className='bl_card_title'>{ card.subject }</h3>
          { card.auxiliary && <p className='bl_card_auxiliary'>{ card.auxiliary }</p> }
          { card.summary && <p className='bl_card_summary'>{ card.summary }</p> }
          {
            card.author && (
              <div className='bl_card_author'>
                <p className='bl_card_author_name'>{ card.author }</p>
                <p className='bl_card_author_pos'>{ card.authorTitle }</p>
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

          <div className='bl_card_btm'>
            {
              card.download?.url && (
                <Download url={card.download.url} />
              )
            }

            <time dateTime={card.ymd} className='bl_card_time'>{ toDateTimeFormat(card.ymd) }</time>
          </div>
        </div>
      </Link>
    </article>
  )
}