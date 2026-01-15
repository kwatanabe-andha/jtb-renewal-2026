import './index.scss' 
import Link from 'next/link'
import '@/components/parts/FootSlider/index.scss'
import LinkButton from '@components/parts/LinkButton/LinkButton'

export default function Foot() {
  return (
    <section className="bl_detailFoot">
      <div className="bl_detailFoot_inner bl_inner">
        <div className="bl_detailFoot_head">
          <div className="bl_detailFoot_title">
            <h2>コンサルタント</h2><span>Experts</span>
          </div>
          <div className='bl_detailFoot_more'><LinkButton title='すべてみる' href='/' /></div>
        </div>
        <div className="bl_detailFoot_body">
          <ul className="bl_detailFoot_consulList">
            <li className="item">
              <a href="#">
                <div className="image"><img src="/assets/img/consultants/detail/dummy_icon02.jpg" alt="" width="228"
                    height="228" /></div>
                <div className="position">フェロー</div>
                <h3 className="name">黒須 宏志</h3>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <div className="image"><img src="/assets/img/consultants/detail/dummy_icon02.jpg" alt="" width="228"
                    height="228" /></div>
                <div className="position">フェロー</div>
                <h3 className="name">黒須 宏志</h3>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <div className="image"><img src="/assets/img/consultants/detail/dummy_icon02.jpg" alt="" width="228"
                    height="228" /></div>
                <div className="position">フェロー</div>
                <h3 className="name">黒須 宏志</h3>
              </a>
            </li>
            <li className="item">
              <a href="#">
                <div className="image"><img src="/assets/img/consultants/detail/dummy_icon02.jpg" alt="" width="228"
                    height="228" /></div>
                <div className="position">フェロー</div>
                <h3 className="name">黒須 宏志</h3>
              </a>
            </li>
          </ul>
          <div className="bl_scrollBar">
            <div className="bl_scrollBar_line">
              <div className="bl_scrollBar_current"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}