import Image from 'next/image'
import Link from 'next/link'
import './index.scss'
import Download from '@/components/parts/Download/Download'
import toDateTimeFormat from '@/lib/toDateTimeFormat'
import { SITE_URL } from '@/config/site'
import LockIcon from '@/icon/Lock/Lock'

type Author = {
  name: string
  img: string
  text: string
}

export type DetailHeadType = {
  title: string
  text?: string
  release: string
  update?: string
  download?: string
  member?: boolean
  author?: Author
}

export function DetailHead(
  { title, text, release, update, download, member, author }: DetailHeadType
) {
  return (
    <div className='bl_detailHead'>
      <div className='bl_detailHead_inner'>
        <h1 className='bl_detailHead_title'>{title}</h1>
        { text && <p className='bl_detailHead_text'>{text}</p> }
        {
          author && (
            <div className='bl_detailHead_author'>
              <div className='bl_detailHead_author_img'><Image src={author.img} alt='' width={76} height={76} /></div>
              <div className='bl_detailHead_author_content'>
                <div className='bl_detailHead_author_tag'>寄稿</div>
                <div className='bl_detailHead_author_name'>{author.name}</div>
                <p className='bl_detailHead_author_text'>{author.text}</p>
              </div>
            </div>
          )
        }
        { download && <div className='bl_detailHead_download'><Download url={'/assets/dummy_data_1766714548119.csv'} /></div> }

        {
          member && (
            <div className='bl_detailHead_btm'>
              <div className='bl_detailHead_member'>
                <div className='bl_detailHead_memberLock'><LockIcon />メンバー限定</div>
                <p className='bl_detailHead_memberText'>この記事の全文を読むには<Link href={SITE_URL.login}>ログイン</Link>が必要です</p>
              </div>
              <div className='bl_detailHead_date'>
                <div className='bl_detailHead_release'>
                  公開日<time dateTime={release}>{ toDateTimeFormat(release) }</time>
                </div>
                { update && <div className='bl_detailHead_update'>（更新日<time dateTime={update}>{ toDateTimeFormat(update) }</time>）</div> }
              </div>
            </div>
          )
        }
        {
          !member && (
            <div className='bl_detailHead_date'>
              <div className='bl_detailHead_release'>
                公開日<time dateTime={release}>{ toDateTimeFormat(release) }</time>
              </div>
              { update && <div className='bl_detailHead_update'>（更新日<time dateTime={update}>{ toDateTimeFormat(update) }</time>）</div> }
            </div>
          )
        }
      </div>
    </div>
  )
}