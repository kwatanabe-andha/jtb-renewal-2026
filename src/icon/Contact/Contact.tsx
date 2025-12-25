import './index.scss'
import { CSSProperties } from 'react'
import { COLORS } from "@/config/site"

type Props = {
  color?: string
}

export default function Contact({ color = COLORS.white }: Props) {
  return (
    <svg fill="none" width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className='icon_contact' style={{ '--icon-color': color } as CSSProperties}>
      <path d="m2.75 7.15c0-1.54015 0-2.31022.29973-2.89847.26365-.51745.68435-.93815 1.2018-1.2018.58825-.29973 1.35832-.29973 2.89847-.29973h7.7c1.5402 0 2.3102 0 2.8985.29973.5175.26365.9381.68435 1.2018 1.2018.2997.58825.2997 1.35832.2997 2.89847v4.95c0 1.5402 0 2.3102-.2997 2.8985-.2637.5175-.6843.9381-1.2018 1.2017-.5883.2998-1.3583.2998-2.8985.2998h-5.97323c-.57204 0-.85807 0-1.13166.0562-.24272.0498-.47759.1322-.69824.2449-.24871.1271-.47206.3057-.91876.663l-2.18666 1.7494c-.38142.3052-.57212.4577-.73262.4579-.13958.0002-.27163-.0634-.3587-.1724-.10013-.1254-.10013-.3696-.10013-.8581z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"/>
    </svg>
  )
}