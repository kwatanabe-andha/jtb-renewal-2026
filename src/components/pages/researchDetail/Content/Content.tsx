import './index.scss'
import DetailsSummary from '@/components/parts/DetailsSummary/DetailsSummary'

export default function Content(){
  return (
    <div className="un_reportDetail_content">
      <DetailsSummary
        className='un_reportDetail_acc'
        summary={{
          className: 'un_reportDetail_acc__title',
          children: (<>
          <span className="number">1</span>
          <h3 className="text">情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上</h3>
          </>)
        }}
        body={{
          children: (<>
          <div className="un_reportDetail_acc__content">
            <p>
              　スマートフォンでよく使う機能として、電話は昨年度の4位から9位へと大きく順位を落とし、変わって「地図アプリ」が初めて電話を上回り、4位となりました。コミュニケーションの主流となっているメッセージ・チャットアプリも利用率は８割を超えていますが、やや減少傾向となり、落ち着きをみせています（図1）。　また、情報検索の方法でも、検索エンジンでのキーワード検索が81.7％で最も高いものの、地図アプリや動画投稿サイトの割合も4割を超えました。Chat
              GPTなどの生成AIによる検索も、全体では9.7％、29歳以下の男性では、17.5％と存在感をみせています。情報収集手段の勢力図が大きく変わりつつあることが感じられます（図2）。　具体的に、地図アプリの使い方を聞いた結果でも、ルート案内機能よりも、「行きたい場所を検索し、場所を確認する」が高くなっています（図3）。
            </p>
            <p className="tit le">チャートタイトルチャートタイトルチャートタイトル</p>
            <figure>
              <img src="/assets/dummy_graph_01.png" alt="チャートタイトルチャートタイトルチャートタイトル" width="560" height="192" />
              <figcaption>キャプション　@クレジット</figcaption>
            </figure>
            <p>
              　スマートフォンでよく使う機能として、電話は昨年度の4位から9位へと大きく順位を落とし、変わって「地図アプリ」が初めて電話を上回り、4位となりました。コミュニケーションの主流となっているメッセージ・チャットアプリも利用率は８割を超えていますが、やや減少傾向となり、落ち着きをみせています（図1）。　また、情報検索の方法でも、検索エンジンでのキーワード検索が81.7％で最も高いものの、地図アプリや動画投稿サイトの割合も4割を超えました。Chat
              GPTなどの生成AIによる検索も、全体では9.7％、29歳以下の男性では、17.5％と存在感をみせています。情報収集手段の勢力図が大きく変わりつつあることが感じられます（図2）。　具体的に、地図アプリの使い方を聞いた結果でも、ルート案内機能よりも、「行きたい場所を検索し、場所を確認する」が高くなっています（図3）。
            </p>
          </div>
          </>)
        }}
      />

      <DetailsSummary
        className='un_reportDetail_acc --secret'
        summary={{
          className: 'un_reportDetail_acc__title',
          children: (<>
          <span className="number">2</span>
          <h3 className="text">情報検索手段の勢力図が変わる？キーワード検索は、まだ主流ではあるが、地図アプリや動画投稿サイトでの検索が増加し、生成AIの利用も急浮上</h3>
          </>)
        }}
        body={{
          children: (<>
          <div className="un_reportDetail_acc__content">
            <p>
              　スマートフォンでよく使う機能として、電話は昨年度の4位から9位へと大きく順位を落とし、変わって「地図アプリ」が初めて電話を上回り、4位となりました。コミュニケーションの主流となっているメッセージ・チャットアプリも利用率は８割を超えていますが、やや減少傾向となり、落ち着きをみせています（図1）。また、情報検索の方法でも、検索エンジンでのキーワード検索が81.7％で最も高いものの、地図アプリや動画投稿サイトの割合も4割を超えました。Chat
              GPTなどの生成AIによる検索も、全体では9.7％、29歳以下の男性では、17.5％と存在感をみせています。情報収集手段の勢力図が大きく変わりつつあることが感じられます（図2）。具体的に、地図アプリの使い方を聞いた結果でも、ルート案内機能よりも、「行きたい場所を検索し、場所を確認する」が高くなっています（図3）。
            </p>
            <div className="bl_login">
              <div className="bl_login_icon"></div>
              <div className="bl_login_text">続きを読むには<a href="#" target="_blank">ログイン</a>が必要です</div>
              <div className="bl_login_link">
                <a className="bl_login_link_btn bl_login_link_login" href="#" target="_blank"><svg width="24"
                    height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11985 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H15M10 7L15 12M15 12L10 17M15 12L3 12"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg><span>ログイン</span></a>
                <a className="bl_login_link_btn bl_login_link_new" href="#" target="_blank"><span
                    className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg></span><span>無料メンバー登録</span>
                </a>
              </div>
            </div>
          </div>
          </>)
        }}
      />

      <DetailsSummary
        className='un_reportDetail_acc --secret'
        summary={{
          className: 'un_reportDetail_acc__title',
          children: (<>
          <span className="number">3</span>
          <h3 className="text">利用する SNSの上位は「LINE」、「YouTube」、「X」、「Instagram」で前年と変わらずも、「LINE」は20代女性と30代男性で減少傾向。「TikTok」と「Ameba」の利用が伸びる</h3>
          </>)
        }}
        body={{
          children: (<>
          <div className="un_reportDetail_acc__content">
            <p>
              　スマートフォンでよく使う機能として、電話は昨年度の4位から9位へと大きく順位を落とし、変わって「地図アプリ」が初めて電話を上回り、4位となりました。コミュニケーションの主流となっているメッセージ・チャットアプリも利用率は８割を超えていますが、やや減少傾向となり、落ち着きをみせています（図1）。　また、情報検索の方法でも、検索エンジンでのキーワード検索が81.7％で最も高いものの、地図アプリや動画投稿サイトの割合も4割を超えました。Chat
              GPTなどの生成AIによる検索も、全体では9.7％、29歳以下の男性では、17.5％と存在感をみせています。情報収集手段の勢力図が大きく変わりつつあることが感じられます（図2）。　具体的に、地図アプリの使い方を聞いた結果でも、ルート案内機能よりも、「行きたい場所を検索し、場所を確認する」が高くなっています（図3）。
            </p>
            <div className="bl_login">
              <div className="bl_login_icon"></div>
              <div className="bl_login_text">続きを読むには<a href="#" target="_blank">ログイン</a>が必要です</div>
              <div className="bl_login_link">
                <a className="bl_login_link_btn bl_login_link_login" href="#" target="_blank"><svg width="24"
                    height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11985 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H15M10 7L15 12M15 12L10 17M15 12L3 12"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" />
                  </svg><span>ログイン</span></a>
                <a className="bl_login_link_btn bl_login_link_new" href="#" target="_blank"><span
                    className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                    </svg></span><span>無料メンバー登録</span>
                </a>
              </div>
            </div>
          </div>
          </>)
        }}
      />
    </div>
  )
}