"use client";

import './index.scss'
import Image from 'next/image'
import Inner from "@/components/parts/Inner/Inner"
import Accordion from "@/components/parts/Accordion/Accordion"
import { AuthorProfileType } from '@/types/detailPages'

type Props = {
  author: AuthorProfileType[]
}

export default function AuthorProfile({ author }: Props) {

  return (
    <>
      {
        author.map(item => {
          return (
            <Inner className='un_authorProfile' key={item.name}>
              <section className='un_authorProfile_container'>
                <div className='un_authorProfile_head'>
                  <h2 className='un_authorProfile_label'>著者プロフィール</h2>
                  { item.img && <div className='un_authorProfile_img'><Image src='/assets/dummy_yamashita.jpg' alt='' width={162} height={160} /></div> }
                </div>
                <div className='un_authorProfile_body'>
                  <div className='un_authorProfile_name'>
                    { item.name }<span>さん</span>
                  </div>
                  <p className='un_authorProfile_position'>{ item.title }</p>

                  <Accordion
                    openedText='閉じる'
                    closedText='もっと見る'
                    targetClassName='un_authorProfile_text'
                  >
                    <p>{ item.profile }</p>
                  </Accordion>
                </div>
              </section>
            </Inner>
          )
        })
      }
    </>
  )
}