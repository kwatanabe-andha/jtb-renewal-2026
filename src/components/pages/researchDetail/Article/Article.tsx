'use client'

import './index.scss'
import Image from 'next/image'
// import Link from 'next/link'
import { DetailHead } from '@/components/parts/DetailPage/DetailHead/DetailHead'
import { DetailNav } from '@/components/parts/DetailPage/DetailNav/DetailNav'
// import Accordion from "@/components/parts/Accordion/Accordion"
import Content from '../Content/Content'
import ResultSummary from '../ResultSummary/ResultSummary'
import { ReportsType } from '@/types/reports'
import { ConsultantType } from '@/types/consultant'
import { GlossaryType } from '@/types/glossary'
import { getH2FromHtml } from '@/lib/getH2FromHtml'

type Props = {
  details: ReportsType
  consultants: ConsultantType[]
  glossaries: GlossaryType[]
}

export default function Article(
  { details, consultants, glossaries }: Props
) {

  const author = consultants.map(consultant => {
    return { name: consultant.subject, profile: consultant.profile_position }
  })

  const defaultSections = getH2FromHtml(details.contents_default)
  const loginSections = getH2FromHtml(details.contents_login)
  const sections = defaultSections.concat(loginSections)
  const keywords = glossaries.map(glossary => {
    return { subject: glossary.subject, slug: glossary.slug || glossary.topics_id.toString() }
  })

  return (
    <article className='bl_article'>
      <DetailHead
        subject={details.subject}
        text={''}
        release={details.ymd}
        update={details.update_ymdhi.split('T')[0]}
        download={undefined}
        login={false}
        author={author}
      />

      <section className='bl_article_wrap'>
        <div className='bl_article_container'>
          <DetailNav sections={sections} keywords={keywords} numbering={details.numbering || false} isPc scrollToDetail className='hp_hidden_down-sm' />
          <div className='bl_article_body'>
            <div className='bl_article_head'>
              <ResultSummary title={details.result_title} contents={details.result_contents} />
              { details.img_main.url && <div className='bl_article_thumb'><Image src={details.img_main.url} alt={details.img_main.desc || ''} width={974} height={593} /></div> }
              <p className='bl_article_abstract'>
                静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。静的テキスト。
              </p>
            </div>
            <DetailNav sections={sections} keywords={keywords} numbering={details.numbering || false} className='hp_hidden_up-md' />

            <Content numbering={details.numbering || false} contents_default={details.contents_default} contents_login={details.contents_login} />
          </div>
        </div>
      </section>

    </article>
  )
}