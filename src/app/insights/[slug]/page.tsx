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
import { InsightsType } from '@/types/insights'
import { KeywordType, ArticleHead, AuthorType } from '@/types/detailPages'
import { getH2FromHtml } from '@/lib/getH2FromHtml'

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
  const { details, category, related_glossary } = await getInsightsDetail(slug)
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

  details.author_external_name?.forEach((item: string, index: number) => {
    author.push({
      name: details.author_external_name[index] as string,
      // img: details,
      profile: details.author_external_title[index] as string
    })
  })
  head.author = author

  // nav
  const keywords = related_glossary.map((glossary: GlossaryType) => {
    return { subject: glossary.subject, slug: glossary.slug }
  }) as KeywordType[]

  const sections = getH2FromHtml(details.contents_default)
  const nav = {sections, keywords, numbering: details.numbering}

  // Article head
  const articleHead = {
    img_main: details.img_main,
    excerpt: details.excerpt,
    guest: []
  } as ArticleHead

  details.guest_name?.forEach((guest: string, index: number) => {
    articleHead.guest?.push({
      guest_heading: details.guest_heading[index],
      guest_name: details.guest_name[index],
      guest_honorific: details.guest_honorific[index],
      guest_title: details.guest_title[index],
      guest_profile: details.guest_profile[index]
    })
  })

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
          contents_default={details.contents_default}
          article_type={details.article_type.key}
        />
        {
          details.related_posts > 0 &&
          <RelArticles list={details.related_posts} />
        }
        <Series list={seriesItems} series={category} />
        <Contact
          contact_default={details.contact_default}
          contact_department={details.contact_department}
          contact_custom_office_address={details.contact_custom_office_address}
          contact_custom_url={details.contact_custom_url}
          related_contact_person={details.related_contact_person}
          contact_note={details.contact_note}
        />
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