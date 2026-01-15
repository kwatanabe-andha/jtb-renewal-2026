import Image from 'next/image'
import Link from "next/link"
import './index.scss'
import { FootCardType } from '@/types/contentsType'

type Props = {
  card: FootCardType
}

export default function FootCard( { card }: Props ) {
  return (
    <article className='bl_card'>
      <Link href={'/'} className='bl_card_container'>
        <div className='bl_card_img'>
          <div className='bl_card_thumb'><Image src={`${card.thumb.url}`} alt={ card.thumb.desc } width={300} height={200} /></div>
          { card.logo?.url && <div className='bl_card_logo'><Image src={ card.logo.url } alt={ card.logo.desc } width={100} height={100} /></div> }
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