import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Cloud & Crunch',
  description:
    'Uma sobremesa artesanal que combina uma textura incrivelmente cremosa com um toque crocante.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt"
      className={`${heading.variable} ${body.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}