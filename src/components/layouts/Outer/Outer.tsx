import { ReactNode } from 'react'
import './index.scss'

type Props = {
  children: ReactNode;
};

export default function Outer({ children }: Props) {
  return (
    <div className='ly_outer'>{children}</div>
  )
}