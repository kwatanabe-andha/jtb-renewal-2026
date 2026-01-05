import Link from 'next/link'
import clsx from 'clsx';
import './index.scss'
import { SITE_URL } from '@/config/site'
import LockIcon from '@/icon/Lock/Lock'
import { Hash01 } from "@untitledui/icons"

type Keyword = {
  name: string,
  url: string
}

type Section = {
  title: string,
  number?: number
}

export type DetailNavType = {
  sections : Section[]
  keywords?: Keyword[]
  className?: string
}

export function DetailNav({ sections, keywords, className }: DetailNavType) {
  return (
    <div className={clsx('bl_detailNav', className !== undefined && className)}>
      <div className='bl_detailNav_inner'>
        <div className='bl_detailNav_member'>
          <LockIcon />
          <p>この記事の全文を読むには<br /><Link href={SITE_URL.login}>ログイン</Link>が必要です</p>
        </div>
        
        <nav className='bl_detailNav_nav'>
          <h2 className='bl_detailNav_title'>目次</h2>
          <ul className='bl_detailNav_list'>
            {
              sections.map((section: Section, index: number) => {
                let current = false
                return (
                  <li key={index}>
                    { index === 0 && (current = true) }
                    <Link href={`#section${index}`} className='bl_detailNav_list_item' data-current={`${current}`}>
                      { section.number && <div className='bl_detailNav_list_number'>{section.number}</div> }
                      <p className='bl_detailNav_list_text'>{section.title}</p>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <div className='bl_detailNav_rel'>
          <div className='bl_detailNav_keyword'>関連キーワード</div>
          <ul className='bl_detailNav_rel_list'>
            {
              keywords?.map((keyword: Keyword, index: number) => {
                return (
                  <li key={index}>
                    <Link href={keyword.url}>
                      <Hash01 width={10} height={10} />
                      {keyword.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}