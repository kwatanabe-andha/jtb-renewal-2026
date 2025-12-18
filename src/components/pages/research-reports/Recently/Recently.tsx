import Image from 'next/image'
import './index.scss'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"

const toDateTimeFormat = (dateText: string) => {
  const [year, month, day] = dateText.split('.')
  return `${year}-${month}-${day}`
}

export default function Recently() {
  return (
    <section className='un_recently'>
      <Inner className='un_recently_inner'>
        <Level2>最近公開した調査</Level2>

        <div className='un_recentlyCard'>
          <a href='' className='un_recentlyCard_img'>
            <div className='un_recentlyCard_thumb'><Image src='/thumb.jpg' alt='' width={474} height={316} /></div>
            <div className='un_recentlyCard_logo'><Image src='/series_logo.png' alt='' width={150} height={150} /></div>
          </a>
          <div className='un_recentlyCard_body'>
            <a href="" className='un_recentlyCard_content'>
              <div className='un_recentlyCard_category'>定点調査</div>
              <p className='un_recentlyCard_title'>スマートフォンの利用と旅行消費に関する調査 2024</p>
              <p className='un_recentlyCard_summary'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
            </a>
            <div className='un_recentlyCard_btm'>
              <a href={''} download className='un_recentlyCard_download'>PDFダウンロード</a>
              <time dateTime={toDateTimeFormat('2025.01.10')} className='un_recentlyCard_time'>2025.01.10</time>
            </div>
          </div>
        </div>
      </Inner>
    </section>
  )
}