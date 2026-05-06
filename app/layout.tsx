import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://callforge.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Call Forge | Websites for Local Service Businesses',
  description: 'Get a website that actually brings you more calls. No upfront cost. We build, host, and manage everything for plumbers, HVAC, roofing, electricians, and contractors.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'local business website design',
    'service business websites',
    'plumber website design',
    'hvac website design',
    'contractor website design',
    'lead generation websites',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Call Forge | Websites for Local Service Businesses',
    description: 'Professional websites that help local service businesses get more calls. Built, hosted, and managed for you.',
    siteName: 'Call Forge',
    images: [
      {
        url: '/social-preview.svg',
        width: 1200,
        height: 630,
        alt: 'Call Forge websites for local service businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Call Forge | Websites for Local Service Businesses',
    description: 'Professional websites that help local service businesses get more calls.',
    images: ['/social-preview.svg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
