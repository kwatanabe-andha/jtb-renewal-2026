import Image from 'next/image'
import Link from "next/link"
import './index.scss'
import { CardType } from '@/types/contentsType'
import { TOPICS_GROUP_ID } from '@/config/site'

type Props = {
  card: CardType
}

export default function FootCard( { card }: Props ) {
  const groupID = card.topics_group_id.toString()
  const pathname = TOPICS_GROUP_ID[groupID]
  const logo = card.category_details?.series_logo

  return (
    <article className='bl_card'>
      <Link href={`/${pathname}/${card.slug}/`} className='bl_card_container'>
        <div className='bl_card_img'>
          { card.thumb?.url && <div className='bl_card_thumb'><Image src={card.thumb.url} alt={ card.thumb.desc || '' } width={300} height={200} /></div> }
          { logo?.url && <div className='bl_card_logo'><Image src={ logo.url } alt={ logo.desc || '' } width={100} height={100} /></div> }
        </div>
        <div className='bl_card_content'>
          { card.group_nm && <div className='bl_card_contentType'>{ card.group_nm }</div> }
          <h3 className='bl_card_title'>{ card.subject }</h3>
          { card.excerpt && <p className='bl_card_excerpt'>{ card.excerpt }</p> }
          { card.summary && <p className='bl_card_summary'>{ card.summary }</p> }
        </div>
      </Link>
    </article>
  )
}