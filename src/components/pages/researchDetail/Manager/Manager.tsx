import './index.scss'

export default function Manager() {
  return (
    <section className="un_manager">
      <div className="un_manager_inner bl_inner">
        <div className="un_manager_container">
          <div className="un_manager_head">
            <h2>担当者</h2>
          </div>
          <ul className="un_manager_list">
            <li className="un_manager_item">
              <div className="un_manager_img"><img src="/assets/dummy_maneger_img01.jpg" alt="" width="50" height="50" /></div>
              <div className="un_manager_info">
                <p className="un_manager_name">勝野 裕子</p>
                <p className="un_manager_company">JTB総合研究所</p>
                <p className="un_manager_position">上席主任研究員</p>
              </div>
            </li>
            <li className="un_manager_item">
              <div className="un_manager_img"><img src="/assets/dummy_maneger_img01.jpg" alt="" width="50" height="50" /></div>
              <div className="un_manager_info">
                <p className="un_manager_name">勝野 裕子</p>
                <p className="un_manager_company">JTB総合研究所</p>
                <p className="un_manager_position">上席主任研究員</p>
              </div>
            </li>
            <li className="un_manager_item">
              <div className="un_manager_img"><img src="/assets/dummy_maneger_img01.jpg" alt="" width="50" height="50" /></div>
              <div className="un_manager_info">
                <p className="un_manager_name">勝野 裕子</p>
                <p className="un_manager_company">JTB総合研究所</p>
                <p className="un_manager_position">上席主任研究員</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}