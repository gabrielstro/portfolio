import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const firaCode = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Develop by Gabriel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
