import { ReactNode } from 'react'
import './regionTop.scss'

type Props = {
  en: string;
  jp: string;
  page?: string
  children: ReactNode;
};

export default function regionTop({ en, jp, page, children }: Props) {
  return (
    <div className='bl_regionTop' data-page={page}>
      <hgroup className='bl_regionTop_heading'>
        <p>{en}</p>
        <h1>{jp}</h1>
      </hgroup>
      <p className='bl_regionTop_text'>{children}</p>
    </div>
  )
}