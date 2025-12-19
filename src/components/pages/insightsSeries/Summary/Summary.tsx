"use client";

import './index.scss'
import Image from 'next/image'
import Accordion from "@/components/parts/Accordion/Accordion"
import { useState, useEffect, useRef } from 'react'

export default function Summary() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAccordion, setShowAccordion] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let maxContentHeight = 600
    if (window.matchMedia('(min-width: 768px)').matches) {
      maxContentHeight = 200
    }

    const content = contentRef.current as HTMLDivElement
    const contentHeight = content.clientHeight as number
    const isOver = contentHeight > maxContentHeight
    setIsOpen(!isOver)
    setShowAccordion(isOver)
  }, [])

  return (
    <div className='un_summary'>
      <div className='un_summary_inner'>
        <div className='un_summaryHead'>
          <div className='un_summaryHead_logo'>
            <Image src='/series_logo_01.jpg' alt='' width={195} height={195} />
          </div>
          <div className='un_summaryHead_shoulder'>
            <div className='un_summaryHead_shoulder_series'>✘ Tourism</div>
            <div className='un_summaryHead_shoulder_and'>× ◯◯◯◯◯</div>
          </div>

        </div>
        <h1 className='un_summary_heading'>「選」と出会う旅への視点</h1>
        <p className='un_summary_text'>「観光と他分野を掛け合わせて新たな価値を考える」をテーマに、各分野の有識者がさまざまな専門的視点から、観光産業の現状と未来へ提言</p>
        <div className='un_summary_img'><Image src='/dummy_thumb_01.jpg' alt='' width={974} height={593} /></div>

        <div className='un_summary_content' ref={contentRef} data-hidden={ String(!isOpen) }>
          <h2>「𝑥 Tourism（クロス・ツーリズム）」とは？</h2>
          <p>
            「𝑥 Tourism（クロス・ツーリズム）」とは、ツーリズムに様々な概念をクロスさせることで、新しい価値や仕組みを考える試みです。日本のツーリズムは、グローバル化やデジタルの進化、社会構造の変化や個人の価値観の多様化を背景に、様々なプレイヤーの参画によって進化、領域を拡大しています。本サイトでは、“Tourism ×（キーワード）”をコンセプトに、変化の激しい時代の、未来志向のツーリズムを考える場として、時には歴史を振り返り、普遍的な価値から最先端の動きまで、各専門家の意見を随時アップしていきます<br /><br />
            「𝑥 Tourism（クロス・ツーリズム）」とは、ツーリズムに様々な概念をクロスさせることで、新しい価値や仕組みを考える試みです。日本のツーリズムは、グローバル化やデジタルの進化、社会構造の変化や個人の価値観の多様化を背景に、様々なプレイヤーの参画によって進化、領域を拡大しています。本サイトでは、“Tourism ×（キーワード）”をコンセプトに、変化の激しい時代の、未来志向のツーリズムを考える場として、時には歴史を振り返り、普遍的な価値から最先端の動きまで、各専門家の意見を随時アップしていきます
          </p>
        </div>

        {
          showAccordion && (
            <Accordion
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              openedText='閉じる'
              closedText='もっと見る'
              className='un_summary_btn'
            />
          )
        }
      </div>
    </div>
  )
}