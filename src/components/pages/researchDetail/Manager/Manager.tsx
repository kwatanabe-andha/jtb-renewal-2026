import './index.scss'
import Image from 'next/image'
import Link from 'next/link'
import { ConsultantType } from '@/types/consultant'

type Props = {
  data: ConsultantType[]
}

export default function Manager({data}: Props) {
  if ( data.length === 0 ) return

  return (
    <section className="un_manager">
      <div className="un_manager_inner bl_inner">
        <div className="un_manager_container">
          <div className="un_manager_head">
            <h2>担当者</h2>
          </div>
          <ul className="un_manager_list">
            {
              data.map(item => {
                return (
                  <li className="un_manager_item" key={item.slug}>
                    <Link href={`/consultants/${item.slug}`}>
                      { item.profile.profile_img.url && <div className="un_manager_img"><Image src={item.profile.profile_img.url} alt={item.profile.profile_img.desc || ''} width="50" height="50" /></div> }
                      <div className="un_manager_info">
                        <p className="un_manager_name">{item.subject}</p>
                        <p className="un_manager_company">JTB総合研究所（静的テキスト）</p>
                        { item.profile.profile_position && <p className="un_manager_position">{item.profile.profile_position}</p> }
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}