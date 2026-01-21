import Image from 'next/image'
import Link from 'next/link'
import './index.scss'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { ImgType, selectType } from '@/types/common'

type Props = {
  data: {
    thumb: ImgType
    series_logo: ImgType
    subject: string
    ymd: string
    reports_type: selectType[]
  }
}

export default function Recently({ data }: Props) {
  // console.log(data.reports_type)
  // console.log(data)
  // const categoryText = 

  return (
    <section className='un_recently'>
      <Inner className='un_recently_inner'>
        <Level2>最近公開した調査</Level2>

        <article>
          <Link href="#" className='un_recentlyCard'>
            <div className='un_recentlyCard_img'>
              { data.thumb.url && <div className='un_recentlyCard_thumb'><Image src={data.thumb.url} alt={data.thumb.desc || ''} width={474} height={316} /></div> }
              { data.series_logo.url && <div className='un_recentlyCard_logo'><Image src={data.series_logo.url} alt={data.series_logo.desc || ''} width={150} height={150} /></div> }
            </div>
            <div className='un_recentlyCard_body'>
              <div className='un_recentlyCard_content'>
                <div className='un_recentlyCard_category'>
                  
                </div>
                <h3 className='un_recentlyCard_title'>{data.subject}</h3>
                <p className='un_recentlyCard_summary'>ダミーテキスト（静的）ダミーテキスト（静的）ダミーテキスト（静的）ダミーテキスト（静的）</p>
              </div>
              <div className='un_recentlyCard_btm'>
                <div className='un_recentlyCard_download'>PDFダウンロード（静的）</div>
                <time dateTime={data.ymd} className='un_recentlyCard_time'>{ toDateTimeFormat(data.ymd) }</time>
              </div>
            </div>
          </Link>
        </article>
      </Inner>
    </section>
  )
}