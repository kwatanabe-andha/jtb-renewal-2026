import './index.scss'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx';
import { ChevronDown } from "@untitledui/icons"

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  openedText: string
  closedText: string
  className?: string
  callback?: () => void
}

export default function ViewMore(
  { isOpen, setIsOpen, openedText, closedText, className, callback } : Props
) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement
    setIsOpen(!isOpen)
    button.dataset.open = `${!isOpen}`
    if (callback) callback()
  }

  return (
    <div className={clsx('bl_viewmore', className !== undefined && className)}>
      <button type='button' data-open="false" onClick={handleClick}>
        { isOpen ? openedText : closedText }
        <ChevronDown className='icon_chevronDown' />
      </button>
    </div>
  )
}