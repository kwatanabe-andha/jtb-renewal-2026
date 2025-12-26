import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import AuthorProfile from "@/components/pages/insightsDetail/AuthorProfile/AuthorProfile"
import Series from "@/components/pages/insightsDetail/Series/Series"
import RelArticles from "@/components/parts/RelArticles/RelArticles"
import Contact from "@/components/parts/Contact/Contact"
import DetailTop from "@/components/parts/PageHead/DetailTop"
import Article from "@/components/parts/DetailPage/Article/Article"
import DetailFoot from "@/components/parts/DetailPage/DetailFoot/DetailFoot"

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
  { title: 'H2H2H2H2H2H2H2H2-3階層' },
  { title: 'H3H3H3H3H3H3H3H3H3-3階層' },
  { title: 'H4兵庫県でユニバーサルツーリズム推進条例が施行された理由' },
  { title: 'H5兵庫県でユニバーサルツーリズム推進条例が施行された理由' }
]

const keywords = [
  { name: '関係人口', url: '/' },
  { name: 'まちづくり', url: '/' },
  { name: '地域資源', url: '/' },
  { name: 'ワーケーション', url: '/' }
]

const relArticles = [
  { topics_id: 1, thumb: { url: '/thumb.jpg', desc: '' }, category: '研究員コラム', title: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 2, thumb: { url: '/thumb.jpg', desc: '' }, category: '研究員コラム', title: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 3, thumb: { url: '/thumb.jpg', desc: '' }, category: '研究員コラム', title: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' },
  { topics_id: 4, thumb: { url: '/thumb.jpg', desc: '' }, category: '研究員コラム', title: 'デジタルテクノロジーが観光を変える未来2025', ymd: '2025-01-10' }
]

const nav = {sections, keywords}

export default function Page() {
  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav offset={50}>
        <DetailTop
          title="スマートフォンの利用と旅行消費に関する調査"
          pressRelease
          logo='/series_logo.png'
          category='定点調査'
          facility='愛知県東三河総局'
        />
        <Article head={head} nav={nav} />
        <AuthorProfile />
        <RelArticles list={relArticles} />
        <Series />
        <Contact />
        <DetailFoot />
      </SideNav>
      <Breadcrumb data={breadcrumb} footer />
    </>
  )
}