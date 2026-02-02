import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'

export const metadata: Metadata = {
  metadataBase: new URL('https://aydinacar.dev'),
  title: {
    default: 'Aydın Acar | Senior Frontend Developer',
    template: '%s | Aydın Acar'
  },
  description:
    'Senior Frontend Developer specialized in admin panels, dashboards and scalable UI systems. React, Next.js, Vue.',
  keywords: ['Senior Frontend Developer', 'React', 'Next.js', 'Vue', 'Admin Dashboard', 'Frontend Engineer'],
  authors: [{ name: 'Aydın Acar' }],
  creator: 'Aydın Acar',
  openGraph: {
    title: 'Aydın Acar | Senior Frontend Developer',
    description: 'Building modern, scalable and maintainable frontend systems.',
    url: 'https://aydinacar.dev',
    siteName: 'Aydın Acar Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aydın Acar | Senior Frontend Developer',
    description: 'Senior Frontend Developer focused on dashboards and admin panels.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
