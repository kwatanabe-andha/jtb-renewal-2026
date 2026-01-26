import Script from 'next/script'
import SideNav from "@/components/parts/SideNav/SideNav"
import Breadcrumb from "@/components/parts/Breadcrumb/Breadcrumb"
import Contact from "@/components/parts/Contact/Contact"
import DetailTop from "@/components/parts/PageHead/DetailTop"
import FootSlider from "@/components/parts/FootSlider/FootSlider"
import Article from "@/components/pages/researchDetail/Article/Article"
import Survey from '@/components/parts/Survey/Survey'
import Manager from "@/components/pages/researchDetail/Manager/Manager"
import getReportsStatic from '@/fetch/static/reports/getReportsStatic'
import getReportsDetail from '@/fetch/static/reports/getReportsDetail'
import { ReportsType } from '@/types/reports'
import { multipleText } from '@/lib/multipleText'

export async function generateStaticParams() {
  const { list } = await getReportsStatic({ all: true })
  const paramSlug = list.map((item: ReportsType) => ({
    slug: item.slug
  }))

  return paramSlug
}

export async function generateMetadata({ params }: { params: { slug: string }}) {
  const { slug } = await params
  const { details } = await getReportsDetail(slug)

  return {
    title: `${details.subject}`,
    description: `${details.meta_description}`,
  }
}

export default async function Page({ params }: { params: { slug: string }}) {
  const { slug } = await params
  const { list } = await getReportsStatic({ cnt: 5 })
  const { details, related_glossary, related_consultant, related_expertise, related_posts, category } = await getReportsDetail(slug)

  const reportsTypeText = multipleText(details.reports_type)

  const breadcrumb = [
    {
      title:  '調査・レポート',
      href: '/research-reports/'
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
        name: '調査・レポート',
        item: 'https://www.tourism.jp/research-reports/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: details.subject,
        item: `https://www.tourism.jp/research-reports/${details.slug}`
      }
    ]
  }

  return (
    <>
      <Breadcrumb data={breadcrumb} />

      <SideNav offset={50}>
        <DetailTop
          title={details.subject}
          logo={category.series_logo}
          category={reportsTypeText}
        />
        <Article
          details={details}
          consultants={related_consultant}
          glossaries={related_glossary}
        />
        {/* <Download /> */}
        <Survey contents={details.overview_contents} title={details.overview_title} detail={details.overview_detail} />
        <Manager data={related_consultant} />
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