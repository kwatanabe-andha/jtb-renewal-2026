import { ReactNode } from 'react'
import clsx from 'clsx';
import './index.scss'

type DetailsProps = {
  children: ReactNode;
  className?: string
};

type SummaryProps = {
  children: ReactNode;
  className?: string
};

type BodyProps = {
  children: ReactNode;
  className?: string
};

export function Details({ children, className }: DetailsProps) {
  return (
    <details open className={clsx('bl_details',className !== undefined && className)}>
      {children}
    </details>
  )
}

export function Summary({ children, className }: SummaryProps) {
  return (
    <summary className={clsx('bl_details_summary',className !== undefined && className)}>
      {children}
    </summary>
  )
}

export function DetailsBody({ children, className }: BodyProps) {
  return (
    <div className={clsx('bl_details_body',className !== undefined && className)}>
      {children}
    </div>
  )
}