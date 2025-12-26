import './index.scss'
import { ReactNode } from 'react'
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string
};

export default function SliderWrap({ children, className }: Props) {
  return (
    <>
      <div  className={clsx('bl_sliderWrap', className !== undefined && className)}>
        {children}
        <div className="bl_sliderWrap_arrows">
          <button type="button" className="bl_sliderWrap_prev"></button>
          <button type="button" className="bl_sliderWrap_next"></button>
        </div>
      </div>
    </>
  )
}