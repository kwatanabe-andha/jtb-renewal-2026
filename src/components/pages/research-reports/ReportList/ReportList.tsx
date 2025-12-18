// import Image from 'next/image'
// import './index.scss'
// import Level2 from "@/components/parts/Heading/Level2"
// import Inner from "@/components/parts/Inner/Inner"
// import NarrowDown from '@/components/parts/NarrowDown/NarrowDown'
// import CardList from '@/components/parts/Card/CardList'
// import { id } from 'zod/locales'

// const toDateTimeFormat = (dateText: string) => {
//   const [year, month, day] = dateText.split('.')
//   return `${year}-${month}-${day}`
// }

// const years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
// const keywords = [
//   {
//     name: 'すべて',
//     slug: 'all'
//   },
//   {
//     name: 'インバウンド',
//     slug: 'xxx'
//   },
//   {
//     name: '消費者行動',
//     slug: 'yyy'
//   },
//   {
//     name: '日本人海外旅行',
//     slug: 'zzzz'
//   },
//   {
//     name: 'wwww',
//     slug: 'www'
//   },
//   {
//     name: 'jjjj',
//     slug: 'jjj'
//   },
// ]

// const cardList = [
//   {
//     id: 1,
//     thumb: '/thumb.jpg',
//     logo: '/series_logo_01.jpg',
//     category: '定点調査',
//     title: 'スマートフォンの利用と旅行消費に関する調査 2024',
//     summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る' ,
//     download: true,
//     downloadFile: '',
//     date: '2025.01.10'
//   },
//   {
//     id: 2,
//     thumb: '/thumb.jpg',
//     logo: '/series_logo_02.jpg',
//     category: '調査白書',
//     title: 'スマートフォンの利用と旅行消費に関する調査 2024',
//     summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る' ,
//     download: true,
//     downloadFile: '',
//     date: '2025.12.31'
//   },
//   {
//     id: 3,
//     thumb: '/thumb.jpg',
//     logo: '/series_logo_03.jpg',
//     category: 'ホワイトペーパー',
//     title: 'スマートフォンの利用と旅行消費に関する調査 2024',
//     summary: '｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る' ,
//     date: '2025.12.15'
//   }
// ]

// export default function ReportList() {
//   return (
//     <section className='un_reportList'>
//       <Inner className='un_reportList_inner'>
//         <Level2>すべての調査</Level2>

//         <div className='un_reportList_nd'>
//           <NarrowDown title='注目キーワードで絞り込み' list={keywords} years={years} />
//         </div>

//         <div className='un_reportList_list'>
//           <CardList list={cardList} />
//         </div>
//       </Inner>
//     </section>
//   )
// }