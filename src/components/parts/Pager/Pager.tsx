"use client"

import './index.scss'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowNarrowRight, ArrowNarrowLeft } from "@untitledui/icons"
import { PagerType } from '@/types/pager'

const MIN_CUSTOM_NUM = 5

export default function Pager({ pageInfo, pathname }: { pageInfo: PagerType, pathname: string }) {
  const currentPage = pageInfo.pageNo
  const isFirstPage = `${currentPage}` === '1'
  const isLastPage = currentPage === pageInfo.totalPageCnt

  const searchParams = useSearchParams()

  const setPageID = (newPageID: number) => {
    const params = new URLSearchParams(searchParams.toString())
    // params.set('pageID', newPageID.toString())
    // return `${pathname}?${params.toString()}`
    const href = params.size > 0 ? `${pathname}${newPageID}/?${params.toString()}` : `${pathname}${newPageID}/`
    return href
  }

  const setCurrentDom = (page: number) => {
    if (currentPage === page) {
      return <li className='bl_pager_item is_current' key={page}><Link href={setPageID(page)} aria-current="page">{page}</Link></li>
    } else {
      return <li className='bl_pager_item' key={page}><Link href={setPageID(page)}>{page}</Link></li>
    }
  }

  return (
    <ul className='bl_pager'>
      {
        !isFirstPage && (
          <li className='bl_pager_prev'>
            <Link href={setPageID(currentPage - 1)}>
              <ArrowNarrowLeft width={18} height={18} />
            </Link>
          </li>
        )
      }

      {
        (pageInfo.totalPageCnt <= MIN_CUSTOM_NUM) && (
          Array.from({ length: pageInfo.totalPageCnt }).map((_, index) => (
            setCurrentDom(index+ 1)
          ))
        )
      }

      {
        ( currentPage < 3 ) && (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && (
          <>
            { setCurrentDom(1) }
            { setCurrentDom(2) }
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(3)}>3</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(pageInfo.totalPageCnt - 1)}>{ pageInfo.totalPageCnt - 1 }</Link></li>
            <li className='bl_pager_item'><Link href={setPageID(pageInfo.totalPageCnt)}>{ pageInfo.totalPageCnt}</Link></li>
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && ( currentPage > 2 ) && ( currentPage < pageInfo.totalPageCnt - 1 ) && (
          <>
            <li className='bl_pager_item'><Link href={setPageID(1)}>1</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(currentPage - 1)}>{currentPage - 1}</Link></li>
            <li className='bl_pager_item is_current'><Link href={setPageID(currentPage)} aria-current="page">{currentPage}</Link></li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(currentPage + 1)}>{currentPage + 1}</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item'><Link href={setPageID(pageInfo.totalPageCnt)}>{ pageInfo.totalPageCnt}</Link></li>
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && ( currentPage > pageInfo.totalPageCnt - 2 ) && (
          <>
            <li className='bl_pager_item'><Link href={setPageID(1)}>1</Link></li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(2)}>2</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link href={setPageID(pageInfo.totalPageCnt - 2)}>{ pageInfo.totalPageCnt - 2 }</Link></li>
            { setCurrentDom(pageInfo.totalPageCnt - 1) }
            { setCurrentDom(pageInfo.totalPageCnt) }
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && !isLastPage && (
          <li className='bl_pager_prev'>
            <Link href={setPageID(currentPage + 1)}>
              <ArrowNarrowRight width={18} height={18} />
            </Link>
          </li>
        )
      }
    </ul>
  )
}