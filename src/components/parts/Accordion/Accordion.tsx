"use client";

import './index.scss'
import { ReactNode, useState, useEffect, useRef } from 'react'
import clsx from 'clsx';

type Props = {
  openedText: string
  closedText: string
  className?: string
  children: ReactNode
  targetClassName?: string
}

export default function Accordion(
  { openedText, closedText, className, children, targetClassName } : Props
) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAccordion, setShowAccordion] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let maxContentHeight = 600
    if (window.matchMedia('(min-width: 768px)').matches) {
      maxContentHeight = 200
    }
    const target = targetRef.current as HTMLDivElement
    const setAccordion = () => {
      const targetHeight = target.clientHeight as number
      const isOver = targetHeight > maxContentHeight
      setIsOpen(!isOver)
      setShowAccordion(isOver)
    }
    setAccordion()

    // いるかどうか
    window.addEventListener('resize', () => {
      setAccordion()
    })
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement
    setIsOpen(!isOpen)
    button.dataset.open = `${!isOpen}`
  }

  return (
    <>
      <div className={clsx('bl_accordion_target', targetClassName !== undefined && targetClassName)} ref={targetRef}  data-hidden={ String(!isOpen) }>
        {children}
      </div>

      {
        showAccordion && (
          <div className={clsx('bl_accordion', className !== undefined && className)}>
            <button type='button' data-open="false" onClick={handleClick}>
              { isOpen ? openedText : closedText }
            </button>
          </div>
        )
      }
    </>
  )
}