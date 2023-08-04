import './globals.css'
import { Inter } from 'next/font/google'

import StyledCursor from '@/components/Cursor/Cursor'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to Psytech Studio',
  description: 'We are a team of passionate designers and developers who love to create awesome websites and apps.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        <Header />
        {children}
        <Footer />
        <StyledCursor />
        <ScrollToTop />
      </body>
    </html>
  )
}
