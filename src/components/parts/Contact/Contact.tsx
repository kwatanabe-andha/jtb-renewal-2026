import './index.scss'
import Link from 'next/link'
import Inner from "@/components/parts/Inner/Inner"
import { returnHtml } from '@/lib/returnHtml'
import { SITE_URL, COLORS } from "@/config/site"
import { MessageSquare01 } from "@untitledui/icons"

type Props = {
  contact_default: boolean
  contact_department?: string
  contact_custom_office_address?: string
  contact_custom_url?: string
  related_contact_person?: string
  contact_note?: string
};

export default function Contact(
  {
    contact_default, contact_department, contact_custom_office_address, contact_custom_url, related_contact_person, contact_note
  }: Props
) {
  const contactUrl = contact_custom_url ? contact_custom_url : SITE_URL.contact

  return (
    <section className='bl_contact'>
      <Inner className='bl_contact_inner'>
        <div className='bl_contact_container'>
          <div className='bl_contact_head'>
            <h2>お問い合わせ</h2>
          </div>

          <div className='bl_contact_body'>
            {
              contact_default && (
                <>
                <p className='bl_contact_company'>株式会社JTB総合研究所</p>
                { contact_department === null && <p className='bl_contact_office'>経営企画部　広報担当　○○事務局</p> }
                { contact_department && <p className='bl_contact_office'>{contact_department}</p> }
                <p className='bl_contact_address'>〒140-0002　東京都品川区東品川2-3-14　東京フロントテラス７F</p>
                { related_contact_person && <dl className='bl_contact_person'><dt>担当者：</dt><dd>{ related_contact_person }</dd></dl> }
                </>
              )
            }
            {
              !contact_default && contact_custom_office_address && (
                returnHtml(contact_custom_office_address)
              )
            }

            <div className='bl_contact_info'>
              {
                contact_note && <p>{ returnHtml(contact_note) }</p>
              }
              {
                !contact_note && <p>執筆、講演等のご依頼は<br /><Link href={contactUrl}>お問い合わせ</Link>よりご連絡ください。</p>
              }
              <Link href={contactUrl} className='bl_contact_btn'>
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