import './index.scss'
import clsx from 'clsx'
import { User03 } from "@untitledui/icons"

type Props = {
  className?: string
}

export default function UserIcon({ className }: Props) {
  return (
    <span className='icon_user'>
      <User03 className={clsx(className !== undefined && className)} stroke='#fff' width={14} height={14} />
    </span>
  )
}