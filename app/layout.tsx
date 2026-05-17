import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Paceeba Yakubu | Full Stack Developer - Portfolio',
  description: 'Professional portfolio of Paceeba Yakubu - Full Stack Developer specializing in web and mobile applications. University of Ghana student with IBM & Coursera certifications.',
  keywords: ['Paceeba','Full Stack Developer', 'Web Development', 'Mobile Apps', 'React', 'Next.js', 'Portfolio'],
  generator: 'v0.app',
  authors: [{ name: 'Paceeba Yakubu', url: 'https://github.com/Paceeba-Rick' }],
  creator: 'Paceeba Yakubu',
  metadataBase: new URL('https://paceeba-portfolio.vercel.app'),
  alternates: {
    canonical: 'https://paceeba-portfolio.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paceeba-portfolio.vercel.app',
    siteName: 'Paceeba Yakubu Portfolio',
    title: 'Paceeba Yakubu | Full Stack Developer',
    description: 'Full Stack Developer crafting beautiful, performant web and mobile experiences. University of Ghana student with IBM & Coursera certifications.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.36-CXac2xsv4J9MgwBUx8nB87ImCWiHyy.jpeg',
        width: 1200,
        height: 630,
        alt: 'Paceeba Yakubu - Full Stack Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_ceeba',
    title: 'Paceeba Yakubu | Full Stack Developer',
    description: 'Full Stack Developer crafting beautiful, performant web and mobile experiences',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.36-CXac2xsv4J9MgwBUx8nB87ImCWiHyy.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-google-verification-code-here', // Add after GSC verification
  },
  icons: {
    icon: [
      {
        url: '/icon-circular.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-circular.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: '/icon-circular.png',
    shortcut: '/icon-circular.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Paceeba Yakubu',
    url: 'https://paceeba-portfolio.vercel.app',
    jobTitle: 'Full Stack Developer',
    affiliation: 'University of Ghana',
    sameAs: [
      'https://github.com/Paceeba-Rick',
      'https://www.tiktok.com/@_ceeba',
    ],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.36-CXac2xsv4J9MgwBUx8nB87ImCWiHyy.jpeg',
    email: 'yakubceeba@gmail.com',
    telephone: '+233533125955',
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#6666ff" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f5f5f5" media="(prefers-color-scheme: light)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-15%20at%2013.08.36-CXac2xsv4J9MgwBUx8nB87ImCWiHyy.jpeg" />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
