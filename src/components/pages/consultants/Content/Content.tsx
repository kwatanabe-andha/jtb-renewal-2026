import './index.scss'
import '@/components/parts/Inner/index.scss'
import '@/components/parts/NarrowDown/index.scss'
import '@/components/parts/Heading/level2.scss'

export default function Content() {
  return (
    <div className="bl_inner">
      <section className="un_consultants">
        <form className="bl_nd" method="get">
          <div className="bl_nd_left">
            <div className="bl_nd_title">専門領域で絞り込み</div>
            <div className="bl_nd_container">
              <div className="bl_nd_list">
                <ul>
                  <li><input type="checkbox" id="all" className="el_hidden" name="すべて" value="すべて" /><label htmlFor="all"
                      tabIndex={0}>すべて</label></li>
                  <li><input type="checkbox" id="xxx" className="el_hidden" name="観光まちづくり" value="観光まちづくり" /><label
                      htmlFor="xxx" tabIndex={0}>観光まちづくり</label></li>
                  <li><input type="checkbox" id="yyy" className="el_hidden" name="旅行・消費者行動" value="旅行・消費者行動" /><label
                      htmlFor="yyy" tabIndex={0}>旅行・消費者行動</label></li>
                  <li><input type="checkbox" id="zzzz" className="el_hidden" name="インバウンド" value="インバウンド" /><label
                      htmlFor="zzzz" tabIndex={0}>インバウンド</label></li>
                  <li><input type="checkbox" id="アウトバウンド" className="el_hidden" name="xxx" value="アウトバウンド" /><label
                      htmlFor="xxxxx" tabIndex={0}>アウトバウンド</label></li>
                  <li><input type="checkbox" id="グローバル" className="el_hidden" name="xxx" value="グローバル" /><label
                      htmlFor="xxxxx" tabIndex={0}>グローバル</label></li>
                  <li><input type="checkbox" id="観光DX" className="el_hidden" name="xxx" value="観光DX" /><label
                      htmlFor="xxxxx" tabIndex={0}>観光DX</label></li>
                  <li><input type="checkbox" id="all" className="el_hidden" name="すべて" value="すべて" /><label htmlFor="all"
                      tabIndex={0}>すべて</label></li>
                  <li><input type="checkbox" id="xxx" className="el_hidden" name="観光まちづくり" value="観光まちづくり" /><label
                      htmlFor="xxx" tabIndex={0}>観光まちづくり</label></li>
                  <li><input type="checkbox" id="yyy" className="el_hidden" name="旅行・消費者行動" value="旅行・消費者行動" /><label
                      htmlFor="yyy" tabIndex={0}>旅行・消費者行動</label></li>
                  <li><input type="checkbox" id="zzzz" className="el_hidden" name="インバウンド" value="インバウンド" /><label
                      htmlFor="zzzz" tabIndex={0}>インバウンド</label></li>
                  <li><input type="checkbox" id="アウトバウンド" className="el_hidden" name="xxx" value="アウトバウンド" /><label
                      htmlFor="xxxxx" tabIndex={0}>アウトバウンド</label></li>
                  <li><input type="checkbox" id="グローバル" className="el_hidden" name="xxx" value="グローバル" /><label
                      htmlFor="xxxxx" tabIndex={0}>グローバル</label></li>
                  <li><input type="checkbox" id="観光DX" className="el_hidden" name="xxx" value="観光DX" /><label
                      htmlFor="xxxxx" tabIndex={0}>観光DX</label></li>
                </ul>
              </div>
            </div>
          </div>
        </form>
        <section className="un_consultants_block">
          <h2 className="bl_hd_level2"><span>研究員</span></h2>
          <ul className="un_consultants_list">
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
          </ul>
        </section>
        <section className="un_consultants_block">
          <h2 className="bl_hd_level2"><span>客員研究員</span></h2>
          <ul className="un_consultants_list">
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
            <li className="item">
              <article>
                <a href="#">
                  <div className="item_img"><img src="/assets/img/consultants/dummy_icon.jpg" alt="" width="90"
                      height="90" /></div>
                  <div className="item_content">
                    <div className="item_content_position">フェロー</div>
                    <div className="item_content_name">黒須 宏志</div>
                    <ul className="item_content_list">
                      <li className="item">地域活性化</li>
                      <li className="item">観光</li>
                      <li className="item">文化財・世界遺産</li>
                    </ul>
                  </div>
                </a>
              </article>
            </li>
          </ul>
        </section>
      </section>
    </div>
  )
}