import './index.scss'
import Link from "next/link"
import clsx from 'clsx';
import { Home05, ChevronRight } from "@untitledui/icons"

type Breadcrumb = {
  title: string
  href?: string
}

type Props = {
  data: Breadcrumb[]
  footer?: boolean
}

export default function Breadcrumb ({ data, footer = false }: Props) {
  return (
    <div className={clsx('ly_breadcrumb', footer && 'is_footer')}>
      <ol className="bl_breadcrumb_list" itemScope itemType="http://schema.org/BreadcrumbList">
      <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><Link href="/" itemProp="item" className='bl_breadcrumb_home'><span itemProp="name"><Home05 stroke='#024270' strokeWidth={1} width={12} height={12} /></span></Link><meta itemProp="position" content="1" /></li>
        {
          data.map((item: Breadcrumb, index: number) => {
            return (
              <li key={item.title} itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                {
                  item.href
                  ? (
                    <>
                      <ChevronRight className='icon_chevronRight' strokeWidth={1} width={20} height={20} strokeLinecap='square' stroke='rgba(0,0,0,0.3)' />
                      <a href={item.href} itemProp="item">
                        <span itemProp="name">{item.title}</span>
                      </a>
                      <meta itemProp="position" content={`${index + 2}`}></meta>
                    </>
                  )
                  : (
                    <>
                      <ChevronRight className='icon_chevronRight' strokeWidth={1} width={20} height={20} strokeLinecap='square' stroke='rgba(0,0,0,0.3)' />
                      <span itemProp="name">{item.title}</span>
                      <meta itemProp="position" content={`${index + 2}`}></meta>
                    </>
                  )
                }
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}