import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/component/AuthProvider/AuthProvider'
import MobileMenu from '@/component/mobile-menu/MobileMenu'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jewel Hossain Fahim',
  description: 'Generated by  next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="w-screen h-[100%] min-h-screen my-0 mx-auto flex flex-col gap-[10px] lg:gap-[50px] px-4 lg:px-[100px]">
              <Navbar/>
              <MobileMenu/>
              {children}
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
