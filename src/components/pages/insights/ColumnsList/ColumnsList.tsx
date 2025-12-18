import './index.scss'
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
    name: 'xxx',
    slug: 'xxxxx'
  },
  {
    name: 'xxxxx',
    slug: 'xx'
  },
]

const cardList = [
  {
    id: 1,
    thumb: 'thumb.jpg',
    logo: 'series_logo_01.jpg',
    shoulderSeries: '研究員コラム',
    shoulderAnd: '× 宇宙物理学',
    title: '持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～ 持続可能な観光地の取組～ユニバーサルツーリズム',
    summary: '兵庫県は2023年に全国に先駆けて「ユニバーサルツーリズム推進条例」を制定しました。ユニバーサルツーリズムは「誰でも行きたくなる観光地」を育てるカギとなり、持続可能な観光の土台ともいえます。兵庫県のユニバーサルツーリズムの取り組みから持続可能な観光との関係性を考察していきます。' ,
    author: '勝野 裕子',
    authorTitle: 'JTB総合研究所 上席主任研究員',
    download: true,
    downloadFile: '',
    date: '2025.01.10'
  }
]

export default function ColumnsList() {
  return (
    <section className='un_columnsList'>
      <Inner className='un_columnsList_inner'>
        <div className='un_columnsList_nd'>
          <NarrowDown title='注目キーワードで絞り込み' list={keywords} years={years} />
        </div>

        <div className='un_columnsList_list'>
          <CardList list={cardList} />
        </div>
      </Inner>
    </section>
  )
}