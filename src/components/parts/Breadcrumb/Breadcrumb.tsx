import './index.scss'
import Script from 'next/script'
import Link from "next/link"
import clsx from 'clsx';
import { Home05, ChevronRight } from "@untitledui/icons"

type Breadcrumb = {
  title: string
  href?: string
}

type JsonLD = {
  '@context': string
  '@type': string
  itemListElement: {
      '@type': string
      position: number
      name: string
      item: string
  }[]
}

type Props = {
  data: Breadcrumb[]
  footer?: boolean
  jsonLd?: JsonLD
}

export default function Breadcrumb ({ data, footer = false, jsonLd }: Props) {
  return (
    <>
      <div className={clsx('ly_breadcrumb', footer && 'is_footer')}>
        <ol className="bl_breadcrumb_list">
        <li><Link href="/" itemProp="item" className='bl_breadcrumb_home'><span itemProp="name"><Home05 stroke='#024270' strokeWidth={1} width={12} height={12} /></span></Link></li>
          {
            data.map((item: Breadcrumb, index: number) => {
              return (
                <li key={item.title}>
                  {
                    item.href
                    ? (
                      <>
                        <ChevronRight className='icon_chevronRight' strokeWidth={1} width={20} height={20} strokeLinecap='square' stroke='rgba(0,0,0,0.3)' />
                        <a href={item.href}>
                          <span>{item.title}</span>
                        </a>
                      </>
                    )
                    : (
                      <>
                        <ChevronRight className='icon_chevronRight' strokeWidth={1} width={20} height={20} strokeLinecap='square' stroke='rgba(0,0,0,0.3)' />
                        <span>{item.title}</span>
                      </>
                    )
                  }
                </li>
              )
            })
          }
        </ol>
      </div>
      {
        jsonLd && (
          <Script
            id="jsonld-breadcrumbList"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
            }}
          />
        )
      }
    </>
  )
}