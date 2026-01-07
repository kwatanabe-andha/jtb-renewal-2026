import './index.scss'

export default function Download() {
  return (
    <section className="un_download">
      <div className="un_download_container">
        <h2 className="un_download_ttl">ダウンロード</h2>
        <div className="un_download_content">
          <div className="un_download_content_img">
            <ul className="list">
              <li className="list_item"><img src="/assets/dummy_list_img01.jpg" alt="" width="50" height="50" /></li>
              <li className="list_item"><img src="/assets/dummy_list_img02.jpg" alt="" width="50" height="50" /></li>
              <li className="list_item"><img src="/assets/dummy_list_img03.jpg" alt="" width="50" height="50" /></li>
              <li className="list_item"><img src="/assets/dummy_list_img04.jpg" alt="" width="50" height="50" /></li>
              <li className="list_item"><img src="/assets/dummy_list_img05.jpg" alt="" width="50" height="50" /></li>
            </ul>
            <div className="currentImage">
              <figure>
                <img src="/assets/dummy_list_img01.jpg" alt="" width="300" height="300" />
              </figure>
              <figcaption>キャプション　@クレジット</figcaption>
            </div>
            <ul className="pagination">
              <li className="pagination_item is-active "></li>
              <li className="pagination_item"></li>
              <li className="pagination_item"></li>
              <li className="pagination_item"></li>
              <li className="pagination_item"></li>
            </ul>
          </div>
          <div className="un_download_content_desc">
            <dl>
              <dt>販売価格</dt>
              <dd>無料</dd>
              <dt>出版社</dt>
              <dd>株式会社JTB総合研究所</dd>
              <dt>言語</dt>
              <dd>日本語</dd>
              <dt>体裁</dt>
              <dd>2025年4月15日発売</dd>
            </dl>
            <a className="bl_download--normal" href="#" download=""><svg width="24" height="24" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V15M17 10L12 15M12 15L7 10M12 15V3"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>ダウンロード（332KB）</a>
          </div>
        </div>
        <div className="bl_login">
          <div className="bl_login_icon"></div>
          <div className="bl_login_text">続きを読むには<a href="#" target="_blank">ログイン</a>が必要です</div>
          <div className="bl_login_link">
            <a className="bl_login_link_btn bl_login_link_login" href="#" target="_blank"><svg width="24" height="24"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11985 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H15M10 7L15 12M15 12L10 17M15 12L3 12"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg><span>ログイン</span></a>
            <a className="bl_login_link_btn bl_login_link_new" href="#" target="_blank"><span className="icon"><svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg></span><span>無料メンバー登録</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}