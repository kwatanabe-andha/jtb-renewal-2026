import './index.scss'
import { ReactNode } from 'react'
import LockIcon from '@/icon/Lock/Lock'

type Props = {
  children: ReactNode
}

export default function LockText({ children }: Props) {
  return (
    <div className='bl_lockText'>
      { children }
      <LockIcon />
    </div>
  )
}