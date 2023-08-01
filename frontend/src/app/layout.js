import './globals.css'
import { sarabun } from './fonts'
import localFont from 'next/font/local'
import { Providers } from "./providers";
import Nav from '../components/nav'
import Footer from '../components/footer'

// const sarabun = Sarabun({ subsets: ['thai', 'latin'], weight: '400', })

export const metadata = {
  title: 'Gen ED',
  description: 'Resource for Gen ED Mahidol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/icon.svg" />
      <link
      rel="apple-touch-icon"
        href="/apple-icon.ico"
      />
      </head>
      <body className={sarabun.className}>
 	      <Providers>
          <Nav/>
          {children}
          <Footer/>
      	</Providers>
      </body>
    </html>
    
  )
}

 