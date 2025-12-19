import './index.scss'
import ToggleIcon from "@/icon/Toggle/Toggle"

type Item = {
  name: string
  slug: string
}

type Props = {
  title: string
  list: Item[]
  years: number[]
}

export default function NarrowDown({ title, list, years }:Props) {
  return (
    <div className='bl_nd'>
      <div className='bl_nd_left'>
        <div className='bl_nd_title'>{title}</div>
        <div className='bl_nd_container'>
          <div className='bl_nd_list'>
            <ul>
              {
                list.map((item: Item) => {
                  return (
                    <li key={item.slug}>
                      <button type='button'>{ item.name }</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

      <div className='bl_nd_years'>
        <div className='bl_nd_form'>
          <select className='bl_nd_select' defaultValue='年度' name="year">
            <option value="年度" disabled>年度</option>
            {
              years.map((year: number) => {
                return (
                  <option key={year} value={year}>{ year }</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </div>
  )
}