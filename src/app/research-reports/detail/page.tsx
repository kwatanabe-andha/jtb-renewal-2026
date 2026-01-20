import Script from 'next/script'
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import Contact from "@/components/parts/Contact/Contact"
import DetailTop from "@/components/parts/PageHead/DetailTop"
import FootSlider from "@/components/parts/FootSlider/FootSlider"
import Article from "@/components/pages/researchDetail/Article/Article"
import Download from "@/components/pages/researchDetail/Download/Download"
import SeriesSurvey from "@/components/pages/researchDetail/SeriesSurvey/SeriesSurvey"
import Manager from "@/components/pages/researchDetail/Manager/Manager"
import getInsightsStatic from '@/fetch/static/getInsightsStatic'

const breadcrumb = [
  {
    title:  '調査・レポート',
    href: '/research-reports/'
  },
  {
    title:  'スマートフォンの利用と旅行消費に関する調査 2024'
  }
]

const head = {
  title: "スマートフォンの利用と旅行消費に関する調査 2024",
  text: "｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る",
  release: "2024-12-27",
  update: "2025-01-10",
  download: 'https://tourism.g.kuroco-img.app/v=1766049351/files/topics/4_ext_8_0.pdf',
  member: true
}

const sections = [
  '情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上',
  '情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上',
  '利用する SNSの上位は「LINE」、「YouTube」、「X」、「Instagram」で前年と変わらずも、「LINE」は20代女性と30代男性で減少傾向。「TikTok」と「Ameba」の利用が伸びる',
  'PDFダウンロード'
]

const keywords = [
  { subject: '関係人口', slug: '/' },
  { subject: 'まちづくり', slug: '/' },
  { subject: '地域資源', slug: '/' },
  { subject: 'ワーケーション', slug: '/' }
]

const nav = {sections, keywords, numbering: false}

export default async function Page() {
  const { list } = await getInsightsStatic({ cnt: 5 })

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://www.tourism.jp/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '調査・レポート',
        item: 'https://www.tourism.jp/research-reports/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'スマートフォンの利用と旅行消費に関する調査 2024',
        item: 'https://www.tourism.jp/research-reports/detail/'
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav offset={50}>
        <DetailTop
          title="スマートフォンの利用と旅行消費に関する調査"
          logo='/assets/series_logo_01.jpg'
          category='定点調査'
        />
        <Article head={head} nav={nav}/>
        <Download />
        <SeriesSurvey />
        <Manager />
        <Contact
          contact_default={true}
          contact_department={'経営企画部　広報担当　○○事務局'}
          contact_custom_office_address={''}
          contact_custom_url={''}
          related_contact_person={'山田、森川'}
          contact_note={''}
        />
        <FootSlider list={list} content="reports" />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />

      <Script
          id="jsonld-breadcrumbList"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, '\\u003c'),
          }}
        />
    </>
  )
}