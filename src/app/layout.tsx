import type { Metadata } from 'next'
import { Familjen_Grotesk } from 'next/font/google'
import './globals.css'
import NavBar from '@/common/navbar/page'

const grotesk = Familjen_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-familjen-grotesk',
})

export const metadata: Metadata = {
  title: 'BOTOL - The Ultimate Companion for Hydration',
  description:
    'Discover our range of premium water bottles including vacuum bottles, fridge bottles & jugs, borosilicate bottles, and kettles.',
  keywords:
    'water bottles, hydration, vacuum bottles, borosilicate bottles, kettles',
  authors: [{ name: 'BOTOL' }],
  creator: 'BOTOL',
  publisher: 'BOTOL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://botol.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BOTOL - The Ultimate Companion for Hydration',
    description:
      'Discover our range of premium water bottles including vacuum bottles, fridge bottles & jugs, borosilicate bottles, and kettles.',
    url: 'https://botol.com',
    siteName: 'BOTOL',
    images: [
      {
        url: '/bottle4.jpg',
        width: 1200,
        height: 630,
        alt: 'BOTOL Premium Water Bottles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BOTOL - The Ultimate Companion for Hydration',
    description:
      'Discover our range of premium water bottles including vacuum bottles, fridge bottles & jugs, borosilicate bottles, and kettles.',
    images: ['/bottle4.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={grotesk.variable}>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/assets/30TOLlogo.jpg"
          as="image"
          type="image/jpeg"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Resource hints */}
        <link
          rel="preload"
          href="/_next/static/css/app/globals.css"
          as="style"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Performance optimizations */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#00D1FF" />
        <meta name="color-scheme" content="light" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
      </head>
      <body className={grotesk.variable} style={{ backgroundColor: 'white' }}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
