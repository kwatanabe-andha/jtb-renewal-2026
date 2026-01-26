import './index.scss'
import { returnHtml } from '@/lib/returnHtml'
import DetailsSummary from '@/components/parts/DetailsSummary/DetailsSummary'
import LoginCont from '@/components/parts/DetailPage/LoginCont/LoginCont'
import { JSX } from 'react'
import Wysiwyg from '@/components/parts/Wysiwyg/Wysiwyg'
import LockText from '@/components/parts/LockText/LockText'

type ParseDummyType = {
  type: string
}

type ParseType = string | JSX.Element | JSX.Element[]

function splitByH2(items: ParseDummyType[]) {
  const returnData = []  as ParseDummyType[][]
  let count = 0

  items.forEach(item => {
    if (item.type === 'h2') {
      count++
      returnData.push([])
      returnData[count - 1].push(item)
    } else {
      returnData[count - 1].push(item)
    }
  })

  return returnData
}

type Props = {
  numbering: boolean
  contents_default: string
  contents_login: string
}

export default function Content({numbering, contents_default, contents_login}: Props){
  if (!contents_default && !contents_login) return
  const defaultData = returnHtml(contents_default) as ParseDummyType[]
  const defaultList = splitByH2(defaultData)
  const loginData = returnHtml(contents_login) as ParseDummyType[]
  const loginList = splitByH2(loginData)
  let count = 0

  return (
    <section className="un_reportDetail_content js_content">
      {
        defaultList.map((sec, index) => {
          count++
          return (
              <DetailsSummary
                key={index}
                className='un_reportDetail_acc'
                summary={{
                  className: 'un_reportDetail_acc__title',
                  children: (<>
                  <span className="number">{count}</span>
                  { sec.shift() }
                  </>)
                }}
                body={{
                  children: (<>
                  <div className="un_reportDetail_acc__content">
                    <Wysiwyg>{ sec as ParseType }</Wysiwyg>
                  </div>
                  </>)
                }}
              />
          )
        })
      }
      {
        loginList.map((sec, index) => {
          count++
          return (
              <DetailsSummary
                key={index}
                className='un_reportDetail_acc --secret'
                summary={{
                  className: 'un_reportDetail_acc__title',
                  children: (<>
                  <span className="number">{count++}</span>
                  <LockText>
                    { sec.shift() as ParseType }
                  </LockText>
                  </>)
                }}
                body={{
                  children: (<>
                  <LoginCont>
                    <div className="un_reportDetail_acc__content">
                      <Wysiwyg>{ sec as ParseType }</Wysiwyg>
                    </div>
                  </LoginCont>
                  </>)
                }}
              />
          )
        })
      }
    </section>
  )
}