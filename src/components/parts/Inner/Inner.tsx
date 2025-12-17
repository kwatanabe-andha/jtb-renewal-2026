import { ReactNode } from 'react'
import clsx from 'clsx';
import './index.scss'

type Props = {
  children: ReactNode;
  className?: string
};

export default function Inner({ children, className }: Props) {
  return (
    <div className={clsx('bl_inner', className !== undefined && className)}>{children}</div>
  )
}