import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { Providers } from "./providers";
import Nav from '../components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gen ED',
  description: 'Generated by create next app',
}

// const DBH = localFont({
//   src: [
//     {
//       path: './font/DB Helvethaica/DB Helvethaica X v3.2.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     // {
//     //   path: './Roboto-Italic.woff2',
//     //   weight: '400',
//     //   style: 'italic',
//     // },
//     // {
//     //   path: './Roboto-Bold.woff2',
//     //   weight: '700',
//     //   style: 'normal',
//     // },
//     // {
//     //   path: './Roboto-BoldItalic.woff2',
//     //   weight: '700',
//     //   style: 'italic',
//     // },
//   ],
// })

// const DBL = localFont({
//   src: [
//     {
//       path: './font/DB Lim/DB Lim X v3.2.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     // {
//     //   path: './Roboto-Italic.woff2',
//     //   weight: '400',
//     //   style: 'italic',
//     // },
//     // {
//     //   path: './Roboto-Bold.woff2',
//     //   weight: '700',
//     //   style: 'normal',
//     // },
//     // {
//     //   path: './Roboto-BoldItalic.woff2',
//     //   weight: '700',
//     //   style: 'italic',
//     // },
//   ],
// })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
 	      <Providers>
          <Nav/>
          {children}
      	</Providers>
      </body>
    </html>
    
  )
}

 