import './index.scss'
import Level2 from "@/components/parts/Heading/Level2"
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
const keywords = [
  {
    name: 'すべて',
    slug: 'all'
  },
  {
    name: 'インバウンド',
    slug: 'xxx'
  },
  {
    name: '消費者行動',
    slug: 'yyy'
  },
  {
    name: '日本人海外旅行',
    slug: 'zzzz'
  },
  {
    name: 'wwww',
    slug: 'www'
  },
  {
    name: 'jjjj',
    slug: 'jjj'
  },
]

const cardList = [
  {
    topics_id: 1,
    thumb: { url: '/thumb.jpg', desc: '' },
    logo: { url: '/series_logo_01.jpg', desc: '' },
    category: '定点調査',
    subject: 'スマートフォンの利用と旅行消費に関する調査 2024',
    summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る' ,
    download: { url: 'https://tourism.g.kuroco-img.app/v=1766049351/files/topics/4_ext_8_0.pdf' },
    ymd: '2025-01-10'
  },
  {
    topics_id: 2,
    thumb: { url: '/thumb.jpg', desc: '' },
    logo: { url: '/series_logo_02.jpg', desc: '' },
    category: '調査白書',
    subject: 'スマートフォンの利用と旅行消費に関する調査 2024',
    summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る' ,
    download: { url: 'https://tourism.g.kuroco-img.app/v=1766049351/files/topics/4_ext_8_0.pdf' },
    ymd: '2025-01-10'
  },
  {
    topics_id: 3,
    thumb: { url: '/thumb.jpg', desc: '' },
    logo: { url: '/series_logo_03.jpg', desc: '' },
    category: 'ホワイトペーパー',
    subject: 'スマートフォンの利用と旅行消費に関する調査 2024',
    summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る',
    ymd: '2025-01-10'
  }
]

export default function ReportList() {
  return (
    <section className='un_reportList'>
      <Inner className='un_reportList_inner'>
        <Level2>すべての調査</Level2>

        <div className='un_reportList_nd'>
          <NarrowDown title='注目キーワードで絞り込み' list={keywords} years={years} />
        </div>

        <div className='un_reportList_list'>
          <CardList list={cardList} />
        </div>
      </Inner>
    </section>
  )
}