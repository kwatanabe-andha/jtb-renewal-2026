import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import RelArticles from "@/components/parts/RelArticles/RelArticles"
import Contact from "@/components/parts/Contact/Contact"
import DetailTop from "@/components/parts/PageHead/DetailTop"
import Article from "@/components/pages/researchDetail/Article/Article"
import FootSlider from "@/components/parts/FootSlider/FootSlider"

const breadcrumb = [
  {
    title:  'コラム',
    href: '/insights/'
  },
  {
    title:  '持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～'
  }
]

const head = {
  title: "スマートフォンの利用と旅行消費に関する調査 2024",
  release: "2024-12-27",
  update: "2025-01-10",
  download: 'https://tourism.g.kuroco-img.app/v=1766049351/files/topics/4_ext_8_0.pdf',
  member: true
}

const sections = [
  { title: '情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上', number: 1 },
  { title: '情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上', number: 2 },
  { title: '利用する SNSの上位は「LINE」、「YouTube」、「X」、「Instagram」で前年と変わらずも、「LINE」は20代女性と30代男性で減少傾向。「TikTok」と「Ameba」の利用が伸びる', number: 3 },
  { title: 'PDFダウンロード' }
]

const keywords = [
  { name: '関係人口', url: '/' },
  { name: 'まちづくり', url: '/' },
  { name: '地域資源', url: '/' },
  { name: 'ワーケーション', url: '/' }
]

const relArticles = [
  { topics_id: 1, thumb: { url: '/assets/thumb.jpg', desc: '' }, category: '研究員コラム', subject: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 2, thumb: { url: '/assets/thumb.jpg', desc: '' }, category: '研究員コラム', subject: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 3, thumb: { url: '/assets/thumb.jpg', desc: '' }, category: '研究員コラム', subject: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 4, thumb: { url: '/assets/thumb.jpg', desc: '' }, category: '研究員コラム', subject: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' }
]

const nav = {sections, keywords}

export default function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav offset={50}>
        <DetailTop
          title="スマートフォンの利用と旅行消費に関する調査"
          logo='/assets/series_logo_01.jpg'
          category='定点調査'
        />
        <Article head={head} nav={nav} />
        <RelArticles list={relArticles} />
        <Contact />
        <FootSlider />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}