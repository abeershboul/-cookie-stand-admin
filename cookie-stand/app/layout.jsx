'use client';

import './globals.css'
import { Footer } from './componant/Footer'
import { Header } from './componant/Header'
import ThemeWrapper from './contexts/theme'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeWrapper>
      <body>
        <Header/>
        <main className='dark:bg-black'>
        {children}


        </main>
       
      
      <Footer/>
      </body>




      </ThemeWrapper>



      
    </html>
  )
}
