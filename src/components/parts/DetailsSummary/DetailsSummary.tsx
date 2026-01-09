import { ReactNode, useState, useRef } from 'react'
import clsx from 'clsx';
import { gsap } from 'gsap'
import './index.scss'

type SummaryProps = {
  children: ReactNode;
  className?: string
};

type BodyProps = {
  children: ReactNode;
  className?: string
};

type Props = {
  className?: string
  summary: SummaryProps
  body: BodyProps
};

const closing = (content: HTMLElement, details: HTMLDetailsElement) => gsap.to(content, {
  height: 0,
  opacity: 0,
  duration: 0.54,
  ease: 'power3.out',
  overwrite: true,
  onStart: () => {
    gsap.set(content, { pointerEvents: 'none' })
  },
  onComplete: () => {
    details.removeAttribute('open')
  }
})

const opening = (content: HTMLElement) => gsap.fromTo(
  content,
  {
    height: 0,
    opacity: 0
  },
  {
    height: 'auto',
    opacity: 1,
    duration: 0.78,
    ease: 'power3.out',
    overwrite: true,
    onStart: () => {
      gsap.set(content, { pointerEvents: 'auto' })
    }
  }
)

export default function DetailsSummary({ className, summary, body }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const detailsDom = detailsRef.current as HTMLDetailsElement
    const bodyDom = bodyRef.current as HTMLDivElement
    setIsOpen(!isOpen)
    if (isOpen) {
      detailsDom.classList.remove('is_opened')
      closing(bodyDom, detailsDom).restart()
    } else {
      detailsDom.open = true
      detailsDom.classList.add('is_opened')
      opening(bodyDom).restart()
    }
  }
  
  return (
    <details ref={detailsRef} className={clsx('bl_details', className !== undefined && className)}>
      <summary onClick={handleClick} className={clsx('bl_details_summary', summary.className !== undefined && summary.className)}>
        {summary.children}
      </summary>
      <div ref={bodyRef} className={clsx('bl_details_body', body.className !== undefined && body.className)}>
        {body.children}
      </div>
    </details>
  )
}

// export function Details({ children, className }: DetailsProps) {
//   return (
//     <details open className={clsx('bl_details',className !== undefined && className)}>
//       {children}
//     </details>
//   )
// }

// export function Summary({ children, className }: SummaryProps) {
//   return (
//     <summary className={clsx('bl_details_summary',className !== undefined && className)}>
//       {children}
//     </summary>
//   )
// }

// export function DetailsBody({ children, className }: BodyProps) {
//   return (
//     <div className={clsx('bl_details_body',className !== undefined && className)}>
//       {children}
//     </div>
//   )
// }