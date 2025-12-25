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
  category?: string
  shoulderSeries?: string
  shoulderAnd?: string
  shoulder?: string
  title: string
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
    <div className='bl_card'>
      <div className='bl_card_container'>
        <Link href={'/'} className='bl_card_img'>
          <div className='bl_card_thumb'><Image src={`${card.thumb.url}`} alt={ card.thumb.desc } width={300} height={200} /></div>
          { card.logo?.url && <div className='bl_card_logo'><Image src={ card.logo.url } alt={ card.logo.desc } width={100} height={100} /></div> }
        </Link>
        <div className='bl_card_content'>
          <Link href={'/'}>
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
            <p className='bl_card_title'>{ card.title }</p>
            { card.auxiliary && <p className='bl_card_auxiliary'>{ card.auxiliary }</p> }
            { card.summary && <p className='bl_card_summary'>{ card.summary }</p> }
            {
              card.author && (
                <dl className='bl_card_author'>
                  <dt>{ card.author }</dt>
                  <dd>{ card.authorTitle }</dd>
                </dl>
              )
            }
          </Link>

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

            <time dateTime={toDateTimeFormat(card.ymd)} className='bl_card_time'>{ toDateTimeFormat(card.ymd) }</time>
          </div>
        </div>
      </div>
    </div>
  )
}