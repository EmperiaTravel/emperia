import './globals.css'

import { Playfair_Display, Roboto } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { AppInjection } from '@/components/app-injection'
import type { Metadata } from 'next'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `Website`,
  description: `Website description`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        <AppInjection />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
