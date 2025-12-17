import '@/styles/global.scss'
import { ReactNode } from 'react'
import Outer from '@/components/layouts/Outer/Outer'
import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body>
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