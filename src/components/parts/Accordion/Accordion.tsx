"use client";

import './index.scss'
import { ReactNode, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import isPc from '@/lib/isPc'
import clsx from 'clsx'
import { ChevronDown } from "@untitledui/icons"

type Props = {
  openedText: string
  closedText: string
  children: ReactNode
  id?: string
  className?: string
  targetClassName?: string
  section?: boolean 
}

const DEFAULT_HEIGHT_PC = 240
const DEFAULT_HEIGHT_SP = 400
const HIDDEN_HEIGHT_PC = 239
const HIDDEN_HEIGHT_SP = 600

const closing = (content: HTMLElement, height: number) => gsap.to(content, {
  height: height,
  duration: 0.54,
  ease: 'power3.out',
  overwrite: true,
})

const opening = (content: HTMLElement, height: number) => gsap.fromTo(
  content,
  {
    height: height,
  },
  {
    height: 'auto',
    duration: 0.78,
    ease: 'power3.out',
    overwrite: true,
  }
)

const heightByMedia = (isOpen: boolean): string => {
  let height = 'auto'
  if (isOpen) {
    if (isPc()) { height = `${DEFAULT_HEIGHT_PC}px` } else { height = `${DEFAULT_HEIGHT_SP}px` }
  }
  return height
}

export default function Accordion(
  { openedText, closedText, id = 'accordion_target', className, children, targetClassName, section } : Props
) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAccordion, setShowAccordion] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)
  const setHRef = useRef<ReturnType<typeof gsap.quickSetter>>(null)

  useEffect(() => {
    const target = targetRef.current as HTMLDivElement
    setHRef.current = gsap.quickSetter(target, 'height')
    const setAccordion = () => {
      const maxContentHeight = isPc() ? HIDDEN_HEIGHT_PC : HIDDEN_HEIGHT_SP
      setHRef.current?.('auto')
      const targetHeight = target.clientHeight as number
      const isOver = targetHeight > maxContentHeight
      setIsOpen(!isOver)
      setShowAccordion(isOver)
      const setHeight = heightByMedia(isOver)
      setHRef.current?.(setHeight)
    }
    setAccordion()

    // いるかどうか
    window.addEventListener('resize', () => {
      setAccordion()
    })
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement
    const target = targetRef.current as HTMLDivElement
    const setHeight = isPc() ? DEFAULT_HEIGHT_PC : DEFAULT_HEIGHT_SP
    setIsOpen(!isOpen)
    button.dataset.expanded = `${!isOpen}`
    if (isOpen) { closing(target, setHeight) } else { opening(target, setHeight) }
  }

  return (
    <>
      {
        section && (
          <section id={id} className={clsx('bl_accordion_target', targetClassName !== undefined && targetClassName)} ref={targetRef}  data-hidden={ String(!isOpen) }>
            {children}
          </section>
        )
      }
      {
        !section && (
          <div id={id} className={clsx('bl_accordion_target', targetClassName !== undefined && targetClassName)} ref={targetRef}  data-hidden={ String(!isOpen) }>
            {children}
          </div>
        )
      }

      {
        showAccordion && (
          <div className={clsx('bl_accordion', className !== undefined && className)}>
            <button type='button' onClick={handleClick} data-expanded="false">
              { isOpen ? openedText : closedText }
              <ChevronDown className='icon_chevronDown' />
            </button>
          </div>
        )
      }
    </>
  )
}