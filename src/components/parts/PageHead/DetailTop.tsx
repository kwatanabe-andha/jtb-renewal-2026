import Image from 'next/image'
import './detailTop.scss'
import { ImgType } from '@/types/common'

type Props = {
  logo?: ImgType
  pressRelease?: boolean
  category?: string
  title: string
  facility?: string
}

export default function DetailTop(
  { logo, pressRelease, category, title, facility }: Props
) {
  return (
    <div className='bl_detailTop'>
      <div className='bl_detailTop_inner'>
        <div className='bl_detailTop_container'>
          { logo && logo.url && <div className='bl_detailTop_logo'><Image src={logo.url} alt={logo.desc || ''} width={110} height={110} /></div> }
          <div className='bl_detailTop_content'>
            {
              (pressRelease || category) && (
                <div className='bl_detailTop_head'>
                  { pressRelease && <div className='bl_detailTop_press'>Press Release</div> }
                  { category && <div className='bl_detailTop_category'>{category}</div> }
                </div>
              )
            }
            <p className='bl_detailTop_title'>{title}</p>
            { facility && <div className='bl_detailTop_facility'>{facility}</div> }
          </div>
        </div>
      </div>
    </div>
  )
}