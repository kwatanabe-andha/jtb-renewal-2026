import Image from 'next/image'
import './index.scss'

type Tag = {
  name: string
  slag: string
}

export type CardType = {
  id: number
  thumb: string
  logo?: string
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
  download?: boolean
  downloadFile?: string
  date: string
};

type Props = {
  card: CardType
}

const toDateTimeFormat = (dateText: string) => {
  const [year, month, day] = dateText.split('.')
  return `${year}-${month}-${day}`
}


export default function Card( { card }: Props ) {
  return (
    <div className='bl_card'>
      <a href="" className='bl_card_body'>
        <div className='bl_card_img'>
          <div className='bl_card_thumb'><Image src={ card.thumb } alt='' width={300} height={200} /></div>
          { card.logo && <div className='bl_card_logo'><Image src={ card.logo } alt='' width={100} height={100} /></div> }
        </div>
        { card.category && <div className='bl_card_category'>{ card.category }</div> }
        {
          card.shoulderSeries && (
            <div className='bl_card_shoulderSeries'>
              <div className='bl_card_shoulderTitle'>{ card.shoulderSeries }</div>
              {
                card.shoulderAnd && (
                  <div className='bl_card_shoulderAnd'>{ card.shoulderAnd }</div>
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
      </a>

      {
        card.tag && (
          <ul className='bl_card_tags'>
            {
              card.tag.map(item => {
                return (
                  <li key={item.name}>
                    <a href={item.slag}>{ item.name }</a>
                  </li>
                )
              })
            }
          </ul>
        )
      }

      <div className='bl_card_btm'>
        {
          card.download && (
            <a href={card.downloadFile} download className='bl_card_download'>CSVダウンロード</a>
          )
        }

        <time dateTime={toDateTimeFormat(card.date)} className='bl_card_time'>{ card.date }</time>
      </div>
    </div>
  )
}