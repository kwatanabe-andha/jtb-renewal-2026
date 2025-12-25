import { ReactNode } from 'react'
import clsx from 'clsx';
import './index.scss'

type Props = {
  children: ReactNode;
  className?: string
  pcOnly?: boolean
};

export default function Inner({ children, className, pcOnly = false }: Props) {
  return (
    <div className={clsx(className !== undefined && className, pcOnly ? 'bl_inner_pc' : 'bl_inner')}>{children}</div>
  )
}