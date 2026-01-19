"use client"

import './index.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Calendar, ChevronDown } from "@untitledui/icons"

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
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set('year', e.target.value.toString())
    router.push(pathname ? `${pathname}?${newParams.toString()}` : `?${newParams.toString()}`)
  }

  return (
    <form method='get' className='bl_nd'>
      <div className='bl_nd_left'>
        <div className='bl_nd_title'>{title}</div>
        <div className='bl_nd_container'>
          <div className='bl_nd_list'>
            <ul>
              {
                list.map((item: Item) => {
                  return (
                    <li key={item.slug}>
                      <input type="checkbox" name={item.name} value={item.name} id={item.slug} className='el_hidden' />
                      <label htmlFor={item.slug} tabIndex={0}>{item.name}</label>
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
          <select className='bl_nd_select' onChange={handleChange} defaultValue='年度' name="year" aria-label='年度を選択してください'>
            <option value="年度" disabled>年度</option>
            {
              years.map((year: number) => {
                return (
                  <option key={year} value={year}>{ year }</option>
                )
              })
            }
          </select>

          <Calendar className='icon_calendar' />
          <ChevronDown className='icon_chevronDown' />
        </div>
      </div>
    </form>
  )
}