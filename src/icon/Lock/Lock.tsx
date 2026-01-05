import './index.scss'
import clsx from 'clsx'
import { Lock01 } from "@untitledui/icons"

type Props = {
  className?: string
}

export default function LockIcon({ className }: Props) {
  return (
    <span className='icon_lock'>
      <Lock01 className={clsx(className !== undefined && className)} stroke='#fff' width={18} height={18} />
    </span>
  )
}