import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wafid | وافد',
  description: 'Wafid is a program under the umbrella of the Gulf Health Council that enables individuals bound to work or reside in the GCC to book their medical check-up appointments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
