import './index.scss'
import { ReactNode } from 'react'
import clsx from 'clsx';
import { ArrowNarrowRight, ArrowNarrowLeft } from "@untitledui/icons"

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
          <button type="button" className="bl_sliderWrap_prev"><ArrowNarrowLeft width={28} height={28} /></button>
          <button type="button" className="bl_sliderWrap_next"><ArrowNarrowRight width={28} height={28} /></button>
        </div>
      </div>
    </>
  )
}