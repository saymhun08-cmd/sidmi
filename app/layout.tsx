import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SIDMI - Digital Solutions & Business Growth',
  description: 'Transform your business with Amazon training, SEO, digital marketing, website building, CRM, and accounting services.',
  keywords: 'Digital Marketing, Amazon Training, Website Building, CRM, SEO, Business Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
