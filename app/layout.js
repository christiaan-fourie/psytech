import './globals.css'
import { Inter } from 'next/font/google'

import StyledCursor from '@/components/Cursor/Cursor'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Psytech Studio',
  description: 'We are a Software Developers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
