'use client'

import './index.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useDevice } from '@/hooks/useDevice'
import { DetailHead, DetailHeadType } from '@/components/parts/DetailPage/DetailHead/DetailHead'
import { DetailNav, DetailNavType } from '@/components/parts/DetailPage/DetailNav/DetailNav'
import Accordion from "@/components/parts/Accordion/Accordion"

type Props = {
  head: DetailHeadType
  nav: DetailNavType
}

export default function Article(
  { head, nav }: Props
) {
  const { isSP, isPC, ready } = useDevice()
  if (!ready) return null

  return (
    <article className='bl_article'>
      <DetailHead
        title={head.title}
        release={head.release}
        update={head.update}
        download={head.download}
        member={head.member}
        author={head.author}
      />

      <div className='bl_article_wrap'>
        <div className='bl_article_container'>
          { isPC && <DetailNav sections={nav.sections} keywords={nav.keywords} /> }
          <div className='bl_article_body'>
            <div className='bl_article_head'>
              <p className='bl_article_lead'>｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る</p>
              <div className='bl_article_thumb'><Image src='/dummy_thumb_01.jpg' alt='' width={974} height={593} /></div>
              <p className='bl_article_abstract'>
                「旅の魅力とは何ですか？」という問いを投げかけると、多くの人は、リフレッシュや楽しみ、といったことと合わせて、「非日常」という言葉を口にします。しかしながら、気軽に旅行ができなかった時代から、旅はより身近な存在となりました。インターネットを介せば、世界中の情景が目に入る現代において、旅先で体験する「非日常」の意味合いが、徐々に変化してきているようにも感じます。では、今の旅行者は、旅にどのようなことを求めているのでしょうか？<br />株式会社JTB総合研究所（東京都品川区 代表取締役社長執行役員　風間 欣人）は、アンケート調査とインタビュー調査を交え、「旅に求めることについての調査」をまとめました。
              </p>
            </div>

            { isSP && <DetailNav sections={nav.sections} keywords={nav.keywords} /> }

            {/* chara */}
            <div className='bl_articleChara'>
              <div className='bl_articleChara_title'>本記事の登場人物</div>
              <div className='bl_articleChara_head'>
                <div className='bl_articleChara_img'><Image src='/dummy_article_chara.jpg' alt='' width={196} height={196} /></div>
                <div className='bl_articleChara_profile'>
                  <div className='bl_articleChara_name'><span>小林 武彦</span>さん</div>
                  <div className='bl_articleChara_about'>生物学者</div>
                </div>
              </div>

              <Accordion
                openedText='閉じる'
                closedText='もっと見る'
                targetClassName='bl_articleChara_text'
              >
                <p>1963年神奈川県生まれ。神奈川県立外語短期大学付属高校（現横浜国際高校）卒業、九州大学大学院修了（理学博士）、基礎生物学研究所、米国ロシュ分子生物学研究所、米国国立衛生研究所、国立遺伝学研究所を経て、東京大学定量生命科学研究所教授（生命動態研究センター ゲノム再生研究分野）。日本遺伝学会会長、生物科学学会連合の代表を歴任。現在、日本学術会議会員。生命の連続性を支えるゲノムの再生（若返り）機構を解き明かすべく日夜研究に励む。海と演劇をこよなく愛する。著書にベストセラー『生物はなぜ死ぬのか』（講談社現代新書）</p>
              </Accordion>
            </div>
            {/* chara */}

            <div className='bl_article_content'>
              <h2 id='section0'>H2H2H2H2H2H2H2H2-3階層</h2>
              <p>兵庫県が<Link href={'/'}>ユニバーサルツーリズム</Link>を推進するに至った背景には、大きく3つの要因があります。 1つ目は「社会の潮流」です。人口減少と少子高齢化が進む中、旅行者数の減少と観光市場の縮小は避けられない状況にあります。県内では、高齢者や障害のある方の割合が3割を超えており（図1）、今後ますます多様なニーズに対応する必要があります。また、「2025年問題」（※1）により、消費活動全体の低下も懸念されていることから観光産業においても誰もが利用しやすいインフラの整備や、誰もが楽しめる観光コンテンツの開発、受け入れ体制の整備といった対応が求められています。</p>
              <ul>
                <li>受け入れ体制の充実（接遇の質の向上等）</li>
                <li>情報アクセシビリティの確保</li>
                <li>ユニバーサルツーリズム推進への機運醸成</li>
              </ul>
              <ol>
                <li>日並びのよさやボーナスの上昇などを後押しに</li>
                <li>旅行意欲は堅調 、国内旅行は自然が多く静かな場所で日々の喧騒から離れ、心身ともにリラックスしたい</li>
                <li>海外旅行者数はコロナ禍前平均※の９割回復、アジア人気は継続、欧米など遠方は復活傾向</li>
              </ol>

              <figure>
                <Image src='/chart.png' alt='' width={720} height={348} />
                <figcaption>
                  注釈キャプション／出所注釈キャプション／出所注釈キャプション／出所注釈キャプション／出所<br />
                  注釈キャプション／出所注釈キャプション／出所注釈キャプション／出所
                </figcaption>
              </figure>

              <h3 id='section1'>H3H3H3H3H3H3H3H3H3-3階層</h3>
              <p>JTB は、「夏休み（2025 年 7 月 15 日～8 月 31 日）に 1 泊以上の旅行に出かける人」の旅行動向見通しをまとめまし た。本レポートは、1 泊以上の日本人の旅行について、各種経済動向や消費者行動調査、運輸・観光関連データ、JTB グルー プが実施したアンケート調査などから推計したもので、1969 年から継続的に調査を実施しています。</p>

              <h4 id='section2'>H4兵庫県でユニバーサルツーリズム推進条例が施行された理由</h4>
              <p>JTB は、「夏休み（2025 年 7 月 15 日～8 月 31 日）に 1 泊以上の旅行に出かける人」の旅行動向見通しをまとめまし た。本レポートは、1 泊以上の日本人の旅行について、各種経済動向や消費者行動調査、運輸・観光関連データ、JTB グルー プが実施したアンケート調査などから推計したもので、1969 年から継続的に調査を実施しています。</p>

              <h5 id='section3'>H5兵庫県でユニバーサルツーリズム推進条例が施行された理由</h5>
              <p>JTB は、「夏休み（2025 年 7 月 15 日～8 月 31 日）に 1 泊以上の旅行に出かける人」の旅行動向見通しをまとめまし た。本レポートは、1 泊以上の日本人の旅行について、各種経済動向や消費者行動調査、運輸・観光関連データ、JTB グルー プが実施したアンケート調査などから推計したもので、1969 年から継続的に調査を実施しています。</p>
            </div>

            <div className='bl_article_talk'>
              <p className='bl_article_talk_lead'>まずはお互いの作品に出会ったきっかけを教えてください</p>
              <p><span style={{ 'color': '#C2BD30' }}>上田さん :</span>&emsp;私は、「わきまえる」という言葉を悪者にしすぎないことも大切だと思っています。もともとの意味である「道理を心得ている」という中にある「理」は大切にしたい。また、配慮や分別、謙虚さも、それ自体が悪いものではないはずです。</p>
              <p><span style={{ 'color': '#305CC2' }}>清田さん :</span>&emsp;ただ、わきまえることを一方的に求める構造、特定の人にだけ強いる構造こそが変わるべきだったんです。だから今後は、「上に立つ人こそ、わきまえることが求められる」「声の大きな人こそ、自分の発言の影響をわきまえる」という方向へ、意味を転換していけたらいいなと感じています。</p>
              <p><span style={{ 'color': '#DF752A' }}>清田さん :</span>&emsp;ただ、わきまえることを一方的に求める構造、特定の人にだけ強いる構造こそが変わるべきだったんです。だから今後は、「上に立つ人こそ、わきまえることが求められる」「声の大きな人こそ、自分の発言の影響をわきまえる」という方向へ、意味を転換していけたらいいなと感じています。</p>
              <p><span style={{ 'color': '#30B5C2' }}>清田さん :</span>&emsp;ただ、わきまえることを一方的に求める構造、特定の人にだけ強いる構造こそが変わるべきだったんです。だから今後は、「上に立つ人こそ、わきまえることが求められる」「声の大きな人こそ、自分の発言の影響をわきまえる」という方向へ、意味を転換していけたらいいなと感じています。</p>
              <p><span style={{ 'color': '#87C230' }}>清田さん :</span>&emsp;ただ、わきまえることを一方的に求める構造、特定の人にだけ強いる構造こそが変わるべきだったんです。だから今後は、「上に立つ人こそ、わきまえることが求められる」「声の大きな人こそ、自分の発言の影響をわきまえる」という方向へ、意味を転換していけたらいいなと感じています。</p>
              <p><span style={{ 'color': '#C230A2' }}>清田さん :</span>&emsp;ただ、わきまえることを一方的に求める構造、特定の人にだけ強いる構造こそが変わるべきだったんです。だから今後は、「上に立つ人こそ、わきまえることが求められる」「声の大きな人こそ、自分の発言の影響をわきまえる」という方向へ、意味を転換していけたらいいなと感じています。</p>
            </div>
          </div>
        </div>
      </div>

    </article>
  )
}