'use client'
import './index.scss'
import Accordion from "@/components/parts/Accordion/Accordion"
import DetailsSummary from '@/components/parts/DetailsSummary/DetailsSummary'

export default function Content() {
  return (
    <>
      <section className="un_consulDetail_mv">
        <div className="un_consulDetail_mv_content">
          <div className="un_consulDetail_img">
            <img src="/assets/img/consultants/detail/dummy_img01.jpg" alt="" width="300" height="300" />
          </div>
          <div className="un_consulDetail_info">
            <div className="un_consulDetail_position">執行役員　地域交流共創部長</div>
            <div className="un_consulDetail_name">
              <h2 className="un_consulDetail_name_jp">河野 まゆ子</h2>
              <div className="un_consulDetail_name_en">Mayuko Kono</div>
            </div>
            <div className="un_consulDetail_desc">精緻なデータに基づき、地域資源を活用した観光振興に係る戦略づくりを支援する地域密着型コンサルタント</div>
            <div className="un_consulDetail_category">専門領域</div>
            <ul className="un_consulDetail_list">
              <li className="item">
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/detail/dummy_icon01.jpg" alt=""
                      width="28" height="28" /></div>
                  <span className="item_text">地域活性化</span>
                </a>
              </li>
              <li className="item"><a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/detail/dummy_icon01.jpg" alt=""
                      width="28" height="28" /></div>
                  <span className="item_text">観光危機管理</span>
                </a>
              </li>
              <li className="item">ワーケーション</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="un_consulDetail_content bl_inner">
        <h2 className="un_consulDetail_content_h2">経歴</h2>
        <p>
          2000年、東京大学文学部美術史学専攻卒、ユーラシア旅行社に入社。イスラム地域のパッケージ商品の企画・販売、Web管理を担当。同社退社後、筑波大学大学院修士課程芸術研究科世界遺産専攻に入学。奈良県・和歌山県における文化的観光施策の現状を研究、2006年課程修了。同年4月から現職。
        </p>
        <h2 className="bl_h3">主な要職・公職</h2>
        <Accordion
          openedText='閉じる'
          closedText='もっと見る'
          className='un_summary_btn'
          targetClassName='un_consulDetail_content_list'
          section
        >
          <ul>
            <li className="item"><span className="item_text">長崎県・長崎県総合計画・総合戦略懇話会 委員</span><span
                className="item_year">2025年1月～2032年3月（予定）</span></li>
            <li className="item"><span className="item_text">長崎県・長崎県総合計画・総合戦略懇話会 委員</span><span
                className="item_year">2025年1月～2032年3月（予定）</span></li>
            <li className="item"><span className="item_text">長崎県・長崎県総合計画・総合戦略懇話会 委員</span><span
                className="item_year">2025年1月～2032年3月（予定）</span></li>
            <li className="item"><span className="item_text">長崎県・長崎県総合計画・総合戦略懇話会 委員</span><span
                className="item_year">2025年1月～2032年3月（予定）</span></li>
            <li className="item"><span className="item_text">長崎県・長崎県総合計画・総合戦略懇話会 委員</span><span
                className="item_year">2025年1月～2032年3月（予定）</span></li>
          </ul>
        </Accordion>
      </section>
      <div className="un_consulDetail_caseStudy">
        <section className="bl_caseStudy">
          <div className="bl_inner">
            <h2 className="bl_h2">実績</h2>
            <div className="bl_expandBtn_container">
              <h3 className="bl_h3">注目のケーススタディー</h3>
            </div>
            <section className="bl_caseStudy_container">
              <article className="bl_caseStudy_content_wrap">
                <a className="bl_caseStudy_content" href="#">
                  <div className="bl_caseStudy_img"><img src="/assets/img/expertise/detail/dummy_img02.jpg" alt=""
                      width="260" height="173" /></div>
                  <div className="bl_caseStudy_info">
                    <p className="branch">愛知県東三河総局</p>
                    <h3 className="title">「2025年夏休み（7月15日～8月31日）の旅行動向」発表</h3>
                    <div className="desc">2024年度　東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務</div>
                    <div className="date">2025.01.10</div>
                  </div>
                </a>
              </article>
              <div className="bl_caseStudy_content_bottom bl_btn_wrap">
                <a className="bl_btn" href="#">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="black" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg><span>すべてのケーススタディをみる</span></a>
              </div>
            </section>
            <div className="bl_expandBtn_container">
              <h3 className="bl_h3">担当プロジェクト実績</h3>
              <button className="bl_expandBtn" type="button">すべて展開する</button>
            </div>
            <section className="bl_acc02__container">
              <DetailsSummary
                  className='bl_acc02'
                  summary={{
                    className: 'bl_acc02_title',
                    children: (<>
                    <div className="branch">
                    <div className="branch_text">アドベンチャーワールドサミット北海道実行委員会</div>
                    <div className="branch_year">2024年度 </div>
                    </div>
                    <div className="text_wrap">
                      <h4 className="text">令和6年度国立公園アドベンチャートラベル展開事業実施業務令和6年度国立公園アドベンチャートラベル展開事業実施業務</h4>
                      <div className="bl_download" data-file="SEARCH">ケーススタディあり</div>
                    </div>
                    <div className="image">
                      <img src="/assets/img/expertise/detail/dummy_img01.jpg" alt="" width="165" height="110" />
                    </div>
                    </>)
                  }}
                  body={{
                    children: (<>
                    <div className="bl_acc02_content">
                      <p>
                        国立公園の優れた自然の活用による地域活性化を目指し、地域事業者等との連携において、アドベンチャートラベルの要素を備えた体験の磨き上げ、商品化、販売ルートの構築、各種ルールの策定等の伴走支援を実施。
                      </p>
                      <div className="person">
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                      </div>
                      <a className="bl_btnBig" href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>ケーススタディをみる</span>
                      </a>
                    </div>
                    </>)
                  }}
                />
              
              <DetailsSummary
                  className='bl_acc02'
                  summary={{
                    className: 'bl_acc02_title',
                    children: (<>
                    <div className="branch">
                      <div className="branch_text">林野庁</div>
                      <div className="branch_year">2024年度 </div>
                    </div>
                    <div className="text_wrap">
                      <h4 className="text">令和6年度国立公園アドベンチャートラベル展開事業実施業務令和6年度国立公園アドベンチャートラベル展開事業実施業務</h4>
                    </div>
                    </>)
                  }}
                  body={{
                    children: (<>
                    <div className="bl_acc02_content">
                      <p>
                        国立公園の優れた自然の活用による地域活性化を目指し、地域事業者等との連携において、アドベンチャートラベルの要素を備えた体験の磨き上げ、商品化、販売ルートの構築、各種ルールの策定等の伴走支援を実施。
                      </p>
                      <div className="person">
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                      </div>
                      <a className="bl_btnBig" href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>ケーススタディをみる</span>
                      </a>
                    </div>
                    </>)
                  }}
                />

              <DetailsSummary
                  className='bl_acc02'
                  summary={{
                    className: 'bl_acc02_title',
                    children: (<>
                    <div className="branch">
                      <div className="branch_text">林野庁</div>
                      <div className="branch_year">2024年度 </div>
                    </div>
                    <div className="text_wrap">
                      <h4 className="text">令和6年度国立公園アドベンチャートラベル展開事業</h4>
                      <div className="bl_download" data-file="SEARCH">ケーススタディあり</div>
                    </div>
                    </>)
                  }}
                  body={{
                    children: (<>
                    <div className="bl_acc02_content">
                      <p>
                        国立公園の優れた自然の活用による地域活性化を目指し、地域事業者等との連携において、アドベンチャートラベルの要素を備えた体験の磨き上げ、商品化、販売ルートの構築、各種ルールの策定等の伴走支援を実施。
                      </p>
                      <div className="person">
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                        <li className="person_item">黒須 宏志</li>
                      </div>
                      <a className="bl_btnBig" href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>ケーススタディをみる</span>
                      </a>
                    </div>
                    </>)
                  }}
                />

            </section>
            <div className="bl_btn_wrap">
              <a className="bl_btn" href="#">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="black" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg><span>河野 まゆ子の実績をすべて見る</span></a>
            </div>
          </div>
        </section>
      </div>
      <section className="un_consulDetail_column">
        <div className="un_recently_inner bl_inner">
          <h2 className="bl_hd_level2"><span>執筆コラム</span></h2>
          <section className="un_recentlyCard_container">
            <article className="un_recentlyCard">
              <a href="" className="un_recentlyCard_img">
                <div className="un_recentlyCard_thumb"><img alt="" loading="lazy" width="474" height="316"
                    decoding="async" data-nimg="1" src="/assets/thumb.jpg" /></div>
              </a>
              <div className="un_recentlyCard_body">
                <a href="" className="un_recentlyCard_content">
                  <div className="un_recentlyCard_category">コラム</div>
                  <h3 className="un_recentlyCard_title">持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～
                    持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～
                  </h3>
                  <p className="un_recentlyCard_theme">研究員コラム</p>
                  <ul className="un_recentlyCard_tag">
                    <li className="item">#調査結果</li>
                    <li className="item">#日本人旅行者</li>
                  </ul>
                </a>
                <div className="un_recentlyCard_btm"><span></span><time dateTime="2025-01-10"
                    className="un_recentlyCard_time">2025.01.10</time></div>
              </div>
            </article>
            <article className="un_recentlyCard">
              <a href="" className="un_recentlyCard_img">
                <div className="un_recentlyCard_thumb"><img alt="" loading="lazy" width="474" height="316"
                    decoding="async" data-nimg="1" src="/assets/thumb.jpg" /></div>
              </a>
              <div className="un_recentlyCard_body">
                <a href="" className="un_recentlyCard_content">
                  <div className="un_recentlyCard_category">コラム</div>
                  <h3 className="un_recentlyCard_title --secret">｢冬支度消費｣の意欲は高まるも､年末年始に備えた節約意識や物価上昇の影響で､11月の消費意欲は例年を下回る
                  </h3>
                  <p className="un_recentlyCard_theme">研究員コラム</p>
                  <ul className="un_recentlyCard_tag">
                    <li className="item">#調査結果</li>
                    <li className="item">#日本人旅行者</li>
                  </ul>
                </a>
                <div className="un_recentlyCard_btm"><span></span><time dateTime="2025-01-10"
                    className="un_recentlyCard_time">2025.01.10</time></div>
              </div>
            </article>
            <article className="un_recentlyCard">
              <a href="" className="un_recentlyCard_img">
                <div className="un_recentlyCard_thumb"><img alt="" loading="lazy" width="474" height="316"
                    decoding="async" data-nimg="1" src="/assets/thumb.jpg" /></div>
              </a>
              <div className="un_recentlyCard_body">
                <a href="" className="un_recentlyCard_content">
                  <div className="un_recentlyCard_category">コラム</div>
                  <h3 className="un_recentlyCard_title">持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～
                    持続可能な観光地の取組～ユニバーサルツーリズム先進県・ひょうご～
                  </h3>
                  <p className="un_recentlyCard_theme">2024年度　東三河振興ビジョン2030重点プロジェクトにおける森林サービス産業創出調査業務</p>
                  <ul className="un_recentlyCard_tag">
                    <li className="item">#調査結果</li>
                    <li className="item">#日本人旅行者</li>
                  </ul>
                </a>
                <div className="un_recentlyCard_btm"><span></span><time dateTime="2025-01-10"
                    className="un_recentlyCard_time">2025.01.10</time></div>
              </div>
            </article>
          </section>
          <div className="bl_scrollBar">
            <div className="bl_scrollBar_line">
              <div className="bl_scrollBar_current"></div>
            </div>
          </div>
          <div className="bl_btn_wrap ">
            <a className="bl_btn" href="#">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="black" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg><span>河野 まゆ子のコラムをすべて見る</span>
            </a>
          </div>
        </div>
      </section>
      <div className="bl_inner">
        <section className="un_consulDetail_media">
          <h2 className="bl_hd_level2"><span>執筆・メディア出演・講演等</span></h2>
          <div className="un_consulDetail_media_ccontainer">
            <section className="un_consulDetail_media_content">
              <div className="image"><img src="/assets/img/consultants/detail/dummy_img02.jpg" alt="" width="250"
                  height="250" /></div>
              <div className="info">
                <h3 className="info_title">観光学全集第6巻「観光産業論」（共著）</h3>
                <div className="info_detail">林清 (著, 編集)　単行本 – 2015/3/26　原書房</div>
                <div className="info_desc">
                  シリーズ第6巻（第4回配本）は、観光産業の構造と現状を分析。宿泊業、交通運輸業、旅行業、その他の観光関連産業などから実務経験者や専門家らを執筆陣に加え、各産業の発展史から市場、業界構造、今後の課題までを解説。
                </div>
                <div className="info_list">
                  <a className="bl_btn_popup" href="#">
                    <span>Amazon</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>Kindle</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>楽天市場</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>楽天kobo</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
            <section className="un_consulDetail_media_content">
              <div className="image"><img src="/assets/img/consultants/detail/dummy_img02.jpg" alt="" width="250"
                  height="250" /></div>
              <div className="info">
                <h3 className="info_title">観光学全集第6巻「観光産業論」（共著）</h3>
                <div className="info_detail">林清 (著, 編集)　単行本 – 2015/3/26　原書房</div>
                <div className="info_desc">
                  シリーズ第6巻（第4回配本）は、観光産業の構造と現状を分析。宿泊業、交通運輸業、旅行業、その他の観光関連産業などから実務経験者や専門家らを執筆陣に加え、各産業の発展史から市場、業界構造、今後の課題までを解説。
                </div>
                <div className="info_list">
                  <a className="bl_btn_popup" href="#">
                    <span>Amazon</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>Kindle</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>楽天市場</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a className="bl_btn_popup" href="#">
                    <span>楽天kobo</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.25 5.25V1.75M12.25 1.75H8.75M12.25 1.75L7.58333 6.41667M5.83333 2.91667H4.55C3.56991 2.91667 3.07986 2.91667 2.70552 3.10741C2.37623 3.27518 2.10852 3.5429 1.94074 3.87218C1.75 4.24653 1.75 4.73657 1.75 5.71667V9.45C1.75 10.4301 1.75 10.9201 1.94074 11.2945C2.10852 11.6238 2.37623 11.8915 2.70552 12.0592C3.07986 12.25 3.56991 12.25 4.55 12.25H8.28333C9.26345 12.25 9.75345 12.25 10.1278 12.0592C10.4571 11.8915 10.7248 11.6238 10.8926 11.2945C11.0833 10.9201 11.0833 10.4301 11.0833 9.45V8.16667"
                        stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="bl_scrollBar">
            <div className="bl_scrollBar_line">
              <div className="bl_scrollBar_current"></div>
            </div>
          </div>
        </section>
      </div>
      <section className="un_consulDetail_timeline_container">
        <div className="bl_inner">
          <Accordion
            openedText='閉じる'
            closedText='もっと見る'
            className='un_consulDetail_timeline_btn'
            targetClassName='un_consulDetail_timeline'
          >
            <h3 className="bl_h3">H3 2024年度 </h3>
            <div className="un_consulDetail_timeline_content">
              <div className="block">
                <div className="media">講演</div>
                <div className="info">
                  <div className="info_block">
                    <div className="info_place">国土交通省</div>
                    <div className="info_date">2025年11月7日</div>
                  </div>
                  <div className="info_title">令和7年度 第2回水源地域未来会議「インフラツーリズムの拡大に向けて －事例にみる体制構築＆訴求のポイント－」</div>
                </div>
              </div>
              <div className="block">
                <div className="media">テレビ出演</div>
                <div className="info">
                  <div className="info_block">
                    <div className="info_place">法政大学地域研究センター</div>
                    <div className="info_date">2025年11月7日</div>
                  </div>
                  <div className="info_title">まちづくりシンポジウム「地域経営の未来と観光産業の役割」</div>
                </div>
              </div>
              <div className="block">
                <div className="media">講演</div>
                <div className="info">
                  <div className="info_block">
                    <div className="info_place">国土交通省</div>
                    <div className="info_date">2025年11月7日</div>
                  </div>
                  <div className="info_title">令和7年度 第2回水源地域未来会議「インフラツーリズムの拡大に向けて －事例にみる体制構築＆訴求のポイント－」</div>
                </div>
              </div>
              <div className="block">
                <div className="media">テレビ出演</div>
                <div className="info">
                  <div className="info_block">
                    <div className="info_place">法政大学地域研究センター</div>
                    <div className="info_date">2025年11月7日</div>
                  </div>
                  <div className="info_title">令和7年度 第2回水源地域未来会議「インフラツーリズムの拡大に向けて －事例にみる体制構築＆訴求のポイント－」</div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </section>
    </>
  )
}