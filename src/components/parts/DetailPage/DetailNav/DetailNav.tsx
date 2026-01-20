import Link from 'next/link'
import clsx from 'clsx';
import './index.scss'
import { SITE_URL } from '@/config/site'
import LockIcon from '@/icon/Lock/Lock'
import { Hash01 } from "@untitledui/icons"
import { KeywordType } from '@/types/detailPages';

export type DetailNavType = {
  sections : string[]
  keywords?: KeywordType[]
  className?: string
  numbering: boolean
}

export function DetailNav({ sections, keywords, className, numbering }: DetailNavType) {

  return (
    <aside className={clsx('bl_detailNav', className !== undefined && className)}>
      <div className='bl_detailNav_inner'>
        <div className='bl_detailNav_member'>
          <LockIcon />
          <p>この記事の全文を読むには<br /><Link href={SITE_URL.login}>ログイン</Link>が必要です</p>
        </div>
        
        <nav className='bl_detailNav_nav'>
          <h2 className='bl_detailNav_title'>目次</h2>
          <ul className='bl_detailNav_list'>
            {
              sections.map((section: string, index: number) => {
                let current = false
                return (
                  <li key={index}>
                    { index === 0 && (current = true) }
                    <Link href={`#section${index + 1}`} className='bl_detailNav_list_item' data-current={`${current}`}>
                      { numbering && <div className='bl_detailNav_list_number'>{index + 1}</div> }
                      <p className='bl_detailNav_list_text'>{section}</p>
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
              keywords?.map((keyword: KeywordType, index: number) => {
                return (
                  <li key={index}>
                    <Link href={`/glossary/${keyword.slug}/`}>
                      <Hash01 width={10} height={10} />
                      {keyword.subject}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </aside>
  )
}