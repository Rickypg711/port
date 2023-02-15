import './globals.css'
import {Montserrat, Playfair_Display,  } from '@next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  // variable: '--montserrat',
});

// const playFairDisplay = Playfair_Display({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--font-playFairDisplay',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={` bg-slate-800 text-violet-200 ${montserrat.className} overflow-auto min-h-screen m-0`}>{children}</body>
    </html>
  )
}
