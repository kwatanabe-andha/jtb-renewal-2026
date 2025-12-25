'use client'

import { useEffect, useState } from 'react'

const BREAKPOINT = 768

export const useDevice = () => {
  const [isSP, setIsSP] = useState<boolean | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${BREAKPOINT - 1}px)`
    )

    const update = (mq: MediaQueryList | MediaQueryListEvent) => {
      setIsSP(mq.matches)
      setReady(true)
    }

    // 初期判定
    update(mediaQuery)

    // 変更監視（これだけでOK）
    mediaQuery.addEventListener('change', update)

    return () => {
      mediaQuery.removeEventListener('change', update)
    }
  }, [])

  return {
    isSP,
    isPC: isSP === null ? null : !isSP,
    ready,
  }
}
