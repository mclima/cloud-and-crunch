import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import Script from 'next/script'

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
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GGKKZ04FY3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GGKKZ04FY3');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}