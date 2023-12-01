import { Inter,Montserrat } from 'next/font/google'
import Head from 'next/head'
import NavBar from './components/NavBar'
import BaseLayout from './components/BaseLayout'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserat = Montserrat({
  subsets: ['latin'],
  variable:"--font-montserrat"
})

export const metadata = {
  title: 'Portofolio Lingga',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

      </Head>
      <body className={montserat.className}>
      <main className='bg-light w-full min-h-screen'>
        <NavBar></NavBar>
          {children}
      </main>

      <Footer></Footer>
      </body>
    </html>
  )
}
