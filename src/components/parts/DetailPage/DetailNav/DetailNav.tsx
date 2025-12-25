import Link from 'next/link'
import './index.scss'

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
}

export function DetailNav({ sections, keywords }: DetailNavType) {
  return (
    <div className='bl_detailNav'>
      <div className='bl_detailNav_inner'>
        <div className='bl_detailNav_member'>
          <p>この記事の全文を読むには<br /><Link href="">ログイン</Link>が必要です</p>
        </div>
        
        <nav className='bl_detailNav_nav'>
          <div className='bl_detailNav_title'>目次</div>
          <ul className='bl_detailNav_list'>
            {
              sections.map((section: Section, index: number) => {
                let current = false
                return (
                  <li key={index}>
                    { index === 0 && (current = true) }
                    <Link href="" className='bl_detailNav_list_item' data-current={`${current}`}>
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
                    <Link href={keyword.url}>{keyword.name}</Link>
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