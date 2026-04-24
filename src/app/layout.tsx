import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MREA — Muslim Real Estate Association',
    template: '%s | MREA',
  },
  description: 'Muslim Real Estate Association (MREA) — a 501(c)(6) nonprofit trade association dedicated to empowering Muslim real estate professionals through ethical leadership, advocacy, and community.',
  keywords: ['Muslim real estate', 'MREA', 'real estate association', 'Muslim professionals', 'ethical real estate', 'property investment', 'trade association'],
  authors: [{ name: 'Muslim Real Estate Association' }],
  creator: 'MREA',
  publisher: 'Muslim Real Estate Association',
  metadataBase: new URL('https://muslimrea.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muslimrea.org',
    siteName: 'Muslim Real Estate Association',
    title: 'MREA — Muslim Real Estate Association',
    description: 'A 501(c)(6) nonprofit trade association empowering Muslim real estate professionals worldwide through ethical leadership, advocacy, and community.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MREA — Muslim Real Estate Association',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MREA — Muslim Real Estate Association',
    description: 'A 501(c)(6) nonprofit trade association empowering Muslim real estate professionals worldwide.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}