import { ReactNode } from 'react'
import './level2.scss'

type Props = {
  children: ReactNode;
};

export default function Level2({ children }: Props) {
  return (
    <h2 className='bl_hd_level2'>
      <span>{children}</span>
    </h2>
  )
}