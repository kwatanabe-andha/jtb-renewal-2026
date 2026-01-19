"use client"

import './index.scss'
import Link from 'next/link'
import { MouseEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowNarrowRight, ArrowNarrowLeft } from "@untitledui/icons"
import { PagerType } from '@/types/pager'

const MIN_CUSTOM_NUM = 5

export default function PagerRouter({ pageInfo, pathname }: { pageInfo: PagerType, pathname: string }) {
  const currentPage = pageInfo.pageNo
  const isFirstPage = `${currentPage}` === '1'
  const isLastPage = currentPage === pageInfo.totalPageCnt

  const router = useRouter()
  const params = useSearchParams()
  
  const setPageID = (newPageID: number) => {
    const newParams = new URLSearchParams(params.toString())
    newParams.set('pageID', newPageID.toString())
    return `${pathname}?${newParams.toString()}`
  }

  const setCurrentDom = (page: number) => {
    if (currentPage === page) {
      return <li className='bl_pager_item is_current' key={page}><Link onClick={onClick} href={setPageID(page)} aria-current="page">{page}</Link></li>
    } else {
      return <li className='bl_pager_item' key={page}><Link onClick={onClick} href={setPageID(page)}>{page}</Link></li>
    }
  }

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(e.currentTarget.href)
  }

  return (
    <>
    <ul className='bl_pager'>
      {
        !isFirstPage && (
          <li className='bl_pager_prev'>
            <Link onClick={onClick} href={setPageID(currentPage - 1)}>
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
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(3)}>3</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(pageInfo.totalPageCnt - 1)}>{ pageInfo.totalPageCnt - 1 }</Link></li>
            <li className='bl_pager_item'><Link onClick={onClick} href={setPageID(pageInfo.totalPageCnt)}>{ pageInfo.totalPageCnt}</Link></li>
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && ( currentPage > 2 ) && ( currentPage < pageInfo.totalPageCnt - 1 ) && (
          <>
            <li className='bl_pager_item'><Link onClick={onClick} href={setPageID(1)}>1</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(currentPage - 1)}>{currentPage - 1}</Link></li>
            <li className='bl_pager_item is_current'><Link onClick={onClick} href={setPageID(currentPage)} aria-current="page">{currentPage}</Link></li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(currentPage + 1)}>{currentPage + 1}</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item'><Link onClick={onClick} href={setPageID(pageInfo.totalPageCnt)}>{ pageInfo.totalPageCnt}</Link></li>
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && ( currentPage > pageInfo.totalPageCnt - 2 ) && (
          <>
            <li className='bl_pager_item'><Link onClick={onClick} href={setPageID(1)}>1</Link></li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(2)}>2</Link></li>
            <li className='bl_pager_dash'>…</li>
            <li className='bl_pager_item hp_hidden_down-sm'><Link onClick={onClick} href={setPageID(pageInfo.totalPageCnt - 2)}>{ pageInfo.totalPageCnt - 2 }</Link></li>
            { setCurrentDom(pageInfo.totalPageCnt - 1) }
            { setCurrentDom(pageInfo.totalPageCnt) }
          </>
        )
      }

      {
        (pageInfo.totalPageCnt > MIN_CUSTOM_NUM) && !isLastPage && (
          <li className='bl_pager_prev'>
            <Link onClick={onClick} href={setPageID(currentPage + 1)}>
              <ArrowNarrowRight width={18} height={18} />
            </Link>
          </li>
        )
      }
    </ul>
    </>
  )
}