import './index.scss'
import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx';

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  openedText: string
  closedText: string
  className?: string
}

export default function ViewMore(
  { isOpen, setIsOpen, openedText, closedText, className } : Props
) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement
    setIsOpen(!isOpen)
    button.dataset.open = `${!isOpen}`
  }

  return (
    <div className={clsx('bl_viewmore', className !== undefined && className)}>
      <button type='button' data-open="false" onClick={handleClick}>
        { isOpen ? openedText : closedText }
      </button>
    </div>
  )
}