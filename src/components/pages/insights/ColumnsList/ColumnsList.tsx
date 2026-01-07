import './index.scss'
import Inner from "@/components/parts/Inner/Inner"
import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
import CardList from '@/components/parts/Card/CardList'
import { CardType, PageInfoType } from '@/types/contentsType'

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

type Props = {
  data: {
    list: CardType[]
    pageInfo: PageInfoType
  }
}

export default async function ColumnsList({ data }: Props) {
  const { list, pageInfo } = data

  return (
    <section className='un_columnsList'>
      <h2 className='el_hidden'>コラム一覧</h2>
      <Inner className='un_columnsList_inner'>
        <div className='un_columnsList_nd'>
          <NarrowDown title='注目キーワードで絞り込み' list={keywords} years={years} />
        </div>

        <div className='un_columnsList_list'>
          <CardList list={list} />
        </div>
      </Inner>
    </section>
  )
}