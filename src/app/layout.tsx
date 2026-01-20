import '@/styles/global.scss'
import { ReactNode } from 'react'
import Outer from '@/components/layouts/Outer/Outer'
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <ScrollToTop />
        <Header />
        <main>
          <Outer>
            {children}
          </Outer>
        </main>
        <Footer />
      </body>
    </html>
  )
}