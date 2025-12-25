import './index.scss'
import { CSSProperties } from 'react'
import { COLORS } from "@/config/site"

type Props = {
  color?: string
}

export default function Arrow({ color = COLORS.black }: Props) {
  return (
    <svg fill="none" width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className='icon_arrow' style={{ '--icon-color': color } as CSSProperties}>
      <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"/>
    </svg>
  )
}