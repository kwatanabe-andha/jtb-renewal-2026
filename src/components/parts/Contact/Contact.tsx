import './index.scss'
import Link from 'next/link'
import Inner from "@/components/parts/Inner/Inner"
import { SITE_URL, COLORS } from "@/config/site"
import { MessageSquare01 } from "@untitledui/icons"

// type Props = {
//   className?: string
// };

export default function Contact() {
  return (
    <section className='bl_contact'>
      <Inner className='bl_contact_inner'>
        <div className='bl_contact_container'>
          <div className='bl_contact_head'>
            <h2>お問い合わせ</h2>
          </div>

          <div className='bl_contact_body'>
            <p className='bl_contact_company'>株式会社JTB総合研究所</p>
            <p className='bl_contact_office'>経営企画部　広報担当　○○事務局</p>
            <p className='bl_contact_address'>〒140-0002　東京都品川区東品川2-3-14　東京フロントテラス７F</p>
            <dl className='bl_contact_person'>
              <dt>担当者：</dt><dd>山田、森川</dd>
            </dl>

            <div className='bl_contact_info'>
              <p>執筆、講演等のご依頼は<br /><Link href={SITE_URL.contact}>お問い合わせ</Link>よりご連絡ください。</p>
              <Link href={SITE_URL.contact} className='bl_contact_btn'>
                <MessageSquare01 stroke={COLORS.c02} />
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </Inner>
    </section>
  )
}