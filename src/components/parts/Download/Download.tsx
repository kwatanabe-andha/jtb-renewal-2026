import Link from "next/link"
import './index.scss'

type Props = {
  url: string
}

const detectFileType = (url: string): string => {
  const pathname = url.split('?')[0].toLowerCase()

  if (pathname.endsWith('.pdf')) return 'PDF'
  if (pathname.endsWith('.csv')) return 'CSV'
  return 'File'
}

export default function Download({ url }: Props) {
  const fileType = detectFileType(url)

  return (
    <div className="bl_download" data-file={fileType}>{fileType}ダウンロード</div>
  )
}