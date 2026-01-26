import Script from 'next/script'
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
// import AuthorProfile from "@/components/pages/insightsDetail/AuthorProfile/AuthorProfile"
import Series from "@/components/pages/insightsDetail/Series/Series"
import RelArticles from "@/components/parts/RelArticles/RelArticles"
import Contact from "@/components/parts/Contact/Contact"
import DetailTop from "@/components/parts/PageHead/DetailTop"
import Article from "@/components/parts/DetailPage/Article/Article"
import FootSlider from "@/components/parts/FootSlider/FootSlider"
import getInsightsStatic from '@/fetch/static/insights/getInsightsStatic'
import getInsightsDetail from '@/fetch/static/insights/getInsightsDetail'
import { GlossaryType } from '@/types/glossary'
import { InsightsType, InsightsAuthorType, GuestsType } from '@/types/insights'
import { KeywordType, ArticleHead, AuthorType } from '@/types/detailPages'
import { getH2FromHtml } from '@/lib/getH2FromHtml'
import { ConsultantType } from '@/types/consultant'

export async function generateStaticParams() {
  const { list } = await getInsightsStatic({ all: true })
  const paramSlug = list.map((item: InsightsType) => ({
    slug: item.slug
  }))

  return paramSlug
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { slug } = await params
  const { details } = await getInsightsDetail(slug)

  return {
    title: `${details.subject}`,
    description: `${details.meta_description}`,
  }
}

export default async function Page({ params }: { params: { slug: string }}) {
  const { slug } = await params
  const { details, category, related_glossary, related_posts, related_consultant } = await getInsightsDetail(slug)
  const { list } = await getInsightsStatic({ all: true })

  const breadcrumb = [
    {
      title:  'コラム',
      href: '/insights/'
    },
    {
      title: details.subject
    }
  ]

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
        name: 'コラム',
        item: 'https://www.tourism.jp/insights/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: details.subject,
        item: `https://www.tourism.jp/insights/detail/${details.slug}`
      }
    ]
  }

  // head
  const head = {
    subject: details.subject,
    release: details.ymd,
    update: details.update_ymdhi.split('T')[0],
    // download: 'https://tourism.g.kuroco-img.app/v=1766049351/files/topics/4_ext_8_0.pdf',
    login: true,
    author: [] as AuthorType[]
  }

  const author: AuthorType[] = []

  if (details.author && details.author.length > 0) {
    details.author?.forEach((item: InsightsAuthorType, index: number) => {
      if (item.author_consultant.module_id) {
        const consultant = related_consultant[index] as ConsultantType
        author.push({
          name: consultant.subject,
          img: consultant.profile.profile_img,
          title: consultant.profile.profile_position,
          profile: consultant.history
        })
      } else {
        author.push({
          name: item.author_external_name,
          title: item.author_external_title,
          profile: item.author_external_profile
        })
      }
    })
    head.author = author
  }

  // nav
  const keywords = related_glossary.map((glossary: GlossaryType) => {
    return { subject: glossary.subject, slug: glossary.slug }
  }) as KeywordType[]

  const sections = details.article ? getH2FromHtml(details.article.contents_default) : []
  const nav = {sections, keywords, numbering: details.numbering}

  // Article head
  const articleHead = {
    img_main: details.img_main,
    excerpt: details.excerpt,
    guest: []
  } as ArticleHead

  if (details.guests && details.guests.length > 0) {
    details.guests.forEach((guest: GuestsType) => {
      articleHead.guest?.push({
        guest_heading: guest.guest_heading,
        guest_name: guest.guest_name,
        guest_honorific: guest.guest_honorific,
        guest_title: guest.guest_title,
        guest_profile: guest.guest_profile
      })
    })
  }

  // Series
  const seriesItems = list.filter((item: InsightsType) => {
    return item.contents_type_slug === details.contents_type_slug
  }).slice(0, 5)

  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav offset={50}>
        <DetailTop
          title={details.subject}
        />
        <Article
          head={head}
          nav={nav}
          articleHead={articleHead}
          article={details.article}
          article_type={details.article_type}
        />
        { related_posts.length > 0 && <RelArticles list={related_posts} /> }
        <Series list={seriesItems} series={category} />
        <Contact contact={details.contact} />
        <FootSlider list={list.slice(5)} content="insights" />
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